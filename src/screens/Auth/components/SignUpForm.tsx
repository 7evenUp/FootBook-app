import React from 'react'
import { StyleSheet, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../redux'
import { userSignUp } from '../../../redux/user/actions'
import { Box, Text, palette } from '../../../themes/default'
import { Input } from './Input'
import { useNavigation } from '@react-navigation/core'
import { userErrorSelector } from '../../../redux/user/selectors'

export const SignUpForm = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const selectUser = (state: RootState) => state.user
  const user = useSelector(selectUser)
  const error = useSelector(userErrorSelector)
  console.log("======== Sign Up Form ========")
  console.log(user)

  return (
    <View style={styles.form}>
      <Box>
        <Input placeholder="Enter your email" />
        <Input placeholder="Enter your password" isPassword={true} />
        <Input placeholder="Confirm password" isPassword={true} />
      </Box>

      {error && <Text color="red">{error}</Text>}

      <Box alignItems="center">
        <TouchableOpacity
          style={{ borderWidth: 1, borderRadius: 20, borderColor: palette.greyDark, width: 272, paddingVertical: 8 }}
          onPress={() => { dispatch(userSignUp()) }} >
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
