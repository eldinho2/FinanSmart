import { NavigationContainer } from '@react-navigation/native'
import React from 'react'

import { LoginRoutes } from './stack.routes'

export default function Routes() {
  return (
    <NavigationContainer>
      <LoginRoutes />
    </NavigationContainer>
  )
}
