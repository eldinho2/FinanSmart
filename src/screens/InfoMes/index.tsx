import { View, Text } from 'react-native'
import React from 'react'
import AddBillButton from '../../components/AddBillButton'

export default function InfoMes() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>InfoMes</Text>
      <AddBillButton />
    </View>
  )
}