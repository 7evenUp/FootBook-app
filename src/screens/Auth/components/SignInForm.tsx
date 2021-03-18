import React from 'react'
import { StyleSheet, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'
import { StackNavigationProp } from '@react-navigation/stack'
import { AuthStackRoutes } from '../../../navigation/types'
import { RootState } from '../../../redux'
import { fetchUserLogin } from '../../../redux/user/actions'
import { Box, Text, palette } from '../../../themes/default'
import { Input } from './Input'

interface SignInFormProps {
  navigation: StackNavigationProp<AuthStackRoutes, "SignIn">
}

export const SignInForm = ({navigation}: SignInFormProps) => {
  const dispatch = useDispatch()
  const selectUser = (state: RootState) => state.user
  const user = useSelector(selectUser)
  console.log("======== Sign In Form ========")
  console.log(user)

  return (
    <View style={styles.form}>
      <Box>
        <Input placeholder="Enter your email" />
        <Input placeholder="Enter your password" isPassword={true} />
        <TouchableOpacity style={styles.forgotBtn} onPress={() => { navigation.navigate("ForgotPassword") }}>
          <Text color="greyDark" mt="m">Forgot password?</Text>
        </TouchableOpacity>
      </Box>

      <Box alignItems="center">
        <TouchableOpacity
          style={{ borderWidth: 1, borderRadius: 20, borderColor: palette.greyDark, width: 272, paddingVertical: 8 }}
          onPress={() => { dispatch(fetchUserLogin()) }} >
          <Text variant="Poppins400Size24ColorWhite" color="greyDark" textAlign="center">{user.isFetching ? <>Loading...</> : <>Sign In</>}</Text>
        </TouchableOpacity>
        <Box flexDirection="row" marginVertical="xl">
          <Text variant="Poppins400Size18ColorGreyDark">Don't have an account yet?</Text>
          <TouchableOpacity onPress={() => { navigation.navigate("SignUp") }} style={{ borderBottomWidth: 1 }}>
            <Text variant="Poppins400Size18ColorBlack"> Sign Up</Text>
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
  forgotBtn: {
    alignSelf: 'flex-start',
  },
})
