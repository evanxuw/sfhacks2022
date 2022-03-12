import React, { useState, useEffect, useRef } from 'react'
import { firestore, auth } from '../services/firebase'
import SendMessage from "./SendMessage"
// import microphoneButton from "../assets/images/microphone-button.png"
// import sendButton from "../assets/images/send-button.png"

const Messaging = ({ title }) => {

  const scroll = useRef()
  const [messages, setMessages] = useState([])

  useEffect(() => {
    firestore.collection('messages').orderBy('createdAt').limit(50).onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => doc.data()))
    })
  }, [])

  return (
    <div className=' w-full h-screen '>
      <div className='pt-4'>
        <div className='bg-white px-4 text-primary uppercase text-4xl grid place-items-left rounded-lg py-1'>
          {title}
        </div>
      </div>

      <div className='px-5 py-6 '>
        <div style={{ height: "65vh" }} className="rounded-lg bg-slate-200 p-4 overflow-y-scroll flex flex-col h-128 w-full">
          {messages.map(({ id, text, uid }) => (
            <div>
              <div key={id} className={`flex px-3 py-2 items-center my-2 text-white rounded-t-3xl ${uid === auth.currentUser.uid ? 'sent rounded-bl-3xl bg-[#58c556] flex-row-reverse float-right' : 'received rounded-br-3xl bg-[#353df0] float-left'}`}>
                <p className='font-medium text-md break-words'>{text}</p>
              </div>
            </div>
          ))}
          <div ref={scroll}></div>
        </div>
        <SendMessage scroll={scroll} />
        {/* <div style={{ height: "65vh" }} className='bg-slate-200 rounded-lg'>

        </div> */}
      </div>
      {/* <div className='py-5 flex flex-row px-5 '>
        <div className='pr-4'>
          <img className='cursor-pointer' src={microphoneButton} />
        </div>
        <input className='px-3  border-2 border-primary  w-full rounded-xl'></input>
        <div>
          <img className='cursor-pointer' src={sendButton} />
        </div>
      </div> */}
    </div>
  )
}

export default Messaging
