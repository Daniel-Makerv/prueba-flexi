import React,{useEffect, useState} from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import {formEmployee, uploadFile} from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import Filter from '../Filter';
const CreateEvent = ({data})=> {
    const [form, setForm] = useState({
      name:'',
      body:'',
      date:'',
      place:'',
      previewImage:'',
      filters:{planta:[],segmentoPoblacion:[],razonSocial:[]}
    })
    
    const dispatch = useDispatch();
    const handleSubmit = (e,filter)=>{
      e.preventDefault()
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
              setForm({...form, previewImage:res.data.name})
              form.previewImage = res.data.name;
            });
        }
         if(filter){
          let aux = {...form};
          let exist = aux.filters[filter.category].filter(item=>item===filter.value)
          if(exist.length>0){
            
           if(!filter.status){
             console.log("entro aqui")
            let removeResult = aux.filters[filter.category].filter(item=>item!==filter.value)
            
            aux.filters[filter.category]= removeResult
          }
          }else{
            aux.filters[filter.category]= aux.filters[filter.category].concat([filter.value])
          }
          setForm(aux)
        }
        
        dispatch(formEmployee(form))
    }
    useEffect(()=>{
       
    },[])
    return (
        <form onChange = {e=>handleSubmit(e)} class="row">
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">Nombre</label>
          <input type="text" class="form-control" id="name" value = {form.name}/>
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">Descripcion</label>
          <input type="text" class="form-control" id="body" value = {form.body}/>
        </div>
        <div class="col-6">
          <label for="inputAddress" class="form-label">Fecha</label>
          <input type="date" class="form-control" id="date" value = {form.date}/>
        </div>
        <div class="col-md-6">
          <label for="inputCity" class="form-label">Imagen</label>
          <input type="file" class="form-control" id='previewImage'/>
        </div>
        <div class="col-12">
          <label for="inputAddress2" class="form-label">Lugar</label>
          <input type="text" class="form-control" id="place" value = {form.place}/>
        </div>
        <div class="col-12">
          <Filter data = {data} headers = {['Planta','Segmento población','Razón social']} handle = {handleSubmit}/>
        </div>
      </form>
    );
  }
  export default CreateEvent;