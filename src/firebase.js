import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyCvTdQ8L8HSr7cWigV5WADBLtFyvqy1M9c",
  authDomain: "mercado-em-casa-306815.firebaseapp.com",
  projectId: "mercado-em-casa-306815",
  storageBucket: "mercado-em-casa-306815.appspot.com",
  messagingSenderId: "251036632295",
  appId: "1:251036632295:web:7d14285085bbe1c5fb8e42",
  measurementId: "G-3K7MM04DRT"
});

export const auth = app.auth()
export default app

//Parte responsavél pelo botão do login do google 
const googleProvider = new firebase.auth.GoogleAuthProvider()
export const signInWithGoogle = () => {
  auth.signInWithPopup(googleProvider).then((res) => {
    console.log(res.user)
  }).catch((error) => {
    console.log(error.message)
  })
}