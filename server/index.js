const express = require("express")
const app = express()
const cors = require("cors")
require("dotenv").config()
const morgan = require("morgan")
const axios = require("axios")
const http = require("http").createServer(app)
const multer = require("multer")
// multer is a library that allows us to upload files to our server
const upload = multer()
// specifying morgan log format type dev- middleware
app.use(morgan("dev"))

app.use(cors())

// assembly ai api call object with headers
let assembly = axios.create({
  baseURL: "https://api.assemblyai.com/v2",
  headers: {
    authorization: process.env.ASSEMBLYAI_API_KEY,
    "content-type": "application/json",
    "transfer-encoding": "chunked",
  },
})

// test
app.get("/", async (req, res) => {
  return res.json({ message: "Server is up and running" })
})

app.post("/transcribe", upload.single("file"), async (req, res) => {
  assembly
    // first upload the file to assembly.ai
    .post("/upload", req.file.buffer)
    .then((res) => {
      const uploadURL = res.data
      console.log("UPLOAD URL", uploadURL)
      // now transcribe the file  by making a call to assembly.ai /transcript endpoint
      assembly
        .post("/transcript", {
          audio_url: uploadURL.upload_url,
        })
        .then((res) => {
          console.log(res.data)

          // wait for 15s until the data is transcribed and sent back to you
          setTimeout(() => {
            assembly
              .get(`/transcript/${res.data.id}`)
              .then((res) => console.log(res.data))
              .catch((err) => console.error(err))
          }, 5000)
          setTimeout(() => {
            assembly
              .get(`/transcript/${res.data.id}`)
              .then((res) => console.log(res.data))
              .catch((err) => console.error(err))
          }, 10000)
        })
        .catch((err) => console.error(err))
    })
    .catch((err) => console.error(err))
})

const port = process.env.PORT || 7000

http.listen(port, () => {
  console.log(`Server started on port ${port}`)
})
