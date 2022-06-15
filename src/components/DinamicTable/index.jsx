import React,{useState} from 'react';
import { Table, Modal, Button, Container, Row, Col } from 'react-bootstrap';
import {updateEmployee,formEmployee} from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import style from './styles.module.css';
const DinamicTable = ({headers, children})=>{
    return(
        <Table style = {{minHeight:"100vh !important",maxHeight:"100vh !important", overflow:"hidden"}}>
  <thead>
    <tr>
      {headers&&headers.map((item, index) => (
        <th key={index}>{item}</th>
      ))
      }
    </tr>
  </thead>
  <tbody>
    {children}
  </tbody>
</Table>
    );
}

export default DinamicTable;