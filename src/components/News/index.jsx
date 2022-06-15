import {React, useEffect, useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Pagination from '../Pagination'
import Search from '../SearchBar';
import { useDispatch, useSelector } from 'react-redux';
import ControlledForm from '../ControlledForm/CreateNews';
import ControlledFormB from '../ControlledForm/News';
import {getNews, updateNew, deleteNew, createNew} from '../../actions'
import Modal from '../Modal/Empty';
const News = ()=>{
    const dispatch = useDispatch();
    const news = useSelector(state=>state.news);
    useEffect(()=>{
        if(!News.length>0){
            console.log("getNews")
        dispatch(getNews())
        }
    },[])
    return(
        <Container>
        <Row style = {{alignItems:"center"}}>
        <Col md={9}>
        <Search/>
        </Col>
        <Col md={3} style = {{marginTop:"25px"}}>
        <Modal title = {"Crear Noticia"} titleB = {"Nueva noticia"} action = {{create:createNew,refresh:getNews}}>
        <ControlledForm data = {news}/>
        </Modal>
        </Col>
        </Row>
  <Row style = {{marginTop:"5px"}}>
    <Col>
    <Pagination title={"E-News"} headers = {['Acciones','Nombre','Cuerpo','Autor','Fecha','Likes','Dislikes','Imagen']}
     data={news} action = {{update:updateNew,delete:deleteNew, refresh:getNews}}>
    <ControlledFormB/>
    </Pagination>        
   </Col>
  </Row>
</Container>
    );
}
export default News;
