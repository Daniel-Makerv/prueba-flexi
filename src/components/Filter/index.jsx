import React,{useState} from 'react';
import { Row, Col, Container, Accordion, Pagination, Table} from "react-bootstrap";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getFilters} from '../../actions';
import style from './styles.module.css';
const Filter = ({headers, handle,initialF})=>{
    const [limit,setLimit] = useState(2);
    const [initial,setInitial] = useState(0);
    const [state, setState] = useState({cont:0})
    const dispatch = useDispatch();
    const {filters,names} = useSelector(state=>state)
    const [checks, setChecks] = useState({
      SanCrispin: { category: 'razonSocial', value: 'San Crispin', status: false },
      ServTecEmpresariales: {
        category: 'planta',
        value: 'Serv. Tec. Empresariales',
        status: false
      },
      ServiciosdeManufactura: {
        category: 'planta',
        value: 'Servicios de Manufactura',
        status: false
      },
      CentraldeMantenimiento: {
        category: 'planta',
        value: 'Central de Mantenimiento',
        status: false
      },
      Duende: { category: 'planta', value: 'Duende', status: false },
      PlantaTejido: { category: 'planta', value: 'Planta Tejido', status: false },
      TallerdeMuestras: { category: 'planta', value: 'Taller de Muestras', status: false },
      CentraldeCorte: { category: 'planta', value: 'Central de Corte', status: false },
      IntercalzadeLeon: { category: 'planta', value: 'Intercalza de León', status: false },
      ProvInternaldeLeon: {
        category: 'planta',
        value: 'Prov. Internal. de León',
        status: false
      },
      DivisionCorporativa: { category: 'planta', value: 'División Corporativa', status: false },
      AdmonyOpProf: { category: 'planta', value: 'Admon y Op. Prof', status: false },
      Protec: { category: 'planta', value: 'Protec', status: false },
      Protec2: { category: 'planta', value: 'Protec 2', status: false },
      RecreatividadSocialAndromeda: {
        category: 'planta',
        value: 'Recreatividad Social Andromeda',
        status: false
      },
      Uxmal: { category: 'planta', value: 'Uxmal', status: false },
      DuendeLean: { category: 'planta', value: 'Duende Lean', status: false },
      Nutribien: { category: 'planta', value: 'Nutribien', status: false },
      DistribuidoraFlexi: { category: 'planta', value: 'Distribuidora Flexi', status: false },
      UnionSanAntonio: { category: 'planta', value: 'Unión San Antonio', status: false },
      DistribuidoraModaScarpa: {
        category: 'planta',
        value: 'Distribuidora Moda Scarpa',
        status: false
      },
      MaqZapateraSanLuis: {
        category: 'planta',
        value: 'Maq. Zapatera San Luis',
        status: false
      },
      DistribuidoraQLI: { category: 'planta', value: 'Distribuidora QLI', status: false },
      SanDiegodelaUnion: { category: 'planta', value: 'San Diego de la Union', status: false },
      MaquiladoraUXMALQLI: { category: 'planta', value: 'Maquiladora UXMAL-QLI', status: false },
      TransAerondelBajioSAdeCV: {
        category: 'planta',
        value: 'Trans Aeron del Bajío SA de CV',
        status: false
      },
      MANDOSMEDIOS: {
        category: 'segmentoPoblacion',
        value: 'MANDOS MEDIOS',
        status: false
      },
      PUESTOSCLAVE: {
        category: 'segmentoPoblacion',
        value: 'PUESTOS CLAVE',
        status: false
      },
      OPERATIVOSDESERVICIO: {
        category: 'segmentoPoblacion',
        value: 'OPERATIVOS DE SERVICIO',
        status: false
      },
      ADMINISTRATIVOS: {
        category: 'segmentoPoblacion',
        value: 'ADMINISTRATIVOS',
        status: false
      },
      MOI: { category: 'segmentoPoblacion', value: 'MOI', status: false },
      OPERATIVOSDEPRODUCCION: {
        category: 'segmentoPoblacion',
        value: 'OPERATIVOS DE PRODUCCION',
        status: false
      },
      MOD: { category: 'segmentoPoblacion', value: 'MOD', status: false },
      SUPERVISORES: {
        category: 'segmentoPoblacion',
        value: 'SUPERVISORES',
        status: false
      },
      SanCrispi: { category: 'planta', value: 'San Crispi', status: false }
    }
    
    
    )
    const handleOnClick = (e)=>{
        e.preventDefault();
        dispatch(getFilters())
    };
    const  isActive = (name) => {
    let res = checks.length>0?checks.filter(item=>item===name):1
    if(typeof res !== 'number'){
      if(!res.length>0){
        res = 1;
      }else{
        res = 0
      }
    }
    return res
  }

let items = [];
const handlePage = ()=>{
if(limit<=headers.length){
setInitial(limit);
setLimit(limit+2);
}
}
const handlePrev = ()=>{
    if(initial>0){
    setInitial(initial-2);
    setLimit(limit-2);
    }
    }
const handleNext = () => {
    if (state.cont <= headers.length - 3) {
      setState({
        ...state,
        cont: state.cont + 3,
      });
      setLimit(limit+3)
    } else {
      setState({
        ...state,
        cont: 0,
      });
      setLimit(+2)
    }
    if(state.cont>=headers.length-3){
        setState({
            ...state,
            cont: 0,
          });
          setLimit(2)
    }
  };
  const handlePrevious = () => {
    if (state.cont > 0) {
      setState({
        ...state,
        cont: state.cont - 3,
      });
      setLimit(limit-3)
    }
  };
  const handleOnChange = (e)=>{
    let aux = {...checks};
    aux[e.target.id].status = aux[e.target.id].status?false:true;
    setChecks(aux);
    //checks[e.target.id].status = checks[e.target.id].status?false:true;
    handle(e,checks[e.target.id])
    dispatch(getFilters())
  }
useEffect(()=>{
  if(!filters.length>0){
 dispatch(getFilters())
}
if(initialF){
let filtersR = JSON.parse(initialF)
 let aux = {...checks}
 filtersR['planta'].forEach(item=>{
   let valueAux = aux[item.normalize("NFD").replace(/[\u0300-\u036f\-\.\" "]/g, "")]
  if( valueAux.value === item) valueAux.status=true;
   })
 filtersR['segmentoPoblacion'].forEach(item=>{
    let valueAux = aux[item.normalize("NFD").replace(/[\u0300-\u036f\-\.\" "]/g, "")]
   if( valueAux.value === item) valueAux.status=true;
    })
 filtersR['razonSocial'].forEach(item=>{
      let valueAux = aux[item.normalize("NFD").replace(/[\u0300-\u036f\-\.\" "]/g, "")]
     if( valueAux.value === item) valueAux.status=true;
      })
    }
 dispatch(getFilters())
},[])
    return(
        <Container className = 'mt-2'>
           
            {/*<Pagination size="md"><Pagination.Prev onClick = {e=>handlePrevious()} />
            <Pagination.Item>{'Filtros Disponibles'}</Pagination.Item>
    <Pagination.Next onClick = {e=>handleNext()} /></Pagination>*/}
            <Accordion>
            <Row className = {'flex-row'}>
            
            {
               
                headers && headers.map((item, index)=>
                   index>=state.cont && index<=limit? <Col>
        <Accordion.Item eventKey={index} style = {{maxWidth:"180px"}}>
    <Accordion.Header>{item}</Accordion.Header>
    <Accordion.Body className = {style.container}>
   { 
   
   filters.length>0?filters[index].map(item=>{
    return <Row className = {style.row} key = {item}>
     <Col md = "2">
     <input checked = {checks[item.replace(/ /g, "").replace(/\./g, '')]&&checks[item.replace(/ /g, "").replace(/\./g, '')].status} onChange = {e=>handleOnChange(e)} id = {item.replace(/ /g, "").replace(/\./g, '')} type = 'checkbox'/>
     </Col>
     <Col md = "10">
      <label>{item}</label>
      </Col>
   </Row>
    }
    )
   :
   null
   }
    </Accordion.Body>
  </Accordion.Item>
        </Col>:null
               )
            }
  
  </Row>
</Accordion>

        </Container>
            
    )
}
export default Filter;