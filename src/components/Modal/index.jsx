import React,{useState} from 'react';
import { Modal, Button, Container, Row, Col } from 'react-bootstrap';
import {updateEmployee,formEmployee, dataForm} from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
const Moda = ({title,item, children, action,titleB})=> {
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();
    const form = useSelector(state => state.formEmployee)
const handle = () => {

dispatch(formEmployee(null))
setShow(false)
}    
const handleClose = () => {
        form&&dispatch(action.update(form))
        setTimeout(function(){
          form&&dispatch(action.refresh())
          dispatch(formEmployee(null))
        setShow(false)
           }, 1200);
    };
    const handleShow = () => {
        dispatch(dataForm(item))
        setShow(true)
    };
  
    return (
      <>
        <Button  variant="primary" onClick={handleShow} style = {{marginRight:"10px"}} >
          <AiOutlineEdit/>
        </Button>
  
        <Modal  size="lg" show={show} scrollable={true} onHide={handle} backdrop = 'static'>
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
            <Button variant="secondary" onClick={handle}>
              Cerrar
            </Button>
            <Button variant="danger" onClick={handleClose}>
            {titleB==='Eliminar'? "Eliminar": "Enviar"}
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  export default Moda;
