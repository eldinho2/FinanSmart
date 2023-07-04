import { View, Text, FlatList } from "react-native";
import React, { useCallback, useState } from "react";
import { getRealm } from "../../database/realm";
import BillComponent from "../../components/BillComponent";
import { useFocusEffect } from "@react-navigation/native";
import { OptionTextDespesa, OptionTextRenda, OptionsContainer, OptionRenda, OptionDespesa } from "./styles";
import BillsFilterd from "./BillsFilterd";
import IncomeFiltered from "./IncomeFiltred";

export type BillProps = {
  _id: string;
  name: string;
  amount: string;
  date: string;
  description: string;
  repetition: string;
  created_at: Date;
  isBill: boolean;
};

export default function InfoMes() {
  const [billsData, setBillsData] = useState<BillProps[]>([]);
  const [activeOption, setActiveOption] = useState<string>("Despesa");

  const fetchData = async () => {
    const realm = await getRealm();
    try {
      const data = realm
        .objects<BillProps[]>("BillObjectSchema")
        .sorted("created_at", true)
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

  const deleteBill = async (id: string) => {
    const realm = await getRealm();
    try {
      realm.write(() => {
        const billToDelete = realm.objectForPrimaryKey("BillObjectSchema", id);
        if (billToDelete) {
          realm.delete(billToDelete);
          console.log("Registro excluído com sucesso.");
          fetchData();
        } else {
          console.log("Registro não encontrado.");
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchData();
    }, [])
  );

  const bills = billsData.filter((item) => item.isBill === true);
  const incomes = billsData.filter((item) => item.isBill === false);
  


  const handleOption = (option: string) => {
    setActiveOption(option);
    console.log(activeOption);
  };

  return (
    <View>
      <OptionsContainer>
        <OptionDespesa status={activeOption} onPress={() => handleOption("Despesa")}>
          <OptionTextDespesa>Despesa</OptionTextDespesa>
        </OptionDespesa>
        <OptionRenda status={activeOption} onPress={() => handleOption("Renda")}>
          <OptionTextRenda>Renda</OptionTextRenda>
        </OptionRenda>
      </OptionsContainer>
      {activeOption === "Despesa" ? (
        <BillsFilterd bills={bills} deleteBill={deleteBill} />
      ) : (
        <IncomeFiltered incomes={incomes} deleteBill={deleteBill}/>
      )}
    </View>
  );
}
