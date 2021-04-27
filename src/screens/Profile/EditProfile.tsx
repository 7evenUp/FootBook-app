import React, { useState, useEffect } from 'react'
import { StyleSheet, Image, Platform } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import * as ImagePicker from 'expo-image-picker'
import { Box, palette, Text } from '../../themes/default'

const EditProfile = () => {
  const [image, setImage] = useState('');

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <Box style={styles.container}>
      <TouchableOpacity onPress={() => {
      }}>
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
  avatar: {
    width: 100,
    height: 100,
    marginTop: 24,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: palette.greyLight
  }
})
