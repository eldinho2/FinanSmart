import * as React from 'react';
import {Text, View} from 'react-native';
import AddBillButton from '../../components/AddBillButton';

function InfoMeses() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>InfoMeses</Text>
      <AddBillButton />
    </View>
  );
}

export default InfoMeses;