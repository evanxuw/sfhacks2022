import React from "react"
import Messaging from "../../components/Messaging"
import Quote from "../../components/Quotes"
import SideNavWrapper from "../../components/SideNavWrapper"

export default function WorkChatroom() {
  return (
    <SideNavWrapper>
      <div className='mx-72'>
        <Messaging title={"Work Vent Room"} />

        <div>
          <Quote />
        </div>
      </div>
    </SideNavWrapper>
  )
}
