import React, { useState, useRef, useEffect } from "react"
import microphoneButton from "../../../assets/images/microphone-button.png"
import sendButton from "../../../assets/images/send-button.png"
import useRecorder from "../../../hooks/useRecorder"
import axios from "axios"

import { firestore, auth } from "../../../services/firebase"
import SendMessage from "./SendMessage"
// import microphoneButton from "../assets/images/microphone-button.png"
// import sendButton from "../assets/images/send-button.png"
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition
const recognition = new SpeechRecognition()
var current, transcript, upperCase

const Messaging = ({ title, dbCollection }) => {
  let [audioURL, isRecording, startRecording, stopRecording, audioBlob] =
    useRecorder()

  const [startedRecording, setStartedRecording] = useState(false)
  const [text, setText] = useState()
  const startRecord = (e) => {
    recognition.start(e)
    recognition.onresult = (e) => {
      current = e.resultIndex
      transcript = e.results[current][0].transcript
      upperCase = transcript.charAt(0).toUpperCase() + transcript.substring(1)
      console.log("voice event", e)
      console.log("transcript", transcript)
      setText(transcript)
    }
  }

  const handleSendClick = async () => {
    console.log(audioBlob)

    let formatData = new FormData()
    formatData.append("file", audioBlob)

    const { data } = await axios.post(
      "http://localhost:5000/transcribe",
      formatData
    )
  }

  const scroll = useRef()
  const [messages, setMessages] = useState([])

  useEffect(() => {
    firestore
      .collection("healthMessages")
      // .collection(`{dbCollection}`)
      .orderBy("createdAt")
      .limit(50)
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()))
      })
  }, [])

  var items = ['Blue-footed Booby', 'Pink Fairy Armadillo', 'Aye-aye', 'Satanic Leaf-tailed Gecko', 'Fried Egg Jellyfish', 'Meaning of Diamonds', 'Extreme Riddle', 'Lumpsucker', 'Axis'];
  var item = items[Math.floor(Math.random() * items.length)];

  return (
    <div className=' w-full h-screen '>
      <div className='pt-4'>
        <div className='bg-white px-4 text-primary uppercase text-4xl grid place-items-left rounded-lg py-1'>
          {title}
        </div>
      </div>

      <div className='px-5 py-6 '>
        <div
          style={{ height: "65vh" }}
          className='rounded-lg bg-slate-200 p-4 overflow-y-scroll flex flex-col h-128 w-full'
        >
          {messages.map(({ id, text, uid }) => (
            <div>
              <div className={`text-md text-gray-800 pt-2 ${uid === auth.currentUser.uid
                ? "hidden"
                : "block"
                }`}>{item}</div>
              <div
                key={id}
                className={`flex px-3 py-2 items-center my-1 text-white rounded-t-3xl ${uid === auth.currentUser.uid
                  ? "sent rounded-bl-3xl bg-[#58c556] flex-row-reverse float-right"
                  : "received rounded-br-3xl bg-[#353df0] float-left"
                  }`}
              >
                <p className='font-medium text-md break-words'>{text}</p>
              </div>
            </div>
          ))}
          <div ref={scroll}></div>
        </div>
      </div>
      <SendMessage
        setText={setText}
        text={text}
        startedRecording={startedRecording}
        scroll={scroll}
      // messageDbCollection={dbCollection}
      />
      <audio src={audioURL} controls />
      <div className='mx-5 py-6'>Transcript: {text}</div>
      <div className='py-5 flex flex-row px-5 '>
        <button
          onClick={(e) => {
            setStartedRecording(true)
            startRecord(e)
          }}
          className='pr-4'
        >
          <img className='cursor-pointer' src={microphoneButton} />
        </button>
        <button onClick={startRecording} disabled={isRecording}>
          start recording
        </button>
        <button onClick={stopRecording} disabled={!isRecording}>
          stop recording
        </button>
        <input
          placeholder={
            startedRecording
              ? "Press the microphone to stop recording once you're done"
              : "Press the microphone vent out"
          }
          className='px-3  border-2 border-primary  w-full rounded-xl'
        ></input>
        <button>
          <img className='cursor-pointer' src={sendButton} />
        </button>
        <button onClick={handleSendClick}>Send Audio to backend</button>
      </div>
    </div>
  )
}

export default Messaging
