import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { StackNavigationProps, AppRoutes } from '../navigation/types'

const WorkoutScreen = ({ navigation }: StackNavigationProps<AppRoutes, 'Workout'>) => {
  return (
    <View style={styles.container}>
      <Text>Workout screen</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  )
}

export default WorkoutScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  }
})
