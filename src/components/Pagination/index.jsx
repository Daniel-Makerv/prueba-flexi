import React, { useState } from "react";
import style from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import Modal  from '../Modal';
import ModalGalery  from '../Modal/Galery';
import ModalDeleted  from '../Modal/Delete';
import ControlledForm  from '../ControlledForm/Galery';
import Table from '../DinamicTable';
function Pagination(props) {
  const [currentPage, setcurrentPage] = useState(1);
  const [skip, setSkip] = useState(2);
  const [itemsPerPage, setitemsPerPage] = useState(7);
  const dispatch = useDispatch();
  const [pageNumberLimit, setpageNumberLimit] = useState(10);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(10);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);
  const [show, setShow] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setcurrentPage(Number(e.target.id));
  };
  const handleModal = (e) => {
    e.preventDefault();
    setShow(true)
  };
  const renderData = (title,headers,data,children, action, titleB) => {
    console.log(titleB)
    console.log("soy render data")
    console.log(action)
    return (
          <Table headers = {headers}>
        {data.length>0&&data.map((item,index)=>{
       return   <tr key = {index}>
    
    <td style = {{minWidth:"150px", }} key = {index}> 
    {
      title === 'E-Event' &&
      <ModalGalery title = {'Galeria'} item = {item} action = {{createM:action.createM, refreshM:action.refreshM, deleteM:action.deleteM}} titleB = {'Agregar'}><ControlledForm/></ModalGalery>
    }
   { title !== 'Feedback' && title !== 'Servicios'?
    <Modal title = {title} item = {item} action = {{update:action.update, refresh:action.refresh}} titleB = {titleB}>{children}</Modal>
    :
    null
    }
     <ModalDeleted title = {title} item = {item} action = {{delete:action.delete, refresh:action.refresh}} titleB = {"Eliminar"}>
    <h1>¿Estás seguro(a)?</h1>
       <p>Los datos eliminados no se podrán recuperar.</p>
    </ModalDeleted>
    </td>
     { Object.keys(item).map(prop=>prop==='id' || prop==='filters'?null:
     !prop.includes('image') && !prop.includes('Image') ? <td><p>{item[prop]}</p></td>
     :<td><img style = {{maxWidth:"60px", maxHeight:"60px"}} src = {item[prop]} /></td>
     )
     }
  </tr>
          
          })
    }
</Table>
    );
  };
  const pages = [];
  for (let i = 1; i <= Math.ceil(props.data.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = props.data.slice(indexOfFirstItem, indexOfLastItem);

  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          id={number}
          onClick={handleClick}
          className={currentPage === number ? style.active : null}
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });
  const handleNextbtn = () => {
    
    setcurrentPage(currentPage + 1);
    console.log(maxPageNumberLimit)
    if (currentPage + 1 > maxPageNumberLimit) {
        console.log("entro aqui")
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
      setSkip(skip++);
    }
  };

  const handlePrevbtn = () => {
    setcurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit === 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  let pageIncrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = <li onClick={handleNextbtn}>; </li>;
  }

  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = <li onClick={handlePrevbtn}>; </li>;
  }

  return (
    <div style ={{minWidth:"93%",maxWidth:"93%" ,margin:"auto"}}>
    <div  className={style.container}>
    {currentItems.length>0?renderData(props.title,props.headers,currentItems, props.children, props.action, props.titleB):null}
    </div>
    <ul className={style.pagination}>
        <li>
          <button onClick={handlePrevbtn} disabled={currentPage === pages[0] ? true : false}>
            Prev
          </button>
        </li>
        {pageDecrementBtn}
        {renderPageNumbers}
        {pageIncrementBtn}
        <li>
          <button onClick={handleNextbtn} disabled={currentPage === pages[pages.length - 1] ? true : false}>
            Next
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Pagination;