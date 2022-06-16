import React,{useState} from "react";
import { Row, Col, Container, ListGroup } from "react-bootstrap";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Trash from './img/delete.png'
import style from "./styles.module.css";
import {getMessages, sendMessage, getEmployee, getPending,removeMessages} from '../../actions';
const Chat = () => {
  var messages = useSelector(state => state.messages);
  var employee = useSelector(state => state.employee);
  var pending = useSelector(state => state.pending);
  let [state, setState] = useState('')
  let [show, setShow] = useState({messages:true,list:true,user:false})
 
  const [input,setInput] = useState("");
  const dispatch = useDispatch();
  const removeConversation = (e)=>{
      e.preventDefault();
      console.log(e.target.id)
    dispatch(removeMessages(e.target.id))
    //setTimeout(function(){
      setShow({...show,list:true,messages:false,user:false})
      dispatch(getPending())
       //}, 1600);
  }
  const handleSubmit = async(e)=>{
    e.preventDefault();
    console.log(state+'state')
       dispatch(sendMessage({id:state,content:e.target.content.value}))
       dispatch(getMessages(state))
       
   }
   const handleSearch = async(e)=>{
    e.preventDefault();
    setShow({...show,list:false,messages:true,user:true})
    setState(e.target.search.value);
    dispatch(getEmployee(e.target.search.value));
    dispatch(getMessages(e.target.search.value));
       
   }
  useEffect(()=>{
    if(!pending.length>0){
      console.log("entre")
      dispatch(getPending())
    }
    
  // if(!messages.length>0){
      const body = document.querySelector('#chatContainer');
      body.scrollTo(1000, body.scrollHeight);
     //// employee[0]&&dispatch(getMessages(employee[0]&&employee[0].id));
    //}
  },[])
  const handleOnChange = (value)=>{
    setShow({...show,list:true, messages:false,user:false})
    setInput(value);
    if(value === ""){
      dispatch(getPending())
    }else{
        
    }
};

const handleOnClick = (e)=>{
  console.log(e.target.id)
  dispatch(getEmployee(e.target.id));
  setShow({...show,messages:true,user:true})
  setTimeout(function(){
    dispatch(getMessages(e.target.id));
    setState(e.target.id)
     },1600);
}
  return (
      <Row  style = {{minHeight:"98vh",maxHeight:"98vh", boxSizing:"border-box", marginLeft:"30px"}}>
      <nav className = {style.chatBar}>
      <form className = {style.chatForm} onSubmit={e=>handleSearch(e)}>
          <input onChange = {e=>handleOnChange(e.target.value)} value ={input} name = "search" className = {style.searchFormText} type = "text" placeholder = "Buscar empleado" />
          <input className = {style.searchFormSend} type = "submit" value = "Buscar"/>
        </form>
                <div style = {{display: "flex", justifyContent: "space-between", alignItems:"center"}}>
                <p className = {style.userName}>{show.user&&employee[0]&&employee[0].name}</p>
               {show.user&&employee[0]&&employee[0].imageUrl? <img className={style.profileImg} src={show.user&&employee[0]&&employee[0].imageUrl} style={{marginRight:'30px',marginLeft:'10px'}}/>
                :
                <span className ={style.profileImg} style={{marginRight:'30px'}}>
 <svg
     xmlns="http://www.w3.org/2000/svg"
     width="40px"
     height="40px"
     viewBox="0 0 178.996 89.5"
   >
     <g
       id="Grupo_3"
       data-name="Grupo 3"
       transform="translate(-162.177 -189.058)"
     >
       <path
         id="Trazado_1"
         data-name="Trazado 1"
         d="M350.981,240.088a10.972,10.972,0,0,1,1.741-.132,2.933,2.933,0,0,1,1.947.507,1.612,1.612,0,0,1,.54,1.262,1.677,1.677,0,0,1-1.144,1.581v.028a1.6,1.6,0,0,1,.881,1.214,13,13,0,0,0,.5,1.759h-1.187a9.484,9.484,0,0,1-.423-1.487c-.177-.823-.474-1.085-1.126-1.1h-.584v2.589h-1.139Zm1.139,2.789h.682c.777,0,1.262-.413,1.262-1.041,0-.694-.485-1.012-1.234-1.012a3.292,3.292,0,0,0-.71.058Zm-4.764.253a5.589,5.589,0,1,0,5.6-5.587A5.6,5.6,0,0,0,347.356,243.13Zm1.064,0a4.528,4.528,0,1,1,4.532,4.532A4.534,4.534,0,0,1,348.419,243.13Zm-1.306-54.064a6.418,6.418,0,0,0-6.451,6.013,5.83,5.83,0,0,0,6.136,5.859,6.417,6.417,0,0,0,6.439-6.015A5.823,5.823,0,0,0,347.114,189.066ZM221.66,195.3c1.89-.057,5,.049,5,.049s1.529-6.167,1.529-6.252c-1.127-.006-6.426-.069-7.5-.028-9.423,0-17.066,5.725-19.21,14.5-.017.016-1.451,5.387-1.419,5.363-.018.024-8.235,0-8.235,0l-1.526,6.23h8.206s-5.591,23.337-7.88,33.562h10.3l8.162-33.562h12.588l1.5-6.23H210.627l1.9-7.2C213.671,197.3,218.423,195.365,221.66,195.3Zm13.808,43.258,12.08-49.5H237.239l-12.184,49.569a29.207,29.207,0,0,0-.776,4.944,10.741,10.741,0,0,0,.7,5.16h12.111a6.217,6.217,0,0,1-2.323-4.339A20,20,0,0,1,235.467,238.563Zm105.916,0,7.219-29.625H338.259l-7.291,29.689a29.908,29.908,0,0,0-.779,4.944,10.767,10.767,0,0,0,.706,5.16h12.11a6.2,6.2,0,0,1-2.324-4.339A19.851,19.851,0,0,1,341.383,238.563Zm-22-29.625-10.347,13.005-7.817-13.005H289.5l11.529,19.181-16.417,20.611h8.254l11.681-14.758,8.857,14.745h11.7l-12.528-20.866,14.927-18.913Zm-48.416-1.925c-8.164.023-20.168,5.689-24.153,18.914-3.225,10.724,1.7,24.095,19,24.742a42.931,42.931,0,0,0,15.494-2.64c-.088.1-1.231-5.789-1.206-5.789a36.94,36.94,0,0,1-13.888,1.9c-5.924-1.074-10.953-5.585-9.843-13.386.032.083,9.153,1.458,15.684-.348,13.444-4.039,14.561-12.33,12.381-16.743C281.266,207.239,273.536,207,270.963,207.013Zm-1.942,17.812a42.335,42.335,0,0,1-10.91.33,19.24,19.24,0,0,1,6.6-10.234c3.523-2.426,7.415-2.406,9.986-.289C276.477,216.472,278.764,223.188,269.021,224.825Z"
         transform="translate(-17.361)"
         fill="#ffffff"
       />
       <g
         id="Grupo_2"
         data-name="Grupo 2"
         transform="translate(162.177 258.668)"
       >
         <g id="Grupo_1" data-name="Grupo 1" transform="translate(0 0)">
           <path
             id="Trazado_2"
             data-name="Trazado 2"
             d="M162.177,371.9c27.876,20.873,56.646,21.889,88.922,15.359,30.623-6.2,60.742-13.266,90.051,2.59-27.884-20.868-56.656-21.893-88.931-15.36C221.6,380.687,191.466,387.762,162.177,371.9Z"
             transform="translate(-162.177 -370.928)"
             fill="#ffffff"
           />
         </g>
       </g>
     </g>
   </svg>
 </span>}
                </div>
                
               
            </nav>
        <Col s={4} md={4} lg={4} className = {style.chatList}>
          <ListGroup>
            {
             show.list?pending.length>0&&pending.map(item=>
                <ListGroup.Item style = {{}}>
                <ul className={style.profile}>
                <li>
                    <img id={item.nomina} onClick = {e=>handleOnClick(e)} className={style.profileImg} style = {{marginRight:"15px", marginLeft:"15px"}} src={item.imageUrl}/>
                    </li>
                  <li  className={style.profileTitles}>
                    <span id={item.nomina} onClick = {e=>handleOnClick(e)}>{item.name.split(" ")[0]+" "+item.name.split(" ")[1]}</span>
                    <p id={item.nomina} onClick = {e=>handleOnClick(e)}>{item.job}</p>
                  </li>
                  <li className={style.profileActions}>
                    <img src = {Trash} id={item.nomina} name = {item.nomina} onClick = {e=>removeConversation(e)} className={style.actionDelete}>
                    </img>
                  </li>
                </ul>
              </ListGroup.Item>
                ):
                employee.length>0&&employee.map(item=>
                  <ListGroup.Item style = {{}}>
                  <ul className={style.profile}>
                    <li>
                    <img id={item.nomina} onClick = {e=>handleOnClick(e)} className={style.profileImg} style = {{marginRight:"15px", marginLeft:"15px"}} src={item.imageUrl}/>
                    </li>
                    <li  className={style.profileTitles}>
                      <span id={item.nomina} onClick = {e=>handleOnClick(e)}>{item.name}</span>
                      <p id={item.nomina} onClick = {e=>handleOnClick(e)}>{item.job}</p>
                    </li>
                    <li className={style.profileActions}>
                      <img src = {Trash} id={item.nomina} name = {item.nomina} onClick = {e=>removeConversation(e)} className={style.actionDelete}>
                      </img>
                    </li>
                  </ul>
                </ListGroup.Item>
                  )

            }

          </ListGroup>
        </Col>
        <Col s={8} md={8} lg={8} className = {style.chat}>
        <div id = "chatContainer" className = {style.chatContainer} style = {{borderLeft:"1px solid", borderColor:"black"}}>
            {show.messages&&employee.length>0?messages.length>0 && messages.map(item=>
             item.rol === "admin"?
             <div className={style.msg + " " + style.msg_from}>
 <div className={style.recepient}>
     
 <span className ={style.profileImg}>
 <svg
     xmlns="http://www.w3.org/2000/svg"
     width="40px"
     height="40px"
     viewBox="0 0 178.996 89.5"
   >
     <g
       id="Grupo_3"
       data-name="Grupo 3"
       transform="translate(-162.177 -189.058)"
     >
       <path
         id="Trazado_1"
         data-name="Trazado 1"
         d="M350.981,240.088a10.972,10.972,0,0,1,1.741-.132,2.933,2.933,0,0,1,1.947.507,1.612,1.612,0,0,1,.54,1.262,1.677,1.677,0,0,1-1.144,1.581v.028a1.6,1.6,0,0,1,.881,1.214,13,13,0,0,0,.5,1.759h-1.187a9.484,9.484,0,0,1-.423-1.487c-.177-.823-.474-1.085-1.126-1.1h-.584v2.589h-1.139Zm1.139,2.789h.682c.777,0,1.262-.413,1.262-1.041,0-.694-.485-1.012-1.234-1.012a3.292,3.292,0,0,0-.71.058Zm-4.764.253a5.589,5.589,0,1,0,5.6-5.587A5.6,5.6,0,0,0,347.356,243.13Zm1.064,0a4.528,4.528,0,1,1,4.532,4.532A4.534,4.534,0,0,1,348.419,243.13Zm-1.306-54.064a6.418,6.418,0,0,0-6.451,6.013,5.83,5.83,0,0,0,6.136,5.859,6.417,6.417,0,0,0,6.439-6.015A5.823,5.823,0,0,0,347.114,189.066ZM221.66,195.3c1.89-.057,5,.049,5,.049s1.529-6.167,1.529-6.252c-1.127-.006-6.426-.069-7.5-.028-9.423,0-17.066,5.725-19.21,14.5-.017.016-1.451,5.387-1.419,5.363-.018.024-8.235,0-8.235,0l-1.526,6.23h8.206s-5.591,23.337-7.88,33.562h10.3l8.162-33.562h12.588l1.5-6.23H210.627l1.9-7.2C213.671,197.3,218.423,195.365,221.66,195.3Zm13.808,43.258,12.08-49.5H237.239l-12.184,49.569a29.207,29.207,0,0,0-.776,4.944,10.741,10.741,0,0,0,.7,5.16h12.111a6.217,6.217,0,0,1-2.323-4.339A20,20,0,0,1,235.467,238.563Zm105.916,0,7.219-29.625H338.259l-7.291,29.689a29.908,29.908,0,0,0-.779,4.944,10.767,10.767,0,0,0,.706,5.16h12.11a6.2,6.2,0,0,1-2.324-4.339A19.851,19.851,0,0,1,341.383,238.563Zm-22-29.625-10.347,13.005-7.817-13.005H289.5l11.529,19.181-16.417,20.611h8.254l11.681-14.758,8.857,14.745h11.7l-12.528-20.866,14.927-18.913Zm-48.416-1.925c-8.164.023-20.168,5.689-24.153,18.914-3.225,10.724,1.7,24.095,19,24.742a42.931,42.931,0,0,0,15.494-2.64c-.088.1-1.231-5.789-1.206-5.789a36.94,36.94,0,0,1-13.888,1.9c-5.924-1.074-10.953-5.585-9.843-13.386.032.083,9.153,1.458,15.684-.348,13.444-4.039,14.561-12.33,12.381-16.743C281.266,207.239,273.536,207,270.963,207.013Zm-1.942,17.812a42.335,42.335,0,0,1-10.91.33,19.24,19.24,0,0,1,6.6-10.234c3.523-2.426,7.415-2.406,9.986-.289C276.477,216.472,278.764,223.188,269.021,224.825Z"
         transform="translate(-17.361)"
         fill="#ffffff"
       />
       <g
         id="Grupo_2"
         data-name="Grupo 2"
         transform="translate(162.177 258.668)"
       >
         <g id="Grupo_1" data-name="Grupo 1" transform="translate(0 0)">
           <path
             id="Trazado_2"
             data-name="Trazado 2"
             d="M162.177,371.9c27.876,20.873,56.646,21.889,88.922,15.359,30.623-6.2,60.742-13.266,90.051,2.59-27.884-20.868-56.656-21.893-88.931-15.36C221.6,380.687,191.466,387.762,162.177,371.9Z"
             transform="translate(-162.177 -370.928)"
             fill="#ffffff"
           />
         </g>
       </g>
     </g>
   </svg>
 </span>
 <span className={style.name}>{item.rol}</span>
 <span className={style.time}>{item.messageDate.split('T')[0]}</span>
 </div>
 <div className={style.content}>{item.content}</div>
</div>
:
<div className={style.msg + " " + style.msg_to}>
 <div className={style.content}>{item.content}</div>
 <div className={style.sender}>
     <span >
         <img className = {style.profileImg} style = {{marginLeft:"25px",marginRight:"30px"}} src={show.user&&employee[0]&&employee[0].imageUrl}/>
     </span>
     <span className = {style.name} >{item.rol}</span>
     <span className={style.time} style = {{marginLeft:"25px"}}>{item.messageDate.split('T')[0]}</span>
 </div>
           </div>
           
            )
          :
          <div className={style.msg + " " + style.msg_to}>
 <div className={style.content}>Bienvenido al chat Flexy!</div>
 <div className={style.sender}>
     <span className={style.time} style = {{marginLeft:"25px"}}></span>
 </div>
           </div>
          }
            </div>
        <form className = {style.chatForm} onSubmit={e=>handleSubmit(e)} style = {{borderLeft:"1px solid", borderColor:"black"}}>
          <input name = "content" className = {style.chatFormText} type = "text" placeholder = "Escribe un mensaje..." />
          <input className = {style.chatFormSend} type = "submit"/>
        </form>
        </Col>
      </Row>
  );
};
export default Chat;
