import React from 'react'
import { StyleSheet, Dimensions, TouchableWithoutFeedback, Image} from 'react-native'
import { Video } from 'expo-av'
import { Box, Text } from '../../../../themes/default'
import Chevron from './Chevron'
import Animated, { useAnimatedStyle, useDerivedValue, useSharedValue, withSpring, withTiming } from 'react-native-reanimated'
import { mix } from 'react-native-redash'

type ExerciseItemProps = {
  name: string,
  info: string,
  time: number,
  video: any
}

const ExerciseItem = ({ name, info, time, video }: ExerciseItemProps) => {
  const exerciseOpen = useSharedValue(false)
  const progress = useDerivedValue(() => exerciseOpen.value ? withSpring(1) : withTiming(0))

  const style = useAnimatedStyle(() => ({
    height: mix(progress.value, 0, 250)
  }))
  
  return (
    <TouchableWithoutFeedback onPress={() => { exerciseOpen.value = !exerciseOpen.value }}>
      <Box>
        <Box style={styles.exerciseItem} borderBottomColor='greyLight' pr='s'>
          <Image 
            source={video}
            style={{width: 100, height: 100}}
          />
          <Text variant='Poppins400Size18ColorBlack' ml='l' mr='m'>
            {Math.floor(time / 60)}:{time % 60}
          </Text>
          <Box style={styles.textBlock}>
            <Text variant='Poppins400Size18ColorBlack'>{name}</Text>
            <Text variant='Poppins400Size14ColorGreyDark'>{info}</Text>
          </Box>
          <Chevron progress={progress}/>
        </Box>
        <Animated.View style={[style]}>
          <Video
            source={video}
            rate={1.0}
            volume={0.0}
            isMuted={false}
            resizeMode="cover"
            shouldPlay
            isLooping
            style={{ width: Dimensions.get('window').width - 24, height: '100%' }} />
        </Animated.View>
      </Box>
    </TouchableWithoutFeedback>
  )
}

export default ExerciseItem

const styles = StyleSheet.create({
  exerciseItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1
  },
  textBlock: {
    marginRight: 'auto'
  },
  dropButton: {
    width: 10,
    height: 6,
  }
})