import React from 'react'
import { Button, StyleSheet, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/core'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../redux'
import { userSignUp } from '../../../redux/user/actions'
import { Box, Text, palette } from '../../../themes/default'
import { userErrorSelector } from '../../../redux/user/selectors'
import { TextInput } from '../../../components'
import { Formik } from 'formik'

interface FormValues {
  email: string,
  password: string,
  confirmPassword: string
}

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
      <Formik
        initialValues={{ email: '', password: '', confirmPassword: ''}}
        onSubmit={(values: FormValues) => console.log(values)}>
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <>
            <Box>
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
              <TextInput
                placeholder="Confirm password"
                isPassword={true}
                onChangeText={handleChange('confirmPassword')}
                onBlur={handleBlur('confirmPassword')}
                value={values.confirmPassword}
                error={errors.confirmPassword}
                touched={touched.confirmPassword} />
            </Box>

            <TouchableOpacity
              style={{ borderWidth: 1, borderRadius: 20, borderColor: palette.greyDark, width: 272, paddingVertical: 8 }}
              onPress={() => handleSubmit()} >
              <Text variant="Poppins400Size24ColorWhite" color="greyDark" textAlign="center">{user.isFetching ? <>Loading...</> : <>Sign Up</>}</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
      

      {error && <Text color="red">{error}</Text>}

      <Box alignItems="center">
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
