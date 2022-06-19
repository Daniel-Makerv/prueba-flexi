import React,{useState,useEffect} from 'react';
import {useSelector} from 'react-redux';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import AuthRouteComponent from "./authroute.js";
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
const authUser = useSelector(state=>state.authUser)
const [auth,setAuth] = useState(authUser)
useEffect(()=>{
console.log(auth)
console.log(authUser)
!auth&&setAuth(authUser)
},[authUser,auth])
  return (
    <React.Fragment>      
    <Router>
    <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path = "/home" element = {auth?<SideBar/>:<Navigate to = '/login'/>}/>
	  <Route path = "/users" element = {auth?[<SideBar/>,<Users/>]:<Navigate to = '/login'/>}/>
          <Route path = "/news" element = {auth?[<SideBar/>,<News/>]:<Navigate to = '/login'/>}/>
          <Route path = "/events" element = {auth?[<SideBar/>,<Events/>]:<Navigate to = '/login'/>}/>
          <Route path = "/chat" element = {auth?[<SideBar/>,<Chat/>]:<Navigate to = '/login'/>}/>
          <Route path = "/learning" element = {auth?[<SideBar/>,<Learning/>]:<Navigate to = '/login'/>}/>
          <Route path = "/services" element = {auth?[<SideBar/>,<Service/>]:<Navigate to = '/login'/>}/>
          <Route path = "/feedback" element = {auth?[<SideBar/>,<Feedback/>]:<Navigate to = '/login'/>}/>
          <Route path = "/reports" element={auth?<SideBar/>:<Navigate to = '/login'/>}/>
    </Routes>
    </Router>
    </React.Fragment>
  );
}

export default App;
