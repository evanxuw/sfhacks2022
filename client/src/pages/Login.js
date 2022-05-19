import React from "react"

import LoginForm from "../components/LoginForm"
import background from "../assets/images/login-sign-up-background.png"
import logo from "../assets/images/primary-logo.png"

const Login = () => {
  return (
    <div className='h-screen'>
      {" "}
      <div>
        <div className='flex flex-wrap items-center justify-center w-full align-center'>
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
