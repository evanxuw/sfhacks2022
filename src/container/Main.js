import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import HealthChatroom from "../pages/chatrooms/HealthChatroom"
import RelationshipChatroom from "../pages/chatrooms/RelationshipChatroom"
import SchoolChatroom from "../pages/chatrooms/SchoolChatroom"
import WorkChatroom from "../pages/chatrooms/WorkChatroom"
import Faq from "../pages/Faq"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/health' element={<HealthChatroom />} />
        <Route path='/relationship' element={<RelationshipChatroom />} />
        <Route path='/school' element={<SchoolChatroom />} />
        <Route path='/work' element={<WorkChatroom />} />
        <Route path='/faq' element={<Faq />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
