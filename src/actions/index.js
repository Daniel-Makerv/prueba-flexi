import {GET_MESSAGES,SEND_MESSAGE, GET_EMPLOYEE,GET_PENDING,
    REMOVE_MESSAGES, GET_EMPLOYEES, UPDATE_EMPLOYEE, FORM_EMPLOYEE,GET_LEARNING, CREATE_LEARNING,
    DATA_FORM,GET_FEEDBACKS, CREATE_FEEDBACK, UPDATE_FEEDBACK, UPDATE_LEARNING,DELETE_EMPLOYEE,DELETE_FEEDBACK,
    DELETE_LEARNING,UPLOAD_FILE,GET_FILTERS, CREATE_NEW, UPDATE_NEW, DELETE_NEW, GET_NEWS,
GET_SERVICES, DELETE_SERVICE, GET_EVENTS, GET_MULTIMEDIA, UPDATE_EVENT, DELETE_EVENT, CREATE_EVENT,
CREATE_MULTIMEDIA, DELETE_MULTIMEDIA, AUTH_USER} from './constants';
const axios = require('axios').default;
const URL = "https://flexi.brounieapps.com/";
export function isAuth(payload){
    return function(dispatch){
        axios.post(`${URL}auth`,payload)
        .then(res=>{
            dispatch({type: AUTH_USER,payload:res.data})
        });
    }
}
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
export function getEmployees(skip,search,contains){
    console.log(skip)
    return function(dispatch){
        axios.get(`${URL}directory${skip?"?skip="+skip:""}${search?"?search="+search:""}${contains?"?contains="+contains:""}`)
        .then(res=>{
            dispatch({type: GET_EMPLOYEES,payload:res.data})
        });
    }
    
}
export function updateEmployee(payload){
    return function(dispatch){
        axios.post(`${URL}directory`,payload)
        .then(res=>{
            dispatch({type: UPDATE_EMPLOYEE,payload:res.data})
        });
    }
}
export function deleteEmployee(payload){
    console.log("DeleteEmployee")
    return function(dispatch){
        axios.post(`${URL}directory/delete`,payload)
        .then(res=>{
            dispatch({type: DELETE_EMPLOYEE,payload:res.data})
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
export function formEmployee(payload){
    return function(dispatch){
        dispatch({type: FORM_EMPLOYEE,payload})
    }
}
export function dataForm(payload){
    return function(dispatch){
        dispatch({type: DATA_FORM,payload})
    }
}
export function getLearning(skip,search,contains){
    return function(dispatch){
        axios.get(`${URL}learning${skip?"?skip="+skip:""}${search?"?search="+search:""}${contains?"?contains="+contains:""}`)
        .then(res=>{
            dispatch({type: GET_LEARNING,payload:res.data})
        });
    }
    
}
export function createLearning(payload){
    console.log("create learning front",payload)
    return function(dispatch){

        axios.post(`${URL}learning`,payload)
        .then(res=>{
             getLearning();
            dispatch({type: CREATE_LEARNING,payload:res.data})
            
        });
    }
    
}
export function updateLearning(payload){
    return function(dispatch){

        axios.post(`${URL}learning/update`,payload)
        .then(res=>{
            dispatch({type: UPDATE_LEARNING,payload:res.data})
        });
    }
    
}
export function getFeedbacks(skip,search,contains){
    return function(dispatch){
        axios.get(`${URL}feedback${skip?"?skip="+skip:""}${search?"?search="+search:""}${contains?"?contains="+contains:""}`)
        .then(res=>{
            
            dispatch({type: GET_FEEDBACKS,payload:res.data})
        });
    }
    
}
export function createFeedback(payload){
    return function(dispatch){

        axios.post(`${URL}feedback/`,payload)
        .then(res=>{
            dispatch({type: CREATE_FEEDBACK,payload:res.data})
        });
    }
    
}
export function updateFeedback(payload){
    return function(dispatch){

        axios.post(`${URL}feedback/update`,payload)
        .then(res=>{
            dispatch({type: UPDATE_FEEDBACK,payload:res.data})
        });
    }
    
}
export function deleteFeedback(payload){
    return function(dispatch){
        axios.post(`${URL}feedback/delete`,payload)
        .then(res=>{
            dispatch({type: DELETE_FEEDBACK,payload:res.data})
        });
    }
}
export function deleteLearning(payload){
    return function(dispatch){
        axios.post(`${URL}learning/delete`,payload)
        .then(res=>{
            dispatch({type: DELETE_LEARNING,payload:res.data})
        });
    }
}
export function uploadFile(payload){
    console.log("entre"+payload)
    return function(dispatch){
        axios.post(`${URL}upload`,payload)
        .then(res=>{
            dispatch({type: UPLOAD_FILE,payload:res.data})
        });
    }
}
export function getFilters(payload){
    return function(dispatch){
        axios.get(`${URL}filters`)
        .then(res=>{
            dispatch({type: GET_FILTERS,payload:res.data})
        });
    }
}
export function getNews(skip,search,contains){
    return function(dispatch){
        axios.get(`${URL}news${skip?"?skip="+skip:""}${search?"?search="+search:""}${contains?"?contains="+contains:""}`)
        .then(res=>{
            dispatch({type: GET_NEWS,payload:res.data})
        });
    }
    
}
export function createNew(payload){
    console.log("create learning front",payload)
    return function(dispatch){

        axios.post(`${URL}news`,payload)
        .then(res=>{
             getLearning();
            dispatch({type: CREATE_NEW,payload:res.data})
            
        });
    }
    
}
export function updateNew(payload){
    return function(dispatch){
        axios.post(`${URL}news/update`,payload)
        .then(res=>{
            dispatch({type: UPDATE_NEW,payload:res.data})
        });
    }
    
}
export function deleteNew(payload){
    return function(dispatch){
        axios.post(`${URL}news/delete`,payload)
        .then(res=>{
            dispatch({type: DELETE_NEW,payload:res.data})
        });
    }
}
export function deleteService(payload){
    return function(dispatch){
        axios.post(`${URL}services/delete`,payload)
        .then(res=>{
            dispatch({type: DELETE_SERVICE,payload:res.data})
        });
    }
}
export function getServices(skip,search,contains){
    return function(dispatch){
        axios.get(`${URL}services${skip?"?skip="+skip:""}${search?"?search="+search:""}${contains?"?contains="+contains:""}`)
        .then(res=>{
            dispatch({type: GET_SERVICES,payload:res.data})
        });
    }
    
}
export function deleteEvent(payload){
    return function(dispatch){
        axios.post(`${URL}events/delete`,payload)
        .then(res=>{
            dispatch({type: DELETE_EVENT,payload:res.data})
        });
    }
}
export function getEvents(skip,search,contains){
    return function(dispatch){
        axios.get(`${URL}events${skip?"?skip="+skip:""}${search?"?search="+search:""}${contains?"?contains="+contains:""}`)
        .then(res=>{
            dispatch({type: GET_EVENTS,payload:res.data})
        });
    }
}
export function getMultimedia(id){
    return function(dispatch){
        axios.get(`${URL}events/multimedia?id=`+id)
        .then(res=>{
            dispatch({type: GET_MULTIMEDIA,payload:res.data})
        });
    }
}
export function updateEvent(payload){
    return function(dispatch){
        axios.post(`${URL}events/update`,payload)
        .then(res=>{
            dispatch({type: UPDATE_EVENT,payload:res.data})
        });
    }
    
}
export function createEvent(payload){
    return function(dispatch){
        axios.post(`${URL}events/`,payload)
        .then(res=>{
            dispatch({type: CREATE_EVENT,payload:res.data})
        });
    }
    
}
export function createMultimedia(payload){
    return function(dispatch){
        axios.post(`${URL}events/multimedia`,payload)
        .then(res=>{
            dispatch({type: CREATE_MULTIMEDIA,payload:res.data})
        });
    }
    
}
export function deleteMultimedia(payload){
    return function(dispatch){
        axios.post(`${URL}events/multimedia/delete`,payload)
        .then(res=>{
            dispatch({type: DELETE_MULTIMEDIA,payload:res.data})
        });
    }
}
