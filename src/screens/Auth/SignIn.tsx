import React from 'react'
import { StyleSheet, View, Button, Image } from 'react-native'
import { AuthStackRoutes, StackNavigationProps } from '../../navigation/types'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserLogin } from '../../redux/user/actions'
import { RootState } from '../../redux'
import { Box, Text, palette } from '../../themes/default'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Input } from './components'
import { LinearGradient } from 'expo-linear-gradient'

const SignIn = ({ navigation, route }: StackNavigationProps<AuthStackRoutes, 'SignIn'>) => {
  const dispatch = useDispatch()

  const selectUser = (state: RootState) => state.user
  const user = useSelector(selectUser)
  console.log(user)

  return (
    <View style={styles.container}>
      <View style={{backgroundColor: 'white', flex: 31}}>
        <LinearGradient
          colors={[palette.red, palette.greenDark]}
          start={{x: 0.3, y: 1.1}}
          end={{x: 0.7, y: 0}}
          style={styles.header}>
            <Box flexDirection="row" alignItems="center" mb="l">
              <Image source={require('../../../assets/app-logo.png')} style={{ height: 115, width: 284 }} />
            </Box>
            <Text variant="Poppins400Size24ColorWhite">Login into your account</Text>
        </LinearGradient>
      </View>
      
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
            style={{ borderWidth: 1, borderRadius: 20, borderColor: palette.greyDark, width: 272, paddingVertical: 8}}
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
      <View style={styles.socials}>
          <Text>Check our socials</Text>
      </View>
    </View>
  )
}

export default SignIn

const styles = StyleSheet.create({
  container: {
    flex: 1,backgroundColor: palette.greenLight
  },
  header: {
    borderBottomLeftRadius: 50,
    flex: 1,
    borderBottomRightRadius: 50,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingVertical: 16
  },
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
  socials: {
    flex: 15,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
