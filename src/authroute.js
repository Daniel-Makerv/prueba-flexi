import React,{useState} from 'react';
import {Route} from 'react-router-dom';
import {Navigate} from 'react-router-dom'
const AuthProvider = ({sideBar:SideBar,...rest}) =>{
const [auth, setAuth] = useState(false);
return(
<Route {...rest}
element = {auth?<SideBar/>:<Navigate to = '/login'/>}
/>
)
}
export default AuthProvider;
