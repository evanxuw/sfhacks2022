import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Home from '../pages/Home'
import HealthChatroom from '../pages/chatrooms/HealthChatroom'
import RelatioshipChtaroom from '../pages/chatrooms/RelatioshipChtaroom'
import SchoolChatroom from '../pages/chatrooms/SchoolChatroom'
import WorkChatroom from '../pages/chatrooms/WorkChatroom'
import Profile from '../pages/Profile'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/health" element={<HealthChatroom />} />
        <Route path="/relationship" element={<RelatioshipChtaroom />} />
        <Route path="/school" element={<SchoolChatroom />} />
        <Route path="/work" element={<WorkChatroom />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
