import React from "react"
import Quote from "../../components/Quotes"
import SideNavWrapper from "../../components/SideNavWrapper"
import relationshipSide from "../../assets/images/relationship-side.png"
import Messaging from "../../components/Messaging"

export default function RelationshipChatroom() {
  return (
    <SideNavWrapper
      currentTab='Relationship'
      sideImg={relationshipSide}
      sideTitle='7 Ways to Improve Communication in Relationships'
      sideText='We love connecting with other people because it makes us happy'
      sideLink='https://www.suu.edu/blog/2018/08/ten-tips-for-healthy-relationships.html'
    >
      <div className='mx-72'>
        <div className=''>
          <Messaging title={"Relationship Vent Out Room"}></Messaging>
        </div>
        <div>
          <Quote />
        </div>
      </div>
    </SideNavWrapper>
  )
}
