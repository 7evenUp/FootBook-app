import React from 'react'
import { View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { CollectionStackRoutes, StackNavigationProps } from '../../../navigation/types'
import { CollectionScrollView } from './components'

const data = [
  {
    collectionName: 'Technique',
    collectionData: [
      {
        cardName: 'Close Control',
        picture: require('../../../../assets/soccer.jpg'),
        totalExercises: 18,
        level: 'Amateur',
        about: 'Control the ball with both legs, Control it close to you and Don\'t let it go away from you',
        exercises: [
          {
            name: 'Juggling',
            info: 'Left foot',
            time: 45,
            video: require('../../../../assets/exercises/1.mp4')
          },
          {
            name: 'Juggling',
            info: 'Right foot',
            time: 45,
            video: require('../../../../assets/exercises/1.mp4')
          },
          {
            name: 'Juggling',
            info: 'Both feet',
            time: 90,
            video: require('../../../../assets/exercises/3.mp4')
          },
        ]
      },
      {
        cardName: 'Fast Dribbling',
        picture: require('../../../../assets/soccer1.jpg'),
        totalExercises: 14,
        level: 'InterMediate',
        about: 'Be the fastest. Be the greatest. Be untouchable.',
        exercises: [
          {
            name: 'Juggling',
            info: 'Left foot',
            time: 45,
            video: require('../../../../assets/exercises/4.mp4')
          },
          {
            name: 'Juggling',
            info: 'Right foot',
            time: 45,
            video: require('../../../../assets/exercises/5.mp4')
          },
          {
            name: 'Juggling',
            info: 'Both feet',
            time: 90,
            video: require('../../../../assets/exercises/6.mp4')
          }
        ]
      }
    ]
  },
  {
    collectionName: 'Shooting',
    collectionData: [
      {
        cardName: 'Free Kicks',
        picture: require('../../../../assets/soccer2.jpg'),
        totalExercises: 9,
        level: 'Amateur',
        about: 'Kill that ball. Hit that ball.',
        exercises: [
          {
            name: 'Knuckleball',
            info: 'Left foot',
            time: 45,
            video: require('../../../../assets/exercises/7.mp4')
          },
          {
            name: 'Knuckleball',
            info: 'Right foot',
            time: 45,
            video: require('../../../../assets/exercises/8.mp4')
          },
          {
            name: 'Curved Shoot',
            info: 'Right foot',
            time: 90,
            video: require('../../../../assets/exercises/9.mp4')
          },
        ]
      },
      {
        cardName: 'Volleys',
        picture: require('../../../../assets/soccer3.jpg'),
        totalExercises: 12,
        level: 'Pro',
        about: 'Be the King of air fights. Hit the ball before it falls onto the pitch',
        exercises: [
          {
            name: 'Knuckleball',
            info: 'Left foot',
            time: 45,
            video: require('../../../../assets/exercises/10.mp4')
          },
          {
            name: 'Knuckleball',
            info: 'Right foot',
            time: 45,
            video: require('../../../../assets/exercises/11.mp4')
          },
          {
            name: 'Curved Shoot',
            info: 'Right foot',
            time: 90,
            video: require('../../../../assets/exercises/12.mp4')
          },
        ]
      }
    ]
  }
]

const CollectionList = ({ navigation }: StackNavigationProps<CollectionStackRoutes, 'CollectionList'>) => {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView>
        {data.map((collectionItem, index) => (
          <CollectionScrollView
            key={index}
            collectionName={collectionItem.collectionName}
            data={collectionItem.collectionData} />
        ))}
      </ScrollView>
    </View>
  )
}

export default CollectionList