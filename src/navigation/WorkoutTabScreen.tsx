import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StyleSheet} from 'react-native'
import { WorkoutTabRoutes } from './types'
import { WorkoutBuilderScreen, MyWorkoutsScreen, CollectionsStackScreen } from '../screens/Workout'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Dimensions } from 'react-native';

const Tab = createMaterialTopTabNavigator<WorkoutTabRoutes>()

const WorkoutTabScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <Tab.Navigator
        tabBarOptions={{
          labelStyle: {
            fontSize: 14,
            textTransform: 'capitalize',
            fontFamily: 'Poppins-Regular'
          },
          indicatorStyle: { backgroundColor: 'black' },
          style: styles.navigator,
        }}
        sceneContainerStyle={styles.screens}
        >
        <Tab.Screen name="Collections" component={CollectionsStackScreen} options={{ title: "Collections" }}/>
        <Tab.Screen name="WorkoutBuilder" component={WorkoutBuilderScreen} options={{ title: "Workout Builder" }}/>
        <Tab.Screen name="MyWorkouts" component={MyWorkoutsScreen} options={{title: "My workouts"}}/>
      </Tab.Navigator>
    </SafeAreaView>
  )
}

export default WorkoutTabScreen

const styles = StyleSheet.create({
  navigator: {
    width: Dimensions.get('window').width - 24,
    alignSelf: 'center',
    shadowColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#C6C8CA',
    elevation: 0, // remove shadow on Android
    shadowOpacity: 0, // remove shadow on iOS
  },
  screens: {
    width: Dimensions.get('window').width - 24,
    marginTop: 24,
    backgroundColor: '#fff'
  }
})
