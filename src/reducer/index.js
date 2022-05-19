import {
  GET_MESSAGES,
  SEND_MESSAGE,
  GET_EMPLOYEE,
  GET_EMPLOYEES,
  GET_PENDING,
  REMOVE_MESSAGES
} from '../actions/constants.js';

const initialState = {
   messages:[],
   sendMessage:{},
   employee: [],
   employees: [],
   pending: [],
}
export default function reducer(state = initialState, { type, payload }) {
    switch (type) {
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
            case GET_EMPLOYEES:
                return{
                    ...state,
                    employees: payload.employees
                }
        case GET_PENDING:
            return{
                ...state,
                pending: payload.employees
            }
        case REMOVE_MESSAGES:
            return{
                ...state
            }
        default:
            return state;
    }
}

