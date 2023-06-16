import { Text, View } from 'react-native'
import React, { Component } from 'react'

export function AddBill({navigation}) {
  const state = navigation.getState()
  const name = state.routes[state.index].name
  
  console.log(name);
    return (
      <View>
        <Text>{`${name}'s Profile'`}</Text>
      </View>
    )
}

export default AddBill;