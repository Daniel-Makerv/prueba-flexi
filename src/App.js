import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Login from './components/Login';
import SideBar from './components/SideBar';
import Chat from './components/Chat';
function App() {
  return (
    <React.Fragment>
      <SideBar/>
    <Router>
    <Routes>
          <Route exact path="/" element={<Login/>}/>
          <Route path = "/chat" element={<Chat/>}/>
    </Routes>
    </Router>
    </React.Fragment>
  );
}

export default App;
