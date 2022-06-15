import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Login from './components/Login';
import SideBar from './components/SideBar';
import Chat from './components/Chat';
import Users from './components/Users';
import Learning from './components/Learning';
import Feedback from './components/Feedback';
import Service from './components/Services';
import News from './components/News';
import Events from './components/Events';
function App() {
  return (
    <React.Fragment>
      
    <Router>
    <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path = "/users" element={[<SideBar/>,<Users/>]}/>
          <Route path = "/news" element={
          [<SideBar/>,
          <News/>]
          }/>
          <Route path = "/events" element={
          [<SideBar/>,
          <Events/>]
          }/>
          <Route path = "/chat" element={
          [<SideBar/>,
          <Chat/>]
          }/>
          <Route path = "/learning" element={
          [<SideBar/>,
          <Learning/>]
          }/>
          <Route path = "/services" element={
          [<SideBar/>,
          <Service/>]
          }/>
          <Route path = "/feedback" element={
          [<SideBar/>,
          <Feedback/>]
          }/>
          <Route path = "/reports" element={<SideBar/>}/>
    </Routes>
    </Router>
    </React.Fragment>
  );
}

export default App;
