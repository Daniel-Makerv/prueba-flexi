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
      SanCrispi: { category: 'planta', value: 'San Crispi', status: false },
      JEFEDEATENCIONALCLIENTE: {
        category: 'puesto',
        value: 'JEFE DE ATENCION AL CLIENTE',
        status: false
      },
      EMBARCADORDEDESPACHO: {
        category: 'puesto',
        value: 'EMBARCADOR DE DESPACHO',
        status: false
      },
      ASISTENTEDEADMINISTRACION: {
        category: 'puesto',
        value: 'ASISTENTE DE ADMINISTRACION',
        status: false
      },
      JEFEDEMAQUILASDECORTE: {
        category: 'puesto',
        value: 'JEFE DE MAQUILAS DE CORTE',
        status: false
      },
      DIVIDIDOR: { category: 'puesto', value: 'DIVIDIDOR', status: false },
      JEFEDECALCES: { category: 'puesto', value: 'JEFE DE CALCES', status: false },
      JEFEDEPROCESOCORTE: { category: 'puesto', value: 'JEFE DE PROCESO CORTE', status: false },
      GERENTEDEPRODUCCIONCORTEYPESPUNTE: {
        category: 'puesto',
        value: 'GERENTE DE PRODUCCION CORTE Y PESPUNTE',
        status: false
      },
      AUXILIARADMINISTRATIVODECOMEDOR: {
        category: 'puesto',
        value: 'AUXILIAR ADMINISTRATIVO DE COMEDOR',
        status: false
      },
      EMBARCADORDETRASPASOS: {
        category: 'puesto',
        value: 'EMBARCADOR DE TRASPASOS',
        status: false
      },
      JEFEDENOMINAS: { category: 'puesto', value: 'JEFE DE NOMINAS', status: false },
      JEFEDEDESARROLLODESUELASDAMA: {
        category: 'puesto',
        value: 'JEFE DE DESARROLLO DE SUELAS DAMA',
        status: false
      },
      JEFEDEPROCESOADORNOENFORMACION: {
        category: 'puesto',
        value: 'JEFE DE PROCESO ADORNO EN FORMACION',
        status: false
      },
      SUPERVISORENFORMACION: {
        category: 'puesto',
        value: 'SUPERVISOR EN FORMACION',
        status: false
      },
      ADMINISTRADORDEPROTOTIPOS: {
        category: 'puesto',
        value: 'ADMINISTRADOR DE PROTOTIPOS',
        status: false
      },
      GERENTEDEADMINISTRACIONYCONTABILIDAD: {
        category: 'puesto',
        value: 'GERENTE DE ADMINISTRACION Y CONTABILIDAD',
        status: false
      },
      COORDINADORDEESTRUCTURA: {
        category: 'puesto',
        value: 'COORDINADOR DE ESTRUCTURA',
        status: false
      },
      TECNICOENDESARROLLODEMATERIALES: {
        category: 'puesto',
        value: 'TECNICO EN DESARROLLO DE MATERIALES',
        status: false
      },
      COORDINADORDEOPERACIONESLOGISTICAS: {
        category: 'puesto',
        value: 'COORDINADOR DE OPERACIONES LOGISTICAS',
        status: false
      },
      GERENTEDEPLANEACIONYCTRLDEESPECIF: {
        category: 'puesto',
        value: 'GERENTE DE PLANEACION Y CTRL DE ESPECIF',
        status: false
      },
      INSPECTORDECALIDADVARIOSYSINTETICOS: {
        category: 'puesto',
        value: 'INSPECTOR DE CALIDAD VARIOS Y SINTETICOS',
        status: false
      },
      TECNICOENREFRIGERACION: {
        category: 'puesto',
        value: 'TECNICO EN REFRIGERACION',
        status: false
      },
      AUXILIARTECNICODEDATOSMAESTROS: {
        category: 'puesto',
        value: 'AUXILIAR TECNICO DE DATOS MAESTROS',
        status: false
      },
      SECRETARIADECOMPENYRELLABORALES: {
        category: 'puesto',
        value: 'SECRETARIA DE COMPEN Y REL LABORALES',
        status: false
      },
      AUXILIARADMINISTRATIVODETRAFICO: {
        category: 'puesto',
        value: 'AUXILIAR ADMINISTRATIVO DE TRAFICO',
        status: false
      },
      DIRECTOREJECUTIVODEMANUFACTURA: {
        category: 'puesto',
        value: 'DIRECTOR EJECUTIVO DE MANUFACTURA',
        status: false
      },
      TECNICOENPESPUNTEAUTOMATIZADO: {
        category: 'puesto',
        value: 'TECNICO EN PESPUNTE AUTOMATIZADO',
        status: false
      },
      COORDINADORDEINVENTARIOS: {
        category: 'puesto',
        value: 'COORDINADOR DE INVENTARIOS',
        status: false
      },
      DISENADORDESUELA: { category: 'puesto', value: 'DISENADOR DE SUELA', status: false },
      AUXILIARADMINISTRATIVODEALMACENMP: {
        category: 'puesto',
        value: 'AUXILIAR ADMINISTRATIVO DE ALMACEN MP',
        status: false
      },
      'GALOPINA/COCINERA': { category: 'puesto', value: 'GALOPINA/COCINERA', status: false },
      TECNICOENPROGRAMACIONDEMANTENIMIENTO: {
        category: 'puesto',
        value: 'TECNICO EN PROGRAMACION DE MANTENIMIENTO',
        status: false
      },
      AUXILIARADMINISTRATIVODEPIELESNUEVAS: {
        category: 'puesto',
        value: 'AUXILIAR ADMINISTRATIVO DE PIELES NUEVAS',
        status: false
      },
      JEFEDEMEJORADECOSTOSDEMATERIALES: {
        category: 'puesto',
        value: 'JEFE DE MEJORA DE COSTOS DE MATERIALES',
        status: false
      },
      COORDINADORDEEMBARQUE: {
        category: 'puesto',
        value: 'COORDINADOR DE EMBARQUE',
        status: false
      },
      COORDINADORDEGESTIONYCTRLDEPEDIDOS: {
        category: 'puesto',
        value: 'COORDINADOR DE GESTION Y CTRL DE PEDIDOS',
        status: false
      },
      GERENTEDEVENTASQUIRELLI: {
        category: 'puesto',
        value: 'GERENTE DE VENTAS QUIRELLI',
        status: false
      },
      ADMINISTRADORDESSFF: { category: 'puesto', value: 'ADMINISTRADOR DE SSFF', status: false },
      AUXILIARDECALCEDAMA: {
        category: 'puesto',
        value: 'AUXILIAR DE CALCE DAMA',
        status: false
      },
      INGENIERODEPLANTA: { category: 'puesto', value: 'INGENIERO DE PLANTA', status: false },
      JEFEDEFISCALYCONTROLDEACTIVOS: {
        category: 'puesto',
        value: 'JEFE DE FISCAL Y CONTROL DE ACTIVOS',
        status: false
      },
      COORDINADORDESGC: { category: 'puesto', value: 'COORDINADOR DE SGC', status: false },
      SUPERVISORDEMTTOPROYDESEGIND: {
        category: 'puesto',
        value: 'SUPERVISOR DE MTTO PROY DE SEG IND',
        status: false
      },
      INGENIEROSAPBASIS: { category: 'puesto', value: 'INGENIERO SAP BASIS', status: false },
      AUXILIARDEEMBARQUE: { category: 'puesto', value: 'AUXILIAR DE EMBARQUE', status: false },
      INSPECTORDECALIDADINYECCION: {
        category: 'puesto',
        value: 'INSPECTOR DE CALIDAD INYECCION',
        status: false
      },
      AUXILIARTECNICOENDESADORYMATNVOS: {
        category: 'puesto',
        value: 'AUXILIAR TECNICO EN DES ADOR Y MAT NVOS',
        status: false
      },
      JEFEDEPERSONAL: { category: 'puesto', value: 'JEFE DE PERSONAL', status: false },
      INGENIERODEPLANEACIONDELAPRODUCCION: {
        category: 'puesto',
        value: 'INGENIERO DE PLANEACION DE LA PRODUCCION',
        status: false
      },
      COORDINADORDEDESARROLLODEMATNVOS: {
        category: 'puesto',
        value: 'COORDINADOR DE DESARROLLO DE MAT NVOS',
        status: false
      },
      ELECTROMECANICODEMONTADOPEGADO: {
        category: 'puesto',
        value: 'ELECTROMECANICO DE MONTADO PEGADO',
        status: false
      },
      PRELIMINARDEMONTADOB: {
        category: 'puesto',
        value: 'PRELIMINAR DE MONTADO B',
        status: false
      },
      ALMACENISTADEEMBARQUE: {
        category: 'puesto',
        value: 'ALMACENISTA DE EMBARQUE',
        status: false
      },
      'COORDINADORENLACEINYECCION/ADORNO': {
        category: 'puesto',
        value: 'COORDINADOR ENLACE INYECCION/ADORNO',
        status: false
      },
      SUPERVISORDEMANTENIMIENTOMETROLOGIA: {
        category: 'puesto',
        value: 'SUPERVISOR DE MANTENIMIENTO METROLOGIA',
        status: false
      },
      ADMINISTRADORDENOMINAS: {
        category: 'puesto',
        value: 'ADMINISTRADOR DE NOMINAS',
        status: false
      },
      JEFEDELOGISTICA: { category: 'puesto', value: 'JEFE DE LOGISTICA', status: false },
      AUXILIARADTVODECOMPRASDIVERSAS: {
        category: 'puesto',
        value: 'AUXILIAR ADTVO DE COMPRAS DIVERSAS',
        status: false
      },
      GERENTEDECEDISPRODUCTOTERMINADO: {
        category: 'puesto',
        value: 'GERENTE DE CEDIS PRODUCTO TERMINADO',
        status: false
      },
      SUPERVISORDECALPIELFORROYCARNZIMP: {
        category: 'puesto',
        value: 'SUPERVISOR DE CAL PIEL FORRO Y CARNZ IMP',
        status: false
      },
      ASISTENTEDECALIDAD: { category: 'puesto', value: 'ASISTENTE DE CALIDAD', status: false },
      SUPERVISORDEPROCESOSESPECIALES: {
        category: 'puesto',
        value: 'SUPERVISOR DE PROCESOS ESPECIALES',
        status: false
      },
      AUXILIARTECNICODEREVISIONDEPIEL: {
        category: 'puesto',
        value: 'AUXILIAR TECNICO DE REVISION DE PIEL',
        status: false
      },
      JEFEDEMEJORADECOSTOSDEPROCESOS: {
        category: 'puesto',
        value: 'JEFE DE MEJORA DE COSTOS DE PROCESOS',
        status: false
      },
      TECNICOFUNDIDOR: { category: 'puesto', value: 'TECNICO FUNDIDOR', status: false },
      DESARROLLADORDEVENTASINTERNACIONALES: {
        category: 'puesto',
        value: 'DESARROLLADOR DE VENTAS INTERNACIONALES',
        status: false
      },
      COMPRADOR: { category: 'puesto', value: 'COMPRADOR', status: false },
      COORDINADORDEPLANTASYCOSTOSDEMFRA: {
        category: 'puesto',
        value: 'COORDINADOR DE PLANTAS Y COSTOS DE MFRA',
        status: false
      },
      AUXILIARADMINISTRATIVODEPROYYSEGIN: {
        category: 'puesto',
        value: 'AUXILIAR ADMINISTRATIVO DE PROY Y SEG IN',
        status: false
      },
      JEFEDEINSTRUCTORESDECAPEXTYPM: {
        category: 'puesto',
        value: 'JEFE DE INSTRUCTORES DE CAP EXT Y PM',
        status: false
      },
      TECNICOELECTRICISTA: { category: 'puesto', value: 'TECNICO ELECTRICISTA', status: false },
      GERENTEDEPRODUCCIONURBANA: {
        category: 'puesto',
        value: 'GERENTE DE PRODUCCION URBANA',
        status: false
      },
      TECNICOESPECIALISTADERECLUTAMIENTO: {
        category: 'puesto',
        value: 'TECNICO ESPECIALISTA DE RECLUTAMIENTO',
        status: false
      },
      AUXILIARADTVODEDLLODEMATERIALES: {
        category: 'puesto',
        value: 'AUXILIAR ADTVO DE DLLO DE MATERIALES',
        status: false
      },
      DOMADOR: { category: 'puesto', value: 'DOMADOR', status: false },
      DISENADORPLANTILLISTADESUELA: {
        category: 'puesto',
        value: 'DISENADOR PLANTILLISTA DE SUELA',
        status: false
      },
      PRELIMINARCAPACITACION: {
        category: 'puesto',
        value: 'PRELIMINAR CAPACITACION',
        status: false
      },
      AUXILIARTECNICODECONTROLDEINVENT: {
        category: 'puesto',
        value: 'AUXILIAR TECNICO DE CONTROL DE INVENT',
        status: false
      },
      AUXILIARADMINISTRATIVODEMERCADOTECNIA: {
        category: 'puesto',
        value: 'AUXILIAR ADMINISTRATIVO DE MERCADOTECNIA',
        status: false
      },
      GERENTEDEMEJORADECOSTOS: {
        category: 'puesto',
        value: 'GERENTE DE MEJORA DE COSTOS',
        status: false
      },
      INGENIEROESPECIALISTAENMTTOINYECCION: {
        category: 'puesto',
        value: 'INGENIERO ESPECIALISTA EN MTTO INYECCION',
        status: false
      },
      MONITORISTA: { category: 'puesto', value: 'MONITORISTA', status: false },
      COORDINADORDEDESARROLLODEMATERIALES: {
        category: 'puesto',
        value: 'COORDINADOR DE DESARROLLO DE MATERIALES',
        status: false
      },
      DIRECTORDEPROYECTOS: { category: 'puesto', value: 'DIRECTOR DE PROYECTOS', status: false },
      SUPERVISORDECALIDADAVIOS: {
        category: 'puesto',
        value: 'SUPERVISOR DE CALIDAD AVIOS',
        status: false
      },
      JEFEDEMTTOELECTRICOYEFICENERGETICA: {
        category: 'puesto',
        value: 'JEFE DE MTTO ELECTRICO Y EFIC ENERGETICA',
        status: false
      },
      RAYADOR: { category: 'puesto', value: 'RAYADOR', status: false },
      JEFEDEPROCESOADORNO: {
        category: 'puesto',
        value: 'JEFE DE PROCESO ADORNO',
        status: false
      },
      ADMINISTRADORDEINFORMACIONMFRA: {
        category: 'puesto',
        value: 'ADMINISTRADOR DE INFORMACION MFRA',
        status: false
      },
      DESVIRADOR: { category: 'puesto', value: 'DESVIRADOR', status: false },
      JEFEDECOMPRASDIVERSAS: {
        category: 'puesto',
        value: 'JEFE DE COMPRAS DIVERSAS',
        status: false
      },
      GERENTEDEPRODUCCIONRURAL: {
        category: 'puesto',
        value: 'GERENTE DE PRODUCCION RURAL',
        status: false
      },
      ADMINISTRADORDEDESARROLLO: {
        category: 'puesto',
        value: 'ADMINISTRADOR DE DESARROLLO',
        status: false
      },
      ANALISTADEMANDMANAGEMENT: {
        category: 'puesto',
        value: 'ANALISTA DEMAND MANAGEMENT',
        status: false
      },
      INGENIEROESPDEORDENESDECOMPRA: {
        category: 'puesto',
        value: 'INGENIERO ESP DE ORDENES DE COMPRA',
        status: false
      },
      JEFEDEATRACYDESDEPNALOPERATIVO: {
        category: 'puesto',
        value: 'JEFE DE ATRAC Y DES DE PNAL OPERATIVO',
        status: false
      },
      AUDITORINTERNO: { category: 'puesto', value: 'AUDITOR INTERNO', status: false },
      'JEFEDEDESARROLLODESUELASCAB/QLI': {
        category: 'puesto',
        value: 'JEFE DE DESARROLLO DE SUELAS CAB/QLI',
        status: false
      },
      AUXILIARDEMODELISTA: { category: 'puesto', value: 'AUXILIAR DE MODELISTA', status: false },
      ABASTECEDORBANDAINYECCION: {
        category: 'puesto',
        value: 'ABASTECEDOR BANDA INYECCION',
        status: false
      },
      AUXILIARDECOCINA: { category: 'puesto', value: 'AUXILIAR DE COCINA', status: false },
      AUXILIARENSERVICIOALCLIENTE: {
        category: 'puesto',
        value: 'AUXILIAR EN SERVICIO AL CLIENTE',
        status: false
      },
      AUXILIARDECARGAMP: { category: 'puesto', value: 'AUXILIAR DE CARGA MP', status: false },
      DIRECTOREJECUTIVODEADMONYFINANZAS: {
        category: 'puesto',
        value: 'DIRECTOR EJECUTIVO DE ADMON Y FINANZAS',
        status: false
      },
      PILOTO: { category: 'puesto', value: 'PILOTO', status: false },
      JEFEDEDEVOLUCIONESYTRASPASOS: {
        category: 'puesto',
        value: 'JEFE DE DEVOLUCIONES Y TRASPASOS',
        status: false
      },
      JEFEDEDATOSMAESTROSYDOCUMENTOS: {
        category: 'puesto',
        value: 'JEFE DE DATOS MAESTROS Y DOCUMENTOS',
        status: false
      },
      DIRECTORDEMERCADOTECNIA: {
        category: 'puesto',
        value: 'DIRECTOR DE MERCADOTECNIA',
        status: false
      },
      ADMINISTRADORDEOFICINADG: {
        category: 'puesto',
        value: 'ADMINISTRADOR DE OFICINA DG',
        status: false
      },
      ADMINISTRADORDECOSTEOQUIRELLI: {
        category: 'puesto',
        value: 'ADMINISTRADOR DE COSTEO QUIRELLI',
        status: false
      },
      ESPECIALISTAENDESPACHOADUANERO: {
        category: 'puesto',
        value: 'ESPECIALISTA EN DESPACHO ADUANERO',
        status: false
      },
      'ADMINISTRADORCENTRICD&D': {
        category: 'puesto',
        value: 'ADMINISTRADOR CENTRIC D&D',
        status: false
      },
      ABASTECEDORDEMAQUINA: {
        category: 'puesto',
        value: 'ABASTECEDOR DE MAQUINA',
        status: false
      },
      JEFEDELOGISTICADEMATERIALES: {
        category: 'puesto',
        value: 'JEFE DE LOGISTICA DE MATERIALES',
        status: false
      },
      AUXILIARDEPROCESOSGC: {
        category: 'puesto',
        value: 'AUXILIAR DE PROCESO SGC',
        status: false
      },
      ADMINISTRADORSAP: { category: 'puesto', value: 'ADMINISTRADOR SAP', status: false },
      ADMINISTRADORDEPROYYMEJORADEDYD: {
        category: 'puesto',
        value: 'ADMINISTRADOR DE PROY Y MEJORA DE DYD',
        status: false
      },
      ADMINISTRADORDEPRODUCTODAMA: {
        category: 'puesto',
        value: 'ADMINISTRADOR DE PRODUCTO DAMA',
        status: false
      },
      GERENTEDEMERCHANDISING: {
        category: 'puesto',
        value: 'GERENTE DE MERCHANDISING',
        status: false
      },
      AUXILIARTECNICODEDLLODEMATERIALES: {
        category: 'puesto',
        value: 'AUXILIAR TECNICO DE DLLO DE MATERIALES',
        status: false
      },
      ALMACENISTADEDESARROLLODEMATERIALES: {
        category: 'puesto',
        value: 'ALMACENISTA DE DESARROLLO DE MATERIALES',
        status: false
      },
      INGENIERODEDATOSMAESTROS: {
        category: 'puesto',
        value: 'INGENIERO DE DATOS MAESTROS',
        status: false
      },
      INGENIEROESPECIALISTADEMOLDESYSUELA: {
        category: 'puesto',
        value: 'INGENIERO ESPECIALISTA DE MOLDES Y SUELA',
        status: false
      },
      COORDINADORDEPPTOSEINDICADORES: {
        category: 'puesto',
        value: 'COORDINADOR DE PPTOS E INDICADORES',
        status: false
      },
      ALMACENISTADECOMEDOR: {
        category: 'puesto',
        value: 'ALMACENISTA DE COMEDOR',
        status: false
      },
      ANALISTADEPROCESOSDENEGOCIO: {
        category: 'puesto',
        value: 'ANALISTA DE PROCESOS DE NEGOCIO',
        status: false
      },
      AUXILIARADTVODESEGURIDADINDUSTRIAL: {
        category: 'puesto',
        value: 'AUXILIAR ADTVO DE SEGURIDAD INDUSTRIAL',
        status: false
      },
      AUXILIARDEDESDEADORNOYMATNUEVOS: {
        category: 'puesto',
        value: 'AUXILIAR DE DES DE ADORNO Y MAT NUEVOS',
        status: false
      },
      COORDTECNICODEDESARROLLODELPROD: {
        category: 'puesto',
        value: 'COORD TECNICO DE DESARROLLO DEL PROD',
        status: false
      },
      GERENTEDEPROYECTOS: { category: 'puesto', value: 'GERENTE DE PROYECTOS', status: false },
      COORDINADORDETRAFDEENTREGASASIGNADA: {
        category: 'puesto',
        value: 'COORDINADOR DE TRAF DE ENTREGAS ASIGNADA',
        status: false
      },
      'AUXILIARADMINISTRATIVOSS&MA': {
        category: 'puesto',
        value: 'AUXILIAR ADMINISTRATIVO SS&MA',
        status: false
      },
      GERENTEDEPROYECTOSCH: {
        category: 'puesto',
        value: 'GERENTE DE PROYECTOS CH',
        status: false
      },
      AUXILIARTECNICODEHORMAS: {
        category: 'puesto',
        value: 'AUXILIAR TECNICO DE HORMAS',
        status: false
      },
      JEFEDEMEDICINALABORAL: {
        category: 'puesto',
        value: 'JEFE DE MEDICINA LABORAL',
        status: false
      },
      ENTACONADOR: { category: 'puesto', value: 'ENTACONADOR', status: false },
      INGENIEROESPDEMEJORADECTOSDEMAT: {
        category: 'puesto',
        value: 'INGENIERO ESP DE MEJORA DE CTOS DE MAT',
        status: false
      },
      ADMINISTRADORDEASEGDECALIDAD: {
        category: 'puesto',
        value: 'ADMINISTRADOR DE ASEG DE CALIDAD',
        status: false
      },
      AUXILIARADTVODENOMINAS: {
        category: 'puesto',
        value: 'AUXILIAR ADTVO DE NOMINAS',
        status: false
      },
      TECNICOESPDEAPLICACIONESYPLANTILLAS: {
        category: 'puesto',
        value: 'TECNICO ESP DE APLICACIONES Y PLANTILLAS',
        status: false
      },
      ESPECIALISTAENADMONCONTABLEDEIMPORT: {
        category: 'puesto',
        value: 'ESPECIALISTA EN ADMON CONTABLE DE IMPORT',
        status: false
      },
      JEFEDEMEJORADECOSTOSDEMO: {
        category: 'puesto',
        value: 'JEFE DE MEJORA DE COSTOS DE MO',
        status: false
      },
      INGENIEROENSISTEMASDESARROLLO: {
        category: 'puesto',
        value: 'INGENIERO EN SISTEMAS DESARROLLO',
        status: false
      },
      ABASTECEDORMONTADO: { category: 'puesto', value: 'ABASTECEDOR MONTADO', status: false },
      PULIDOR: { category: 'puesto', value: 'PULIDOR', status: false },
      CONTADOR: { category: 'puesto', value: 'CONTADOR', status: false },
      JEFEDECOMPRASVARIOSYSINTETICOS: {
        category: 'puesto',
        value: 'JEFE DE COMPRAS VARIOS Y SINTETICOS',
        status: false
      },
      COSEDOR: { category: 'puesto', value: 'COSEDOR', status: false },
      'ENFERMERO(A)': { category: 'puesto', value: 'ENFERMERO(A)', status: false },
      AUXILIARDEALMACENDEMATERIALES: {
        category: 'puesto',
        value: 'AUXILIAR DE ALMACEN DE MATERIALES',
        status: false
      },
      COORDINADORDEDESARROLLODECOSTEO: {
        category: 'puesto',
        value: 'COORDINADOR DE DESARROLLO DE COSTEO',
        status: false
      },
      INGENIEROESPCOORDDEPLANTASINTERNAS: {
        category: 'puesto',
        value: 'INGENIERO ESP COORD DE PLANTAS INTERNAS',
        status: false
      },
      AJUSTADORDEMOLDES: { category: 'puesto', value: 'AJUSTADOR DE MOLDES', status: false },
      GERENTEDESEGURIDADPATRIMONIAL: {
        category: 'puesto',
        value: 'GERENTE DE SEGURIDAD PATRIMONIAL',
        status: false
      },
      JEFEDEATRACYDESPNALCLAVEYCRITICO: {
        category: 'puesto',
        value: 'JEFE DE ATRAC Y DES PNAL CLAVE Y CRITICO',
        status: false
      },
      COORDINADOROPERATIVODECOMEDORES: {
        category: 'puesto',
        value: 'COORDINADOR OPERATIVO DE COMEDORES',
        status: false
      },
      MONITORISTADECONTROLDEACCESOS: {
        category: 'puesto',
        value: 'MONITORISTA DE CONTROL DE ACCESOS',
        status: false
      },
      COORDINADORDECOMUNICACIONINTERNA: {
        category: 'puesto',
        value: 'COORDINADOR DE COMUNICACION INTERNA',
        status: false
      },
      ASISTENTEDEDIRECCIONGENERAL: {
        category: 'puesto',
        value: 'ASISTENTE DE DIRECCION GENERAL',
        status: false
      },
      TECNICODEMETROLOGIA: { category: 'puesto', value: 'TECNICO DE METROLOGIA', status: false },
      GERENTEDECALIDADMATERIASPRIMAS: {
        category: 'puesto',
        value: 'GERENTE DE CALIDAD MATERIAS PRIMAS',
        status: false
      },
      OPERADORDEMAQUINAETIQUETAS: {
        category: 'puesto',
        value: 'OPERADOR DE MAQUINA ETIQUETAS',
        status: false
      },
      INGENIEROESPECIALISTADECALIDAD: {
        category: 'puesto',
        value: 'INGENIERO ESPECIALISTA DE CALIDAD',
        status: false
      },
      TECNICOENMANTENIMIENTODELCLUB: {
        category: 'puesto',
        value: 'TECNICO EN MANTENIMIENTO DEL CLUB',
        status: false
      },
      TECNICOENDESARROLLODEPIELES: {
        category: 'puesto',
        value: 'TECNICO EN DESARROLLO DE PIELES',
        status: false
      },
      AUXILIARDECALIDAD: { category: 'puesto', value: 'AUXILIAR DE CALIDAD', status: false },
      LIDERDEPROYECTO: { category: 'puesto', value: 'LIDER DE PROYECTO', status: false },
      ADMINISTRADORDEPRODUCTOCABALLERO: {
        category: 'puesto',
        value: 'ADMINISTRADOR DE PRODUCTO CABALLERO',
        status: false
      },
      DISENADORDEIMAGENINSTITUCIONALYPUBL: {
        category: 'puesto',
        value: 'DISEÑADOR DE IMAGEN INSTITUCIONAL Y PUBL',
        status: false
      },
      AUXILIARADMTVODEATRACCIONTALENTO: {
        category: 'puesto',
        value: 'AUXILIAR ADMTVO DE ATRACCION TALENTO',
        status: false
      },
      AUXILIARADTVODERECURSOSHUMANOS: {
        category: 'puesto',
        value: 'AUXILIAR ADTVO DE RECURSOS HUMANOS',
        status: false
      },
      AUXILIARTECNICODEDLLOMAQUINARIA: {
        category: 'puesto',
        value: 'AUXILIAR TECNICO DE DLLO MAQUINARIA',
        status: false
      },
      MAQUETERO: { category: 'puesto', value: 'MAQUETERO', status: false },
      SUPERVISORDEMTTOBANDASROBOTIZADAS: {
        category: 'puesto',
        value: 'SUPERVISOR DE MTTO BANDAS ROBOTIZADAS',
        status: false
      },
      INSTRUCTORDECAPACITACIONEXTERNAYPM: {
        category: 'puesto',
        value: 'INSTRUCTOR DE CAPACITACION EXTERNA Y PM',
        status: false
      },
      COORDINADORDEEDUCACION: {
        category: 'puesto',
        value: 'COORDINADOR DE EDUCACION',
        status: false
      },
      ADMINISTRADORDEPROYECTOS: {
        category: 'puesto',
        value: 'ADMINISTRADOR DE PROYECTOS',
        status: false
      },
      COORDINADORDEEQUIPOSESPECIALES: {
        category: 'puesto',
        value: 'COORDINADOR DE EQUIPOS ESPECIALES',
        status: false
      },
      AUXILIARDECAJAYFONDODEAHORRO: {
        category: 'puesto',
        value: 'AUXILIAR DE CAJA Y FONDO DE AHORRO',
        status: false
      },
      DIRECTORDEDISENO: { category: 'puesto', value: 'DIRECTOR DE DISEÑO', status: false },
      JEFETECNICODEPROCESOSESPECIALES: {
        category: 'puesto',
        value: 'JEFE TECNICO DE PROCESOS ESPECIALES',
        status: false
      },
      GERENTEDEATRACCYDESDETALENTO: {
        category: 'puesto',
        value: 'GERENTE DE ATRACC Y DES DE TALENTO',
        status: false
      },
      GERENTEDERECURSOSHUMANOSOPERACIONES: {
        category: 'puesto',
        value: 'GERENTE DE RECURSOS HUMANOS OPERACIONES',
        status: false
      },
      TECNICOESPECIALISTAENCAPACITACION: {
        category: 'puesto',
        value: 'TECNICO ESPECIALISTA EN CAPACITACION',
        status: false
      },
      COORDINADORDEATENCIONACLIENTESTRAF: {
        category: 'puesto',
        value: 'COORDINADOR DE ATENCION A CLIENTES TRAF',
        status: false
      },
      AUXILIARADMINISTRATIVODERECEPCION: {
        category: 'puesto',
        value: 'AUXILIAR ADMINISTRATIVO DE RECEPCION',
        status: false
      },
      COORDINADORDEENVIOSMARCASINTLS: {
        category: 'puesto',
        value: 'COORDINADOR DE ENVIOS MARCAS INTLS',
        status: false
      },
      JEFEDEATRACYDESPERSONALINDIRECTO: {
        category: 'puesto',
        value: 'JEFE DE ATRAC Y DES PERSONAL INDIRECTO',
        status: false
      },
      TECNICOMODELISTADEPLANTAS: {
        category: 'puesto',
        value: 'TECNICO MODELISTA DE PLANTAS',
        status: false
      },
      COORDINADORDEESPYPLANEACIONDEPROD: {
        category: 'puesto',
        value: 'COORDINADOR DE ESP Y PLANEACION DE PROD',
        status: false
      },
      ADMINISTRADORDECONTROLINTERNO: {
        category: 'puesto',
        value: 'ADMINISTRADOR DE CONTROL INTERNO',
        status: false
      },
      DIRECTOREJECUTIVODEGESTIONDETALENTO: {
        category: 'puesto',
        value: 'DIRECTOR EJECUTIVO DE GESTION DE TALENTO',
        status: false
      },
      INGENIEROESPECIALISTALEAN: {
        category: 'puesto',
        value: 'INGENIERO ESPECIALISTA LEAN',
        status: false
      },
      COORDINADORADTVODECAPACITACION: {
        category: 'puesto',
        value: 'COORDINADOR ADTVO DE CAPACITACION',
        status: false
      },
      DESPACHADORAEREO: { category: 'puesto', value: 'DESPACHADOR AEREO', status: false },
      DIRECTORDEMTTOYSERVICIOSGENERALES: {
        category: 'puesto',
        value: 'DIRECTOR DE MTTO Y SERVICIOS GENERALES',
        status: false
      },
      AUXILIARDECOMPRASVARSINTYAVIOS: {
        category: 'puesto',
        value: 'AUXILIAR DE COMPRAS VAR SINT Y AVIOS',
        status: false
      },
      HEADOFMARKETINGDIGITAL: {
        category: 'puesto',
        value: 'HEAD OF MARKETING DIGITAL',
        status: false
      },
      DIRECTORJURIDICO: { category: 'puesto', value: 'DIRECTOR JURIDICO', status: false },
      DIRECTOREJECUTIVODEDISYDESDELPROD: {
        category: 'puesto',
        value: 'DIRECTOR EJECUTIVO DE DIS Y DES DEL PROD',
        status: false
      },
      DIRECTOREJMERCADOTECNIAYCOMERCIAL: {
        category: 'puesto',
        value: 'DIRECTOR EJ MERCADOTECNIA Y COMERCIAL',
        status: false
      },
      ESPECIALISTAENMERCADOTECNIADIGITAL: {
        category: 'puesto',
        value: 'ESPECIALISTA EN MERCADOTECNIA DIGITAL',
        status: false
      },
      ANALISTAJURIDICO: { category: 'puesto', value: 'ANALISTA JURIDICO', status: false },
      DISENADORDETENDENCIAS: {
        category: 'puesto',
        value: 'DISEÑADOR DE TENDENCIAS',
        status: false
      },
      ANALISTACOMERCIALYDEMARKETING: {
        category: 'puesto',
        value: 'ANALISTA COMERCIAL Y DE MARKETING',
        status: false
      },
      INGENIERODESOPORTESISTEMAS: {
        category: 'puesto',
        value: 'INGENIERO DE SOPORTE SISTEMAS',
        status: false
      },
      ADMINISTRADORCOMERCIAL: {
        category: 'puesto',
        value: 'ADMINISTRADOR COMERCIAL',
        status: false
      },
      JEFEDECEDISMATERIAPRIMA: {
        category: 'puesto',
        value: 'JEFE DE CEDIS MATERIA PRIMA',
        status: false
      },
      TALENTOENDESARROLLO: { category: 'puesto', value: 'TALENTO EN DESARROLLO', status: false },
      JEFEDEINVERSIONESYSEGUROS: {
        category: 'puesto',
        value: 'JEFE DE INVERSIONES Y SEGUROS',
        status: false
      },
      JEFEDEDESARROLLODEPROVEEDORES: {
        category: 'puesto',
        value: 'JEFE DE DESARROLLO DE PROVEEDORES',
        status: false
      },
      LIDERDEPROYECTOINTERNACIONALDYD: {
        category: 'puesto',
        value: 'LIDER DE PROYECTO INTERNACIONAL DYD',
        status: false
      },
      ANALISTABUSINESSINTELLIGENCE: {
        category: 'puesto',
        value: 'ANALISTA BUSINESS INTELLIGENCE',
        status: false
      },
      COORDINADORDECONTABILIDADPARTESREL: {
        category: 'puesto',
        value: 'COORDINADOR DE CONTABILIDAD PARTES REL',
        status: false
      },
      COORDINADORDELSISTEMADEGTNAMBIENTAL: {
        category: 'puesto',
        value: 'COORDINADOR DEL SISTEMA DE GTN AMBIENTAL',
        status: false
      },
      GESTORJURIDICO: { category: 'puesto', value: 'GESTOR JURIDICO', status: false },
      ESPECIALISTAJURIDICO: { category: 'puesto', value: 'ESPECIALISTA JURIDICO', status: false },
      JEFEDECONTABILIDAD: { category: 'puesto', value: 'JEFE DE CONTABILIDAD', status: false },
      AUXILIARTECNICODECOSTEODELPRODUCTO: {
        category: 'puesto',
        value: 'AUXILIAR TECNICO DE COSTEO DEL PRODUCTO',
        status: false
      },
      INGENIERODEPROCESOSCEDIS: {
        category: 'puesto',
        value: 'INGENIERO DE PROCESOS CEDIS',
        status: false
      },
      AUXILIARTECNICODEPRODUCTO: {
        category: 'puesto',
        value: 'AUXILIAR TECNICO DE PRODUCTO',
        status: false
      },
      DISENADORDEIMAGENYBRANDING: {
        category: 'puesto',
        value: 'DISEÑADOR DE IMAGEN Y BRANDING',
        status: false
      },
      INGENIERODEPLANEACIONDEMATERIALES: {
        category: 'puesto',
        value: 'INGENIERO DE PLANEACION DE MATERIALES',
        status: false
      },
      COORDINADORDLLOSOCYRELCOMUNITARIO: {
        category: 'puesto',
        value: 'COORDINADOR DLLO SOC Y REL COMUNITARIO',
        status: false
      },
      AUXILIARTECNICOREVDEPIELIMPORTADA: {
        category: 'puesto',
        value: 'AUXILIAR TECNICO REV DE PIEL IMPORTADA',
        status: false
      },
      JEFEDEDESARROLLODEMUESTRAS: {
        category: 'puesto',
        value: 'JEFE DE DESARROLLO DE MUESTRAS',
        status: false
      },
      AUXILIARADMINISTRATIVODECAPACITACION: {
        category: 'puesto',
        value: 'AUXILIAR ADMINISTRATIVO DE CAPACITACION',
        status: false
      },
      SANDBLASTEADOR: { category: 'puesto', value: 'SANDBLASTEADOR', status: false },
      JEFEDESISTEMASRETAIL: {
        category: 'puesto',
        value: 'JEFE DE SISTEMAS RETAIL',
        status: false
      },
      COORDINADORDESISTEMASRETAIL: {
        category: 'puesto',
        value: 'COORDINADOR DE SISTEMAS RETAIL',
        status: false
      },
      AUXILIARDEMAQUINA: { category: 'puesto', value: 'AUXILIAR DE MAQUINA', status: false },
      DIRECTORDEPLANEACIONDEOPERACIONES: {
        category: 'puesto',
        value: 'DIRECTOR DE PLANEACION DE OPERACIONES',
        status: false
      },
      GERENTEDEDESMATPIELESYACABADOS: {
        category: 'puesto',
        value: 'GERENTE DE DES MAT PIELES Y ACABADOS',
        status: false
      },
      INGENIEROESPECIALISTADEPROYECTOSDYD: {
        category: 'puesto',
        value: 'INGENIERO ESPECIALISTA DE PROYECTOS DYD',
        status: false
      },
      RESPONSABLEDEDISENOQUIRELLI: {
        category: 'puesto',
        value: 'RESPONSABLE DE DISENO QUIRELLI',
        status: false
      },
      COORDINADORDEPROCESOSESPECIALESPROD: {
        category: 'puesto',
        value: 'COORDINADOR DE PROCESOS ESPECIALES PROD',
        status: false
      },
      TECNICODEIMPUESTOSDENOMINA: {
        category: 'puesto',
        value: 'TECNICO DE IMPUESTOS DE NOMINA',
        status: false
      },
      GERENTECOMERCIAL: { category: 'puesto', value: 'GERENTE COMERCIAL', status: false },
      INGENIEROESPDESERVPLANTASYMAQUILAS: {
        category: 'puesto',
        value: 'INGENIERO ESP DE SERV PLANTAS Y MAQUILAS',
        status: false
      },
      AUXILIARDLLOSOCIALYRELCOMUNITARIO: {
        category: 'puesto',
        value: 'AUXILIAR DLLO SOCIAL Y REL COMUNITARIO',
        status: false
      },
      ADMINISTRADORDEPRODUCTO: {
        category: 'puesto',
        value: 'ADMINISTRADOR DE PRODUCTO',
        status: false
      },
      ELECTROMECANICODECORTE: {
        category: 'puesto',
        value: 'ELECTROMECANICO DE CORTE',
        status: false
      },
      DIRECTORINTERNACIONAL: {
        category: 'puesto',
        value: 'DIRECTOR INTERNACIONAL',
        status: false
      },
      ADMINISTRADORDEPEDIDOSYOPPL: {
        category: 'puesto',
        value: 'ADMINISTRADOR DE PEDIDOS Y OP PL',
        status: false
      },
      TECNICOESPECIALISTADECONTABILIDAD: {
        category: 'puesto',
        value: 'TECNICO ESPECIALISTA DE CONTABILIDAD',
        status: false
      },
      COMMUNITYMANAGER: { category: 'puesto', value: 'COMMUNITY MANAGER', status: false },
      JEFEDERECLUTAMIENTOORIENTAL: {
        category: 'puesto',
        value: 'JEFE DE RECLUTAMIENTO ORIENTAL',
        status: false
      },
      ELECTROMECANICODEBANDASROBOTIZADAS: {
        category: 'puesto',
        value: 'ELECTROMECANICO DE BANDAS ROBOTIZADAS',
        status: false
      },
      GERENTEDEMARKETING: { category: 'puesto', value: 'GERENTE DE MARKETING', status: false },
      JEFEDELABORATORIO: { category: 'puesto', value: 'JEFE DE LABORATORIO', status: false }
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
    filtersR['puesto'].forEach(item=>{
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
           
            {<Pagination size="md"><Pagination.Prev onClick = {e=>handlePrevious()} />
            <Pagination.Item>{'Filtros Disponibles'}</Pagination.Item>
    <Pagination.Next onClick = {e=>handleNext()} /></Pagination>}
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