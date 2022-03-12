import React from "react"
import Quote from "../../components/Quotes"
import SideNavWrapper from "../../components/SideNavWrapper"

export default function RelationshipChatroom() {
  return (
    <SideNavWrapper>
      <div className='mx-72'>
        <div className=''>RelationshipChatroom</div>
        <div>
          <Quote />
        </div>
      </div>
    </SideNavWrapper>
  )
}
