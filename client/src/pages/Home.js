import React from "react"
import { Link } from "react-router-dom"
import ChatImg from "../assets/images/chatroom.svg"
import SideNavWrapper from "../components/SideNavWrapper"

export default function Home() {
  return (
    <SideNavWrapper>
      <div className='ml-72 pt-10 pb-12'>
        <div className='md:grid md:grid-cols-2 items-center pt-10 mx-12'>
          <div className=''>
            <h1 className='text-3xl md:text-6xl'>Who we are</h1>
            <p className='text-xl md:text-2xl py-4 tracking-wider'>
              {" "}
              We are inspired by President Abraham Lincoln's “hot letters” written during the civil war, ones that he wrote to vent out his frustration with his colleagues and enemies but never posted. Today we have many more sophisticated tools to vent out all our anger and we made a platform to do so in an effective manner. We call this platform VentOut.{" "}
            </p>

            <Link to='/work'>
              <button className='bg-secondary py-2 px-8 rounded-md text-xl md:text-2xl text-white'>
                Enter Chatroom
              </button>
            </Link>
          </div>
          <div className='grid place-items-center py-4 drop-shadow-3xl shadow-black'>
            <img src={ChatImg} alt='img' width='600' height='600' />
          </div>
        </div>
      </div>
    </SideNavWrapper>
  )
}
