import React from "react"
import firebase from "firebase"
import { auth } from "../services/firebase"
import LoginForm from "../components/LoginForm"
import background from "../assets/images/login-sign-up-background.png"
import logo from "../assets/images/primary-logo.png"

// function LoginGoogle() {
//   function signInWithGoogle() {
//     const provider = new firebase.auth.GoogleAuthProvider()
//     auth.signInWithPopup(provider)
//   }

//   return <div onClick={signInWithGoogle}>Login</div>
// }

const Login = () => {
  return (
    <div className='h-screen'>
      {" "}
      <div>
        <div className='flex justify-center items-center align-center flex-wrap w-full'>
          <div className='flex flex-col w-full md:w-1/2'>
            <img
              className='hidden object-cover w-full h-screen md:block'
              src={background}
            />
          </div>
          <div className='flex-col w-full md:w-1/2'>
            <div className='flex'>
              <img className='m-auto mb-2 h-72 w-78' src={logo} />
            </div>
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
