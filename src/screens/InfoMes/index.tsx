import { View, Text, FlatList } from "react-native";
import React, { useCallback, useState } from "react";
import { getRealm } from "../../database/realm";
import BillComponent from "../../components/BillComponent";
import { useFocusEffect } from "@react-navigation/native";
import { Container, OptionText, OptionsContainer, Option } from "./styles";

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
        <Option onPress={() => handleOption("Despesa")}>
          <OptionText>Despesa</OptionText>
        </Option>
        <Option onPress={() => handleOption("Renda")}>
          <OptionText>Renda</OptionText>
        </Option>
      </OptionsContainer>
      <Text>Hoje</Text>
      {activeOption === "Despesa" ? (
        <FlatList
          data={bills}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <BillComponent props={item} onDelete={deleteBill} />
          )}
        />
      ) : (
        <FlatList
          data={incomes}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <BillComponent props={item} onDelete={deleteBill} />
          )}
        />
      )}
    </View>
  );
}
