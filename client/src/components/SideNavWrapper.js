import React from "react"
import Sidebar from "./Sidebar"
import Navbar from "./Navbar"
const SideNavWrapper = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      {children}
    </div>
  )
}

export default SideNavWrapper
