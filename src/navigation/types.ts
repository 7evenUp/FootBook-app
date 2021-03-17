import { ParamListBase, RouteProp} from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

export interface StackNavigationProps<
  ParamList extends ParamListBase,
  RouteName extends keyof ParamList = string
> {
  navigation: StackNavigationProp<ParamList, RouteName>;
  route: RouteProp<ParamList, RouteName>;
}

export type AppRoutes = {
  Home: undefined;
  Workout: undefined;
  Statistics: undefined;
  Profile: undefined;
}

export type WorkoutTabRoutes = {
  Collections: undefined;
  WorkoutBuilder: undefined;
  MyWorkouts: undefined;
}

export type CollectionStackRoutes = {
  CollectionList: undefined;
  CollectionItem: {
    picture: number,
    cardName: string,
    totalExercises: number,
    level: string,
    about: string,
    exercises: Array<Exercise>
  };
  Training: {
    exercises: Array<Exercise>
  };
}

export type AuthStackRoutes = {
  SignIn: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
}

type Exercise = {
  name: string,
  info: string,
  time: number,
  video: any
}