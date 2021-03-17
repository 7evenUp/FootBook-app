import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { StackNavigationProps, WorkoutTabRoutes } from '../../navigation/types'

const MyWorkoutsScreen = ({ navigation }: StackNavigationProps<WorkoutTabRoutes, 'MyWorkouts'>) => {
  return (
    <View style={styles.container}>
      <Text>My workouts screen</Text>
      <Button
        title="Go to Collections"
        onPress={() => navigation.navigate('Collections')}
      />
      <Button
        title="Go to WorkoutBuilder"
        onPress={() => navigation.navigate('WorkoutBuilder')}
      />
    </View>
  )
}

export default MyWorkoutsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
