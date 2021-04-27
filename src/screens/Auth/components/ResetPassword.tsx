import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useDispatch } from 'react-redux'
import { TextInput } from '../../../components'
import { userSignIn } from '../../../redux/user/actions'
import { Box, Text, palette } from '../../../themes/default'
import { Formik } from 'formik'

interface FormValues {
  email: string
}


export const ResetPassword = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  console.log("======== Reset Password Form ========")

  return (
    <View style={styles.form}>
      <Formik
        initialValues={{ email: '' }}
        onSubmit={(values: FormValues) => console.log(values)}>
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <Box alignItems="center">
            <Text
              variant="Poppins400Size18ColorBlack"
              textAlign="center"
              mt="xxl"
              paddingHorizontal="xxl">Enter the email associated with your account</Text>

            <TextInput
              placeholder="Enter your email"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              error={errors.email}
              touched={touched.email} />

            <TouchableOpacity
              style={{ borderWidth: 1, borderRadius: 20, borderColor: palette.greyDark, width: 272, paddingVertical: 8 }}
              onPress={() => { handleSubmit() }} >
              <Text variant="Poppins400Size24ColorWhite" color="greyDark" textAlign="center">Reset password</Text>
            </TouchableOpacity>
          </Box>
        )}
      </Formik>

      <Box marginVertical="xl" alignItems="center">
        <Text variant="Poppins400Size18ColorGreyDark">Remembered the password?</Text>
        <TouchableOpacity onPress={() => { navigation.navigate("SignIn") }} style={{ borderBottomWidth: 1 }}>
          <Text variant="Poppins400Size18ColorBlack">Sign In</Text>
        </TouchableOpacity>
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
