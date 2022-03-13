import React from "react"
import Quote from "../../components/Quotes"
import SideNavWrapper from "../../components/SideNavWrapper"
import schoolSide from "../../assets/images/school-side.png"
import Messaging from "./schoolChat/Messaging"

export default function SchoolChatroom() {
  return (
    <SideNavWrapper
      currentTab='School'
      sideImg={schoolSide}
      sideTitle='10 Tips for Healthy Relationships in College'
      sideText='Studies show that people with healthy relationships really do have more happiness and less stress'
      sideLink='https://www.suu.edu/blog/2018/08/ten-tips-for-healthy-relationships.html'
    >
      <div className='mx-72'>
        <div className=''>
          {" "}
          <Messaging title={"School Vent Out Room"} />
        </div>
        <div>
          <Quote />
        </div>
      </div>
    </SideNavWrapper>
  )
}
