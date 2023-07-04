import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { BillProps } from './index';
import BillComponent from '../../components/BillComponent';

interface Props {
  incomes: BillProps[];
  deleteBill: (id: string) => void;
}

const IncomeFiltered: React.FC<Props> = ({ incomes, deleteBill }) => {
  const today = new Date().toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const todayIncome = incomes.filter((incomes) => incomes.date === today);
  const restIncome = incomes.filter((incomes) => incomes.date !== today);

  const sortedIncome = restIncome.sort((a, b) => {
    const dateA = new Date(a.created_at);
    const dateB = new Date(b.created_at);
    return dateB.getTime() - dateA.getTime();
  });

  const groupedIncomeByDate = sortedIncome.reduce((acc: any, incomes: BillProps) => {
    if (!acc[incomes.date]) {
      acc[incomes.date] = [];
    }
    acc[incomes.date].push(incomes);
    return acc;
  }, {});

  return (
    <View>
      <Text>Hoje</Text>
      <FlatList
        data={todayIncome as Array<BillProps>}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => <BillComponent props={item} onDelete={deleteBill} />}
      />
      {Object.entries(groupedIncomeByDate).map(([date, incomesByDate]) => (
        <View key={date}>
          <Text>{date}</Text>
          <FlatList
            data={incomesByDate as Array<BillProps>}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => <BillComponent props={item} onDelete={deleteBill} />}
          />
        </View>
      ))}
    </View>
  );
};

export default IncomeFiltered;
