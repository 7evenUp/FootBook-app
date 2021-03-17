type CollectionsType = Array<{
  collectionName: string,
  collectionData: Array<{
    cardName: string,
    picture: number,
    totalExercises: number,
    level: string,
    about: string,
    exercises: Array<{
      name: string,
      info: string,
      time: number,
      video: number
    }>
  }>
}>

export type InitialStateType = {
  collections: CollectionsType
}