const express = require("express")
const app = express()
const cors = require("cors")
require("dotenv").config()
const morgan = require("morgan")
const axios = require("axios")
const http = require("http").createServer(app)
const fs = require("fs")
const multer = require("multer")

const upload = multer()
// specifying morgan log format type dev- middleware
app.use(morgan("dev"))

app.use(cors())

const assembly = axios.create({
  baseURL: "https://api.assemblyai.com/v2",
  headers: {
    authorization: process.env.ASSEMBLYAI_API_KEY,
    "content-type": "application/json",
    "transfer-encoding": "chunked",
  },
})

app.get("/", async (req, res) => {
  return res.json({ message: "Server is up and running" })
})

app.post("/transcribe", upload.single("file"), async (req, res) => {
  console.log(req.file)
  assembly
    .post("/upload", req.file)
    .then((res) => {
      const uploadURL = res.data
      console.log("UPLOAD URL", uploadURL)
      assembly
        .post("/transcript", {
          audio_url: uploadURL.upload_url,
        })
        .then((res) => {
          console.log(res.data)
          setTimeout(() => {
            assembly
              .get(`/transcript/${res.data.id}`)
              .then((res) => console.log(res.data))
              .catch((err) => console.error(err))
          }, 5000)
        })
        .catch((err) => console.error(err))
    })
    .catch((err) => console.error(err))

  res.json({ message: "success" })
})

const port = process.env.PORT || 7000

http.listen(port, () => {
  console.log(`Server started on port ${port}`)
})
