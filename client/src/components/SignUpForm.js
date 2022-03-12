import React, { useState } from "react"
// import axios from "axios"
import { useNavigate } from "react-router-dom"
// import { toast } from "react-toastify"

const SignUpForm = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  let navigate = useNavigate()
  //   const handleSubmit = (e) => {
  //     e.preventDefault()
  //     var data = JSON.stringify({
  //       action: "registercaregiver",
  //       name: "carey mccaren",
  //       email: "caregiver@email.com",
  //       password: "unsafepassword",
  //       phone: "12124544545",
  //       gender: "f",
  //     })

  //     var config = {
  //       method: "post",
  //       url: "https://us-central1-aiot-fit-xlab.cloudfunctions.net/parampower",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       data: data,
  //     }

  //     axios(config)
  //       .then(function (response) {
  //         console.log(JSON.stringify(response.data))
  //         toast.success("Sign up successful")
  //         navigate("/")
  //       })
  //       .catch(function (error) {
  //         console.log(error)
  //       })
  //   }
  return (
    <div>
      <div className='flex bg-gray-800 m-auto flex-col max-w-md px-4 py-8 rounded-lg shadow sm:px-6 md:px-8 lg:px-10'>
        <div className='self-center mb-2 text-xl font-light sm:text-2xl text-white'>
          Create a new account
        </div>
        <span className='justify-center text-sm text-center text-gray-500 flex-items-center dark:text-gray-400'>
          Already have an account?{" "}
          <a className='text-sm text-blue-500 underline hover:text-blue-700'>
            Sign In
          </a>
        </span>
        <div className='p-6 mt-8'>
          {/* <form onSubmit={(e) => handleSubmit(e)}> */}
          <form>
            <div className='flex flex-col mb-2'>
              <div className=' relative '>
                <input
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  value={phoneNumber}
                  type='text'
                  id='create-account-pseudo'
                  className=' rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
                  name='phone number'
                  placeholder='Phone Number'
                />
              </div>
            </div>
            <div className='flex gap-4 mb-2'>
              <div className=' relative '>
                <input
                  type='text'
                  onChange={(e) => setFirstName(e.target.value)}
                  id='create-account-first-name'
                  className=' rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
                  name='First name'
                  placeholder='First name'
                  value={firstName}
                />
              </div>
              <div className=' relative '>
                <input
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  type='text'
                  id='create-account-last-name'
                  className=' rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
                  name='Last name'
                  placeholder='Last name'
                />
              </div>
            </div>
            <div className='flex flex-col mb-2'>
              <div className=' relative '>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type='text'
                  id='create-account-email'
                  className=' rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
                  placeholder='Email'
                />
              </div>
            </div>
            <div className='flex flex-col mb-2'>
              <div className=' relative '>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  type='password'
                  className=' rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
                  placeholder='Password'
                />
              </div>
            </div>
            <div className='flex flex-col mb-2'>
              <div className=' relative '>
                <input
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  value={confirmPassword}
                  type='password'
                  className=' rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent'
                  placeholder='Confirm Password'
                />
              </div>
            </div>
            <div className='flex w-full my-4'>
              <button
                type='submit'
                className='py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg '
              >
                Login
              </button>
            </div>
          </form>
          <div className='flex items-center justify-center mt-6'>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUpForm
