import React from "react"
import Quote from "../../components/Quotes"
import SideNavWrapper from "../../components/SideNavWrapper"
import healthSide from "../../assets/images/health-side.png"
import Messaging from "../../components/Messaging"

export default function HealthChatroom() {
  return (
    <SideNavWrapper
      currentTab='Health'
      sideImg={healthSide}
      sideTitle='6 strategies for improving your emotional health'
      sideText='How you feel can affect your ability to carry out everyday activities, your relationships, and your overall mental health.'
      sideLink='https://familydoctor.org/mental-health-keeping-your-emotional-health/'
    >
      <div className='mx-72'>
        <div className=''>
          <Messaging title={"Health Vent Out Room"} />
        </div>
        <div>
          <Quote />
        </div>
      </div>
    </SideNavWrapper>
  )
}
