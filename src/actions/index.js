import {GET_MESSAGES,SEND_MESSAGE, GET_EMPLOYEE,GET_PENDING,REMOVE_MESSAGES} from './constants';
import io from 'socket.io-client';
const axios = require('axios').default;
const URL = "http://localhost:3001/";


export function getMessages(id){
   
    return function(dispatch){
        axios.get(`${URL}chat/${id}`)
        .then(res=>{
            dispatch({type: GET_MESSAGES,payload:res.data})
        });
    }
    
}
export function getPending(){
   
    return function(dispatch){
        axios.get(`${URL}chat`)
        .then(res=>{
            dispatch({type: GET_PENDING,payload:res.data})
        });
    }
    
}
export function getEmployee(id){
   
    return function(dispatch){
        axios.get(`${URL}directory/${id}`)
        .then(res=>{
            dispatch({type: GET_EMPLOYEE,payload:res.data})
        });
    }
    
}
export function sendMessage(payload){
    return function(dispatch){
        axios.post(`${URL}chat`,{directoryId:payload.id,content:payload.content,rol:"admin"})
        .then(res=>{
            dispatch({type: SEND_MESSAGE,payload:res.data})
        });
    }
}
export function removeMessages(id){
    return function(dispatch){
        console.log("id:"+id)
        axios.post(`${URL}chat/remove`,{id:id})
        .then(res=>{
            dispatch({type: REMOVE_MESSAGES,payload:res.data})
        });
    }
}