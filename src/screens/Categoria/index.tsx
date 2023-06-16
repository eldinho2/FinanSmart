import * as React from 'react';
import {Text, View} from 'react-native';
import AddBillButton from '../../components/AddBillButton';

function Categoria() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Categoria!</Text>
      <AddBillButton />
    </View>
  );
}

export default Categoria;