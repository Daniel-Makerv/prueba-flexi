import React,{useEffect, useState} from 'react';
import { Form, Button } from 'react-bootstrap';
import {formEmployee} from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
const Delete = ()=> {
    const [form, setForm] = useState({
      nameCourse:'',
      nameOrganization:'',
      date:'',
      url:'',
      imagePreview:'',
    })
    
    const dispatch = useDispatch();
    const handleSubmit = (e)=>{
        let prop = e.target.id;
        if(prop === 'nameCourse'){
            setForm({...form, courseName:e.target.value})
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
            setForm({...form, imagePreview:e.target.value})
            form.imagePreview = e.target.value;
        }
        
        dispatch(formEmployee(form))
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
          <input type="text" class="form-control" id="NameOrganization" value = {form.nameOrganization}/>
        </div>
        <div class="col-6">
          <label for="inputAddress" class="form-label">Fecha</label>
          <input type="date" class="form-control" id="date" value = {form.date}/>
        </div>
        <div class="col-md-6">
          <label for="inputCity" class="form-label">Imagen</label>
          <input type="file" class="form-control" id="imagePreview" value = {form.imagePreview}/>
        </div>
        <div class="col-12">
          <label for="inputAddress2" class="form-label">Url</label>
          <input type="text" class="form-control" id="url" value = {form.url}/>
        </div>
      </form>
    );
  }
  export default Delete;