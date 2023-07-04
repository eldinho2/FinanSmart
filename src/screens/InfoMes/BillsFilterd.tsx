import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { BillProps } from './index';
import BillComponent from '../../components/BillComponent';

interface Props {
  bills: BillProps[];
  deleteBill: (id: string) => void;
}

const BillsFiltered: React.FC<Props> = ({ bills, deleteBill }) => {
  const today = new Date().toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const todayBills = bills.filter((bill) => bill.date === today);
  const restBills = bills.filter((bill) => bill.date !== today);

  const sortedBills = restBills.sort((a, b) => {
    const dateA = new Date(a.created_at);
    const dateB = new Date(b.created_at);
    return dateB.getTime() - dateA.getTime();
  });

  const groupedBillsByDate = sortedBills.reduce((acc: any, bill: BillProps) => {
    if (!acc[bill.date]) {
      acc[bill.date] = [];
    }
    acc[bill.date].push(bill);
    return acc;
  }, {});

  return (
    <View>
      <Text>Hoje</Text>
      <FlatList
        data={todayBills as Array<BillProps>}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => <BillComponent props={item} onDelete={deleteBill} />}
      />
      {Object.entries(groupedBillsByDate).map(([date, billsByDate]) => (
        <View key={date}>
          <Text>{date}</Text>
          <FlatList
            data={billsByDate as Array<BillProps>}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => <BillComponent props={item} onDelete={deleteBill} />}
          />
        </View>
      ))}
    </View>
  );
};

export default BillsFiltered;
