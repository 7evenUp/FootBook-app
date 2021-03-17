import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { StackNavigationProps, AppRoutes } from '../navigation/types'

const HomeScreen = ({ navigation }: StackNavigationProps<AppRoutes, 'Home'>) => {
  return (
    <View style={styles.container}>
      <Text>Home screen</Text>
      <Button
        title="Go to Workout"
        onPress={() => navigation.navigate('Workout')}
      />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  }

})
