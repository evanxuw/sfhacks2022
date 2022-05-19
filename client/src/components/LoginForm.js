import React, { useState } from "react"
import firebase from "firebase"
import { auth } from "../services/firebase"
import GoogleLogo from "../assets/images/google_logo.png"

const LoginForm = () => {
  function signInWithGoogle() {
    // instantiate provider object
    const provider = new firebase.auth.GoogleAuthProvider()
    // sign in with google popup
    auth.signInWithPopup(provider)
  }
  return (
    <div>
      <div className='flex flex-col w-full max-w-md px-4 py-8 m-auto bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10'>
        <div className='self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl dark:text-white'>
          Sign in to your account
        </div>
        <div className='mt-8'>
          <form></form>
        </div>

        <div className='block w-full px-4 py-3 my-3 font-semibold text-gray-900 bg-white border border-gray-300 rounded-lg shadow-lg cursor-pointer hover:bg-gray-100 focus:bg-gray-100'>
          <div
            className='flex items-center justify-center bg-white'
            onClick={signInWithGoogle}
          >
            <img src={GoogleLogo} alt='google' className='w-4 bg-white' />
            <span className='ml-4 bg-white'>Sign in with Google</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
