import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useDispatch } from 'react-redux'
import { TextInput } from '../../../components'
import { userSignIn } from '../../../redux/user/actions'
import { Box, Text, palette } from '../../../themes/default'


export const ResetPassword = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()

  return (
    <View style={styles.form}>
      <Box alignItems="center">
        <Text
          variant="Poppins400Size18ColorBlack"
          textAlign="center"
          mt="xxl"
          paddingHorizontal="xxl">Enter the email associated with your account</Text>
        <TextInput placeholder="Enter your email" />
      </Box>

      <Box alignItems="center">
        <TouchableOpacity
          style={{ borderWidth: 1, borderRadius: 20, borderColor: palette.greyDark, width: 272, paddingVertical: 8 }}
          onPress={() => { dispatch(userSignIn()) }} >
          <Text variant="Poppins400Size24ColorWhite" color="greyDark" textAlign="center">Reset password</Text>
        </TouchableOpacity>
        <Box marginVertical="xl" alignItems="center">
          <Text variant="Poppins400Size18ColorGreyDark">Remembered the password?</Text>
          <TouchableOpacity onPress={() => { navigation.navigate("SignIn") }} style={{ borderBottomWidth: 1 }}>
            <Text variant="Poppins400Size18ColorBlack">Sign In</Text>
          </TouchableOpacity>
        </Box>
      </Box>
    </View>
  )
}

const styles = StyleSheet.create({
  form: {
    height: 470,
    alignItems: 'center',
    backgroundColor: palette.white,
    justifyContent: 'space-between',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
})
