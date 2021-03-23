import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch } from 'react-redux'
import { ProfileStackRoutes, StackNavigationProps } from '../../navigation/types'
import { userLogout } from '../../redux/user/actions'

const ProfileMain = ({ navigation, route }: StackNavigationProps<ProfileStackRoutes, 'ProfileMain'>) => {
  const dispatch = useDispatch()
  
  return (
    <View style={styles.container}>
        <Text>Profile Main</Text>
        <Button
          title="Favourites"
          onPress={() => navigation.navigate('Favourites')}
        />
        <Button
          title="Settings"
          onPress={() => navigation.navigate('Settings')}
        />
        <Button
          title="Paid subscription"
          onPress={() => navigation.navigate('Subscription')}
        />
        <Button
          title="Edit profile"
          onPress={() => navigation.navigate('EditProfile')}
        />
        <Button
          title="Change account"
          onPress={() => dispatch(userLogout())}
        />
    </View>
  )
}

export default ProfileMain

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
