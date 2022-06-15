import {React, useEffect, useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Pagination from '../Pagination'
import Search from '../SearchBar';
import { useDispatch, useSelector } from 'react-redux';
import ControlledForm from '../ControlledForm/CreateLearning';
import ControlledFormB from '../ControlledForm/Learning';
import {getLearning, updateLearning, deleteLearning, createLearning} from '../../actions'
import Modal from '../Modal/Empty';
const Learning = ()=>{
    const dispatch = useDispatch();
    const learning = useSelector(state=>state.learning);
    useEffect(()=>{
        if(!learning.length>0){

        dispatch(getLearning())
        }
    },[])
    return(
        <Container>
        <Row style = {{alignItems:"center"}}>
        <Col md={9}>
        <Search/>
        </Col>
        <Col md={3} style = {{marginTop:"25px"}}>
        <Modal title = {"Crear Curso"} titleB = {"Nuevo Curso"} action = {{create:createLearning,refresh:getLearning}}>
        <ControlledForm data = {learning}/>
        </Modal>
        </Col>
        </Row>
  <Row style = {{marginTop:"5px"}}>
    <Col>
    <Pagination title={"E-Learning"} headers = {['Acciones','Nombre','Organización','Fecha','URL','Image']}
     data={learning} action = {{update:updateLearning,delete:deleteLearning, refresh:getLearning}}>
    <ControlledFormB/>
    </Pagination>        
   </Col>
  </Row>
</Container>
    );
}
export default Learning;
