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

export const profileMiddleware: Middleware<{}, RootState> = store => next => async (action: ProfileActionTypes) => {
  const result = next(action)

  console.log('=================== INSIDE PROFILE MIDDLEWARE ===================')

  if (action.type === PROFILE_UPDATE_PHOTO_REQUEST) {
    const { photoUri, uid } = action.payload
    const dotIndex = photoUri.lastIndexOf('.')
    const ext = photoUri.substr(dotIndex + 1)

    const blob: Blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest()
      xhr.onload = function () {
        resolve(xhr.response)
      };
      xhr.onerror = function (e) {
        console.log(e)
        reject(new TypeError('Network request failed'))
      };
      xhr.responseType = 'blob'
      xhr.open('GET', photoUri, true)
      xhr.send(null)
    });

    const ref = firebase.storage().ref(`users/${uid}/profilePhoto.${ext}`)
    const snapshot = await ref.put(blob)
    const downloadURL = await snapshot.ref.getDownloadURL()

    blob.close()

    firebase.auth().currentUser?.updateProfile({
      photoURL: downloadURL
    }).then(() => {
      console.log('DOWNLOADED')
      console.log(downloadURL)
      return store.dispatch(profileUpdatePhotoSuccess({ photoUrl: downloadURL }))
    })
      .catch(error => {
        const errorCode = error.code
        const errorMessage = error.message
        store.dispatch(profileUpdatePhotoFailure(`${errorMessage} === Error code: ${errorCode}`))
        console.error("Error: " + error)
      })
  }

  return result
}