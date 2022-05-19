import { useEffect, useState } from "react"

const useRecorder = () => {
  const [audioURL, setAudioURL] = useState("")
  const [audioBlob, setAudioBlob] = useState(new Blob([]))
  const [isRecording, setIsRecording] = useState(false)
  const [recorder, setRecorder] = useState(null)

  // using the MediaRecorder web API to record audio https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder
  useEffect(() => {
    // Lazily obtain recorder first time we're recording.
    if (recorder === null) {
      if (isRecording) {
        // get recorder stream
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
      // e.data is a blob containing the audio data.
      console.log(e.data)
      setAudioBlob(e.data)
      // Convert the blob to a URL.
      setAudioURL(URL.createObjectURL(e.data))
    }

    // Listen for dataavailable event https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder/dataavailable_event
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
  // instantiate a new recorder stream
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
  return new MediaRecorder(stream)
}
export default useRecorder
