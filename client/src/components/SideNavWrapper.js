import React from "react"
import Sidebar from "./Sidebar"
import Navbar from "./Navbar"
const SideNavWrapper = ({
  children,
  currentTab,
  sideImg,
  sideTitle,
  sideText,
  sideLink,
}) => {
  return (
    // navbar is the top bar
    // sidebar is the lhs chat rooms bar
    <div>
      <Navbar />
      <Sidebar
        currentTab={currentTab}
        sideImg={sideImg}
        sideTitle={sideTitle}
        sideText={sideText}
        sideLink={sideLink}
      />
      {children}
    </div>
  )
}

export default SideNavWrapper
