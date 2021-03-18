import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { AuthStackRoutes, StackNavigationProps } from '../../navigation/types'
import { palette } from '../../themes/default'
import { LogoHeader, ResetPassword, Socials } from './components'

const ForgotPassword = ({ navigation, route }: StackNavigationProps<AuthStackRoutes, 'ForgotPassword'>) => {
  return (
    <View style={styles.container}>
      <LogoHeader header="Forgot password?" />

      <ResetPassword navigation={navigation}/>

      <Socials />
    </View>
  )
}

export default ForgotPassword

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.greenLight
  },
})
