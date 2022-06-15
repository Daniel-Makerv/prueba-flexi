import React,{useEffect, useState} from 'react';
import { Form, Button } from 'react-bootstrap';
import {formEmployee} from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
const ControlledForm = ()=> {
    const data = useSelector(state => state.dataForm);
    const [form, setForm] = useState({
        nomina: data.nomina,
        name:data.name,
        job:data.job,
        companyEmail:data.companyEmail,
        personalEmail:data.personalEmail,
        companyPhone:data.companyPhone,
        personalPhone:data.personalPhone,
        location:data.location,
        extension:data.extension,
        status:data.status,
        retired:data.retired === ''?false:true,
    })
    const [edit, setEdit] = useState({
        name:false,
        job:false,
        companyEmail:false,
        personalEmail:false,
        companyPhone:false,
        personalPhone:false,
        location:false,
        extension:false,
        status:false,
        retired:false
    })
    const dispatch = useDispatch();
    const handleSubmit = (e)=>{
        let prop = e.target.id;
        if(prop === 'name'){
            setForm({...form, name:e.target.value})
         form.name = e.target.value;
        }
        else if(prop === 'job'){
            setForm({...form, job:e.target.value})
            form.job = e.target.value;
        }
        else if(prop === 'companyEmail'){
            setForm({...form, companyEmail:e.target.value})
            form.companyEmail = e.target.value;
        }
        else if(prop === 'personalEmail'){
            setForm({...form, personalEmail:e.target.value})
            form.personalEmail = e.target.value;
        }
        else if(prop === 'companyPhone'){
            setForm({...form, companyPhone:e.target.value})
            form.companyPhone = e.target.value;
        }
        else if(prop === 'personalPhone'){
            setForm({...form, personalPhone:e.target.value})
            form.personalPhone = e.target.value;
        }
        else if(prop === 'location'){
            setForm({...form, location:e.target.value})
            form.location = e.target.value;
            
        }
        else if(prop === 'extension'){
            setForm({...form, extension:e.target.value})
            form.extension = e.target.value;
        }
        else if(prop === 'status'){
            setForm({...form, status:e.target.value})
            form.status = e.target.value;
        }
        else if(prop === 'retired'){
          if(form.retired){
            setForm({...form, retired:false})
            form.retired.checked = false;
          }else{
            setForm({...form, retired:true})
            form.retired.checked = true;
          }
         
        
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
          <label for="inputPassword4" class="form-label">Puesto</label>
          <input type="text" class="form-control" id="job" value = {form.job}/>
        </div>
        <div class="col-6">
          <label for="inputAddress" class="form-label">Correo</label>
          <input type="email" class="form-control" id="companyEmail" placeholder="flexy@example.com" value = {form.companyEmail}/>
        </div>
        <div class="col-6">
          <label for="inputAddress2" class="form-label">Correo personal</label>
          <input type="email" class="form-control" id="personalEmail" placeholder="example@example.com" value = {form.personalEmail}/>
        </div>
        <div class="col-md-6">
          <label for="inputCity" class="form-label">Telefono</label>
          <input type="text" class="form-control" id="companyPhone" value = {form.companyPhone}/>
        </div>
        <div class="col-md-6">
          <label for="inputCity" class="form-label">Telefono personal</label>
          <input type="text" class="form-control" id="personalPhone" value = {form.personalPhone}/>
        </div>
        <div class="col-md-7">
          <label for="inputCity" class="form-label">Ubicación</label>
          <input type="text" class="form-control" id="location" value = {form.location}/>
        </div>
        <div class="col-md-3">
          <label for="inputCity" class="form-label">Extensión</label>
          <input type="number" class="form-control" id="extension" value = {form.extension}/>
        </div>
        <div class="col-md-4">
          <label for="inputState" class="form-label">Estatus</label>
          <select id="status" class="form-select">
            <option selected ={form.status?true:null}>Activo</option>
            <option selected = {form.status?null:true}>Inactivo</option>
          </select>
        </div>
        <div class="col-6 mt-4">
          <div class="form-check">
            <input checked = {form.retired} class="form-check-input" type="checkbox" id="retired"/>
            <label class="form-check-label" for="gridCheck">
              Retirado
            </label>
          </div>
        </div>
      </form>
    );
  }
  export default ControlledForm;