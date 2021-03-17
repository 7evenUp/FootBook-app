import React from 'react'
import { Box, Text } from '../../../../themes/default'
import ExerciseItem from './ExerciseItem'

type ExerciseListProps = {
  exercises: Array<{
    name: string,
    info: string,
    time: number,
    video: any
  }>
}

const ExerciseList = ({ exercises }: ExerciseListProps) => {
  return (
    <Box p='xs'>
      <Text
        style={{
          fontFamily: 'Poppins-Regular',
          fontSize: 24,
          lineHeight: 36
        }}
        pb='s'
        pt='m'
      >
        List of exercises · {exercises.length}
      </Text>
      {exercises.map((exercise, index) => <ExerciseItem key={index} {...exercise} />)}
    </Box>
  )
}

export default ExerciseList