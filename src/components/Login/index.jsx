import React,{useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Navigate, useNavigate} from 'react-router-dom';
//React components
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import {Col, Form, Button, Card} from 'react-bootstrap';
import Logo from './img/login.jpg';
import {isAuth} from '../../actions';
const axios = require('axios').default;
const Login = ()=>{
const dispatch = useDispatch();
const authUser = useSelector(state=>state.authUser)
const history = useNavigate();
const [form, setForm] = useState({email:'',password:''})
const handleSubmit = async (e)=>{
	e.preventDefault();
	dispatch(isAuth(form))
	await axios.post('https://flexi.brounieapps.com/auth',form).then(res=>
	{
	if(res.data.isAuth){
	window.localStorage.setItem('isAuth',res.data.isAuth)
	}
	console.log("soy login")
	})
	setTimeout(()=>{
	//const authUser = useSelector(state=>state.authUser)
	history('/home')
	console.log(authUser)
	},1000)
}
const handleChange = (e) =>{
e.preventDefault()
console.log("soy onchange")
e.target.id == 'email'?setForm({...form,email:e.target.value})
:setForm({...form,password:e.target.value})
}
useEffect(()=>{
authUser&&<Navigate to = '/home'/>
},[authUser])
    return(
    <Container fluid >
    <Row>
        <Col xs={12} md={5} lg={5}>
            <div  style = {{position:"relative", minHeight:"100vh", background: `url(${Logo})`, backgroundSize:"cover"}}>
          <div style = {{
    position: "absolute",
    background:"#c4262ea1",
    top: "0",
    bottom: "0",
    right: "0",
    left: "0",
}}></div>

</div>
        </Col>
        <Col xs={12} md={7} lg={7}>
        <Row className = "mt-5" style = {{justifyContent:"center"}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="178.996" height="89.5" viewBox="0 0 178.996 89.5">
  <g id="Grupo_3" data-name="Grupo 3" transform="translate(-162.177 -189.058)">
    <path id="Trazado_1" data-name="Trazado 1" d="M350.981,240.088a10.972,10.972,0,0,1,1.741-.132,2.933,2.933,0,0,1,1.947.507,1.612,1.612,0,0,1,.54,1.262,1.677,1.677,0,0,1-1.144,1.581v.028a1.6,1.6,0,0,1,.881,1.214,13,13,0,0,0,.5,1.759h-1.187a9.484,9.484,0,0,1-.423-1.487c-.177-.823-.474-1.085-1.126-1.1h-.584v2.589h-1.139Zm1.139,2.789h.682c.777,0,1.262-.413,1.262-1.041,0-.694-.485-1.012-1.234-1.012a3.292,3.292,0,0,0-.71.058Zm-4.764.253a5.589,5.589,0,1,0,5.6-5.587A5.6,5.6,0,0,0,347.356,243.13Zm1.064,0a4.528,4.528,0,1,1,4.532,4.532A4.534,4.534,0,0,1,348.419,243.13Zm-1.306-54.064a6.418,6.418,0,0,0-6.451,6.013,5.83,5.83,0,0,0,6.136,5.859,6.417,6.417,0,0,0,6.439-6.015A5.823,5.823,0,0,0,347.114,189.066ZM221.66,195.3c1.89-.057,5,.049,5,.049s1.529-6.167,1.529-6.252c-1.127-.006-6.426-.069-7.5-.028-9.423,0-17.066,5.725-19.21,14.5-.017.016-1.451,5.387-1.419,5.363-.018.024-8.235,0-8.235,0l-1.526,6.23h8.206s-5.591,23.337-7.88,33.562h10.3l8.162-33.562h12.588l1.5-6.23H210.627l1.9-7.2C213.671,197.3,218.423,195.365,221.66,195.3Zm13.808,43.258,12.08-49.5H237.239l-12.184,49.569a29.207,29.207,0,0,0-.776,4.944,10.741,10.741,0,0,0,.7,5.16h12.111a6.217,6.217,0,0,1-2.323-4.339A20,20,0,0,1,235.467,238.563Zm105.916,0,7.219-29.625H338.259l-7.291,29.689a29.908,29.908,0,0,0-.779,4.944,10.767,10.767,0,0,0,.706,5.16h12.11a6.2,6.2,0,0,1-2.324-4.339A19.851,19.851,0,0,1,341.383,238.563Zm-22-29.625-10.347,13.005-7.817-13.005H289.5l11.529,19.181-16.417,20.611h8.254l11.681-14.758,8.857,14.745h11.7l-12.528-20.866,14.927-18.913Zm-48.416-1.925c-8.164.023-20.168,5.689-24.153,18.914-3.225,10.724,1.7,24.095,19,24.742a42.931,42.931,0,0,0,15.494-2.64c-.088.1-1.231-5.789-1.206-5.789a36.94,36.94,0,0,1-13.888,1.9c-5.924-1.074-10.953-5.585-9.843-13.386.032.083,9.153,1.458,15.684-.348,13.444-4.039,14.561-12.33,12.381-16.743C281.266,207.239,273.536,207,270.963,207.013Zm-1.942,17.812a42.335,42.335,0,0,1-10.91.33,19.24,19.24,0,0,1,6.6-10.234c3.523-2.426,7.415-2.406,9.986-.289C276.477,216.472,278.764,223.188,269.021,224.825Z" transform="translate(-17.361)" fill="#c4262e"/>
    <g id="Grupo_2" data-name="Grupo 2" transform="translate(162.177 258.668)">
      <g id="Grupo_1" data-name="Grupo 1" transform="translate(0 0)">
        <path id="Trazado_2" data-name="Trazado 2" d="M162.177,371.9c27.876,20.873,56.646,21.889,88.922,15.359,30.623-6.2,60.742-13.266,90.051,2.59-27.884-20.868-56.656-21.893-88.931-15.36C221.6,380.687,191.466,387.762,162.177,371.9Z" transform="translate(-162.177 -370.928)" fill="#c4262e"/>
      </g>
    </g>
  </g>
</svg>
<h2 className = "mt-5" style = {{textAlign:"center", marginTop:"5%"}}>Panel Administrador</h2>
<Form onSubmit = {e=>handleSubmit(e)}onChange ={e=>handleChange(e)}  className = "mt-5" style ={{maxWidth:"40%", display: "flex", alignItems:"center",flexDirection:"column", 
backgroundColor:"#efefef", minHeight:"239px", justifyContent:"space-between"}}>
    
  <Form.Group className="mb-3 mt-3" style = {{width: "90%",marginLeft:"25px"}}>
  <h6>Inicia sesión</h6>
    <Form.Control type="text" id = 'email' value = {form.email} placeholder="Usuario" style = {{width: "90%",background:"white", height:"36px"}}/>
  </Form.Group>

  <Form.Group className="mb-3" style = {{width: "90%", marginLeft:"25px"}}>
    <Form.Control type="password" id = 'password' placeholder="Contraseña" value = {form.password} style = {{width: "90%", background:"white !important", height:"36px"}}/>
  </Form.Group>
  <Button style ={{backgroundColor:"red", width:"60%", marginBottom:"10px", height:"36px"}} type="submit">
    Iniciar sesión
  </Button>
</Form>
</Row>
        </Col>
    </Row>
    </Container>
    )
}
export default Login;
