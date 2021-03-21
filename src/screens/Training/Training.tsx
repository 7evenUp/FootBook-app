import React, {useState} from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import { Video } from 'expo-av'
import { CollectionStackRoutes, StackNavigationProps } from '../../navigation/types'
import { Box,  Text } from '../../themes/default'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

const Training = ({ navigation, route }: StackNavigationProps<CollectionStackRoutes, 'Training'>) => {
  const [source, setSource] = useState(route.params.exercises[0].video)
  return (
    <View style={styles.container}>
      <Video
        ref={async (component) => {
          const playbackObject = component
          await playbackObject?.unloadAsync()
          await playbackObject?.loadAsync(source, {
            shouldPlay: true,
            isLooping: true,
          })
        }}
        resizeMode='cover'
        style={styles.videoContainer}
        />
      {route.params.exercises.map((exercise, index) => (
        <TouchableWithoutFeedback key={index} onPress={() => setSource(exercise.video)}>
          <Box style={styles.exerciseItem} paddingHorizontal='xs' paddingVertical='m'>
            <Text variant='Poppins400Size18ColorBlack' mr='l'>{exercise.time}</Text>
            <Text variant='Poppins700Size18ColorBlack' mr='m'>{exercise.name}</Text>
            <Text variant='Poppins400Size14ColorGreyDark'>{exercise.info}</Text>
          </Box>
        </TouchableWithoutFeedback>
      ))}
    </View>
  )
}

export default Training

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  exerciseItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'black'
  },
  videoContainer: {
    width: Dimensions.get('window').width,
    height: 300,
    alignSelf: 'center'
  }
})
