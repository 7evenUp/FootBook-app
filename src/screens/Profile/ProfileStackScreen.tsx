import React from 'react'
import { StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { ProfileStackRoutes } from '../../navigation/types'
import ProfileMain from './ProfileMain'
import Favourites from './Favourites'
import Settings from './Settings'
import Subscription from './Subscription'
import EditProfile from './EditProfile'

const Stack = createStackNavigator<ProfileStackRoutes>()

const ProfileStackScreen = () => {
  return (
    <Stack.Navigator initialRouteName="ProfileMain">
      <Stack.Screen name="ProfileMain" component={ProfileMain} />
      <Stack.Screen name="Favourites" component={Favourites} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Subscription" component={Subscription} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
    </Stack.Navigator>
  )
}

export default ProfileStackScreen

const styles = StyleSheet.create({})
