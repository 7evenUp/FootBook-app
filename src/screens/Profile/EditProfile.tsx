import React, { useState, useEffect } from 'react'
import { StyleSheet, Image, Platform } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import * as ImagePicker from 'expo-image-picker'
import { Box, palette, Text } from '../../themes/default'
import firebase from '../../firebase/firebaseConfig'

async function uploadImageAsync(uri: string, uid: string | undefined, extension: string) {
  // Why are we using XMLHttpRequest? See:
  // https://github.com/expo/expo/issues/2402#issuecomment-443726662
  const blob = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
      resolve(xhr.response);
    };
    xhr.onerror = function (e) {
      console.log(e);
      reject(new TypeError('Network request failed'));
    };
    xhr.responseType = 'blob';
    xhr.open('GET', uri, true);
    xhr.send(null);
  });

  const ref = firebase.storage().ref(`users/${uid}/profilePhoto.${extension}`)
  const snapshot = await ref.put(blob);

  // We're done with the blob, close and release it
  blob.close();

  return await snapshot.ref.getDownloadURL();
}

const EditProfile = () => {
  const [image, setImage] = useState('')
  const currentUser = firebase.auth().currentUser

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync()
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!')
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    // console.log('PHOTO INFO', result)

    if (!result.cancelled) {
      // setImage(result.uri)
      const dotIndex = result.uri.lastIndexOf('.')
      const ext = result.uri.substr(dotIndex + 1)
      uploadImageAsync(result.uri, currentUser?.uid, ext)
    }
  };

  return (
    <Box style={styles.container}>
      <TouchableOpacity onPress={pickImage} style={styles.imagePicker}>
        <Image source={require('../../../assets/me2017.png')} style={styles.avatar} />
        <Text variant="Poppins400Size18ColorCyan" mt="l">Change profile photo</Text>
      </TouchableOpacity>
      
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
