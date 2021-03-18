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

interface SignUpFormProps {
  navigation: StackNavigationProp<AuthStackRoutes, "SignUp">
}

export const SignUpForm = ({navigation}: SignUpFormProps) => {
  const dispatch = useDispatch()
  const selectUser = (state: RootState) => state.user
  const user = useSelector(selectUser)
  console.log(user)

  return (
    <View style={styles.form}>
      <Box>
        <Input placeholder="Enter your email" />
        <Input placeholder="Enter your password" isPassword={true} />
        <Input placeholder="Confirm password" isPassword={true} />
      </Box>

      <Box alignItems="center">
        <TouchableOpacity
          style={{ borderWidth: 1, borderRadius: 20, borderColor: palette.greyDark, width: 272, paddingVertical: 8 }}
          onPress={() => { dispatch(fetchUserLogin()) }} >
          <Text variant="Poppins400Size24ColorWhite" color="greyDark" textAlign="center">{user.isFetching ? <>Loading...</> : <>Sign Up</>}</Text>
        </TouchableOpacity>
        <Box flexDirection="row" marginVertical="xl">
          <Text variant="Poppins400Size18ColorGreyDark">Already have an account?</Text>
          <TouchableOpacity onPress={() => { navigation.navigate("SignIn") }} style={{ borderBottomWidth: 1 }}>
            <Text variant="Poppins400Size18ColorBlack"> Sign In</Text>
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
  }
})
