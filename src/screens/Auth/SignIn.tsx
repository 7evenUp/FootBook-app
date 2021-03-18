import React from 'react'
import { StyleSheet, View } from 'react-native'
import { AuthStackRoutes, StackNavigationProps } from '../../navigation/types'
import { Text, palette } from '../../themes/default'
import { LogoHeader, SignInForm, Socials } from './components'


const SignIn = ({ navigation, route }: StackNavigationProps<AuthStackRoutes, 'SignIn'>) => {
  return (
    <View style={styles.container}>
      <LogoHeader header="Login into your account"/>
      
      <SignInForm navigation={navigation}/>

      <Socials />
    </View>
  )
}

export default SignIn

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.greenLight
  },
})
