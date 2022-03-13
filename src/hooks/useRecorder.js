import { useEffect, useState } from "react"

const useRecorder = () => {
  const [audioURL, setAudioURL] = useState("")
  const [audioBlob, setAudioBlob] = useState(new Blob([]))
  const [isRecording, setIsRecording] = useState(false)
  const [recorder, setRecorder] = useState(null)

  useEffect(() => {
    // Lazily obtain recorder first time we're recording.
    if (recorder === null) {
      if (isRecording) {
        requestRecorder().then(setRecorder, console.error)
      }
      return
    }

    // Manage recorder state.
    if (isRecording) {
      recorder.start()
    } else {
      recorder.stop()
    }

    // Obtain the audio when ready.
    const handleData = (e) => {
      console.log(e.data)
      setAudioBlob(e.data)
      setAudioURL(URL.createObjectURL(e.data))
    }

    recorder.addEventListener("dataavailable", handleData)
    return () => recorder.removeEventListener("dataavailable", handleData)
  }, [recorder, isRecording])

  const startRecording = () => {
    setIsRecording(true)
  }

  const stopRecording = () => {
    setIsRecording(false)
  }

  return [audioURL, isRecording, startRecording, stopRecording, audioBlob]
}

async function requestRecorder() {
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
  return new MediaRecorder(stream)
}
export default useRecorder
