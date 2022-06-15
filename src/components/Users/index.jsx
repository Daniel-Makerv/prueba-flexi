import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getEmployees, updateEmployee, deleteEmployee} from '../../actions';
import style from './styles.module.css'
import SearchBar from '../SearchBar'
import Pagination from '../Pagination'
import ControlledForm from '../ControlledForm'
const Users = ()=>{
    const dispatch = useDispatch();
    const employees = useSelector(state=>state.employees)
    useEffect(()=>{
        if(!employees.length>0){
        dispatch(getEmployees())
        }
    },[])
    return(
    <div className={style.scroll} style = {{width: "90%", maxHeight:"100vh !important", minHeight:"100vh !important"}}>
            <SearchBar/>
            
<Pagination title={"Empleados"} headers = {['Acciones','Nomina','Puesto','Nombre','Ubicación','Correo','Correo Personal','Telefono',
        'Telefono Personal','Extensión','Estatus','Retirado','Imagen','Razon social','Segmento poblacion','Planta']} data={employees} action = {{update:updateEmployee,delete:deleteEmployee, refresh:getEmployees}} titleB = {'Editar'}>
            <ControlledForm/>
</Pagination> 
    </div>
    );
}

export default Users;