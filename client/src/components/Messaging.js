import React from "react"
import microphoneButton from "../assets/images/microphone-button.png"
import sendButton from "../assets/images/send-button.png"
const Messaging = ({ title }) => {
  return (
    <div className=' w-full h-screen '>
      <div className='pt-4'>
        <div className='bg-white px-4 text-primary uppercase text-4xl grid place-items-left rounded-lg py-1'>
          {title}
        </div>
      </div>

      <div className='px-5 py-6'>
        <div style={{ height: "65vh" }} className='bg-slate-200 rounded-lg'>
          div
        </div>
      </div>
      <div className='py-5 flex flex-row px-5 '>
        <div className='pr-4'>
          <img className='cursor-pointer' src={microphoneButton} />
        </div>
        <input className='px-3  border-2 border-primary  w-full rounded-xl'></input>
        <div>
          <img className='cursor-pointer' src={sendButton} />
        </div>
      </div>
    </div>
  )
}

export default Messaging
