import React from 'react'
import { StyleSheet, View, Dimensions, ImageBackground } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { RectButton, ScrollView } from 'react-native-gesture-handler'
import { CollectionStackRoutes, StackNavigationProps } from '../../../navigation/types'
import { Box, Text } from '../../../themes/default'
import ExerciseList from './components/ExerciseList'

const CollectionItem = ({ navigation, route }: StackNavigationProps<CollectionStackRoutes, 'CollectionItem'>) => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={true}>
        <ImageBackground
          source={route.params.picture}
          style={{
            width: Dimensions.get('window').width,
            height: 600
          }}>
          <LinearGradient colors={['rgba(255, 255, 255, 0)', 'rgba(0, 0, 0, 0.6)']} >
            <Box style={{height: '100%', justifyContent: 'space-between'}} p='xs'>
              <Box>
                <Text variant='collectionCardName'>{route.params.cardName}</Text>
                <Text variant='collectionItemLevel'>{route.params.level}</Text>
              </Box>
              <LinearGradient colors={['rgba(255,255,255,.6)', 'rgba(255,255,255,.1)']} style={{ borderRadius: 100, alignSelf: 'center' }}>
                <RectButton
                  style={styles.startBtn}
                  onPress={() => navigation.navigate('Training', {exercises: route.params.exercises})}>
                    <View style={styles.startBtnWrapper}>
                      <Text variant='collectionItemStart'>Start</Text>
                    </View>
                </RectButton>
              </LinearGradient>
              <Box>
                <Text variant='collectionItemAboutHeading'>About this workout</Text>
                <Text variant='collectionCardInfo'>{route.params.totalExercises} exercises </Text>
                <Text variant='collectionCardInfo'>{route.params.about}</Text>
              </Box>
            </Box>
          </LinearGradient>
        </ImageBackground>
        <ExerciseList exercises={route.params.exercises}/>
      </ScrollView>
    </View>
  )
}

export default CollectionItem

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  startBtn: {
    backgroundColor: 'rgba(255,255,255,0.01)',
    alignSelf: 'center',
    borderRadius: 100,
  },
  startBtnWrapper: {
    paddingHorizontal: 8,
    paddingVertical: 36,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#fff'
  }
})
