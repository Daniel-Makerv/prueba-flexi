import {React, useEffect, useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Pagination from '../Pagination'
import Search from '../SearchBar';
import { useDispatch, useSelector } from 'react-redux';
import ControlledForm from '../ControlledForm/CreateFeedback';
import {getFeedbacks, getLearning, updateFeedback, deleteFeedback} from '../../actions'
import Modal from '../Modal/Empty';
const Feedback = ()=>{
    const dispatch = useDispatch();
    const feedback = useSelector(state=>state.feedbacks);
    useEffect(()=>{
        if(!feedback.length>0){
        dispatch(getFeedbacks())
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
    <Pagination title={"Feedback"} headers = {['Acciones','Usuario','Mejora','Tipo']}
     data={feedback}  action = {{update:updateFeedback,delete:deleteFeedback, refresh:getFeedbacks}} titleB = {"Eliminar"}>
    <h1>¿Estás seguro(a)?</h1>
    <p>Los datos eliminados no se podrán recuperar.</p>
    </Pagination>        
   </Col>
  </Row>
</Container>
    );
}
export default Feedback;
