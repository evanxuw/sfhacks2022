import React, { useState } from "react"
import { firestore, auth } from "../services/firebase"
import firebase from "firebase"
import microphoneButton from "../assets/images/microphone-button.png"
import sendButton from "../assets/images/send-button.png"

function SendMessage({ scroll, startedRecording, text, setText, messageDbCollection }) {
  const [msg, setMsg] = useState("")

  async function sendMessage(e) {
    e.preventDefault()
    const { uid, photoURL } = auth.currentUser

    // await firestore.collection(messageDbCollection).add({
    await firestore.collection("messages").add({
      text: text,
      photoURL,
      uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    })
    setMsg("")
    setText("")
    scroll.current.scrollIntoView({ behavior: "smooth" })
  }
  return (
    <form onSubmit={sendMessage} className='py-5 flex flex-row px-5 '>
      <div className='pr-4'>
        <img className='cursor-pointer' src={microphoneButton} />
      </div>
      <input
        className='px-3  border-2 border-primary  w-full rounded-xl'
        placeholder={
          startedRecording
            ? "Press the microphone to stop recording once you're done"
            : "Press the microphone vent out"
        }
        value={text}
        onChange={(e) => setMsg(e.target.value)}
      />
      <button>
        <img className='cursor-pointer' src={sendButton} />
      </button>
    </form>
  )
}

export default SendMessage
