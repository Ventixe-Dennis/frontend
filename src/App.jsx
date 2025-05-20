import './App.css'
import { Route, Routes } from 'react-router-dom'
import CenterLayout from './assets/layouts/CenterLayout'
import PortalLayout from './assets/layouts/PortalLayout'
import Events from './assets/pages/Events'
import Login from './assets/pages/Login'
import SignUp from './assets/pages/SignUp'
import EventDetails from './assets/pages/EventDetails'
import Inbox from './assets/pages/Inbox'


function App() {
  

  return (
    <Routes>
      <Route element={<PortalLayout />}>
        <Route path="/" element={<Events/> } />
        <Route path="/events/:id" element={<EventDetails/> } />
        <Route path="/inbox" element={<Inbox/> } />        

      </Route>
     
      <Route element={<CenterLayout />}>
        <Route path="/login" element={<Login /> } />
        <Route path="/signup" element={<SignUp /> } />
      </Route>
    </Routes>

  )
}

export default App
