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
    const [all, setAll] = useState(false)
    let [form, setForm] = useState({
      planta:[],
      segmentoPoblacion:[],
      razonSocial:[],
      puesto:[],
      ubicacion:[]
    })
    const [checks, setChecks] = useState({  
        CEDIS: {
            category: "ubicacion",
            value: "CEDIS",
            status: false
        },
        CLUB: {
            category: "ubicacion",
            value: "CLUB",
            status: false
        },
        GUADALAJARA: {
            category: "ubicacion",
            value: "GUADALAJARA",
            status: false
        },
        LEON: {
            category: "ubicacion",
            value: "LEON",
            status: false
        },
        LOSMOCHIS: {
            category: "ubicacion",
            value: "LOS MOCHIS",
            status: false
        },
        MEXICO: {
            category: "ubicacion",
            value: "MEXICO",
            status: false
        },
        MONTERREY: {
            category: "ubicacion",
            value: "MONTERREY",
            status: false
        },
        ORIENTAL: {
            category: "ubicacion",
            value: "ORIENTAL",
            status: false
        },
        PROCESOSESPECIALES: {
            category: "ubicacion",
            value: "PROCESOS ESPECIALES",
            status: false
        },
        PUEBLA: {
            category: "ubicacion",
            value: "PUEBLA",
            status: false
        },
        SANDIEGODELAUNION: {
            category: "ubicacion",
            value: "SAN DIEGO DE LA UNION",
            status: false
        },
        SANJOSEELALTO: {
            category: "ubicacion",
            value: "SAN JOSE EL ALTO",
            status: false
        },
        SANLUISDELAPAZ: {
            category: "ubicacion",
            value: "SAN LUIS DE LA PAZ",
            status: false
        },
        STIVA: {
            category: "ubicacion",
            value: "STIVA",
            status: false
        },
        UXMAL: {
            category: "ubicacion",
            value: "UXMAL",
            status: false
        },
        

       
    ///////////////////////////////////////////////////
    SERVICIOSADMINISTRATIVOSDESCENTRALIZADOSSADECV: {
      category: "razonSocial",
      value: "SERVICIOS ADMINISTRATIVOS DESCENTRALIZADOS S.A. DE C.V",
      status: false
  },
  INTERCALZADELEONSADECV: {
      category: "razonSocial",
      value: "INTERCALZA DE LEON S.A. DE C.V .",
      status: false
  },
  SERVICIOSTECNOLOGICOSEMPRESARIALESSADECV: {
      category: "razonSocial",
      value: "SERVICIOS TECNOLOGICOS EMPRESARIALES S.A DE C.V.",
      status: false
  },
  ProveeduriaInternacionaldeLeonSAdeCV: {
      category: "razonSocial",
      value: "Proveeduria Internacional de Leon S.A. de C.V.",
      status: false
  },
  DIVISIONCORPORATIVAFLEXISADECV: {
      category: "razonSocial",
      value: "DIVISION CORPORATIVA FLEXI S.A . DE C.V.",
      status: false
  },
  ADMINISTRACIONYOPERACIONPROFESIONALSADECV: {
      category: "razonSocial",
      value: "ADMINISTRACION Y OPERACION PROFESIONAL S.A. DE C.V.",
      status: false
  },
  RECREATIVIDADSOCIALANDROMEDASC: {
      category: "razonSocial",
      value: "RECREATIVIDAD SOCIAL ANDROMEDA  SC",
      status: false
  },
  MAQUILADORAUXMALSADECV: {
      category: "razonSocial",
      value: "MAQUILADORA UXMAL S.A. DE C.V.",
      status: false
  },
  NUTRIBIENSADECV: {
      category: "razonSocial",
      value: "NUTRIBIEN S.A. DE C.V.",
      status: false
  },
  DISTRIBUIDORAFLEXISADECV: {
      category: "razonSocial",
      value: "DISTRIBUIDORA FLEXI S.A DE C.V",
      status: false
  },
  DistribuidoraModaScarpaSAPIdeCV: {
      category: "razonSocial",
      value: "Distribuidora Moda Scarpa  S.A.P.I. de C.V.",
      status: false
  },
  MAQUILADORAZAPATERASANLUISSADECV: {
      category: "razonSocial",
      value: "MAQUILADORA ZAPATERA SAN LUIS S.A. DE C.V.",
      status: false
  },
  DistribuidoraQLISAPIdeCV: {
      category: "razonSocial",
      value: "Distribuidora QLI S A P I de  C.V.",
      status: false
  },
  TransportesAeronauticosdelBajioSAdeCV: {
      category: "razonSocial",
      value: "Transportes Aeronauticos del Bajio S.A. de C.V.",
      status: false
  },
  PUESTOSCRITICOS: {
      category: "segmentoPoblacion",
      value: "PUESTOS CRITICOS",
      status: false
  },
  MANDOSMEDIOS: {
      category: "segmentoPoblacion",
      value: "MANDOS MEDIOS",
      status: false
  },
  PUESTOSCLAVE: {
      category: "segmentoPoblacion",
      value: "PUESTOS CLAVE",
      status: false
  },
  OPERATIVOSDESERVICIO: {
      category: "segmentoPoblacion",
      value: "OPERATIVOS DE SERVICIO",
      status: false
  },
  ADMINISTRATIVOS: {
      category: "segmentoPoblacion",
      value: "ADMINISTRATIVOS",
      status: false
  },
  MOI: {
      category: "segmentoPoblacion",
      value: "MOI",
      status: false
  },
  OPERATIVOSDEPRODUCCION: {
      category: "segmentoPoblacion",
      value: "OPERATIVOS DE PRODUCCION",
      status: false
  },
  MOD: {
      category: "segmentoPoblacion",
      value: "MOD",
      status: false
  },
  SUPERVISORES: {
      category: "segmentoPoblacion",
      value: "SUPERVISORES",
      status: false
  },
  DIRECTOR: {
      category: "segmentoPoblacion",
      value: "DIRECTOR",
      status: false
  },
  SEMILLEROS: {
      category: "segmentoPoblacion",
      value: "SEMILLEROS",
      status: false
  },
  ServiciosAdministrativosDesc: {
      category: "planta",
      value: "Servicios Administrativos Desc",
      status: false
  },
  SanCrispin: {
      category: "planta",
      value: "San Crispin",
      status: false
  },
  ServTecEmpresariales: {
      category: "planta",
      value: "Serv. Tec. Empresariales",
      status: false
  },
  ServiciosdeManufactura: {
      category: "planta",
      value: "Servicios de Manufactura",
      status: false
  },
  CentraldeMantenimiento: {
      category: "planta",
      value: "Central de Mantenimiento",
      status: false
  },
  Duende: {
      category: "planta",
      value: "Duende",
      status: false
  },
  PlantaTejido: {
      category: "planta",
      value: "Planta Tejido",
      status: false
  },
  TallerdeMuestras: {
      category: "planta",
      value: "Taller de Muestras",
      status: false
  },
  CentraldeCorte: {
      category: "planta",
      value: "Central de Corte",
      status: false
  },
  IntercalzadeLeon: {
      category: "planta",
      value: "Intercalza de Leon",
      status: false
  },
  ProvInternaldeLeon: {
      category: "planta",
      value: "Prov. Internal. de Leon",
      status: false
  },
  DivisionCorporativa: {
      category: "planta",
      value: "Division Corporativa",
      status: false
  },
  AdmonyOpProf: {
      category: "planta",
      value: "Admon y Op. Prof",
      status: false
  },
  Protec: {
      category: "planta",
      value: "Protec",
      status: false
  },
  Protec2: {
      category: "planta",
      value: "Protec 2",
      status: false
  },
  RecreatividadSocialAndromeda: {
      category: "planta",
      value: "Recreatividad Social Andromeda",
      status: false
  },
  Uxmal: {
      category: "planta",
      value: "Uxmal",
      status: false
  },
  DuendeLean: {
      category: "planta",
      value: "Duende Lean",
      status: false
  },
  Nutribien: {
      category: "planta",
      value: "Nutribien",
      status: false
  },
  DistribuidoraFlexi: {
      category: "planta",
      value: "Distribuidora Flexi",
      status: false
  },
  UnionSanAntonio: {
      category: "planta",
      value: "Union San Antonio",
      status: false
  },
  DistribuidoraModaScarpa: {
      category: "planta",
      value: "Distribuidora Moda Scarpa",
      status: false
  },
  MaqZapateraSanLuis: {
      category: "planta",
      value: "Maq. Zapatera San Luis",
      status: false
  },
  DistribuidoraQLI: {
      category: "planta",
      value: "Distribuidora QLI",
      status: false
  },
  SanDiegodelaUnion: {
      category: "planta",
      value: "San Diego de la Union",
      status: false
  },
  MaquiladoraUXMALQLI: {
      category: "planta",
      value: "Maquiladora UXMAL-QLI",
      status: false
  },
  TransAerondelBajioSAdeCV: {
      category: "planta",
      value: "Trans Aeron del Bajio SA de CV",
      status: false
  },
  DISENADORLINEBUILDER: {
      category: "puesto",
      value: "DISEÑADOR LINE BUILDER",
      status: false
  },
  SUPERVISORDEPESPUNTE: {
      category: "puesto",
      value: "SUPERVISOR DE PESPUNTE",
      status: false
  },
  GERENTEDECENTRALDEMANTENIMIENTO: {
      category: "puesto",
      value: "GERENTE DE CENTRAL DE MANTENIMIENTO",
      status: false
  },
  ELECTROMECANICODEPESPUNTE: {
      category: "puesto",
      value: "ELECTROMECANICO DE PESPUNTE",
      status: false
  },
  AUXILIARADMINISTRATIVODEREFACCIONES: {
      category: "puesto",
      value: "AUXILIAR ADMINISTRATIVO DE REFACCIONES",
      status: false
  },
  ELECTROMECANICOENMAQDECOSTURAMONT: {
      category: "puesto",
      value: "ELECTROMECANICO EN MAQ DE COSTURA MONT",
      status: false
  },
  PRELIMINARDEMONTADO: {
      category: "puesto",
      value: "PRELIMINAR DE MONTADO",
      status: false
  },
  TEJEDOR: {
      category: "puesto",
      value: "TEJEDOR",
      status: false
  },
  CONFORMADOR: {
      category: "puesto",
      value: "CONFORMADOR",
      status: false
  },
  SUAJADORDEAVIOS: {
      category: "puesto",
      value: "SUAJADOR DE AVIOS",
      status: false
  },
  PRELIMINARDECORTE: {
      category: "puesto",
      value: "PRELIMINAR DE CORTE",
      status: false
  },
  TABULADORDEPIEL: {
      category: "puesto",
      value: "TABULADOR DE PIEL",
      status: false
  },
  PIOCHERO: {
      category: "puesto",
      value: "PIOCHERO",
      status: false
  },
  SUPERVISORDEMANTENIMIENTOPESPUNTE: {
      category: "puesto",
      value: "SUPERVISOR DE MANTENIMIENTO PESPUNTE",
      status: false
  },
  ALMACENISTADEMATERIALES: {
      category: "puesto",
      value: "ALMACENISTA DE MATERIALES",
      status: false
  },
  JEFEDETRAFICODEENTREGASCONSOLIDADAS: {
      category: "puesto",
      value: "JEFE DE TRAFICO DE ENTREGAS CONSOLIDADAS",
      status: false
  },
  JEFEDECREDITOYCOBRANZAPROVINCIA: {
      category: "puesto",
      value: "JEFE DE CREDITO Y COBRANZA PROVINCIA",
      status: false
  },
  DIRECTORDETESORERIA: {
      category: "puesto",
      value: "DIRECTOR DE TESORERIA",
      status: false
  },
  AUXILIARADMINISTRATIVODG: {
      category: "puesto",
      value: "AUXILIAR ADMINISTRATIVO DG",
      status: false
  },
  AUXILIARTECNICOENCONTROLDEACTIVOS: {
      category: "puesto",
      value: "AUXILIAR TECNICO EN CONTROL DE ACTIVOS",
      status: false
  },
  GERENTEDECUENTASPORCOBRAR: {
      category: "puesto",
      value: "GERENTE DE CUENTAS POR COBRAR",
      status: false
  },
  SUPERVISORDEADORNO: {
      category: "puesto",
      value: "SUPERVISOR DE ADORNO",
      status: false
  },
  COMPLETADOR: {
      category: "puesto",
      value: "COMPLETADOR",
      status: false
  },
  JARDINERO: {
      category: "puesto",
      value: "JARDINERO",
      status: false
  },
  MUESTRERO: {
      category: "puesto",
      value: "MUESTRERO",
      status: false
  },
  AUXILIARDEPRODUCCION: {
      category: "puesto",
      value: "AUXILIAR DE PRODUCCION",
      status: false
  },
  SUPERVISORDEMONTADOYADORNO: {
      category: "puesto",
      value: "SUPERVISOR DE MONTADO Y ADORNO",
      status: false
  },
  PESPUNTADOR: {
      category: "puesto",
      value: "PESPUNTADOR",
      status: false
  },
  MONTADOR: {
      category: "puesto",
      value: "MONTADOR",
      status: false
  },
  ADMINISTRADORDEDEPTOINVENTARIOS: {
      category: "puesto",
      value: "ADMINISTRADOR DE DEPTO (INVENTARIOS)",
      status: false
  },
  SUPERVISORDEINYECCION: {
      category: "puesto",
      value: "SUPERVISOR DE INYECCION",
      status: false
  },
  INSPECTORDECALIDAD: {
      category: "puesto",
      value: "INSPECTOR DE CALIDAD",
      status: false
  },
  CORTADORDEFORROSYSINTETICOS: {
      category: "puesto",
      value: "CORTADOR DE FORROS Y SINTETICOS",
      status: false
  },
  REBAJADORDEAVIOS: {
      category: "puesto",
      value: "REBAJADOR DE AVIOS",
      status: false
  },
  TECNICOMODELISTADEIMPLEMENTACION: {
      category: "puesto",
      value: "TECNICO MODELISTA DE IMPLEMENTACION",
      status: false
  },
  PRELIMINARDEADORNO: {
      category: "puesto",
      value: "PRELIMINAR DE ADORNO",
      status: false
  },
  SUPERVISORDEMANTENIMIENTOGENERAL: {
      category: "puesto",
      value: "SUPERVISOR DE MANTENIMIENTO GENERAL",
      status: false
  },
  ESPECIALISTAENATNAULTIMOCONSUMIDOR: {
      category: "puesto",
      value: "ESPECIALISTA EN ATN A ULTIMO CONSUMIDOR",
      status: false
  },
  PRELIMINARDEPESPUNTE: {
      category: "puesto",
      value: "PRELIMINAR DE PESPUNTE",
      status: false
  },
  CALZADOR: {
      category: "puesto",
      value: "CALZADOR",
      status: false
  },
  JEFEDECOMPRASSUELAS: {
      category: "puesto",
      value: "JEFE DE COMPRAS SUELAS",
      status: false
  },
  SUPERVISORDEIMPLEMENTACION: {
      category: "puesto",
      value: "SUPERVISOR DE IMPLEMENTACION",
      status: false
  },
  SUPERVISORDECOMEDOR: {
      category: "puesto",
      value: "SUPERVISOR DE COMEDOR",
      status: false
  },
  AGENTEDEVENTAS: {
      category: "puesto",
      value: "AGENTE DE VENTAS",
      status: false
  },
  CORTADORDEPIEL: {
      category: "puesto",
      value: "CORTADOR DE PIEL",
      status: false
  },
  AUDITORDECALIDAD: {
      category: "puesto",
      value: "AUDITOR DE CALIDAD",
      status: false
  },
  ADORNADORA: {
      category: "puesto",
      value: "ADORNADORA",
      status: false
  },
  JEFEDECOMEDOR: {
      category: "puesto",
      value: "JEFE DE COMEDOR",
      status: false
  },
  COORDINADORDEMAQUILASRURALES: {
      category: "puesto",
      value: "COORDINADOR DE MAQUILAS RURALES",
      status: false
  },
  SECRETARIADETESORERIA: {
      category: "puesto",
      value: "SECRETARIA DE TESORERIA",
      status: false
  },
  REBAJADORDEPIEL: {
      category: "puesto",
      value: "REBAJADOR DE PIEL",
      status: false
  },
  SUPERVISORDESUAJES: {
      category: "puesto",
      value: "SUPERVISOR DE SUAJES",
      status: false
  },
  SUPERVISORDECORTEYCOORDINADO: {
      category: "puesto",
      value: "SUPERVISOR DE CORTE Y COORDINADO",
      status: false
  },
  CARDADOR: {
      category: "puesto",
      value: "CARDADOR",
      status: false
  },
  PEGADOR: {
      category: "puesto",
      value: "PEGADOR",
      status: false
  },
  COORDINADORDEADMONDEMAQUILAS: {
      category: "puesto",
      value: "COORDINADOR DE ADMON DE MAQUILAS",
      status: false
  },
  LABORATORISTA: {
      category: "puesto",
      value: "LABORATORISTA",
      status: false
  },
  JEFEDEDESARROLLODESISTEMAS: {
      category: "puesto",
      value: "JEFE DE DESARROLLO DE SISTEMAS",
      status: false
  },
  SUAJERO: {
      category: "puesto",
      value: "SUAJERO",
      status: false
  },
  AUXILIARADMINISTRATIVODEPLANEACIONTI: {
      category: "puesto",
      value: "AUXILIAR ADMINISTRATIVO DE PLANEACION TI",
      status: false
  },
  OPERADORDEPESPUNTEAUTOMATIZADO: {
      category: "puesto",
      value: "OPERADOR DE PESPUNTE AUTOMATIZADO",
      status: false
  },
  GALOPINACOCINERA: {
      category: "puesto",
      value: "GALOPINA COCINERA",
      status: false
  },
  COBRADOR: {
      category: "puesto",
      value: "COBRADOR",
      status: false
  },
  CONTADORESPECIALISTAENFISCAL: {
      category: "puesto",
      value: "CONTADOR ESPECIALISTA EN FISCAL",
      status: false
  },
  CHOFERLOCAL: {
      category: "puesto",
      value: "CHOFER LOCAL",
      status: false
  },
  GERENTEDEIMPLEMENTACION: {
      category: "puesto",
      value: "GERENTE DE IMPLEMENTACION",
      status: false
  },
  GERENTEDERELACIONESLABORALES: {
      category: "puesto",
      value: "GERENTE DE RELACIONES LABORALES",
      status: false
  },
  INGENIEROESPECIALISTADECONSUMOSDEMP: {
      category: "puesto",
      value: "INGENIERO ESPECIALISTA DE CONSUMOS DE MP",
      status: false
  },
  SECRETARIADEPLANTA: {
      category: "puesto",
      value: "SECRETARIA DE PLANTA",
      status: false
  },
  INGENIEROESPDEMEJORADECTOSDEMO: {
      category: "puesto",
      value: "INGENIERO ESP DE MEJORA DE CTOS DE MO",
      status: false
  },
  MEDICOLABORAL: {
      category: "puesto",
      value: "MEDICO LABORAL",
      status: false
  },
  SUPERVISORDEENTREGADEMATERIALES: {
      category: "puesto",
      value: "SUPERVISOR DE ENTREGA DE MATERIALES",
      status: false
  },
  JEFEDEPROCESOMONTADO: {
      category: "puesto",
      value: "JEFE DE PROCESO MONTADO",
      status: false
  },
  JEFEDECALIDADCOMERCIAL: {
      category: "puesto",
      value: "JEFE DE CALIDAD COMERCIAL",
      status: false
  },
  JEFEDEIMPLEMENTACION: {
      category: "puesto",
      value: "JEFE DE IMPLEMENTACION",
      status: false
  },
  COORDINADORDESISTEMASYBASEDEDATOS: {
      category: "puesto",
      value: "COORDINADOR DE SISTEMAS Y BASE DE DATOS",
      status: false
  },
  TECNICOENPROGRAMACIONYSAP: {
      category: "puesto",
      value: "TECNICO EN PROGRAMACION Y SAP",
      status: false
  },
  SUPERVISORDESURTIDOYEMPAQUE: {
      category: "puesto",
      value: "SUPERVISOR DE SURTIDO Y EMPAQUE",
      status: false
  },
  TECNICOESPECIALISTACUENTASPORPAGAR: {
      category: "puesto",
      value: "TECNICO ESPECIALISTA CUENTAS POR PAGAR",
      status: false
  },
  AUXILIARADMINISTRATIVODEVENTAS: {
      category: "puesto",
      value: "AUXILIAR ADMINISTRATIVO DE VENTAS",
      status: false
  },
  INGENIEROESPECIALISTADECOSTOS: {
      category: "puesto",
      value: "INGENIERO ESPECIALISTA DE COSTOS",
      status: false
  },
  DIRECTORGENERALADJUNTO: {
      category: "puesto",
      value: "DIRECTOR GENERAL ADJUNTO",
      status: false
  },
  JEFEDEALMACENESDEMATERIAPRIMA: {
      category: "puesto",
      value: "JEFE DE ALMACENES DE MATERIA PRIMA",
      status: false
  },
  JEFEDECALIDAD: {
      category: "puesto",
      value: "JEFE DE CALIDAD",
      status: false
  },
  TECNICOENMANTENIMIENTODEEXTINTORES: {
      category: "puesto",
      value: "TECNICO EN MANTENIMIENTO DE EXTINTORES",
      status: false
  },
  SUPERVISORDECALIDAD: {
      category: "puesto",
      value: "SUPERVISOR DE CALIDAD",
      status: false
  },
  INGENIERODESOPORTESOFTWARECOMPRAS: {
      category: "puesto",
      value: "INGENIERO DE SOPORTE SOFTWARE COMPRAS",
      status: false
  },
  TECNICODEMEJORADECOSTOS: {
      category: "puesto",
      value: "TECNICO DE MEJORA DE COSTOS",
      status: false
  },
  DUENODEFABRICA: {
      category: "puesto",
      value: "DUENO DE FABRICA",
      status: false
  },
  GERENTEDEPLANTA: {
      category: "puesto",
      value: "GERENTE DE PLANTA",
      status: false
  },
  SUPERVISORDEMANTENIMIENTOINYECCION: {
      category: "puesto",
      value: "SUPERVISOR DE MANTENIMIENTO INYECCION",
      status: false
  },
  SUPERVISORDEACOMODO: {
      category: "puesto",
      value: "SUPERVISOR DE ACOMODO",
      status: false
  },
  COORDINADORDECyCGUADALAJARA: {
      category: "puesto",
      value: "COORDINADOR DE CyC GUADALAJARA",
      status: false
  },
  AUXILIARADMINISTRATIVODECEDIS: {
      category: "puesto",
      value: "AUXILIAR ADMINISTRATIVO DE CEDIS",
      status: false
  },
  SUPERVISORDEMANTENIMIENTOEDIFICIOS: {
      category: "puesto",
      value: "SUPERVISOR DE MANTENIMIENTO EDIFICIOS",
      status: false
  },
  RECEPCIONISTADEPIELESFORROSYCZAS: {
      category: "puesto",
      value: "RECEPCIONISTA DE PIELES FORROS Y CZAS",
      status: false
  },
  DIRECTORGENERAL: {
      category: "puesto",
      value: "DIRECTOR GENERAL",
      status: false
  },
  EMBARRADORDEMONTADO: {
      category: "puesto",
      value: "EMBARRADOR DE MONTADO",
      status: false
  },
  JEFEDEPLANTA: {
      category: "puesto",
      value: "JEFE DE PLANTA",
      status: false
  },
  GERENTEGESTIONESTRATEGICADEPROVEED: {
      category: "puesto",
      value: "GERENTE GESTION ESTRATEGICA DE PROVEED",
      status: false
  },
  TECNICODECONFORMADO: {
      category: "puesto",
      value: "TECNICO DE CONFORMADO",
      status: false
  },
  INGENIEROESPECIALISTADEPROCESOS: {
      category: "puesto",
      value: "INGENIERO ESPECIALISTA DE PROCESOS",
      status: false
  },
  TECNICODETORNO: {
      category: "puesto",
      value: "TECNICO DE TORNO",
      status: false
  },
  SUPERVISORDEPIELESFORROSYCARNAZAS: {
      category: "puesto",
      value: "SUPERVISOR DE PIELES FORROS Y CARNAZAS",
      status: false
  },
  AUDITORDEPIELB: {
      category: "puesto",
      value: "AUDITOR DE PIEL B",
      status: false
  },
  DIRECTOREJECUTIVODEPEYCTRLDEGEST: {
      category: "puesto",
      value: "DIRECTOR EJECUTIVO DE PE Y CTRL DE GEST",
      status: false
  },
  AFANADOR: {
      category: "puesto",
      value: "AFANADOR",
      status: false
  },
  GERENTEDEVENTAS: {
      category: "puesto",
      value: "GERENTE DE VENTAS",
      status: false
  },
  DISEAADORDEPRODUCTO: {
      category: "puesto",
      value: "DISEÃ‘ADOR DE PRODUCTO",
      status: false
  },
  PROGRAMADORKANBANPRODUCCION: {
      category: "puesto",
      value: "PROGRAMADOR KANBAN PRODUCCION",
      status: false
  },
  GERENTEDECONTROLDEGESTIONDELGRUPO: {
      category: "puesto",
      value: "GERENTE DE CONTROL DE GESTION DEL GRUPO",
      status: false
  },
  CENTRADOR: {
      category: "puesto",
      value: "CENTRADOR",
      status: false
  },
  COORDINADORDEREFACCIONES: {
      category: "puesto",
      value: "COORDINADOR DE REFACCIONES",
      status: false
  },
  SUPERVISORDEDESPACHO: {
      category: "puesto",
      value: "SUPERVISOR DE DESPACHO",
      status: false
  },
  JEFEDEPROCESOINYECCION: {
      category: "puesto",
      value: "JEFE DE PROCESO INYECCION",
      status: false
  },
  ADMINISTRADORDATAMANAGEMENT: {
      category: "puesto",
      value: "ADMINISTRADOR DATAMANAGEMENT",
      status: false
  },
  OPERADORDEMAQUINADESMA: {
      category: "puesto",
      value: "OPERADOR DE MAQUINA DESMA",
      status: false
  },
  AUDITORDECALCE: {
      category: "puesto",
      value: "AUDITOR DE CALCE",
      status: false
  },
  MECANICODELOGISTICADEPROYECTOS: {
      category: "puesto",
      value: "MECANICO DE LOGISTICA DE PROYECTOS",
      status: false
  },
  RECEPCIONISTA: {
      category: "puesto",
      value: "RECEPCIONISTA",
      status: false
  },
  ESTROBELERO: {
      category: "puesto",
      value: "ESTROBELERO",
      status: false
  },
  OPERADORDESISTEMAS: {
      category: "puesto",
      value: "OPERADOR DE SISTEMAS",
      status: false
  },
  SUPERVISORDEMANTENIMIENTOHERRERIA: {
      category: "puesto",
      value: "SUPERVISOR DE MANTENIMIENTO HERRERIA",
      status: false
  },
  AUXILIARADMINISTRATIVODEVARIOSYSINT: {
      category: "puesto",
      value: "AUXILIAR ADMINISTRATIVO DE VARIOS Y SINT",
      status: false
  },
  DIGITALIZADOR: {
      category: "puesto",
      value: "DIGITALIZADOR",
      status: false
  },
  COORDINADORDECyCMEXICO: {
      category: "puesto",
      value: "COORDINADOR DE CyC MEXICO",
      status: false
  },
  DIRECTORDECALIDADEINGDEPLANTA: {
      category: "puesto",
      value: "DIRECTOR DE CALIDAD E ING DE PLANTA",
      status: false
  },
  GERENTEDEPRODUCCIONINYECCIONDIRECTA: {
      category: "puesto",
      value: "GERENTE DE PRODUCCION INYECCION DIRECTA",
      status: false
  },
  JEFEDEPROCESOINYECCIONENFORMACION: {
      category: "puesto",
      value: "JEFE DE PROCESO INYECCION EN FORMACION",
      status: false
  },
  ASISTENTEADMINISTRATIVODECOMEDOR: {
      category: "puesto",
      value: "ASISTENTE ADMINISTRATIVO DE COMEDOR",
      status: false
  },
  ELECTROMECANICO: {
      category: "puesto",
      value: "ELECTROMECANICO",
      status: false
  },
  JEFEDEMAQUILAS: {
      category: "puesto",
      value: "JEFE DE MAQUILAS",
      status: false
  },
  GERENTEDEPRODUCTOCABALLEROYQLI: {
      category: "puesto",
      value: "GERENTE DE PRODUCTO CABALLERO Y QLI",
      status: false
  },
  EMBARCADORDESURTIDOYEMPAQUE: {
      category: "puesto",
      value: "EMBARCADOR DE SURTIDO Y EMPAQUE",
      status: false
  },
  COORDINADORDECURSOSDELCLUB: {
      category: "puesto",
      value: "COORDINADOR DE CURSOS DEL CLUB",
      status: false
  },
  ESPECIALISTAENSERVICIOACLIENTES: {
      category: "puesto",
      value: "ESPECIALISTA EN SERVICIO A CLIENTES",
      status: false
  },
  JEFEADMINISTRATIVODESERVCORPORATIVOS: {
      category: "puesto",
      value: "JEFE ADMINISTRATIVO DE SERV CORPORATIVOS",
      status: false
  },
  AUXILIARTECNICODEMOLDESYSUELAS: {
      category: "puesto",
      value: "AUXILIAR TECNICO DE MOLDES Y SUELAS",
      status: false
  },
  AUXILIARDEVENTAS: {
      category: "puesto",
      value: "AUXILIAR DE VENTAS",
      status: false
  },
  INGENIEROENSISTEMASDEOPERACION: {
      category: "puesto",
      value: "INGENIERO EN SISTEMAS DE OPERACION",
      status: false
  },
  GERENTEDEOPERACIONESDESISTEMAS: {
      category: "puesto",
      value: "GERENTE DE OPERACIONES DE SISTEMAS",
      status: false
  },
  SUPERVISORDEBODEGAGENERAL: {
      category: "puesto",
      value: "SUPERVISOR DE BODEGA GENERAL",
      status: false
  },
  GERENTEDECOMERCIOEXTERIOR: {
      category: "puesto",
      value: "GERENTE DE COMERCIO EXTERIOR",
      status: false
  },
  ADMINISTRADORDECUENTASCLAVE: {
      category: "puesto",
      value: "ADMINISTRADOR DE CUENTAS CLAVE",
      status: false
  },
  JEFEDEAUDITORIAINTERNA: {
      category: "puesto",
      value: "JEFE DE AUDITORIA INTERNA",
      status: false
  },
  SUPERVISORDEMTTOCORTEAUTOMATIZADO: {
      category: "puesto",
      value: "SUPERVISOR DE MTTO CORTE AUTOMATIZADO",
      status: false
  },
  SUPERVISORDECALIDADMATERIALESVARIOS: {
      category: "puesto",
      value: "SUPERVISOR DE CALIDAD MATERIALES VARIOS",
      status: false
  },
  JEFEDEDESARROLLOSOCIAL: {
      category: "puesto",
      value: "JEFE DE DESARROLLO SOCIAL",
      status: false
  },
  SECRETARIADECOMPRAS: {
      category: "puesto",
      value: "SECRETARIA DE COMPRAS",
      status: false
  },
  SUPERINTENDENTETECNICODEMAQUILAS: {
      category: "puesto",
      value: "SUPERINTENDENTE TECNICO DE MAQUILAS",
      status: false
  },
  ASISTENTEDEGERENCIAMANTENIMIENTO: {
      category: "puesto",
      value: "ASISTENTE DE GERENCIA MANTENIMIENTO",
      status: false
  },
  SUPERVISORDEMANTENIMIENTOTORNO: {
      category: "puesto",
      value: "SUPERVISOR DE MANTENIMIENTO TORNO",
      status: false
  },
  SUPERVISORDEMANTENIMIENTOELECTRICO: {
      category: "puesto",
      value: "SUPERVISOR DE MANTENIMIENTO ELECTRICO",
      status: false
  },
  JEFEDEMANTENIMIENTOPLANTASINYECCION: {
      category: "puesto",
      value: "JEFE DE MANTENIMIENTO PLANTAS INYECCION",
      status: false
  },
  PRODUCTMERCHANDISER: {
      category: "puesto",
      value: "PRODUCT MERCHANDISER",
      status: false
  },
  COORDINADORDEMAQUILASPROCESPECIALES: {
      category: "puesto",
      value: "COORDINADOR DE MAQUILAS PROC ESPECIALES",
      status: false
  },
  COORDINADORDESOPORTETECNICOSISTEMAS: {
      category: "puesto",
      value: "COORDINADOR DE SOPORTE TECNICO SISTEMAS",
      status: false
  },
  JEFEDEREGIONPROMOTORIADEMARCA: {
      category: "puesto",
      value: "JEFE DE REGION PROMOTORIA DE MARCA",
      status: false
  },
  AUXILIARADMINISTRATIVODECYC: {
      category: "puesto",
      value: "AUXILIAR ADMINISTRATIVO DE CYC",
      status: false
  },
  COORDINADORDEDESARROLLODEHORMAS: {
      category: "puesto",
      value: "COORDINADOR DE DESARROLLO DE HORMAS",
      status: false
  },
  INSPECTORDEPIEL: {
      category: "puesto",
      value: "INSPECTOR DE PIEL",
      status: false
  },
  SUPERVISORDERECEPCION: {
      category: "puesto",
      value: "SUPERVISOR DE RECEPCION",
      status: false
  },
  DIRECTORDESOURCING: {
      category: "puesto",
      value: "DIRECTOR DE SOURCING",
      status: false
  },
  DIRECTORDEDISEAOYDESARROLLO: {
      category: "puesto",
      value: "DIRECTOR DE DISEÃ‘O Y DESARROLLO",
      status: false
  },
  GERENTEDEPLANDELADEMYSERVALCTE: {
      category: "puesto",
      value: "GERENTE DE PLAN DE LA DEM Y SERV AL CTE",
      status: false
  },
  VIGILANTE: {
      category: "puesto",
      value: "VIGILANTE",
      status: false
  },
  INSTRUCTOR: {
      category: "puesto",
      value: "INSTRUCTOR",
      status: false
  },
  GERENTEDECALIDADDEPROCESOS: {
      category: "puesto",
      value: "GERENTE DE CALIDAD DE PROCESOS",
      status: false
  },
  INSPECTORDECALIDADSUELAS: {
      category: "puesto",
      value: "INSPECTOR DE CALIDAD SUELAS",
      status: false
  },
  INGENIEROESPECIALISTADEPPTOMATERIALE: {
      category: "puesto",
      value: "INGENIERO ESPECIALISTA DE PPTO MATERIALE",
      status: false
  },
  GERENTEDECALIDADPRODUCTOTERMINADO: {
      category: "puesto",
      value: "GERENTE DE CALIDAD PRODUCTO TERMINADO",
      status: false
  },
  TECNICOHERRERO: {
      category: "puesto",
      value: "TECNICO HERRERO",
      status: false
  },
  JEFEDEPROCESOCORTEPESPUNTE: {
      category: "puesto",
      value: "JEFE DE PROCESO CORTE-PESPUNTE",
      status: false
  },
  ADMINISTRADORDEIMPUESTOSDENOMINA: {
      category: "puesto",
      value: "ADMINISTRADOR DE IMPUESTOS DE NOMINA",
      status: false
  },
  DIRECTORDECALIDADCOMERCIALYMP: {
      category: "puesto",
      value: "DIRECTOR DE CALIDAD COMERCIAL Y MP",
      status: false
  },
  OPERADORDEFOLEADOAUTOMATIZADO: {
      category: "puesto",
      value: "OPERADOR DE FOLEADO AUTOMATIZADO",
      status: false
  },
  CAPTURISTASAP: {
      category: "puesto",
      value: "CAPTURISTA SAP",
      status: false
  },
  ALMACENISTADEDEVOLUCIONESYTRASPASOS: {
      category: "puesto",
      value: "ALMACENISTA DE DEVOLUCIONES Y TRASPASOS",
      status: false
  },
  TECNICODEMANTENIMIENTODEEDIFICIOS: {
      category: "puesto",
      value: "TECNICO DE MANTENIMIENTO DE EDIFICIOS",
      status: false
  },
  OPERADORDECORTEAUTOMATIZADO: {
      category: "puesto",
      value: "OPERADOR DE CORTE AUTOMATIZADO",
      status: false
  },
  EMBARCADORDERECEPCION: {
      category: "puesto",
      value: "EMBARCADOR DE RECEPCION",
      status: false
  },
  JEFEDEESTRATEGIAYPLANEACIONTI: {
      category: "puesto",
      value: "JEFE DE ESTRATEGIA Y PLANEACION TI",
      status: false
  },
  ADMINISTRADORDEPLANTA: {
      category: "puesto",
      value: "ADMINISTRADOR DE PLANTA",
      status: false
  },
  TORTILLERO: {
      category: "puesto",
      value: "TORTILLERO",
      status: false
  },
  AUXILIARADMINISTRATIVONOTASDECREDITO: {
      category: "puesto",
      value: "AUXILIAR ADMINISTRATIVO NOTAS DE CREDITO",
      status: false
  },
  AUDITORDEPIELA: {
      category: "puesto",
      value: "AUDITOR DE PIEL A",
      status: false
  },
  COORDINADORDEALMACENESMPYMUESTRAS: {
      category: "puesto",
      value: "COORDINADOR DE ALMACENES MP Y MUESTRAS",
      status: false
  },
  SUPERVISORDEMTTOADITAMENTOSMONTADO: {
      category: "puesto",
      value: "SUPERVISOR DE MTTO ADITAMENTOS MONTADO",
      status: false
  },
  PROMOTORDEMARCA: {
      category: "puesto",
      value: "PROMOTOR DE MARCA",
      status: false
  },
  AUXILIARTECNICODEDESARROLLODELPROD: {
      category: "puesto",
      value: "AUXILIAR TECNICO DE DESARROLLO DEL PROD",
      status: false
  },
  GERENTEDECOMPRASPIELES: {
      category: "puesto",
      value: "GERENTE DE COMPRAS PIELES",
      status: false
  },
  COORDINADORDEESTRATEGIAYMFRALEAN: {
      category: "puesto",
      value: "COORDINADOR DE ESTRATEGIA Y MFRA LEAN",
      status: false
  },
  DIRECTORDEMAQUILAS: {
      category: "puesto",
      value: "DIRECTOR DE MAQUILAS",
      status: false
  },
  ADMINISTRADORDESEGURIDADDESISTEMAS: {
      category: "puesto",
      value: "ADMINISTRADOR DE SEGURIDAD DE SISTEMAS",
      status: false
  },
  AUXILIARADMINISTRATIVODEPIELES: {
      category: "puesto",
      value: "AUXILIAR ADMINISTRATIVO DE PIELES",
      status: false
  },
  PROMOTORDEPISO: {
      category: "puesto",
      value: "PROMOTOR DE PISO",
      status: false
  },
  COORDINADORLABORAL: {
      category: "puesto",
      value: "COORDINADOR LABORAL",
      status: false
  },
  DIRECTOREJECUTIVODELOGISTICA: {
      category: "puesto",
      value: "DIRECTOR EJECUTIVO DE LOGISTICA",
      status: false
  },
  DIRECTORDESISTEMASDEINFORMACION: {
      category: "puesto",
      value: "DIRECTOR DE SISTEMAS DE INFORMACION",
      status: false
  },
  AUXILIARDECARGA: {
      category: "puesto",
      value: "AUXILIAR DE CARGA",
      status: false
  },
  GERENTEDELSISTDEGESTIONDECALIDAD: {
      category: "puesto",
      value: "GERENTE DEL SIST DE GESTION DE CALIDAD",
      status: false
  },
  EJECUTIVODECUENTADEPARTAMENTALES: {
      category: "puesto",
      value: "EJECUTIVO DE CUENTA DEPARTAMENTALES",
      status: false
  },
  TECNICODEADITAMENTOSDEMONTADO: {
      category: "puesto",
      value: "TECNICO DE ADITAMENTOS DE MONTADO",
      status: false
  },
  AUXILIARDEMAQPROCESOSESPECIALES: {
      category: "puesto",
      value: "AUXILIAR DE MAQ PROCESOS ESPECIALES",
      status: false
  },
  JEFEADMINISTRATIVODEMERCADOTECNIA: {
      category: "puesto",
      value: "JEFE ADMINISTRATIVO DE MERCADOTECNIA",
      status: false
  },
  JEFEDEPESPUNTEAUTOMATIZADO: {
      category: "puesto",
      value: "JEFE DE PESPUNTE AUTOMATIZADO",
      status: false
  },
  ALMACENISTADEACCESORIOS: {
      category: "puesto",
      value: "ALMACENISTA DE ACCESORIOS",
      status: false
  },
  REBABEADOR: {
      category: "puesto",
      value: "REBABEADOR",
      status: false
  },
  RECEPCIONISTADEMATERIALES: {
      category: "puesto",
      value: "RECEPCIONISTA DE MATERIALES",
      status: false
  },
  COORDINADORDESEGURIDADINDUSTRIAL: {
      category: "puesto",
      value: "COORDINADOR DE SEGURIDAD INDUSTRIAL",
      status: false
  },
  DOBLILLADORDECORTE: {
      category: "puesto",
      value: "DOBLILLADOR DE CORTE",
      status: false
  },
  TECNICOMODELISTADEHORMAS: {
      category: "puesto",
      value: "TECNICO MODELISTA DE HORMAS",
      status: false
  },
  JEFEDETIENDASOUTLET: {
      category: "puesto",
      value: "JEFE DE TIENDAS OUTLET",
      status: false
  },
  DUENODELINEA: {
      category: "puesto",
      value: "DUENO DE LINEA",
      status: false
  },
  ADMINISTRADORKANBAN: {
      category: "puesto",
      value: "ADMINISTRADOR KANBAN",
      status: false
  },
  JEFEDEMTTOPLANTASEXTERNAS: {
      category: "puesto",
      value: "JEFE DE MTTO PLANTAS EXTERNAS",
      status: false
  },
  ABASTECEDORDESMA: {
      category: "puesto",
      value: "ABASTECEDOR DESMA",
      status: false
  },
  JEFEDEDISENOEIMAGEN: {
      category: "puesto",
      value: "JEFE DE DISENO E IMAGEN",
      status: false
  },
  DIRECTORDEVENTAS: {
      category: "puesto",
      value: "DIRECTOR DE VENTAS",
      status: false
  },
  EMBARCADORDEDEVOLUCIONES: {
      category: "puesto",
      value: "EMBARCADOR DE DEVOLUCIONES",
      status: false
  },
  OPERADORDEMAQPROCESOSESPECIALES: {
      category: "puesto",
      value: "OPERADOR DE MAQ PROCESOS ESPECIALES",
      status: false
  },
  JEFEDESEGURIDADPATRIMONIAL: {
      category: "puesto",
      value: "JEFE DE SEGURIDAD PATRIMONIAL",
      status: false
  },
  COORDINADORENSISTEMASCEDIS: {
      category: "puesto",
      value: "COORDINADOR EN SISTEMAS CEDIS",
      status: false
  },
  SUPERVISORDEFRACCIONESCOMPLEMENTARIAS: {
      category: "puesto",
      value: "SUPERVISOR DE FRACCIONES COMPLEMENTARIAS",
      status: false
  },
  INGENIEROESPECIALISTACOSTEODELPROD: {
      category: "puesto",
      value: "INGENIERO ESPECIALISTA COSTEO DEL PROD",
      status: false
  },
  EMBARCADORDEACOMODO: {
      category: "puesto",
      value: "EMBARCADOR DE ACOMODO",
      status: false
  },
  GERENTEDEPLANTACORTEYPROCESP: {
      category: "puesto",
      value: "GERENTE DE PLANTA CORTE Y PROC ESP",
      status: false
  },
  DOBLILLADORDEPESPUNTE: {
      category: "puesto",
      value: "DOBLILLADOR DE PESPUNTE",
      status: false
  },
  TECNICODESOPORTESISTEMAS: {
      category: "puesto",
      value: "TECNICO DE SOPORTE SISTEMAS",
      status: false
  },
  SUPERVISORDESEGURIDADPATRIMONIAL: {
      category: "puesto",
      value: "SUPERVISOR DE SEGURIDAD PATRIMONIAL",
      status: false
  },
  ELECTROMECANICODEINYECCION: {
      category: "puesto",
      value: "ELECTROMECANICO DE INYECCION",
      status: false
  },
  EMBARCADORDEEXPORTACIONES: {
      category: "puesto",
      value: "EMBARCADOR DE EXPORTACIONES",
      status: false
  },
  ESPECIALISTAADTVOENSERVALCLIENTE: {
      category: "puesto",
      value: "ESPECIALISTA ADTVO EN SERV AL CLIENTE",
      status: false
  },
  CHOFERFORANEO: {
      category: "puesto",
      value: "CHOFER FORANEO",
      status: false
  },
  ESPECIALISTAENCLIENTESDEPARTAMENTALES: {
      category: "puesto",
      value: "ESPECIALISTA EN CLIENTES DEPARTAMENTALES",
      status: false
  },
  GERENTEDEPLANEACIONYPROGDEPROD: {
      category: "puesto",
      value: "GERENTE DE PLANEACION Y PROG DE PROD",
      status: false
  },
  DIRECTORDECOMPRAS: {
      category: "puesto",
      value: "DIRECTOR DE COMPRAS",
      status: false
  },
  ALMACENISTAPOP: {
      category: "puesto",
      value: "ALMACENISTA POP",
      status: false
  },
  AUDITORDEPIELADESARROLLOMATNUEVOS: {
      category: "puesto",
      value: "AUDITOR DE PIEL A DESARROLLO MAT NUEVOS",
      status: false
  },
  JEFEDEATENCIONALCLIENTE: {
      category: "puesto",
      value: "JEFE DE ATENCION AL CLIENTE",
      status: false
  },
  EMBARCADORDEDESPACHO: {
      category: "puesto",
      value: "EMBARCADOR DE DESPACHO",
      status: false
  },
  ASISTENTEDEADMINISTRACION: {
      category: "puesto",
      value: "ASISTENTE DE ADMINISTRACION",
      status: false
  },
  JEFEDEMAQUILASDECORTE: {
      category: "puesto",
      value: "JEFE DE MAQUILAS DE CORTE",
      status: false
  },
  DIVIDIDOR: {
      category: "puesto",
      value: "DIVIDIDOR",
      status: false
  },
  JEFEDECALCES: {
      category: "puesto",
      value: "JEFE DE CALCES",
      status: false
  },
  JEFEDEPROCESOCORTE: {
      category: "puesto",
      value: "JEFE DE PROCESO CORTE",
      status: false
  },
  GERENTEDEPRODUCCIONCORTEYPESPUNTE: {
      category: "puesto",
      value: "GERENTE DE PRODUCCION CORTE Y PESPUNTE",
      status: false
  },
  AUXILIARADMINISTRATIVODECOMEDOR: {
      category: "puesto",
      value: "AUXILIAR ADMINISTRATIVO DE COMEDOR",
      status: false
  },
  EMBARCADORDETRASPASOS: {
      category: "puesto",
      value: "EMBARCADOR DE TRASPASOS",
      status: false
  },
  JEFEDENOMINAS: {
      category: "puesto",
      value: "JEFE DE NOMINAS",
      status: false
  },
  JEFEDEDESARROLLODESUELASDAMA: {
      category: "puesto",
      value: "JEFE DE DESARROLLO DE SUELAS DAMA",
      status: false
  },
  JEFEDEPROCESOADORNOENFORMACION: {
      category: "puesto",
      value: "JEFE DE PROCESO ADORNO EN FORMACION",
      status: false
  },
  SUPERVISORENFORMACION: {
      category: "puesto",
      value: "SUPERVISOR EN FORMACION",
      status: false
  },
  ADMINISTRADORDEPROTOTIPOS: {
      category: "puesto",
      value: "ADMINISTRADOR DE PROTOTIPOS",
      status: false
  },
  GERENTEDEADMINISTRACIONYCONTABILIDAD: {
      category: "puesto",
      value: "GERENTE DE ADMINISTRACION Y CONTABILIDAD",
      status: false
  },
  COORDINADORDEESTRUCTURA: {
      category: "puesto",
      value: "COORDINADOR DE ESTRUCTURA",
      status: false
  },
  TECNICOENDESARROLLODEMATERIALESCT: {
      category: "puesto",
      value: "TECNICO EN DESARROLLO DE MATERIALES CT",
      status: false
  },
  COORDINADORDEOPERACIONESLOGISTICAS: {
      category: "puesto",
      value: "COORDINADOR DE OPERACIONES LOGISTICAS",
      status: false
  },
  GERENTEDEPLANEACIONYCTRLDEESPECIF: {
      category: "puesto",
      value: "GERENTE DE PLANEACION Y CTRL DE ESPECIF",
      status: false
  },
  INSPECTORDECALIDADVARIOSYSINTETICOS: {
      category: "puesto",
      value: "INSPECTOR DE CALIDAD VARIOS Y SINTETICOS",
      status: false
  },
  TECNICOENREFRIGERACION: {
      category: "puesto",
      value: "TECNICO EN REFRIGERACION",
      status: false
  },
  AUXILIARTECNICODEDATOSMAESTROS: {
      category: "puesto",
      value: "AUXILIAR TECNICO DE DATOS MAESTROS",
      status: false
  },
  SECRETARIADECOMPENYRELLABORALES: {
      category: "puesto",
      value: "SECRETARIA DE COMPEN Y REL LABORALES",
      status: false
  },
  AUXILIARADMINISTRATIVODETRAFICO: {
      category: "puesto",
      value: "AUXILIAR ADMINISTRATIVO DE TRAFICO",
      status: false
  },
  DIRECTOREJECUTIVODEMANUFACTURA: {
      category: "puesto",
      value: "DIRECTOR EJECUTIVO DE MANUFACTURA",
      status: false
  },
  TECNICOENPPTEAUTOMATIZADOLABORATORIO: {
      category: "puesto",
      value: "TECNICO EN PPTE AUTOMATIZADO LABORATORIO",
      status: false
  },
  COORDINADORDEINVENTARIOS: {
      category: "puesto",
      value: "COORDINADOR DE INVENTARIOS",
      status: false
  },
  DISENADORDESUELA: {
      category: "puesto",
      value: "DISENADOR DE SUELA",
      status: false
  },
  AUXILIARADMINISTRATIVODEALMACENMP: {
      category: "puesto",
      value: "AUXILIAR ADMINISTRATIVO DE ALMACEN MP",
      status: false
  },
  TECNICOENPROGRAMACIONDEMANTENIMIENTO: {
      category: "puesto",
      value: "TECNICO EN PROGRAMACION DE MANTENIMIENTO",
      status: false
  },
  AUXILIARADMINISTRATIVODEPIELESNUEVAS: {
      category: "puesto",
      value: "AUXILIAR ADMINISTRATIVO DE PIELES NUEVAS",
      status: false
  },
  JEFEDEMEJORADECOSTOSDEMATERIALES: {
      category: "puesto",
      value: "JEFE DE MEJORA DE COSTOS DE MATERIALES",
      status: false
  },
  COORDINADORDEEMBARQUE: {
      category: "puesto",
      value: "COORDINADOR DE EMBARQUE",
      status: false
  },
  COORDINADORDEGESTIONYCTRLDEPEDIDOS: {
      category: "puesto",
      value: "COORDINADOR DE GESTION Y CTRL DE PEDIDOS",
      status: false
  },
  TECNICOENPESPUNTEAUTOMATIZADO: {
      category: "puesto",
      value: "TECNICO EN PESPUNTE AUTOMATIZADO",
      status: false
  },
  GERENTEDEVENTASQUIRELLI: {
      category: "puesto",
      value: "GERENTE DE VENTAS QUIRELLI",
      status: false
  },
  ADMINISTRADORDESSFF: {
      category: "puesto",
      value: "ADMINISTRADOR DE SSFF",
      status: false
  },
  AUXILIARDECALCEDAMA: {
      category: "puesto",
      value: "AUXILIAR DE CALCE DAMA",
      status: false
  },
  INGENIERODEPLANTA: {
      category: "puesto",
      value: "INGENIERO DE PLANTA",
      status: false
  },
  JEFEDEFISCALYCONTROLDEACTIVOS: {
      category: "puesto",
      value: "JEFE DE FISCAL Y CONTROL DE ACTIVOS",
      status: false
  },
  COORDINADORDESGC: {
      category: "puesto",
      value: "COORDINADOR DE SGC",
      status: false
  },
  SUPERVISORDEMTTOPROYDESEGIND: {
      category: "puesto",
      value: "SUPERVISOR DE MTTO PROY DE SEG IND",
      status: false
  },
  INGENIEROSAPBASIS: {
      category: "puesto",
      value: "INGENIERO SAP BASIS",
      status: false
  },
  AUXILIARDEEMBARQUE: {
      category: "puesto",
      value: "AUXILIAR DE EMBARQUE",
      status: false
  },
  INSPECTORDECALIDADINYECCION: {
      category: "puesto",
      value: "INSPECTOR DE CALIDAD INYECCION",
      status: false
  },
  AUXILIARTECNICOENDESADORYMATNVOS: {
      category: "puesto",
      value: "AUXILIAR TECNICO EN DES ADOR Y MAT NVOS",
      status: false
  },
  JEFEDEPERSONAL: {
      category: "puesto",
      value: "JEFE DE PERSONAL",
      status: false
  },
  INGENIERODEPLANEACIONDELAPRODUCCION: {
      category: "puesto",
      value: "INGENIERO DE PLANEACION DE LA PRODUCCION",
      status: false
  },
  COORDINADORDEDESARROLLODEMATNVOS: {
      category: "puesto",
      value: "COORDINADOR DE DESARROLLO DE MAT NVOS",
      status: false
  },
  ELECTROMECANICODEMONTADOPEGADO: {
      category: "puesto",
      value: "ELECTROMECANICO DE MONTADO PEGADO",
      status: false
  },
  PRELIMINARDEMONTADOB: {
      category: "puesto",
      value: "PRELIMINAR DE MONTADO B",
      status: false
  },
  ALMACENISTADEEMBARQUE: {
      category: "puesto",
      value: "ALMACENISTA DE EMBARQUE",
      status: false
  },
  COORDINADORENLACEINYECCIONADORNO: {
      category: "puesto",
      value: "COORDINADOR ENLACE INYECCION/ADORNO",
      status: false
  },
  SUPERVISORDEMANTENIMIENTOMETROLOGIA: {
      category: "puesto",
      value: "SUPERVISOR DE MANTENIMIENTO METROLOGIA",
      status: false
  },
  ADMINISTRADORDENOMINAS: {
      category: "puesto",
      value: "ADMINISTRADOR DE NOMINAS",
      status: false
  },
  JEFEDELOGISTICA: {
      category: "puesto",
      value: "JEFE DE LOGISTICA",
      status: false
  },
  AUXILIARADTVODECOMPRASDIVERSAS: {
      category: "puesto",
      value: "AUXILIAR ADTVO DE COMPRAS DIVERSAS",
      status: false
  },
  GERENTEDECEDISPRODUCTOTERMINADO: {
      category: "puesto",
      value: "GERENTE DE CEDIS PRODUCTO TERMINADO",
      status: false
  },
  SUPERVISORDECALPIELFORROYCARNZIMP: {
      category: "puesto",
      value: "SUPERVISOR DE CAL PIEL FORRO Y CARNZ IMP",
      status: false
  },
  ASISTENTEDECALIDAD: {
      category: "puesto",
      value: "ASISTENTE DE CALIDAD",
      status: false
  },
  SUPERVISORDEPROCESOSESPECIALES: {
      category: "puesto",
      value: "SUPERVISOR DE PROCESOS ESPECIALES",
      status: false
  },
  AUXILIARTECNICODEREVISIONDEPIEL: {
      category: "puesto",
      value: "AUXILIAR TECNICO DE REVISION DE PIEL",
      status: false
  },
  JEFEDEMEJORADECOSTOSDEPROCESOS: {
      category: "puesto",
      value: "JEFE DE MEJORA DE COSTOS DE PROCESOS",
      status: false
  },
  TECNICOFUNDIDOR: {
      category: "puesto",
      value: "TECNICO FUNDIDOR",
      status: false
  },
  DESARROLLADORDEVENTASINTERNACIONALES: {
      category: "puesto",
      value: "DESARROLLADOR DE VENTAS INTERNACIONALES",
      status: false
  },
  COMPRADOR: {
      category: "puesto",
      value: "COMPRADOR",
      status: false
  },
  ADMINISTRADORDEACTIVOS: {
      category: "puesto",
      value: "ADMINISTRADOR DE ACTIVOS",
      status: false
  },
  COORDINADORDEPLANTASYCOSTOSDEMFRA: {
      category: "puesto",
      value: "COORDINADOR DE PLANTAS Y COSTOS DE MFRA",
      status: false
  },
  AUXILIARADMINISTRATIVODEPROYYSEGIN: {
      category: "puesto",
      value: "AUXILIAR ADMINISTRATIVO DE PROY Y SEG IN",
      status: false
  },
  JEFEDEINSTRUCTORESDECAPEXTYPM: {
      category: "puesto",
      value: "JEFE DE INSTRUCTORES DE CAP EXT Y PM",
      status: false
  },
  TECNICOELECTRICISTA: {
      category: "puesto",
      value: "TECNICO ELECTRICISTA",
      status: false
  },
  GERENTEDEPRODUCCIONURBANA: {
      category: "puesto",
      value: "GERENTE DE PRODUCCION URBANA",
      status: false
  },
  TECNICOESPECIALISTADERECLUTAMIENTO: {
      category: "puesto",
      value: "TECNICO ESPECIALISTA DE RECLUTAMIENTO",
      status: false
  },
  AUXILIARADTVODEDLLODEMATERIALES: {
      category: "puesto",
      value: "AUXILIAR ADTVO DE DLLO DE MATERIALES",
      status: false
  },
  DOMADOR: {
      category: "puesto",
      value: "DOMADOR",
      status: false
  },
  DISENADORPLANTILLISTADESUELA: {
      category: "puesto",
      value: "DISENADOR PLANTILLISTA DE SUELA",
      status: false
  },
  AUXILIARTECNICODECONTROLDEINVENT: {
      category: "puesto",
      value: "AUXILIAR TECNICO DE CONTROL DE INVENT",
      status: false
  },
  AUXILIARADMINISTRATIVODEMERCADOTECNIA: {
      category: "puesto",
      value: "AUXILIAR ADMINISTRATIVO DE MERCADOTECNIA",
      status: false
  },
  GERENTEDEMEJORADECOSTOS: {
      category: "puesto",
      value: "GERENTE DE MEJORA DE COSTOS",
      status: false
  },
  PRELIMINARCAPACITACION: {
      category: "puesto",
      value: "PRELIMINAR CAPACITACION",
      status: false
  },
  INGENIEROESPECIALISTAENMTTOINYECCION: {
      category: "puesto",
      value: "INGENIERO ESPECIALISTA EN MTTO INYECCION",
      status: false
  },
  MONITORISTA: {
      category: "puesto",
      value: "MONITORISTA",
      status: false
  },
  COORDINADORDEDESARROLLODEMATERIALES: {
      category: "puesto",
      value: "COORDINADOR DE DESARROLLO DE MATERIALES",
      status: false
  },
  DIRECTORDEPROYECTOS: {
      category: "puesto",
      value: "DIRECTOR DE PROYECTOS",
      status: false
  },
  SUPERVISORDECALIDADAVIOS: {
      category: "puesto",
      value: "SUPERVISOR DE CALIDAD AVIOS",
      status: false
  },
  JEFEDEMTTOELECTRICOYEFICENERGETICA: {
      category: "puesto",
      value: "JEFE DE MTTO ELECTRICO Y EFIC ENERGETICA",
      status: false
  },
  RAYADOR: {
      category: "puesto",
      value: "RAYADOR",
      status: false
  },
  JEFEDEPROCESOADORNO: {
      category: "puesto",
      value: "JEFE DE PROCESO ADORNO",
      status: false
  },
  ADMINISTRADORDEINFORMACIONMFRA: {
      category: "puesto",
      value: "ADMINISTRADOR DE INFORMACION MFRA",
      status: false
  },
  DESVIRADOR: {
      category: "puesto",
      value: "DESVIRADOR",
      status: false
  },
  JEFEDECOMPRASDIVERSAS: {
      category: "puesto",
      value: "JEFE DE COMPRAS DIVERSAS",
      status: false
  },
  GERENTEDEPRODUCCIONRURAL: {
      category: "puesto",
      value: "GERENTE DE PRODUCCION RURAL",
      status: false
  },
  ADMINISTRADORDEDESARROLLO: {
      category: "puesto",
      value: "ADMINISTRADOR DE DESARROLLO",
      status: false
  },
  ANALISTADEMANDMANAGEMENT: {
      category: "puesto",
      value: "ANALISTA DEMAND MANAGEMENT",
      status: false
  },
  INGENIEROESPDEORDENESDECOMPRA: {
      category: "puesto",
      value: "INGENIERO ESP DE ORDENES DE COMPRA",
      status: false
  },
  JEFEDEATRACYDESDEPNALOPERATIVO: {
      category: "puesto",
      value: "JEFE DE ATRAC Y DES DE PNAL OPERATIVO",
      status: false
  },
  AUDITORINTERNO: {
      category: "puesto",
      value: "AUDITOR INTERNO",
      status: false
  },
  JEFEDEDESARROLLODESUELASCABQLI: {
      category: "puesto",
      value: "JEFE DE DESARROLLO DE SUELAS CAB/QLI",
      status: false
  },
  AUXILIARDEMODELISTA: {
      category: "puesto",
      value: "AUXILIAR DE MODELISTA",
      status: false
  },
  ABASTECEDORBANDAINYECCION: {
      category: "puesto",
      value: "ABASTECEDOR BANDA INYECCION",
      status: false
  },
  AUXILIARDECOCINA: {
      category: "puesto",
      value: "AUXILIAR DE COCINA",
      status: false
  },
  AUXILIARENSERVICIOALCLIENTE: {
      category: "puesto",
      value: "AUXILIAR EN SERVICIO AL CLIENTE",
      status: false
  },
  AUXILIARDECARGAMP: {
      category: "puesto",
      value: "AUXILIAR DE CARGA MP",
      status: false
  },
  DIRECTOREJECUTIVODEADMONYFINANZAS: {
      category: "puesto",
      value: "DIRECTOR EJECUTIVO DE ADMON Y FINANZAS",
      status: false
  },
  TECNICOENDESARROLLODEMATERIALES: {
      category: "puesto",
      value: "TECNICO EN DESARROLLO DE MATERIALES",
      status: false
  },
  PILOTO: {
      category: "puesto",
      value: "PILOTO",
      status: false
  },
  JEFEDEDEVOLUCIONESYTRASPASOS: {
      category: "puesto",
      value: "JEFE DE DEVOLUCIONES Y TRASPASOS",
      status: false
  },
  JEFEDEDATOSMAESTROSYDOCUMENTOS: {
      category: "puesto",
      value: "JEFE DE DATOS MAESTROS Y DOCUMENTOS",
      status: false
  },
  DIRECTORDEMERCADOTECNIA: {
      category: "puesto",
      value: "DIRECTOR DE MERCADOTECNIA",
      status: false
  },
  ADMINISTRADORDEOFICINADG: {
      category: "puesto",
      value: "ADMINISTRADOR DE OFICINA DG",
      status: false
  },
  ADMINISTRADORDECOSTEOQUIRELLI: {
      category: "puesto",
      value: "ADMINISTRADOR DE COSTEO QUIRELLI",
      status: false
  },
  ESPECIALISTAENDESPACHOADUANERO: {
      category: "puesto",
      value: "ESPECIALISTA EN DESPACHO ADUANERO",
      status: false
  },
  ADMINISTRADORCENTRICDD: {
      category: "puesto",
      value: "ADMINISTRADOR CENTRIC D&D",
      status: false
  },
  ABASTECEDORDEMAQUINA: {
      category: "puesto",
      value: "ABASTECEDOR DE MAQUINA",
      status: false
  },
  JEFEDELOGISTICADEMATERIALES: {
      category: "puesto",
      value: "JEFE DE LOGISTICA DE MATERIALES",
      status: false
  },
  AUXILIARDEPROCESOSGC: {
      category: "puesto",
      value: "AUXILIAR DE PROCESO SGC",
      status: false
  },
  ADMINISTRADORSAP: {
      category: "puesto",
      value: "ADMINISTRADOR SAP",
      status: false
  },
  ADMINISTRADORDEPROYYMEJORADEDYD: {
      category: "puesto",
      value: "ADMINISTRADOR DE PROY Y MEJORA DE DYD",
      status: false
  },
  ADMINISTRADORDEPRODUCTODAMA: {
      category: "puesto",
      value: "ADMINISTRADOR DE PRODUCTO DAMA",
      status: false
  },
  GERENTEDEMERCHANDISING: {
      category: "puesto",
      value: "GERENTE DE MERCHANDISING",
      status: false
  },
  AUXILIARTECNICODEDLLODEMATERIALES: {
      category: "puesto",
      value: "AUXILIAR TECNICO DE DLLO DE MATERIALES",
      status: false
  },
  ALMACENISTADEDESARROLLODEMATERIALES: {
      category: "puesto",
      value: "ALMACENISTA DE DESARROLLO DE MATERIALES",
      status: false
  },
  INGENIERODEDATOSMAESTROS: {
      category: "puesto",
      value: "INGENIERO DE DATOS MAESTROS",
      status: false
  },
  INGENIEROESPECIALISTADEMOLDESYSUELA: {
      category: "puesto",
      value: "INGENIERO ESPECIALISTA DE MOLDES Y SUELA",
      status: false
  },
  COORDINADORDEPPTOSEINDICADORES: {
      category: "puesto",
      value: "COORDINADOR DE PPTOS E INDICADORES",
      status: false
  },
  ALMACENISTADECOMEDOR: {
      category: "puesto",
      value: "ALMACENISTA DE COMEDOR",
      status: false
  },
  ANALISTADEPROCESOSDENEGOCIO: {
      category: "puesto",
      value: "ANALISTA DE PROCESOS DE NEGOCIO",
      status: false
  },
  AUXILIARADTVODESEGURIDADINDUSTRIAL: {
      category: "puesto",
      value: "AUXILIAR ADTVO DE SEGURIDAD INDUSTRIAL",
      status: false
  },
  AUXILIARDEDESDEADORNOYMATNUEVOS: {
      category: "puesto",
      value: "AUXILIAR DE DES DE ADORNO Y MAT NUEVOS",
      status: false
  },
  COORDTECNICODEDESARROLLODELPROD: {
      category: "puesto",
      value: "COORD TECNICO DE DESARROLLO DEL PROD",
      status: false
  },
  GERENTEDEPROYECTOS: {
      category: "puesto",
      value: "GERENTE DE PROYECTOS",
      status: false
  },
  COORDINADORDETRAFDEENTREGASASIGNADA: {
      category: "puesto",
      value: "COORDINADOR DE TRAF DE ENTREGAS ASIGNADA",
      status: false
  },
  AUXILIARADMINISTRATIVOSSMA: {
      category: "puesto",
      value: "AUXILIAR ADMINISTRATIVO SS&MA",
      status: false
  },
  GERENTEDEPROYECTOSCH: {
      category: "puesto",
      value: "GERENTE DE PROYECTOS CH",
      status: false
  },
  AUXILIARTECNICODEHORMAS: {
      category: "puesto",
      value: "AUXILIAR TECNICO DE HORMAS",
      status: false
  },
  JEFEDEMEDICINALABORAL: {
      category: "puesto",
      value: "JEFE DE MEDICINA LABORAL",
      status: false
  },
  ENTACONADOR: {
      category: "puesto",
      value: "ENTACONADOR",
      status: false
  },
  INGENIEROESPDEMEJORADECTOSDEMAT: {
      category: "puesto",
      value: "INGENIERO ESP DE MEJORA DE CTOS DE MAT",
      status: false
  },
  ADMINISTRADORDEASEGDECALIDAD: {
      category: "puesto",
      value: "ADMINISTRADOR DE ASEG DE CALIDAD",
      status: false
  },
  AUXILIARADTVODENOMINAS: {
      category: "puesto",
      value: "AUXILIAR ADTVO DE NOMINAS",
      status: false
  },
  TECNICOESPDEAPLICACIONESYPLANTILLAS: {
      category: "puesto",
      value: "TECNICO ESP DE APLICACIONES Y PLANTILLAS",
      status: false
  },
  ESPECIALISTAENADMONCONTABLEDEIMPORT: {
      category: "puesto",
      value: "ESPECIALISTA EN ADMON CONTABLE DE IMPORT",
      status: false
  },
  JEFEDEMEJORADECOSTOSDATOSMAESTROS: {
      category: "puesto",
      value: "JEFE DE MEJORA DE COSTOS DATOS MAESTROS",
      status: false
  },
  INGENIEROENSISTEMASDESARROLLO: {
      category: "puesto",
      value: "INGENIERO EN SISTEMAS DESARROLLO",
      status: false
  },
  ABASTECEDORMONTADO: {
      category: "puesto",
      value: "ABASTECEDOR MONTADO",
      status: false
  },
  PULIDOR: {
      category: "puesto",
      value: "PULIDOR",
      status: false
  },
  CONTADOR: {
      category: "puesto",
      value: "CONTADOR",
      status: false
  },
  JEFEDECOMPRASVARIOSYSINTETICOS: {
      category: "puesto",
      value: "JEFE DE COMPRAS VARIOS Y SINTETICOS",
      status: false
  },
  COSEDOR: {
      category: "puesto",
      value: "COSEDOR",
      status: false
  },
  ENFERMEROA: {
      category: "puesto",
      value: "ENFERMERO(A)",
      status: false
  },
  AUXILIARDEALMACENDEMATERIALES: {
      category: "puesto",
      value: "AUXILIAR DE ALMACEN DE MATERIALES",
      status: false
  },
  COORDINADORDEDESARROLLODECOSTEO: {
      category: "puesto",
      value: "COORDINADOR DE DESARROLLO DE COSTEO",
      status: false
  },
  INGENIEROESPCOORDDEPLANTASINTERNAS: {
      category: "puesto",
      value: "INGENIERO ESP COORD DE PLANTAS INTERNAS",
      status: false
  },
  AJUSTADORDEMOLDES: {
      category: "puesto",
      value: "AJUSTADOR DE MOLDES",
      status: false
  },
  GERENTEDESEGURIDADPATRIMONIAL: {
      category: "puesto",
      value: "GERENTE DE SEGURIDAD PATRIMONIAL",
      status: false
  },
  JEFEDEATRACYDESPNALCLAVEYCRITICO: {
      category: "puesto",
      value: "JEFE DE ATRAC Y DES PNAL CLAVE Y CRITICO",
      status: false
  },
  COORDINADOROPERATIVODECOMEDORES: {
      category: "puesto",
      value: "COORDINADOR OPERATIVO DE COMEDORES",
      status: false
  },
  ADMINISTRADORDATAMANAGEMENTCT: {
      category: "puesto",
      value: "ADMINISTRADOR DATAMANAGEMENT CT",
      status: false
  },
  MONITORISTADECONTROLDEACCESOS: {
      category: "puesto",
      value: "MONITORISTA DE CONTROL DE ACCESOS",
      status: false
  },
  COORDINADORDECOMUNICACIONINTERNA: {
      category: "puesto",
      value: "COORDINADOR DE COMUNICACION INTERNA",
      status: false
  },
  ASISTENTEDEDIRECCIONGENERAL: {
      category: "puesto",
      value: "ASISTENTE DE DIRECCION GENERAL",
      status: false
  },
  TECNICODEMETROLOGIA: {
      category: "puesto",
      value: "TECNICO DE METROLOGIA",
      status: false
  },
  GERENTEDECALIDADMATERIASPRIMAS: {
      category: "puesto",
      value: "GERENTE DE CALIDAD MATERIAS PRIMAS",
      status: false
  },
  OPERADORDEMAQUINAETIQUETAS: {
      category: "puesto",
      value: "OPERADOR DE MAQUINA ETIQUETAS",
      status: false
  },
  INGENIEROESPECIALISTADECALIDAD: {
      category: "puesto",
      value: "INGENIERO ESPECIALISTA DE CALIDAD",
      status: false
  },
  TECNICOENMANTENIMIENTODELCLUB: {
      category: "puesto",
      value: "TECNICO EN MANTENIMIENTO DEL CLUB",
      status: false
  },
  TECNICOENDESARROLLODEPIELES: {
      category: "puesto",
      value: "TECNICO EN DESARROLLO DE PIELES",
      status: false
  },
  AUXILIARDECALIDAD: {
      category: "puesto",
      value: "AUXILIAR DE CALIDAD",
      status: false
  },
  LIDERDEPROYECTO: {
      category: "puesto",
      value: "LIDER DE PROYECTO",
      status: false
  },
  ADMINISTRADORDEPRODUCTOCABALLERO: {
      category: "puesto",
      value: "ADMINISTRADOR DE PRODUCTO CABALLERO",
      status: false
  },
  DISEAADORDEIMAGENINSTITUCIONALYPUBL: {
      category: "puesto",
      value: "DISEÃ‘ADOR DE IMAGEN INSTITUCIONAL Y PUBL",
      status: false
  },
  AUXILIARADMTVODEATRACCIONTALENTO: {
      category: "puesto",
      value: "AUXILIAR ADMTVO DE ATRACCION TALENTO",
      status: false
  },
  AUXILIARADTVODERECURSOSHUMANOS: {
      category: "puesto",
      value: "AUXILIAR ADTVO DE RECURSOS HUMANOS",
      status: false
  },
  AUXILIARTECNICODEDLLOMAQUINARIA: {
      category: "puesto",
      value: "AUXILIAR TECNICO DE DLLO MAQUINARIA",
      status: false
  },
  MAQUETERO: {
      category: "puesto",
      value: "MAQUETERO",
      status: false
  },
  AUXILIARADMTVODEATRACCIONTALENTOCT: {
      category: "puesto",
      value: "AUXILIAR ADMTVO DE ATRACCION TALENTO CT",
      status: false
  },
  SUPERVISORDEMTTOBANDASROBOTIZADAS: {
      category: "puesto",
      value: "SUPERVISOR DE MTTO BANDAS ROBOTIZADAS",
      status: false
  },
  INSTRUCTORDECAPACITACIONEXTERNAYPM: {
      category: "puesto",
      value: "INSTRUCTOR DE CAPACITACION EXTERNA Y PM",
      status: false
  },
  COORDINADORDEEDUCACION: {
      category: "puesto",
      value: "COORDINADOR DE EDUCACION",
      status: false
  },
  ADMINISTRADORDEPROYECTOS: {
      category: "puesto",
      value: "ADMINISTRADOR DE PROYECTOS",
      status: false
  },
  COORDINADORDEEQUIPOSESPECIALES: {
      category: "puesto",
      value: "COORDINADOR DE EQUIPOS ESPECIALES",
      status: false
  },
  AUXILIARDECAJAYFONDODEAHORRO: {
      category: "puesto",
      value: "AUXILIAR DE CAJA Y FONDO DE AHORRO",
      status: false
  },
  DIRECTORDEDISEAO: {
      category: "puesto",
      value: "DIRECTOR DE DISEÃ‘O",
      status: false
  },
  JEFETECNICODEPROCESOSESPECIALES: {
      category: "puesto",
      value: "JEFE TECNICO DE PROCESOS ESPECIALES",
      status: false
  },
  GERENTEDEATRACCYDESDETALENTO: {
      category: "puesto",
      value: "GERENTE DE ATRACC Y DES DE TALENTO",
      status: false
  },
  GERENTEDERECURSOSHUMANOSOPERACIONES: {
      category: "puesto",
      value: "GERENTE DE RECURSOS HUMANOS OPERACIONES",
      status: false
  },
  TECNICOESPECIALISTAENCAPACITACION: {
      category: "puesto",
      value: "TECNICO ESPECIALISTA EN CAPACITACION",
      status: false
  },
  COORDINADORDEATENCIONACLIENTESTRAF: {
      category: "puesto",
      value: "COORDINADOR DE ATENCION A CLIENTES TRAF",
      status: false
  },
  AUXILIARADMINISTRATIVODERECEPCION: {
      category: "puesto",
      value: "AUXILIAR ADMINISTRATIVO DE RECEPCION",
      status: false
  },
  COORDINADORDEENVIOSMARCASINTLS: {
      category: "puesto",
      value: "COORDINADOR DE ENVIOS MARCAS INTLS",
      status: false
  },
  JEFEDEATRACYDESPERSONALINDIRECTO: {
      category: "puesto",
      value: "JEFE DE ATRAC Y DES PERSONAL INDIRECTO",
      status: false
  },
  TECNICOMODELISTADEPLANTAS: {
      category: "puesto",
      value: "TECNICO MODELISTA DE PLANTAS",
      status: false
  },
  COORDINADORDEESPYPLANEACIONDEPROD: {
      category: "puesto",
      value: "COORDINADOR DE ESP Y PLANEACION DE PROD",
      status: false
  },
  ADMINISTRADORDECONTROLINTERNO: {
      category: "puesto",
      value: "ADMINISTRADOR DE CONTROL INTERNO",
      status: false
  },
  DIRECTOREJECUTIVODEGESTIONDETALENTO: {
      category: "puesto",
      value: "DIRECTOR EJECUTIVO DE GESTION DE TALENTO",
      status: false
  },
  COORDINADORDEPROYECTOSMAQUILAS: {
      category: "puesto",
      value: "COORDINADOR DE PROYECTOS MAQUILAS",
      status: false
  },
  COORDINADORADTVODECAPACITACION: {
      category: "puesto",
      value: "COORDINADOR ADTVO DE CAPACITACION",
      status: false
  },
  DESPACHADORAEREO: {
      category: "puesto",
      value: "DESPACHADOR AEREO",
      status: false
  },
  DIRECTORDEMTTOYSERVICIOSGENERALES: {
      category: "puesto",
      value: "DIRECTOR DE MTTO Y SERVICIOS GENERALES",
      status: false
  },
  PRELIMINARDEMONTADOCT: {
      category: "puesto",
      value: "PRELIMINAR DE MONTADO CT",
      status: false
  },
  AUXILIARDECOMPRASVARSINTYAVIOS: {
      category: "puesto",
      value: "AUXILIAR DE COMPRAS VAR SINT Y AVIOS",
      status: false
  },
  CONFORMADORCT: {
      category: "puesto",
      value: "CONFORMADOR CT",
      status: false
  },
  HEADOFMARKETINGDIGITAL: {
      category: "puesto",
      value: "HEAD OF MARKETING DIGITAL",
      status: false
  },
  DIRECTORJURIDICO: {
      category: "puesto",
      value: "DIRECTOR JURIDICO",
      status: false
  },
  DIRECTOREJECUTIVODEDISYDESDELPROD: {
      category: "puesto",
      value: "DIRECTOR EJECUTIVO DE DIS Y DES DEL PROD",
      status: false
  },
  DIRECTOREJMERCADOTECNIAYCOMERCIAL: {
      category: "puesto",
      value: "DIRECTOR EJ MERCADOTECNIA Y COMERCIAL",
      status: false
  },
  ESPECIALISTAENMERCADOTECNIADIGITAL: {
      category: "puesto",
      value: "ESPECIALISTA EN MERCADOTECNIA DIGITAL",
      status: false
  },
  ANALISTAJURIDICO: {
      category: "puesto",
      value: "ANALISTA JURIDICO",
      status: false
  },
  DISEAADORDETENDENCIAS: {
      category: "puesto",
      value: "DISEÃ‘ADOR DE TENDENCIAS",
      status: false
  },
  ANALISTACOMERCIALYDEMARKETING: {
      category: "puesto",
      value: "ANALISTA COMERCIAL Y DE MARKETING",
      status: false
  },
  INGENIERODESOPORTESISTEMAS: {
      category: "puesto",
      value: "INGENIERO DE SOPORTE SISTEMAS",
      status: false
  },
  ADMINISTRADORCOMERCIAL: {
      category: "puesto",
      value: "ADMINISTRADOR COMERCIAL",
      status: false
  },
  JEFEDECEDISMATERIAPRIMA: {
      category: "puesto",
      value: "JEFE DE CEDIS MATERIA PRIMA",
      status: false
  },
  TALENTOENDESARROLLO: {
      category: "puesto",
      value: "TALENTO EN DESARROLLO",
      status: false
  },
  JEFEDEINVERSIONESYSEGUROS: {
      category: "puesto",
      value: "JEFE DE INVERSIONES Y SEGUROS",
      status: false
  },
  JEFEDEDESARROLLODEPROVEEDORES: {
      category: "puesto",
      value: "JEFE DE DESARROLLO DE PROVEEDORES",
      status: false
  },
  JEFEDEADMINISTRACION: {
      category: "puesto",
      value: "JEFE DE ADMINISTRACION",
      status: false
  },
  LIDERDEPROYECTOINTERNACIONALDYD: {
      category: "puesto",
      value: "LIDER DE PROYECTO INTERNACIONAL DYD",
      status: false
  },
  ANALISTABUSINESSINTELLIGENCE: {
      category: "puesto",
      value: "ANALISTA BUSINESS INTELLIGENCE",
      status: false
  },
  COORDINADORDECONTABILIDADPARTESREL: {
      category: "puesto",
      value: "COORDINADOR DE CONTABILIDAD PARTES REL",
      status: false
  },
  COORDINADORDELSISTEMADEGTNAMBIENTAL: {
      category: "puesto",
      value: "COORDINADOR DEL SISTEMA DE GTN AMBIENTAL",
      status: false
  },
  GESTORJURIDICO: {
      category: "puesto",
      value: "GESTOR JURIDICO",
      status: false
  },
  ESPECIALISTAJURIDICO: {
      category: "puesto",
      value: "ESPECIALISTA JURIDICO",
      status: false
  },
  JEFEDECONTABILIDAD: {
      category: "puesto",
      value: "JEFE DE CONTABILIDAD",
      status: false
  },
  AUXILIARTECNICODECOSTEODELPRODUCTO: {
      category: "puesto",
      value: "AUXILIAR TECNICO DE COSTEO DEL PRODUCTO",
      status: false
  },
  INGENIERODEPROCESOSCEDIS: {
      category: "puesto",
      value: "INGENIERO DE PROCESOS CEDIS",
      status: false
  },
  AUXILIARTECNICODEPRODUCTO: {
      category: "puesto",
      value: "AUXILIAR TECNICO DE PRODUCTO",
      status: false
  },
  DISEAADORDEIMAGENYBRANDING: {
      category: "puesto",
      value: "DISEÃ‘ADOR DE IMAGEN Y BRANDING",
      status: false
  },
  INGENIERODEPLANEACIONDEMATERIALES: {
      category: "puesto",
      value: "INGENIERO DE PLANEACION DE MATERIALES",
      status: false
  },
  COORDINADORDLLOSOCYRELCOMUNITARIO: {
      category: "puesto",
      value: "COORDINADOR DLLO SOC Y REL COMUNITARIO",
      status: false
  },
  AUXILIARTECNICOREVDEPIELIMPORTADA: {
      category: "puesto",
      value: "AUXILIAR TECNICO REV DE PIEL IMPORTADA",
      status: false
  },
  JEFEDEDESARROLLODEMUESTRAS: {
      category: "puesto",
      value: "JEFE DE DESARROLLO DE MUESTRAS",
      status: false
  },
  AUXILIARADMINISTRATIVODECAPACITACION: {
      category: "puesto",
      value: "AUXILIAR ADMINISTRATIVO DE CAPACITACION",
      status: false
  },
  INGENIERODEPROCESOSCEDISMP: {
      category: "puesto",
      value: "INGENIERO DE PROCESOS CEDIS MP",
      status: false
  },
  ADMINISTRADORDEPROYECTOSJR: {
      category: "puesto",
      value: "ADMINISTRADOR DE PROYECTOS JR",
      status: false
  },
  SANDBLASTEADOR: {
      category: "puesto",
      value: "SANDBLASTEADOR",
      status: false
  },
  JEFEDESISTEMASRETAIL: {
      category: "puesto",
      value: "JEFE DE SISTEMAS RETAIL",
      status: false
  },
  COORDINADORDESISTEMASRETAIL: {
      category: "puesto",
      value: "COORDINADOR DE SISTEMAS RETAIL",
      status: false
  },
  AUXILIARDEMAQUINA: {
      category: "puesto",
      value: "AUXILIAR DE MAQUINA",
      status: false
  },
  DIRECTORDEPLANEACIONDEOPERACIONES: {
      category: "puesto",
      value: "DIRECTOR DE PLANEACION DE OPERACIONES",
      status: false
  },
  GERENTEDEDESMATPIELESYACABADOS: {
      category: "puesto",
      value: "GERENTE DE DES MAT PIELES Y ACABADOS",
      status: false
  },
  INGENIEROESPECIALISTADEPROYECTOSDYD: {
      category: "puesto",
      value: "INGENIERO ESPECIALISTA DE PROYECTOS DYD",
      status: false
  },
  RESPONSABLEDEDISENOQUIRELLI: {
      category: "puesto",
      value: "RESPONSABLE DE DISENO QUIRELLI",
      status: false
  },
  COORDINADORDEPROCESOSESPECIALESPROD: {
      category: "puesto",
      value: "COORDINADOR DE PROCESOS ESPECIALES PROD",
      status: false
  },
  TECNICODEIMPUESTOSDENOMINA: {
      category: "puesto",
      value: "TECNICO DE IMPUESTOS DE NOMINA",
      status: false
  },
  GERENTECOMERCIAL: {
      category: "puesto",
      value: "GERENTE COMERCIAL",
      status: false
  },
  INGENIEROESPDESERVPLANTASYMAQUILAS: {
      category: "puesto",
      value: "INGENIERO ESP DE SERV PLANTAS Y MAQUILAS",
      status: false
  },
  AUXILIARDLLOSOCIALYRELCOMUNITARIO: {
      category: "puesto",
      value: "AUXILIAR DLLO SOCIAL Y REL COMUNITARIO",
      status: false
  },
  ADMINISTRADORDEPRODUCTO: {
      category: "puesto",
      value: "ADMINISTRADOR DE PRODUCTO",
      status: false
  },
  ELECTROMECANICODECORTE: {
      category: "puesto",
      value: "ELECTROMECANICO DE CORTE",
      status: false
  },
  DIRECTORINTERNACIONAL: {
      category: "puesto",
      value: "DIRECTOR INTERNACIONAL",
      status: false
  },
  ADMINISTRADORDEPEDIDOSYOPPL: {
      category: "puesto",
      value: "ADMINISTRADOR DE PEDIDOS Y OP PL",
      status: false
  },
  TECNICOESPECIALISTADECONTABILIDAD: {
      category: "puesto",
      value: "TECNICO ESPECIALISTA DE CONTABILIDAD",
      status: false
  },
  COMMUNITYMANAGER: {
      category: "puesto",
      value: "COMMUNITY MANAGER",
      status: false
  },
  JEFEDERECLUTAMIENTOORIENTAL: {
      category: "puesto",
      value: "JEFE DE RECLUTAMIENTO ORIENTAL",
      status: false
  },
  ELECTROMECANICODEBANDASDEINYECCION: {
      category: "puesto",
      value: "ELECTROMECANICO DE BANDAS DE INYECCION",
      status: false
  },
  INGENIEROESPECIALISTALEAN: {
      category: "puesto",
      value: "INGENIERO ESPECIALISTA LEAN",
      status: false
  },
  GERENTEDEMARKETING: {
      category: "puesto",
      value: "GERENTE DE MARKETING",
      status: false
  },
  JEFEDELABORATORIO: {
      category: "puesto",
      value: "JEFE DE LABORATORIO",
      status: false
  },
  GERENTEDEDESARROLLOTECNICO: {
      category: "puesto",
      value: "GERENTE DE DESARROLLO TECNICO",
      status: false
  },
  DESARROLLADORDEPROVEEDORES: {
      category: "puesto",
      value: "DESARROLLADOR DE PROVEEDORES",
      status: false
  }


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
  function lettersOnly(str) {
    return str.replace(/[^a-zA-Z]/g,"");
     //or return str.match(/[a-z]/gi).join('');
     //or return str.replace(/[^a-z]/gi,""); 
  }
  const handleOnChange = (e)=>{
    let aux = {...checks};
    let id = lettersOnly(e.target.id)
    console.log(id + ' vs ' + e.target.id)
    if(e.target.id ==='all'){
     let formAux = { 
       planta:[],
      segmentoPoblacion:[],
      razonSocial:[],
      puesto:[],
      ubicacion:[]
    }
      console.log(all)
      setAll(all?false:true);
      for(let prop of (Object.keys(checks))){
        aux[prop].status = all?false:true
          if(aux[prop].category=='segmentoPoblacion')
          formAux.segmentoPoblacion.push(aux[prop].value)
          if(aux[prop].category=='planta')
          formAux.planta.push(aux[prop].value)
          if(aux[prop].category=='razonSocial')
          formAux.razonSocial.push(aux[prop].value)
          if(aux[prop].category=='puesto')
          formAux.puesto.push(aux[prop].value)
          if(aux[prop].category=='ubicacion')
          formAux.ubicacion.push(aux[prop].value)
          setChecks(aux)
      }
      if(all){
      handle(e,checks[id],{planta:[],segmentoPoblacion:[],razonSocial:[],puesto:[]})
    }else{
      console.log("entre lol")
      setForm(formAux)
      form = formAux
      handle(e,checks[id],form)
    }
    }else{
      if(id === 'DISEÑADORLINEBUILDER') aux['DISENADORLINEBUILDER'].status = aux[id].status?false:true;
      else aux[id].status = aux[id].status?false:true;
      setChecks(aux);
      //checks[e.target.id].status = checks[e.target.id].status?false:true;
      handle(e,checks[id],form)
    }
   
    dispatch(getFilters())
  }
useEffect(()=>{
  if(!filters.length>0){
 dispatch(getFilters())
}

console.log(initialF)
if(initialF){
  let filtersR = JSON.parse(initialF)
 let aux = {...checks}
 let total = filtersR['razonSocial'].length+filtersR['puesto'].length+filtersR['planta'].length+filtersR['segmentoPoblacion'].length
 if(total >= 539) setAll(true)
 filtersR['planta'].forEach(item=>{
   console.log('soy: '+item)
   let valueAux = aux[item.normalize("NFD").replace(/[\u0300-\u036f\-\.\" "]/g, "")]
  if( valueAux.value === item) valueAux.status=true;
   })
 filtersR['segmentoPoblacion'].forEach(item=>{
    let valueAux = aux[item.normalize("NFD").replace(/[\u0300-\u036f\-\.\" "]/g, "")]
   if( valueAux.value === item) valueAux.status=true;
    })
    filtersR['puesto'].forEach(item=>{
      let valueAux = aux[item.normalize("NFD").replace(/[\u0300-\u036f\-\.\" "]/g, "")]
     if( valueAux && valueAux.value === item) valueAux.status=true;
      })
 filtersR['razonSocial'].forEach(item=>{
      let valueAux = aux[item.normalize("NFD").replace(/[\u0300-\u036f\-\.\" "]/g, "")]
     if( valueAux.value === item) valueAux.status=true;
      })
      filtersR['ubicacion'].forEach(item=>{
        let valueAux = aux[item.normalize("NFD").replace(/[\u0300-\u036f\-\.\" "]/g, "")]
       if( valueAux.value === item) valueAux.status=true;
        })
    }
 dispatch(getFilters())
},[])
    return(
        <Container className = 'mt-2'>
            <Row className ='mt-3'>
              <Col md = '6'>
            <Pagination size="md"><Pagination.Prev onClick = {e=>handlePrevious()} />
            <Pagination.Item>{'Filtros Disponibles'}</Pagination.Item>
    <Pagination.Next onClick = {e=>handleNext()} /></Pagination>
    </Col>
    <Col md = '6'>
    <Row style = {{paddingTop:"10px"}} key = {'item'}>
     <Col md = "2">
     <input id = 'all' onChange = {e=>handleOnChange(e)} checked = {all}  type = 'checkbox'/>
     </Col>
     <Col md = "10">
      <label>{'Aplicar todos los filtros'}</label>
      </Col>
   </Row>
   </Col>
   </Row>
            <Accordion>
            <Row className = {'flex-row '}>
            
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
     <input checked = {checks[lettersOnly(item)]&&checks[lettersOnly(item)].status} onChange = {e=>handleOnChange(e)} id = {lettersOnly(item)} type = 'checkbox'/>
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