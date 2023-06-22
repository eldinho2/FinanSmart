import { useState } from "react";
import { getRealm } from "../database/realm";

type BillProps = {
  _id: string;
  name: string;
  amount: string;
  date: string;
  description: string;
  repetition: string;
  created_at: Date;
  isBill: boolean;
};

const useFetchData = (): BillProps[] => {
  const [billsData, setBillsData] = useState<BillProps[]>([]);

  const fetchBillData = async () => {
    const realm = await getRealm();
    try {
      const data = realm
        .objects<BillProps[]>("BillObjectSchema")
        .sorted("created_at", true)
        .filtered("isBill == true")
        .toJSON()
        .map((item: Record<string, unknown>) => ({
          _id: item._id as string,
          name: item.name as string,
          amount: item.amount as string,
          date: item.date as string,
          description: item.description as string,
          repetition: item.repetition as string,
          created_at: item.created_at as Date,
          isBill: item.isBill as boolean,
        }));

      setBillsData(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      realm.close();
    }
  };

  return billsData;
};

export default useFetchData;
