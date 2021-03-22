import React from 'react'
import { StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { ProfileStackRoutes } from '../../navigation/types'
import ProfileMain from './ProfileMain'

const Stack = createStackNavigator<ProfileStackRoutes>()

const ProfileStackScreen = () => {
  return (
    <Stack.Navigator initialRouteName="ProfileMain">
      <Stack.Screen name="ProfileMain" component={ProfileMain}/>
    </Stack.Navigator>
  )
}

export default ProfileStackScreen

const styles = StyleSheet.create({})
