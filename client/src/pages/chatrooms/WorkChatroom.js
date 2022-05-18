import React from "react"
import Messaging from "./workChat/Messaging"
import Quote from "../../components/Quotes"
import SideNavWrapper from "../../components/SideNavWrapper"
import workSide from "../../assets/images/work-side.png"
export default function WorkChatroom() {
  return (
    <SideNavWrapper
      currentTab='Work'
      sideImg={workSide}
      sideTitle='4 Rules for Identifying Your Life’s Work'
      sideText='What shape your professional path should take depends on how you define success.'
      sideLink='https://www.theatlantic.com/family/archive/2020/05/how-choose-fulfilling-career/611920/'
    >
      <div className='mx-72'>
        <Messaging title={"Work Vent Out Room"} />
        <div>
          <Quote />
        </div>
      </div>
    </SideNavWrapper>
  )
}
