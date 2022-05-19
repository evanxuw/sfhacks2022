import React, { useState } from "react"
import { firestore, auth } from "../../../services/firebase"
import firebase from "firebase"
import microphoneButton from "../../../assets/images/microphone-button.png"
import sendButton from "../../../assets/images/send-button.png"

function SendMessage({
  scroll,
  startedRecording,
  text,
  setText,
  messageDbCollection,
  setStartedRecording,
  startRecord,
}) {
  // set msg to empty string
  const [msg, setMsg] = useState("")

  async function sendMessage(e) {
    e.preventDefault()
    // get user information from authState
    const { uid, photoURL } = auth.currentUser
    if (text === "") {
      return
    }
    // async call to update firestore with new message
    await firestore.collection("healthMessages").add({
      text: text,
      photoURL,
      uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    })
    // reset the values
    setMsg("")
    setText("")
    setStartedRecording(false)

    scroll.current.scrollIntoView({ behavior: "smooth" })
  }
  return (
    <form onSubmit={sendMessage} className='flex flex-row px-5 py-5 '>
      <button
        onClick={(e) => {
          setStartedRecording(true)
          startRecord(e)
        }}
        className='pr-4'
      >
        <img className='cursor-pointer' src={microphoneButton} />
      </button>
      <input
        readOnly
        className='w-full px-3 border-2 border-primary rounded-xl'
        placeholder={
          startedRecording
            ? "Once you're done venting out, press the SEND button"
            : "Press the microphone and anonymously Vent Out"
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
