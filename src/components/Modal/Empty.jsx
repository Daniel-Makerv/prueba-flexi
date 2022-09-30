import React,{useState} from 'react';
import { Modal, Button, Container, Row, Col , Alert} from 'react-bootstrap';
import {updateEmployee,formEmployee, dataForm} from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
const Moda = ({title, children, titleB, action ,isC = false, cb = (name)=>{console.log(name)} , name = "cb"}) => {
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
    const handleShow = (e) => {
      cb(e)
        setShow(true)
    };
  
    return (
      <>
        <Button id = {name} variant="danger" onClick={e=>handleShow(e)}>
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
           { !isC?<Button variant="danger" onClick={handleSubmit}>
              Enviar
            </Button>:null}
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  export default Moda;