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
  CREATE_MULTIMEDIA, DELETE_MULTIMEDIA, AUTH_USER
} from '../actions/constants.js';

const initialState = {
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
   authUser: false

}
export default function reducer(state = initialState, { type, payload }) {
    
    switch (type) {
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
            return{
                ...state,
                pending: payload.employees
            }
        case REMOVE_MESSAGES:
            return{
                ...state,
            }
        case GET_LEARNING:
            console.log("soy learning")
            return{
                ...state,
                learning: payload.learning
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
            return{
                ...state,
                feedbacks: payload.feedback
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
            
            return{
                ...state,
                filters:payload.filters,
                names: payload.names
            }
            case GET_NEWS:
                return{
                    ...state,
                    news: payload.news
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
                return{
                    ...state,
                    services: payload.services
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
                    ...state
                }
             case GET_EVENTS:
                return{
                    ...state,
                    events: payload.events
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

