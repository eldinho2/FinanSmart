import { View, Text, Alert, FlatList } from "react-native";
import React from "react";
import BillComponent from "../../components/BillComponent";
import useFetchData from "../../hooks/useFetchData";
import { useFocusEffect } from "@react-navigation/native";


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
  const [data, setData] = React.useState<BillProps[]>([]);

  useFocusEffect(() => {
    const billsData = useFetchData();
    setData(billsData);
  });

  return (
    <View>
      <Text>Hoje</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => <BillComponent props={item} />}
      />
    </View>
  );
}
