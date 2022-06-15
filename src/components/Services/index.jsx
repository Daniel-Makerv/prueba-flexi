import {React, useEffect, useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Pagination from '../Pagination'
import Search from '../SearchBar';
import { useDispatch, useSelector } from 'react-redux';
import {getServices, deleteService} from '../../actions'
const Service = ()=>{
    const dispatch = useDispatch();
    const services = useSelector(state=>state.services);
    useEffect(()=>{
        if(!services.length>0){
        dispatch(getServices())
        }
    },[])
    return(
        <Container>
        <Row style = {{alignItems:"center"}}>
        <Col md={12}>
        <Search/>
        </Col>
        </Row>
  <Row style = {{marginTop:"5px"}}>
    <Col>
    <Pagination title={"Servicios"} headers = {['Acciones','Nomina','Nombre','Aula','Evento','Lugar','Fecha','Planta','Actividad']}
     data={services}  action = {{delete:deleteService, refresh:getServices}} titleB = {"Eliminar"}>
    <h1>¿Estás seguro(a)?</h1>
    <p>Los datos eliminados no se podrán recuperar.</p>
    </Pagination>        
   </Col>
  </Row>
</Container>
    );
}
export default Service;
