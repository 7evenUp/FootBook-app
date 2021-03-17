import { Middleware } from 'redux'
import { RootState } from '../index'
import { FETCH_USER_LOGIN, FETCH_USER_LOGOUT } from './types'
import { fetchUserSuccess, fetchUserFailure} from './actions'
import firebase from '../../firebase/firebaseConfig'

export const userFetchingMiddleware: Middleware<{}, RootState> = store => next => action => {
  const result = next(action)

  console.log('=================== INSIDE MIDDLEWARE ===================')

  if (action.type === FETCH_USER_LOGIN) {
    firebase.auth().signInWithEmailAndPassword('sheludeshev.artyom@mail.ru', 'Artem2001.')
      .then(() => store.dispatch(fetchUserSuccess({ user: { email: 'sheludeshev.artyom@mail.ru' }, isLogedIn: true })))
      .catch(function (error) {
        const errorCode = error.code
        const errorMessage = error.message
        if (errorCode === 'auth/wrong-password') {
          store.dispatch(fetchUserFailure('Wrong password.'))
        } else {
          store.dispatch(fetchUserFailure(errorMessage))
        }
        console.log(error)
    })
  }

  if (action.type === FETCH_USER_LOGOUT) {
    firebase.auth().signOut()
      .then(() => store.dispatch(fetchUserSuccess({ user: {email: ''}, isLogedIn: false })))
      .catch(function (error) {
        const errorCode = error.code
        const errorMessage = error.message
        store.dispatch(fetchUserFailure(`${errorMessage} === Error code: ${errorCode}`))
        console.log(error)
      })
  }

  return result;
}