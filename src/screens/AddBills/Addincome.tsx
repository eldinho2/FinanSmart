import { Text, View } from 'react-native'
import React, { Component } from 'react'

export function Addincome({navigation}) {
  const state = navigation.getState()
  const name = state.routes[state.index].name
  console.log(state);
  
  console.log(name);
  
  
    return (
      <View>
        <Text>{`${name}'s Profile'`}</Text>
      </View>
    )
}

export default Addincome;