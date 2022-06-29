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
import Reports from './components/Reports';
function App() {
const authUser = useSelector(state=>state.authUser)
const [auth,setAuth] = useState(authUser)
const [session, setSession] = useState(window.localStorage.getItem('isAuth'))
useEffect(()=>{
console.log(auth)
console.log(authUser)
!auth&&setAuth(authUser)

},[authUser,auth])
  return (
    <React.Fragment>      
    <Router>
    <Routes>
    <Route path="/" element={<Login/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path = "/home" element = {auth||session?<SideBar/>:<Navigate to = '/login'/>}/>
	  <Route path = "/users" element = {auth||session?[<SideBar/>,<Users/>]:<Navigate to = '/login'/>}/>
          <Route path = "/news" element = {auth||session?[<SideBar/>,<News/>]:<Navigate to = '/login'/>}/>
          <Route path = "/events" element = {auth||session?[<SideBar/>,<Events/>]:<Navigate to = '/login'/>}/>
          <Route path = "/chat" element = {auth||session?[<SideBar/>,<Chat/>]:<Navigate to = '/login'/>}/>
          <Route path = "/learning" element = {auth||session?[<SideBar/>,<Learning/>]:<Navigate to = '/login'/>}/>
          <Route path = "/services" element = {auth||session?[<SideBar/>,<Service/>]:<Navigate to = '/login'/>}/>
          <Route path = "/feedback" element = {auth||session?[<SideBar/>,<Feedback/>]:<Navigate to = '/login'/>}/>
          <Route path = "/reports" element = {auth||session?[<SideBar/>,<Reports/>]:<Navigate to = '/login'/>}/>
    </Routes>
    </Router>
    </React.Fragment>
  );
}

export default App;
