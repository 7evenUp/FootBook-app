import React, { useState, useEffect, useLayoutEffect } from 'react'
import { StyleSheet, Image, Platform } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import * as ImagePicker from 'expo-image-picker'
import { useDispatch } from 'react-redux'
import { profileUpdatePhotoRequest } from '../../redux/profile/actions'
import { Box, palette, Text } from '../../themes/default'
import firebase from '../../firebase/firebaseConfig'
import { ProfileStackRoutes, StackNavigationProps } from '../../navigation/types'
import { Ionicons } from '@expo/vector-icons'
import { useFormik } from 'formik'
import { TextInput } from '../../components'

interface FormValues {
  nickname: string
}

const EditProfile = ({ navigation }: StackNavigationProps<ProfileStackRoutes, "EditProfile">) => {
  const currentUser = firebase.auth().currentUser
  const [image, setImage] = useState(currentUser?.photoURL)
  const dispath = useDispatch()

  const formik = useFormik({
    initialValues: {
      nickname: currentUser?.displayName ? currentUser.displayName : '',
    },
    onSubmit: async (values: FormValues) => {
      await firebase.auth().currentUser?.updateProfile({
        displayName: values.nickname
      })
      navigation.pop()
    }
  })

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => formik.submitForm()}>
          <Ionicons name="checkmark" size={30} color={palette.cyan} />
        </TouchableOpacity>
      ),
      headerBackImage: () => (
        <Ionicons name="close" size={30} color="black" />
      )
    })
  })

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync()
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!')
        }
      }
    })()
  }, [])

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })

    if (!result.cancelled) {
      dispath(profileUpdatePhotoRequest({
        photoUri: result.uri,
        uid: currentUser?.uid
      }))

      setImage(firebase.auth().currentUser?.photoURL)
    }
  };

  return (
    <Box style={styles.container}>
      <TouchableOpacity onPress={pickImage} style={styles.imagePicker}>
        {currentUser?.photoURL ?
          <Image source={{ uri: image }} style={styles.avatar} /> :
          <Image source={require('../../../assets/Unknown-person.png')} style={styles.avatar} />
        }
        <Text variant="Poppins400Size18ColorCyan" mt="l">Change profile photo</Text>
      </TouchableOpacity>

      <Box>
        <TextInput
          placeholder="Enter your nickname"
          onChangeText={formik.handleChange('nickname')}
          onBlur={formik.handleBlur('nickname')}
          value={formik.values.nickname}
          error={formik.errors.nickname}
          touched={formik.touched.nickname} />
      </Box>
      
    </Box>
  )
}

export default EditProfile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  imagePicker: {
    alignItems: 'center'
  },
  avatar: {
    width: 100,
    height: 100,
    marginTop: 24,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: palette.greyLight
  }
})
