import React,{useEffect, useState} from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import {formEmployee, uploadFile} from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import Filter from '../Filter';
const CreateLearning = ({data})=> {
    const [form, setForm] = useState({
      nameCourse:'',
      nameOrganization:'',
      date:'',
      url:'',
      imagePreview:'',
      filters:{planta:[],segmentoPoblacion:[],razonSocial:[],puesto:[]}
    })
    
    const dispatch = useDispatch();
    const handleSubmit = (e,filter,all)=>{
      e.preventDefault()
        let prop = e.target.id;
        if(prop === 'nameCourse'){
            setForm({...form, nameCourse:e.target.value})
         form.nameCourse = e.target.value;
        }
        else if(prop === 'nameOrganization'){
            setForm({...form, nameOrganization:e.target.value})
            form.nameOrganization = e.target.value;
        }
        else if(prop === 'date'){
            setForm({...form, date:e.target.value})
            form.date = e.target.value;
        }
        else if(prop === 'url'){
            setForm({...form, url:e.target.value})
            form.url = e.target.value;
        }
        else if(prop === 'imagePreview'){
           let formI = new FormData();
            formI.append('file',e.target.files[0])
            axios.post(`https://flexi.brounieapps.com/uploadd`,formI)
            .then(res=>{
              setForm({...form, imagePreview:res.data.name})
              form.imagePreview = res.data.name;
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
        if(all){
          let aux = {...form};
          aux.filters=all
          console.log("soy aux")
          console.log(aux)
          setForm(aux)
          setTimeout(()=>{
            dispatch(formEmployee(form))
          },1600)
         
        }
        setTimeout(()=>{
          dispatch(formEmployee(form))
        },1000)
       
    }
    useEffect(()=>{
       
    },[])
    return (
        <form onChange = {e=>handleSubmit(e)} class="row">
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">Nombre</label>
          <input type="text" class="form-control" id="nameCourse" value = {form.nameCourse}/>
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">Organización</label>
          <input type="text" class="form-control" id="nameOrganization" value = {form.nameOrganization}/>
        </div>
        <div class="col-6">
          <label for="inputAddress" class="form-label">Fecha</label>
          <input type="date" class="form-control" id="date" value = {form.date}/>
        </div>
        <div class="col-md-6">
          <label for="inputCity" class="form-label">Imagen</label>
          <input type="file" class="form-control" id='imagePreview'/>
        </div>
        <div class="col-12">
          <label for="inputAddress2" class="form-label">Url</label>
          <input type="text" class="form-control" id="url" value = {form.url}/>
        </div>
        <div class="col-12">
          <Filter data = {data} headers = {['Planta','Segmento población','Razón social','Puesto']} handle = {handleSubmit}/>
        </div>
      </form>
    );
  }
  export default CreateLearning;