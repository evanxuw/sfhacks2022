import React, { useState, useRef, useEffect } from "react"
import microphoneButton from "../../../assets/images/microphone-button.png"
import sendButton from "../../../assets/images/send-button.png"
import useRecorder from "../../../hooks/useRecorder"
import axios from "axios"

import { firestore, auth } from "../../../services/firebase"
import SendMessage from "./SendMessage"

// speech recognition web api https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition
const recognition = new SpeechRecognition()
var current, transcript, upperCase

const Messaging = ({ title, dbCollection }) => {
  // initialize useRecorder hook
  let [audioURL, isRecording, startRecording, stopRecording, audioBlob] =
    useRecorder()

  const [startedRecording, setStartedRecording] = useState(false)
  const [text, setText] = useState()
  const startRecord = (e) => {
    // capture the event
    recognition.start(e)

    recognition.onresult = (e) => {
      // after the event has been processed by the browser, get the index
      current = e.resultIndex
      // get the transcript from the processed event
      transcript = e.results[current][0].transcript
      // the transcript is in lower case so set firse char to upper case
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

  // load messages from relationshipMessages collection
  useEffect(() => {
    firestore
      .collection("relationshipMessages")
      // .collection(`{dbCollection}`)
      .orderBy("createdAt")
      .limit(50)
      // onSnapshot() method you constantly listen to a document https://stackoverflow.com/questions/54479892/difference-between-get-and-onsnapshot-in-cloud-firestore
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()))
      })
  }, [])

  var randomUsernames = [
    "Blue-footed Booby",
    "Pink Fairy Armadillo",
    "Aye-aye",
    "Satanic Leaf-tailed Gecko",
    "Fried Egg Jellyfish",
    "Meaning of Diamonds",
    "Extreme Riddle",
    "Lumpsucker",
    "Axis",
  ]
  var item = randomUsernames[Math.floor(Math.random() * randomUsernames.length)]

  return (
    <div className='w-full h-screen '>
      <div className='pt-4'>
        <div className='grid px-4 py-1 text-4xl uppercase bg-white rounded-lg text-primary place-items-left'>
          {title}
        </div>
      </div>

      <div className='px-5 py-6 '>
        <div
          style={{ height: "65vh" }}
          className='flex flex-col w-full p-4 overflow-y-scroll rounded-lg bg-slate-200 h-128'
        >
          {messages.map(({ id, text, uid }) => (
            <div>
              <div
                className={`text-md text-gray-800 pt-2 ${
                  uid === auth.currentUser.uid ? "hidden" : "block"
                }`}
              >
                {item}
              </div>
              <div
                key={id}
                className={`flex px-3 py-2 items-center my-1 text-white rounded-t-3xl ${
                  uid === auth.currentUser.uid
                    ? "sent rounded-bl-3xl bg-[#58c556] flex-row-reverse float-right"
                    : "received rounded-br-3xl bg-[#353df0] float-left"
                }`}
              >
                <p className='font-medium break-words text-md'>{text}</p>
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
        setStartedRecording={setStartedRecording}
        startRecord={startRecord}
        // messageDbCollection={dbCollection}
      />
      {/* <audio src={audioURL} controls />
      <div className='py-6 mx-5'>Transcript: {text}</div>
      <div className='flex flex-row px-5 py-5 '>
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
          className='w-full px-3 border-2 border-primary rounded-xl'
        ></input>
        <button>
          <img className='cursor-pointer' src={sendButton} />
        </button>
        <button onClick={handleSendClick}>Send Audio to backend</button>
      </div> */}
    </div>
  )
}

export default Messaging
