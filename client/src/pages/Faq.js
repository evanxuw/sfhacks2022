import React from "react"
import Navbar from "../components/Navbar"
import explainText from "../assets/images/explain-text.png"
import tertiaryLogo from "../assets/images/tertiary-logo.png"
const Faq = () => {
  return (
    <div>
      <Navbar />
      <div className='bg-secondary  flex h-40 w-full'>
        <div className='m-auto bg-white p-5 text-secondary text-3xl border-2 border-primary'>
          Frequently Asked Questions
        </div>
      </div>

      <div className='flex pt-8 flex-row h-screen w-full'>
        <div className='flex w-2/5 h-screen '>
          <div className='pl-20'>
            <img className='w-25 h-25' src={tertiaryLogo}></img>
          </div>
        </div>
        <div className=' w-3/5 h-screen '>
          <div className='pr-4 mb-10'>
            <img src={explainText}></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Faq
