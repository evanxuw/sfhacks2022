import React from "react"
import LoginForm from "../components/LoginForm"
import mentalHealth from "../assets/images/mental-health.jpg"
import logo from "../assets/images/Logo.png"
const Login = () => {
  return (
    <div className='h-screen'>
      {" "}
      <div>
        <div
          style={{
            background:
              "linear-gradient(\n  212.35deg,\n  rgba(239, 205, 255, 0.31) 0%,\n  rgba(241, 157, 185, 0.164187) 13.97%,\n  rgba(243, 110, 115, 0.02) 33.07%,\n  rgba(241, 155, 181, 0.156443) 33.07%\n)",
          }}
          className='flex justify-center items-center align-center flex-wrap w-full'
        >
          <div className='flex-col w-full md:w-1/2'>
            <div className='flex'>
              <img className='m-auto mb-4 h-68 w-68' src={logo} />
            </div>
            <LoginForm />
          </div>
          <div className='flex flex-col w-full md:w-1/2'>
            <img
              className='hidden object-cover w-full h-screen md:block'
              src={mentalHealth}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
