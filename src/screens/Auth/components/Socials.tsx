import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const Socials = () => {
  return (
    <View style={styles.socials}>
      <Text>Check our socials</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  socials: {
    flex: 15,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
