import firebase from 'firebase'

export const firebaseConfig = {
  apiKey: "AIzaSyDSQtmDirSUtpIesgxJe1JS4Z4L8oiGhZ8",
  authDomain: "idobatakaigi-with-yuto.firebaseapp.com",
  projectId: "idobatakaigi-with-yuto",
  storageBucket: "idobatakaigi-with-yuto.appspot.com",
  messagingSenderId: "325974031234",
  appId: "1:325974031234:web:b85737155190db6237ad9b"
}

firebase.initializeApp(firebaseConfig)
const database = firebase.database()
const messageRef = database.ref('messages')

export const pushMessage = ({ name, text }) => messageRef.push({ name, text })
