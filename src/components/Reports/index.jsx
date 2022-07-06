import {React, useEffect, useState} from 'react';
import {Container, Row, Col, Table} from 'react-bootstrap';
import Pie from '../Charts/Pie'
//import Search from '../SearchBar';
import { useDispatch, useSelector } from 'react-redux';
import ControlledFormB from '../ControlledForm/News';
import {getNews,getEvents, updateNew, deleteNew, createNew} from '../../actions'
import Modal from '../Modal/Empty';
import style from './styles.module.css'
const Reports = ()=>{
    const dispatch = useDispatch();
    const news = useSelector(state=>state.news);
    const events = useSelector(state=>state.events);
    const [data, setData] = useState([])
    const [dataR, setDataR] = useState([])
    const handleChange = (e)=>{
      console.log(e.target.value)
      if(e.target.value == 'likes'){
      setDataR([
        ['Likes', "General"],
        ["Likes", 12],
        ["Dislikes", 2],
        
      ])
    }
    }
    const handleClick = (e)=>{
      console.log(e.target.id)
      let res = news.filter(item=>item.id===e.target.id)
      console.log(res)
      setDataR({likes:res[0].userLikes, dislikes:res[0].userDislikes})
    }
    useEffect(()=>{
        if(!news.length>0){
            console.log("getNews")
        dispatch(getNews())
        }
    },[dataR])
    return(
        <Container style = {{marginLeft:'80px',marginTop:'20px'}}>
        <Row style = {{alignItems:"center"}}>
          <h1 style = {{marginBottom:'30px'}}>Reportes</h1>
            <Col md={10} style={{maxHeight:"290px"}} className={style.scroll}>
            
        <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>#</th>
      <th>Titulo</th>
      <th>Tipo</th>
      <th>Reacciones</th>
      
    </tr>
  </thead>
  <tbody>
    {
      news.length>0&&news.map((item,index)=>
      <>
      <tr key = {index} id = {item.id} onClick={e=>handleClick(e)}>
      <td id = {item.id} onClick={e=>handleClick(e)}>{++index}</td>
      <td id = {item.id} onClick={e=>handleClick(e)}>{item.name}</td>
      <td>Noticia</td>
      <td id = {item.id} onClick={e=>handleClick(e)}>{item.userLikes&&item.userDislikes&&item.userLikes+item.userDislikes}</td>
      
    </tr>
    
    </>
        )
    }
    
  </tbody>
</Table>
</Col>
        </Row>
        <Row style = {{marginTop:"0px"}}>
    
    <Col>
    <Col>
           {/*<label>Tipo de reportes</label>
            <select name="select" onChange = {e=>handleChange(e)}>
            <option value="default">Seleccionar reporte</option>  
  <option value="likes">Likes</option>
  </select>*/}
</Col>
    <Pie title={'Grafica de reacciones'} dataR = {dataR}/>
   </Col>
  </Row>
</Container>
    );
}
export default Reports;
