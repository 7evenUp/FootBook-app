import React from 'react'
import { StyleSheet, View, Button } from 'react-native'
import { StackNavigationProps, AppRoutes } from '../navigation/types'
import { useDispatch, useSelector } from 'react-redux'
import { userLogout } from '../redux/user/actions'
import { RootState } from '../redux'

const HomeScreen = ({ navigation }: StackNavigationProps<AppRoutes, 'Profile'>) => {
  const selectorUser = (state: RootState) => state.user
  const user = useSelector(selectorUser)
  const dispatch = useDispatch()
  console.log("========= INSIDE PROFILE ==========")
  console.log(user)

  return (
    <View style={styles.container}>
      <Button
        title="SIGN OUT"
        onPress={() => dispatch(userLogout())}
      />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  }
})
