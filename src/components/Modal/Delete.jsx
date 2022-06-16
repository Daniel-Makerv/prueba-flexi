import React,{useState} from 'react';
import { Modal, Button, Container, Row, Col } from 'react-bootstrap';
import {updateEmployee,formEmployee, dataForm} from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
const Moda = ({title,item, children, action,titleB})=> {
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();
    const form = useSelector(state => state.formEmployee)
    const handleClose = () => {
          dispatch(formEmployee(null))
        setShow(false)
     
    };
    const handleSubmit = () => {
      dispatch(action.delete(item))
      //setTimeout(function(){
        dispatch(action.refresh())
        dispatch(formEmployee(null))
      setShow(false)
         //}, 1600);
        
  };
    const handleShow = () => {
        console.log(item)
        dispatch(dataForm(item))
        setShow(true)
    };
  
    return (
      <>
        <Button variant="danger" onClick={handleShow}>
        <AiOutlineDelete/>
        </Button>
        <Modal  size="lg"  show={show} scrollable={true} onHide={handleClose} backdrop = 'static'>
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="show-grid">
        <Container>
          <Row>
            <Col xs={12} md={12}>
            {children}
            </Col>
          </Row>
          </Container>
        </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
            <Button variant="danger" onClick={handleSubmit}>
              Eliminar
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  export default Moda;