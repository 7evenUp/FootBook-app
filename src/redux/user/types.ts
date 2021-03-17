export interface User {
  email: string
}

export interface UserState {
  isFetching: boolean
  isFetched: boolean
  isLogedIn: boolean
  user: User
  error: string | null
}

export const FETCH_USER_LOGIN = 'FETCH_USER_LOGIN'
export const FETCH_USER_LOGOUT = 'FETCH_USER_LOGOUT'
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS'
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE'

interface FetchUserLoginAction {
  type: typeof FETCH_USER_LOGIN
}

interface FetchUserLogoutAction {
  type: typeof FETCH_USER_LOGOUT
}

interface FetchUserSuccessAction {
  type: typeof FETCH_USER_SUCCESS
  payload: {
    user: User,
    isLogedIn: boolean
  }
}

interface FetchUserFailureAction {
  type: typeof FETCH_USER_FAILURE
  error: string
}

export type UserActionTypes = FetchUserLoginAction | FetchUserLogoutAction | FetchUserSuccessAction | FetchUserFailureAction