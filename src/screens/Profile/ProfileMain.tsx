import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch } from 'react-redux'
import { ProfileStackRoutes, StackNavigationProps } from '../../navigation/types'
import { userLogout } from '../../redux/user/actions'

const ProfileMain = ({ navigation, route }: StackNavigationProps<ProfileStackRoutes, 'ProfileMain'>) => {
  const dispatch = useDispatch()
  return (
    <View>
      <SafeAreaView>
        <Text>Profile Main</Text>
        <Button
          title="SIGN OUT"
          onPress={() => dispatch(userLogout())}
        />
      </SafeAreaView>
    </View>
  )
}

export default ProfileMain

const styles = StyleSheet.create({})
