import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Login from './components/Login';
import SideBar from './components/SideBar';
import Chat from './components/Chat';
function App() {
  return (
    <React.Fragment>
      
    <Router>
    <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path = "/users" element={<SideBar/>}/>
          <Route path = "/news" element={<SideBar/>}/>
          <Route path = "/events" element={<SideBar/>}/>
          <Route path = "/chat" element={
          [<SideBar/>,
          <Chat/>]
          }/>
          <Route path = "/learning" element={<SideBar/>}/>
          <Route path = "/services" element={<SideBar/>}/>
          <Route path = "/improves" element={<SideBar/>}/>
          <Route path = "/reports" element={<SideBar/>}/>
    </Routes>
    </Router>
    </React.Fragment>
  );
}

export default App;
