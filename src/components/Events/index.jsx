import {React, useEffect, useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Pagination from '../Pagination'
import Search from '../SearchBar';
import { useDispatch, useSelector } from 'react-redux';
import ControlledForm from '../ControlledForm/CreateEvent';
import ControlledFormB from '../ControlledForm/Event';
import {getEvents, updateEvent, deleteEvent, createEvent, getMultimedia,
createMultimedia,deleteMultimedia} from '../../actions'
import Modal from '../Modal/Empty';
const Event = ()=>{
    const dispatch = useDispatch();
    const events = useSelector(state=>state.events);
    useEffect(()=>{
        if(!events.length>0){
        dispatch(getEvents())
        }
    },[])
    return(
        <Container>
        <Row style = {{alignItems:"center"}}>
        <Col md={9}>
        <Search/>
        </Col>
        <Col md={3} style = {{marginTop:"25px"}}>
        <Modal title = {"Crear evento"} titleB = {"Nuevo evento"} action = {{create:createEvent,refresh:getEvents}}>
        <ControlledForm data = {events}/>
        </Modal>
        </Col>
        </Row>
  <Row style = {{marginTop:"5px"}}>
    <Col>
    <Pagination title={"E-Event"} headers = {['Acciones','Nombre','Descripcion','Lugar','Fecha','Reservaciones','Imagen']}
     data={events} action = {{update:updateEvent,delete:deleteEvent, refresh:getEvents,
        createM:createMultimedia,deleteM:deleteMultimedia, refreshM:getMultimedia}}>
    <ControlledFormB/>
    </Pagination>        
   </Col>
  </Row>
</Container>
    );
}
export default Event;
