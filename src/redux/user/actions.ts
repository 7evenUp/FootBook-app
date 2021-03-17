import { User, UserActionTypes, FETCH_USER_LOGIN, FETCH_USER_LOGOUT , FETCH_USER_SUCCESS, FETCH_USER_FAILURE} from './types'

export const fetchUserLogin = ():UserActionTypes => ({
  type: FETCH_USER_LOGIN
})

export const fetchUserLogout = ():UserActionTypes => ({
  type: FETCH_USER_LOGOUT
})

export const fetchUserSuccess = (payload: { user: User, isLogedIn: boolean }):UserActionTypes => ({
  type: FETCH_USER_SUCCESS,
  payload
})

export const fetchUserFailure = (error: string):UserActionTypes => ({
  type: FETCH_USER_FAILURE,
  error
})