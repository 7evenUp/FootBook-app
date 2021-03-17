import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { StackNavigationProps, WorkoutTabRoutes } from '../../navigation/types'

const WorkoutBuilderScreen = ({ navigation }: StackNavigationProps<WorkoutTabRoutes, 'WorkoutBuilder'>) => {
  return (
    <View style={styles.container}>
      <Text>Workout Builder screen</Text>
      <Button
        title="Go to Collections"
        onPress={() => navigation.navigate('Collections')}
      />
      <Button
        title="Go to MyWorkouts"
        onPress={() => navigation.navigate('MyWorkouts')}
      />
    </View>
  )
}

export default WorkoutBuilderScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
