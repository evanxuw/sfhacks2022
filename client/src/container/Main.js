import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import HealthChatroom from "../pages/chatrooms/HealthChatroom"
import RelationshipChatroom from "../pages/chatrooms/RelationshipChatroom"
import SchoolChatroom from "../pages/chatrooms/SchoolChatroom"
import WorkChatroom from "../pages/chatrooms/WorkChatroom"
import Profile from "../pages/Profile"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/health' element={<HealthChatroom />} />
        <Route path='/relationship' element={<RelationshipChatroom />} />
        <Route path='/school' element={<SchoolChatroom />} />
        <Route path='/work' element={<WorkChatroom />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
