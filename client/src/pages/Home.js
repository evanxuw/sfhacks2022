import React from "react"
import { Link } from "react-router-dom"
import ChatImg from "../assets/images/chatroom.svg"
import SideNavWrapper from "../components/SideNavWrapper"

export default function Home() {
  return (
    // contains sidebar and navbar
    <SideNavWrapper>
      <div className='pt-10 pb-12 ml-72'>
        <div className='items-center pt-10 mx-12 md:grid md:grid-cols-2'>
          <div className=''>
            <h1 className='text-3xl md:text-6xl'>Who we are</h1>
            <p className='py-4 text-xl tracking-wider md:text-2xl'>
              {" "}
              We are inspired by President Abraham Lincoln's “hot letters”
              written during the civil war, ones that he wrote to vent out his
              frustration with his colleagues and enemies but never posted.
              Today we have many more sophisticated tools to vent out all our
              anger and we made a platform to do so in an effective manner. We
              call this platform VentOut.{" "}
            </p>

            <Link to='/work'>
              <button className='px-8 py-2 text-xl text-white rounded-md bg-secondary md:text-2xl'>
                Enter Chatroom
              </button>
            </Link>
          </div>
          <div className='grid py-4 place-items-center drop-shadow-3xl shadow-black'>
            <img src={ChatImg} alt='img' width='600' height='600' />
          </div>
        </div>
      </div>
    </SideNavWrapper>
  )
}
