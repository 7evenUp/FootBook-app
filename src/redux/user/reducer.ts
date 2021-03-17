import {
  UserState,
  UserActionTypes,
  FETCH_USER_LOGIN,
  FETCH_USER_LOGOUT,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE
} from './types'

const initialState: UserState = {
  isFetching: false,
  isFetched: false,
  isLogedIn: false,
  user: {
    email: ''
  },
  error: null
}

export const userReducer = (state = initialState, action: UserActionTypes): UserState => {
  switch (action.type) {
    case FETCH_USER_LOGIN:
      return {
        ...state,
        isFetching: true,
        isFetched: false
      }
    case FETCH_USER_LOGOUT:
      return {
        ...state,
        isFetching: true,
        isFetched: false
      }
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        isFetched: true,
        isFetching: false,
        isLogedIn: action.payload.isLogedIn,
        user: action.payload.user
      }
    case FETCH_USER_FAILURE:
      return {
        ...state,
        isFetched: true,
        isFetching: false,
        error: action.error
      }
    default: return state
  }
}