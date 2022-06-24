import React,{useState} from 'react';
import { Modal, Button, Container, Row, Col , Alert} from 'react-bootstrap';
import {updateEmployee,formEmployee, dataForm} from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
const Moda = ({title, children, titleB, action}) => {
    const [show, setShow] = useState(false);
    const [alert,setAlert] = useState(false)
    const dispatch = useDispatch();
    const form = useSelector(state => state.formEmployee)
    const handleClose = () => {
        dispatch(formEmployee(null))
        setShow(false)
    };
    const handleSubmit = () => {
      console.log("entre al correcto")
      console.log(form)
      console.log("gato")
      let isEmpty=false;
      if(form){
      Object.keys(form).forEach(prop=>{
        if(form[prop]=='') isEmpty=true
        else if(prop!='filters'&&prop!='userLikes'&&prop!='userDislikes')
        isEmpty=false
        else if(form.date==='') isEmpty=true
      })
      if(!isEmpty){
      form&&dispatch(action.create(form))
      setTimeout(function(){
        form&&dispatch(action.refresh())
        dispatch(formEmployee(null))
        setAlert(false)
      setShow(false)
         }, 1000);
      }else{
        
       setAlert(true)
      }
    }
  };
    const handleShow = () => {
        setShow(true)
    };
  
    return (
      <>
        <Button variant="danger" onClick={handleShow}>
          {titleB}
        </Button>
  
        <Modal  size="lg" show={show} scrollable={true} onHide={handleClose} backdrop = 'static'>
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="show-grid">
        <Container>
          {alert&&<Alert key={'warning'} variant={'warning'}>
      Los campos no pueden estar vacios!
    </Alert>}
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
              Guardar
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  export default Moda;