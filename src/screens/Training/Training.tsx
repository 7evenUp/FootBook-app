import React, {useState} from 'react'
import { Dimensions, StyleSheet, useWindowDimensions, View } from 'react-native'
import { Video } from 'expo-av'
import { CollectionStackRoutes, StackNavigationProps } from '../../navigation/types'
import { Box,  Text } from '../../themes/default'
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler'
import Animated, { useAnimatedStyle, useSharedValue } from 'react-native-reanimated'

const Training = ({ navigation, route }: StackNavigationProps<CollectionStackRoutes, 'Training'>) => {
  const [source, setSource] = useState(route.params.exercises[0].video)
  const exerciseProgress = useSharedValue(0)
  const animatedStyles = useAnimatedStyle(() => {
    return {}
  })

  const trainingTime = 45 * 60
  const passedTime = 0
  const inPaused = false


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
      <ScrollView>
      {route.params.exercises.map((exercise, index) => (
        <TouchableWithoutFeedback key={index} onPress={() => setSource(exercise.video)}>
          <Box style={styles.exerciseItem} paddingHorizontal='xs' paddingVertical='m'>
            <Animated.View style={styles.exerciseItemBackground}></Animated.View>
            <Text variant='Poppins400Size18ColorBlack' mr='l'>{exercise.time}</Text>
            <Text variant='Poppins700Size18ColorBlack' mr='m'>{exercise.name}</Text>
            <Text variant='Poppins400Size14ColorGreyDark'>{exercise.info}</Text>
          </Box>
        </TouchableWithoutFeedback>
      ))}
      </ScrollView>
      
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
    borderColor: 'black',
  },
  exerciseItemBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: Dimensions.get('window').width,
    height: 61,
    backgroundColor: '#E0F6E3'
  },
  videoContainer: {
    width: Dimensions.get('window').width,
    height: 300,
    alignSelf: 'center'
  }
})
