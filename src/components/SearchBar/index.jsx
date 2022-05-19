import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import style from './styles.module.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getEmployees} from '../../actions';
const SearchBar = ()=>{
    const [input,setInput] = useState("");
    const dispatch = useDispatch();
    const employees = useSelector(state=>state.employees)
    const handleOnClick = (e)=>{
        e.preventDefault();
        dispatch(getEmployees(null,input))
    };
    const handleOnChange = (value)=>{
        setInput(value);
        if(value === ""){
            dispatch(getEmployees())
        }else{
        dispatch(getEmployees(null,input))
        }
    };
  
    return(
        <div className = {style.search}>
            <input className = {style.input} onChange = {e=>handleOnChange(e.target.value)} value ={input} ></input>
        </div>
            
    )
}
export default SearchBar;