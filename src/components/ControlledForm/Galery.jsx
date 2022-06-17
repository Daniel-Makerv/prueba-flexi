import React,{useEffect, useState} from 'react';
import { Form, Button } from 'react-bootstrap';
import {formEmployee} from '../../actions';
import {getMultimedia,
createMultimedia,deleteMultimedia} from '../../actions'
import { useDispatch, useSelector } from 'react-redux';
import Filter from '../Filter';
import { Modal } from 'react-bootstrap';
import axios from 'axios';
import style from './styles.module.css'
const Event = ()=> {
    const data = useSelector(state => state.dataForm);
    const multimedia = useSelector(state => state.multimedia);
    const [img,setImg] = useState(null)
    const [form, setForm] = useState({
      id:data.id,
      relationId:data.relationId,
      name:data.name,
        body:data.body,
        date:data.date,
        place:data.place,
        previewImage:'',
        filters:JSON.parse(data.filters)
        
    })
    const [dialog, setDialog] = useState(false);
    const dispatch = useDispatch();
    const handleSubmit = (e,filter)=>{
        let prop = e.target.id;
        if(prop === 'name'){
            setForm({...form, name:e.target.value})
         form.name = e.target.value;
        }
        else if(prop === 'body'){
            setForm({...form, body:e.target.value})
            form.body = e.target.value;
        }
        else if(prop === 'date'){
            setForm({...form, date:e.target.value})
            form.date = e.target.value;
        }
        else if(prop === 'place'){
            setForm({...form, place:e.target.value})
            form.place = e.target.value;
        }
        else if(prop === 'previewImage'){
          let formI = new FormData();
          formI.append('file',e.target.files[0])
          axios.post(`https://flexi.brounieapps.com/uploadd`,formI)
          .then(res=>{
            console.log(res.data.name)
              setForm({...form, previewImage:res.data.name})
              form.previewImage = res.data.name;
           
           
          });
        }
        if(filter){
          let aux = {...form};
          let exist = aux.filters[filter.category].filter(item=>item===filter.value)
          if(exist.length>0){
            console.log("entro aqui antes")
            console.log(exist)
           if(!filter.status){
             console.log("entro aqui")
            let removeResult = aux.filters[filter.category].filter(item=>item!==filter.value)
            console.log(aux.filters[filter.category])
            console.log("que ha pasado")
            aux.filters[filter.category]= removeResult
          }
          }else{
            aux.filters[filter.category]= aux.filters[filter.category].concat([filter.value])
          }
          console.log(filter)
          console.log("Termina en eso")
         
          console.log(aux)
          setForm(aux)
        }
        
        dispatch(formEmployee(form))
    }
    const handleOnClick = (e)=>{
      console.log(e.target.id)
      console.log("perlita")
      setImg(e.target.id)
      setDialog(true)
      dialog=true
     
    }
    const handleDialogDelete = (e)=>{
      dispatch(deleteMultimedia({id:data.id,relationId:img}))
      dispatch(getMultimedia(data.id))
      setDialog(false)
      dialog=false
    }
    const handleDialogClose = (e)=>{
      setDialog(false)
      dialog=false
    }
    useEffect(()=>{
        if(!multimedia.lenght>0)
       dispatch(getMultimedia(data.id))
    },[multimedia])
    return (
      <div className={style.container}>
        {
         dialog&&<Modal show animation={false}>
         <Modal.Header closeButton>
           <Modal.Title>Eliminar multimedia</Modal.Title>
         </Modal.Header>
         <Modal.Body>Esta seguro que desea eliminar este archivo?</Modal.Body>
         <Modal.Footer>
           <Button variant="secondary" onClick={e=>handleDialogClose()}>
             Cancelar
           </Button>
           <Button variant="danger" onClick={e=>handleDialogDelete(e)}>
             Eliminar
           </Button>
         </Modal.Footer>
       </Modal>
         
      }
      {
        
        multimedia.length>0&&multimedia.map(item=>
          item.type === 'img'?<img style = {{maxHeight:"300px"}} id = {item.relationId} key = {item.relationId} onDoubleClick={e=>handleOnClick(e)} src={item.url}/>
          :<video id = {item.relationId} key = {item.relationId} onDoubleClick={e=>handleOnClick(e)} src={item.url} style={{width:"250px",height:"200px"}}
          controls/>
          )
      }
    </div>
    );
  }
  export default Event;