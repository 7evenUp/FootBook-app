import firebase from "firebase/app"
import "firebase/auth"

const config = {
  apiKey: "AIzaSyBgOWnlCpPzsxU4uOb8P2monfguaW2lQA0",
  authDomain: "soccerapp-336fa.firebaseapp.com",
  projectId: "soccerapp-336fa",
  storageBucket: "soccerapp-336fa.appspot.com",
  messagingSenderId: "682707365489",
  appId: "1:682707365489:web:e45f0371637f139dda75d0",
  measurementId: "G-376ER1LN63"
}

export default firebase.apps.length ? firebase.app() : firebase.initializeApp(config)

firebase.auth().onAuthStateChanged(user => {
  console.log("STATE CHANGED")
  if (user) {
    console.log('Logged IN')
    console.log(user.email)
  }
  else {
    console.log('Loged out')
  }
})