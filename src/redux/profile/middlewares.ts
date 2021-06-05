import { Middleware } from 'redux'
import { RootState } from '../index'
import { PROFILE_UPDATE_PHOTO_REQUEST, PROFILE_UPDATE_NAME_REQUEST, ProfileActionTypes} from './types'
import {
  profileUpdatePhotoSuccess,
  profileUpdatePhotoFailure,
  profileUpdateNameSuccess,
  profileUpdateNameFailure
} from './actions'
import firebase from '../../firebase/firebaseConfig'

export const profileMiddleware: Middleware<{}, RootState> = store => next => (action: ProfileActionTypes) => {
  const result = next(action)

  console.log('=================== INSIDE PROFILE MIDDLEWARE ===================')

  if (action.type === PROFILE_UPDATE_PHOTO_REQUEST) {
    // action.payload.blob
  }
}