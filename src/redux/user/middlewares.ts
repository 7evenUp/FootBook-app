import { Middleware } from 'redux'
import { RootState } from '../index'
import { USER_SIGNIN, USER_LOGOUT, USER_SIGNUP } from './types'
import { userSuccess, userFailure} from './actions'
import firebase from '../../firebase/firebaseConfig'

export const userFetchingMiddleware: Middleware<{}, RootState> = store => next => action => {
  const result = next(action)

  console.log('=================== INSIDE USER MIDDLEWARE ===================')

  if (action.type === USER_SIGNIN) {
    // firebase.auth().signInWithEmailAndPassword(action.payload.email, action.payload.password)
    firebase.auth().signInWithEmailAndPassword('sheludeshev.artyom@mail.ru', 'Artem2001.')
      .then(() => store.dispatch(userSuccess({ user: { email: 'sheludeshev.artyom@mail.ru' }, isLogedIn: true })))
      .catch(error => {
        const errorCode = error.code
        const errorMessage = error.message
        if (errorCode === 'auth/wrong-password') {
          store.dispatch(userFailure('Wrong password.'))
        } else {
          store.dispatch(userFailure(errorMessage))
        }
        console.error("Error: " + error)
    })
  }

  if (action.type === USER_SIGNUP) {
    firebase.auth().createUserWithEmailAndPassword('sheludeshev@mail.ru', 'Artem2001.')
      .then(() => store.dispatch(userSuccess({ user: { email: 'sheludeshev@mail.ru' }, isLogedIn: true })))
      .catch(error => {
        const errorCode = error.code
        const errorMessage = error.message
        if (errorCode === 'auth/wrong-password') {
          store.dispatch(userFailure('Wrong password.'))
        } else {
          store.dispatch(userFailure(`${errorCode}: ${errorMessage}`))
        }
        console.error("Error: " + error)
      })
  }

  if (action.type === USER_LOGOUT) {
    firebase.auth().signOut()
      .then(() => store.dispatch(userSuccess({ user: {email: ''}, isLogedIn: false })))
      .catch(error => {
        const errorCode = error.code
        const errorMessage = error.message
        store.dispatch(userFailure(`${errorMessage} === Error code: ${errorCode}`))
        console.error("Error: " + error)
      })
  }

  return result;
}