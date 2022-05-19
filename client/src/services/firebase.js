import firebase from "firebase"

// firebase project configuration
const app = firebase.initializeApp({
  // okay to make apiKey public
  apiKey: "AIzaSyBX-28ylShwCCDVho2zxeh1Z2Jqe2gBsnA",
  authDomain: "ventout-4508b.firebaseapp.com",
  projectId: "ventout-4508b",
  // for firestore
  storageBucket: "ventout-4508b.appspot.com",
  messagingSenderId: "1075916666117",
  appId: "1:1075916666117:web:2c9d68c29b8c20604cf36c",
  measurementId: "G-SMSKEZKYZ0",
})

// initialize firestore db
const firestore = firebase.firestore()

// initialize firestore auth service
const auth = firebase.auth()

export { firestore, auth, app }
