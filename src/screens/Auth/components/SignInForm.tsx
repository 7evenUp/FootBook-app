import React from 'react'
import { StyleSheet, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/core'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../redux'
import { userSignIn } from '../../../redux/user/actions'
import { Box, Text, palette } from '../../../themes/default'
import { TextInput } from '../../../components'
import { Formik } from 'formik'

interface FormValues {
  email: string,
  password: string
}

export const SignInForm = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const selectUser = (state: RootState) => state.user
  const user = useSelector(selectUser)
  console.log("======== Sign In Form ========")
  console.log(user)

  return (
    <View style={styles.form}>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values: FormValues) => dispatch(userSignIn(values))}>
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <>
            <TextInput
              placeholder="Enter your email"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              error={errors.email}
              touched={touched.email} />
            <TextInput
              placeholder="Enter your password"
              isPassword={true}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              error={errors.password}
              touched={touched.password} />

            <TouchableOpacity style={styles.forgotBtn} onPress={() => { navigation.navigate("ForgotPassword") }}>
              <Text color="greyDark" mt="m">Forgot password?</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{ borderWidth: 1, borderRadius: 20, borderColor: palette.greyDark, width: 272, paddingVertical: 8 }}
              onPress={() => { 
                // dispatch(userSignIn()) 
                handleSubmit()
              }} >
              <Text variant="Poppins400Size24ColorWhite" color="greyDark" textAlign="center">{user.isFetching ? <>Loading...</> : <>Sign In</>}</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>

      <Box alignItems="center">
        
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
