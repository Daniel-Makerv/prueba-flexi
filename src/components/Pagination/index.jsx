import React, { useState } from "react";
import style from './styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
function Pagination(props) {
  const [currentPage, setcurrentPage] = useState(1);
  const [skip, setSkip] = useState(2);
  const [itemsPerPage, setitemsPerPage] = useState(5);
  const dispatch = useDispatch();
  const [pageNumberLimit, setpageNumberLimit] = useState(10);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(10);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  const handleClick = (e) => {
    e.preventDefault();
    setcurrentPage(Number(e.target.id));
  };
  const renderData = (title,data) => {
    return (
        <div className={style.container} style = {{maxWidth: "97%", maxHeight:"80vh", marginLeft:"0px"}}>
          <table className = {style.tab}>
<thead>
  <tr style = {{padding:"40px"}}>
    <th scope="col">Nomina</th>
    <th scope="col">Nombre</th>
    <th scope="col">Correo</th>
    <th scope="col">Correo Personal</th>
    <th scope="col">Telefono</th>
    <th scope="col">Telefono Personal</th>
    <th scope="col">Estatus</th>
    <th scope="col">Imagen</th>
    <th scope="col">Ubicación</th>
    <th scope="col">Puesto</th>
    <th scope="col">Extensión</th>
    <th scope="col">Retirado</th>
  </tr>
</thead>
<tbody className = {style.scroll+" table-active"}>
        {data.length>0&&data.map(item=>{
       return   <tr>
    <td>{item.nomina}</td>
    <td>{item.name}</td>
    <td>{item.imageUrl}</td>
    <td>{item.location}</td>
    <td>{item.job}</td>
    <td >{item.nomina}</td>
    <td>{item.name}</td>
    <td>{item.imageUrl}</td>
    <td>{item.location}</td>
    <td>{item.job}</td>
    <td>{item.job}</td>
    <td>{item.job}</td>
  </tr>
          
          })
    }
</tbody>
</table>
</div>
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
        dispatch(props.getEmployees(skip))
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
    <div className={style.container}>
    {currentItems.length>0?renderData(props.title,currentItems):null}
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