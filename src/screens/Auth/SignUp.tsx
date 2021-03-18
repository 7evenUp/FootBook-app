import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { AuthStackRoutes, StackNavigationProps } from '../../navigation/types'
import { palette } from '../../themes/default'
import { LogoHeader, SignUpForm, Socials } from './components'

const SignUp = ({ navigation, route }: StackNavigationProps<AuthStackRoutes, 'SignUp'>) => {
  return (
    <View style={styles.container}>
      <LogoHeader header="Create an account"/>

      <SignUpForm navigation={navigation}/>

      <Socials />
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.greenLight
  },
})
