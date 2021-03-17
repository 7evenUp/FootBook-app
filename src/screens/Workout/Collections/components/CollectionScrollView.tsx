import React from 'react'
import { useNavigation, NavigationProp } from '@react-navigation/native'
import { ScrollView } from 'react-native-gesture-handler'
import { Box, Text } from '../../../../themes/default'
import { CollectionStackRoutes} from '../../../../navigation/types'
import CollectionCard from './CollectionCard'

type CollectionScrollViewProps = {
  collectionName: string,
  data: Array<{
    picture: number,
    cardName: string,
    totalExercises: number,
    level: string,
    about: string,
    exercises: Array<{
      name: string,
      info: string,
      time: number,
      video: any
    }>
  }>,
}

const CollectionScrollView = ({ collectionName, data }: CollectionScrollViewProps) => {
  const navigation = useNavigation<NavigationProp<CollectionStackRoutes, 'CollectionList'>>()
  return (
    <Box mb='l'>
      <Text variant='collectionHeading' ml='xs' mb='s'>{collectionName}</Text>
      <ScrollView
        style={{ paddingHorizontal: 12 }}
        contentContainerStyle={{ paddingRight: 12 }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        {data.map((el, index) => (
          <CollectionCard
            key={index}
            {...el}
            onPress={() => navigation.navigate('CollectionItem', {...el})} />))}
      </ScrollView>
    </Box>
  )
}

export default CollectionScrollView
