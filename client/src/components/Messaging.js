import React, { useState } from "react"
import microphoneButton from "../assets/images/microphone-button.png"
import sendButton from "../assets/images/send-button.png"
import Filter from "bad-words"
import useRecorder from "../hooks/useRecorder"
import axios from "axios"

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition
const recognition = new SpeechRecognition()
var current, transcript, upperCase
const Messaging = ({ title }) => {
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

  var customFilter = new Filter({ placeHolder: "x" })

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
        <button
          onClick={(e) => {
            setText("")
          }}
        >
          <img className='cursor-pointer' src={sendButton} />
        </button>
        <button onClick={handleSendClick}>Send Audio to backend</button>
      </div>
    </div>
  )
}

export default Messaging
