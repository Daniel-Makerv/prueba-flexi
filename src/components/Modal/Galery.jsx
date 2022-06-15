import React,{useState} from 'react';
import { Modal, Button, Container, Row, Col } from 'react-bootstrap';
import {updateEmployee,formEmployee, dataForm, getMultimedia} from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import axios from 'axios';
const Moda = ({title,item, children, action,titleB})=> {
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();
    const form = useSelector(state => state.formEmployee)
    const handleClose = () => {
        form&&dispatch(action.update(form))
        setTimeout(function(){
          form&&dispatch(action.refresh())
          dispatch(formEmployee(null))
        setShow(false)
           }, 1600);
    };
    const handleShow = () => {
        console.log(item)
        dispatch(dataForm(item))
        setShow(true)
    };
    const upload = async (e) => {
      let formI = new FormData();
      // Convert the FileList into an array and iterate
      Array.from(e.target.files).forEach(file => {
        formI.append('file',file)   
      });
      formI.append('id',item.id)
      await axios.post('https://flexi.brounieapps.com/events/multimedia',formI).then(res=>{
        dispatch(getMultimedia(item.id))
        // setShow(false)
        // show=false})
  })
}
    return (
      <>
        <Button variant="primary" onClick={handleShow} style = {{marginRight:"10px"}} >
          <AiOutlineEdit/>
        </Button>
  
        <Modal  size="lg" show={show} scrollable={true} onHide={handleClose} backdrop = 'static'>
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
          <label for="files" class="btn">Agregar multimedia</label>
            <input onChange = {upload} id='files' style={{visibility:'hidden'}} type ='file' multiple/>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  export default Moda;