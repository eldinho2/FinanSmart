import { View, Text, Alert, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getRealm } from '../../database/realm';

interface BillProps {
  _id: string,
  amount: string,
  date: string,
  description: string,
  repetition: string,
  created_at: Date,
  isBill: boolean,
}

export default function InfoMes() {
  const [billsData, setBillsData] = useState<BillProps[]>([]);

  const fechData = async() => {
    const realm = await getRealm();

    try {
      const data = realm.objects('Bill');
      setBillsData(data);
      Alert.alert('data', data);
      
    } catch (error) {
      console.log(error);
    } finally {
      realm.close();
    }
  }

  useEffect(() => {
    fechData();
  }, [])


  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Hoje</Text>
    </View>
  )
}