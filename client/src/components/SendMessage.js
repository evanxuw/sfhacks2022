import React, { useState } from 'react'
import { firestore, auth } from '../services/firebase'
import firebase from 'firebase'
import microphoneButton from "../assets/images/microphone-button.png"
import sendButton from "../assets/images/send-button.png"

function SendMessage({ scroll }) {
    const [msg, setMsg] = useState('')

    async function sendMessage(e) {
        e.preventDefault()
        const { uid, photoURL } = auth.currentUser

        await firestore.collection('messages').add({
            text: msg,
            photoURL,
            uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setMsg('')
        scroll.current.scrollIntoView({ behavior: 'smooth' })
    }
    return (
        <form onSubmit={sendMessage} className='py-5 flex flex-row px-5 '>
            <div className='pr-4'>
                <img className='cursor-pointer' src={microphoneButton} />
            </div>
            <input className='px-3  border-2 border-primary  w-full rounded-xl' value={msg} onChange={e => setMsg(e.target.value)} />
            <div>
                <img className='cursor-pointer' src={sendButton} />
            </div>
        </form>
    )
}

export default SendMessage
