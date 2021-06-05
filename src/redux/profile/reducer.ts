import {
  ProfileState,
  ProfileActionTypes,
  PROFILE_UPDATE_PHOTO_REQUEST,
  PROFILE_UPDATE_PHOTO_SUCCESS,
  PROFILE_UPDATE_PHOTO_FAILURE,
  PROFILE_UPDATE_NAME_REQUEST,
  PROFILE_UPDATE_NAME_SUCCESS,
  PROFILE_UPDATE_NAME_FAILURE
} from './types'

const initialState: ProfileState = {
  isFetching: false,
  profile: {
    photoURL: '',
    displayName: ''
  },
  error: null
}

export const profileReducer = (state = initialState, action: ProfileActionTypes): ProfileState => {
  switch (action.type) {
    case PROFILE_UPDATE_PHOTO_REQUEST:
      return {
        ...state,
        isFetching: true,
        profile: {
          photoURL: ''
        },
        error: null
      }
    case PROFILE_UPDATE_PHOTO_SUCCESS:
      return {
        ...state,
        isFetching: false,
        profile: {
          photoURL: action.payload.photoUrl
        },
        error: null
      }
    case PROFILE_UPDATE_PHOTO_FAILURE:
      return {
        ...state,
        isFetching: false,
        profile: {
          photoURL: ''
        },
        error: action.error
      }

    default: return state
  }
}