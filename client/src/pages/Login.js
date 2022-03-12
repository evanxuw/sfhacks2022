import React from 'react'
import firebase from 'firebase'
import { auth } from '../services/firebase'

export default function Login() {

  function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider()
    auth.signInWithPopup(provider)
  }

  return (
    <div onClick={signInWithGoogle}>Login</div>
  )
}
