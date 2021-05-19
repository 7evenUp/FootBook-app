import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useSelector } from 'react-redux'
import { Ionicons } from '@expo/vector-icons'

import { HomeScreen, StatisticsScreen, ProfileStackScreen, WorkoutTabScreen } from '../screens'

import { AppRoutes } from './types'
import { palette } from '../themes/default'
import { AuthScreen } from '../screens/Auth'
import Training from '../screens/Training/Training'
import { LoadAssets } from '../components'
import { userIsLogedInSelector } from '../redux/user/selectors'

const Tab = createBottomTabNavigator<AppRoutes>()

const AppTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName

          if (route.name === 'Home') iconName = 'home' 
          else if (route.name === 'Workout') iconName = 'football' 
          else if (route.name === 'Statistics') iconName = 'stats-chart'
          else if (route.name === 'Profile') iconName = 'person' 

          return <Ionicons name={iconName} size={30} color={color} />;
        }
      })}
      tabBarOptions={{
        activeTintColor: palette.greenDark,
        inactiveTintColor: palette.greyDark,
        showLabel: false,
        style: { backgroundColor: palette.greenLight }
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Workout" component={WorkoutTabScreen} options={{ title: 'Workout' }} />
      <Tab.Screen name="Statistics" component={StatisticsScreen} />
      <Tab.Screen name="Profile" component={ProfileStackScreen} />
    </Tab.Navigator>
  )
}

const fonts = {
  'Poppins-Regular': require('../../assets/fonts/Poppins-Regular.otf'),
  'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.otf'),
  'Poppins-SemiBold': require('../../assets/fonts/Poppins-SemiBold.otf'),
}

const assets = [
  require('../../assets/soccer.jpg'),
  require('../../assets/soccer1.jpg'),
  require('../../assets/soccer2.jpg'),
  require('../../assets/soccer3.jpg'),
  require('../../assets/exercises/1.mp4'),
  require('../../assets/exercises/2.mp4'),
  require('../../assets/exercises/3.mp4'),
  require('../../assets/exercises/4.mp4'),
  require('../../assets/exercises/5.mp4'),
  require('../../assets/exercises/6.mp4'),
  require('../../assets/exercises/7.mp4'),
  require('../../assets/exercises/8.mp4'),
  require('../../assets/exercises/9.mp4'),
  require('../../assets/exercises/10.mp4'),
  require('../../assets/exercises/11.mp4'),
  require('../../assets/exercises/12.mp4'),
  require('../../assets/exercises/13.mp4'),
  require('../../assets/exercises/14.mp4'),
  require('../../assets/exercises/15.mp4'),
  require('../../assets/exercises/16.mp4'),
  require('../../assets/exercises/17.mp4'),
  require('../../assets/exercises/18.mp4'),
  require('../../assets/app-icon.png'),
  require('../../assets/app-logo.png'),
  require('../../assets/Unknown-person.png')
]

const Stack = createStackNavigator()

const AppNavigator = () => {
  const userIsLogedIn = useSelector(userIsLogedInSelector)

  return (
    <LoadAssets {...{ fonts, assets }}>
      <Stack.Navigator headerMode='none'>
        {userIsLogedIn ? (
          <>
            <Stack.Screen name="App" component={AppTabs} />
            <Stack.Screen name="Training" component={Training} />
          </>
        ) : (
            <Stack.Screen name="Auth" component={AuthScreen} />
        )}
        
      </Stack.Navigator>
    </LoadAssets>
  )
}

export default AppNavigator