import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getEmployees} from '../../actions';
import style from './styles.module.css'
import SearchBar from '../SearchBar'
import Pagination from '../Pagination'
const Users = ()=>{
    const dispatch = useDispatch();
    const employees = useSelector(state=>state.employees)
    useEffect(()=>{
        if(!employees.length>0){
        console.log("soy yo")
        dispatch(getEmployees())
        }
    },[])
    return(
    <div className={style.scroll} style = {{width: "90%", marginLeft:"10px"}}>
            <SearchBar/>
            
<Pagination title={"Empleados"} data={employees} getEmployees = {getEmployees}/> 
    </div>
    );
}

export default Users;