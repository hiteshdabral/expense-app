import { ADD_CATEGORY } from "../actions/categories-action"
import { ADD_EXPENSES, GET_EXPENSES, REMOVE_EXPENSES } from "../actions/expenses-actions"

const initialState = {
    data: []
}

const expensesReducer = (state = initialState, action) => {
    switch(action.type) {

        case GET_EXPENSES:{
            return {...state,data:action.payload}
        }
        case REMOVE_EXPENSES:{
            return {
                ...state,data:state.data.filter((ele)=>ele._id!==action.payload)
            }
        }
        case ADD_EXPENSES:{
            return {...state,data:[...state.data,action.payload]}
        }
        default: {
            return {...state}
        }
    }
}

export default expensesReducer