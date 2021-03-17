import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { CollectionStackRoutes } from '../../../navigation/types'
import CollectionList from './CollectionListScreen'
import CollectionItem from './CollectionItemScreen'

const Stack = createStackNavigator<CollectionStackRoutes>()

const CollectionsStackScreen = () => {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="CollectionList">
      <Stack.Screen name='CollectionList' component={CollectionList} />
      <Stack.Screen name='CollectionItem' component={CollectionItem} />
    </Stack.Navigator>
  )
}

export default CollectionsStackScreen