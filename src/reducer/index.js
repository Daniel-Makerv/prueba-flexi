import {
  GET_MESSAGES,
  SEND_MESSAGE,
  GET_EMPLOYEE,
  UPDATE_EMPLOYEE,
  DELETE_EMPLOYEE,
  FORM_EMPLOYEE,
  GET_EMPLOYEES,
  GET_PENDING,
  REMOVE_MESSAGES,
  GET_LEARNING,
  CREATE_LEARNING,
  UPDATE_LEARNING,
  DATA_FORM, GET_FEEDBACKS, CREATE_FEEDBACK,UPDATE_FEEDBACK,
  DELETE_FEEDBACK, DELETE_LEARNING, UPLOAD_FILE,
  GET_FILTERS,CREATE_NEW, UPDATE_NEW, DELETE_NEW, GET_NEWS,
  GET_SERVICES, DELETE_SERVICE,GET_EVENTS, GET_MULTIMEDIA, 
  UPDATE_EVENT, DELETE_EVENT, CREATE_EVENT,
  CREATE_MULTIMEDIA, DELETE_MULTIMEDIA, AUTH_USER, FILTER_BY_TITLE
} from '../actions/constants.js';

const initialState = {
   comments: [],
   messages:[],
   sendMessage:{},
   employee: [],
   formEmployee:null,
   employees: [],
   pending: [],
   learning:[],
   feedbacks:[],
   filters:[],
   names:{},
   dataForm:null,
   news: [],
   services:[],
   events:[],
   multimedia:[],
   authUser: false,
   auxFeedbacks:[],
   auxNews:[],
   auxEvents:[],
   auxServices:[],
   auxLearning:[]
}
export default function reducer(state = initialState, { type, payload }) {
    
    switch (type) {
    case FILTER_BY_TITLE:{
        
       
        let filterFeedbacks = state.feedbacks.filter(feedback => feedback["userPointer"].toUpperCase().includes(payload.toUpperCase()))
        let filterNews = state.news.filter(feedback => feedback["author"].toUpperCase().includes(payload.toUpperCase()))
        let filterEvents = state.events.filter(feedback => feedback["place"].toUpperCase().includes(payload.toUpperCase()))
        let filterLearning = state.learning.filter(feedback => feedback["nameCourse"].toUpperCase().includes(payload.toUpperCase()))
        let filterServices = state.services.filter(feedback => feedback["name"].toUpperCase().includes(payload.toUpperCase()))
        
        if(filterFeedbacks.length<=0){
            filterFeedbacks = state.auxFeedbacks
        }
        if(filterNews.length<=0){
            filterNews = state.auxNews;
        }
        if(filterEvents.length<=0){
            filterEvents = state.auxEvents;
        }
        if(filterLearning.length<=0){
            filterLearning = state.auxLearning;
        }
        if(filterServices.length<=0){
            filterServices = state.auxServices;
        }
        console.log(payload)
        if(payload === ""){
            filterNews = state.auxNews;
            filterFeedbacks = state.auxFeedbacks
            filterServices = state.auxServices;
            filterLearning = state.auxLearning;
            filterEvents = state.auxEvents;
        }
        return{
            ...state,
            news: filterNews,
            feedbacks:filterFeedbacks,
            services:filterServices,
            learning:filterLearning,
            events:filterEvents

        }
    }
	case AUTH_USER:
	    return{
		...state,
		authUser:payload.isAuth
	   }
        case GET_MESSAGES:

            return {
                ...state,
                messages:payload.messages
            }
        case SEND_MESSAGE:
            
            return{
                ...state,
                messages: state.messages.concat([payload.message])
            }
        case GET_EMPLOYEE:
            return{
                ...state,
                employee: [payload.employee]
            }
        case FORM_EMPLOYEE:
            return{
                ...state,
                formEmployee: payload
            }
        case GET_EMPLOYEES:
            return{
                 ...state,
                employees: payload.employees
            }
        case UPDATE_EMPLOYEE:
            return {
                ...state
            }
        case DELETE_EMPLOYEE:
            return {
                ...state
            }
        case GET_PENDING:
            const employees = [...payload.employees].reverse();
            return{
                ...state,
                pending: employees
            }
        case REMOVE_MESSAGES:
            return{
                ...state,
            }
        case GET_LEARNING:
            const learning = [...payload.learning].reverse();
            return{
                ...state,
                learning: learning,
                auxLearning: learning
            }
        case CREATE_LEARNING:
            
            return{
                ...state,
            }
        case UPDATE_LEARNING:
            
            return{
                ...state,
            }
        case DELETE_LEARNING:
            
            return{
                ...state,
            }
        case GET_FEEDBACKS:
            const feedback = [...payload.feedback].reverse();
            return{
                ...state,
                feedbacks: feedback,
                auxFeedbacks: feedback
            }
        case CREATE_FEEDBACK:
            
            return{
                ...state,
            }
        case UPDATE_FEEDBACK:
            
            return{
                ...state,
            }
        case DELETE_FEEDBACK:
            
            return{
                ...state,
            }
        case DATA_FORM:
            return{
                ...state,
                dataForm:payload
            }
        case UPLOAD_FILE:
            return{
                ...state,
            }
        case GET_FILTERS:
            let res = []
            for(let item of payload.filters){
                res.push(item.sort())
            }
            return{
                ...state,
                filters:res,
                names: payload.names,
            }
            case GET_NEWS:
                let aux = []
                const news = [...payload.news].reverse();
                for(let item of payload.news){
                    aux.concat(item.comments)
                    item.comments = item.comments.map(item=>JSON.stringify(item))
                }
                aux = aux.map(item=>{return item.name +"/"+item.body})
            
                return{
                    ...state,
                    news: news,
                    comments:aux,
                    auxNews: news
                }
            case CREATE_NEW:
                
                return{
                    ...state,
                }
            case UPDATE_NEW:
                
                return{
                    ...state,
                }
            case DELETE_NEW:
                return {
                    ...state
                }
             case GET_SERVICES:
                const services = [...payload.services].reverse();
                return{
                    ...state,
                    services: services,
                    auxServices:services
                }
            case DELETE_SERVICE:
                
                return{
                    ...state,
                }
             case UPDATE_EVENT:
                
                return{
                    ...state,
                }
            case DELETE_EVENT:
                return {
                    ...state,
                    
                }
             case GET_EVENTS:
                const events = [...payload.events].reverse();
                return{
                    ...state,
                    events: events,
                    auxEvents: events
                }
            case GET_MULTIMEDIA:
                return{
                    ...state,
                    multimedia: payload.multimedia
                }
            case CREATE_EVENT:
                return{
                    ...state,
                }
            case CREATE_MULTIMEDIA:
                return{
                    ...state
                }
            case DELETE_MULTIMEDIA:
                return{
                    ...state
                }
        default:
            return state;
    }
}

