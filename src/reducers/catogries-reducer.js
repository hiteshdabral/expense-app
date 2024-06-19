import { ADD_CATEGORY, REMOVE_CATEGORY, SET_CATEGORIES, SET_CATEGORY_ERROR, SET_CATEGORY_ID, SET_SHOW_CATEGORY_ID, UPDATE_CATEGORY} from "../actions/categories-action"

const initialState = {
    data: [],
    serverErrors:[],
    editCategoryId:null,
    showCategoryId:null
}

const categoriesReducer  = (state = initialState, action) => {
    switch(action.type) {
        case SET_CATEGORIES:{
            return {...state,data:action.payload}
        }
        case REMOVE_CATEGORY:{
            return {...state,data:state.data.filter(ele=>ele._id!==action.payload)}
        }
        case ADD_CATEGORY:{
            return {...state,data:[...state.data,action.payload]}
        }
        case SET_CATEGORY_ERROR:{
            return {...state,serverErrors:action.payload}
        }
        case SET_CATEGORY_ID:{
            return {...state,editCategoryId:action.payload}
        }
        case UPDATE_CATEGORY:{
            return {...state,data:state.data.map((ele)=>{
                if(ele._id===state.editCategoryId){
                    return {...action.payload}
                }
                else{
                    return {...ele}
                }
            })}
        }
        case SET_SHOW_CATEGORY_ID:{
            return {...state,showCategoryId:action.payload}
        }
        default: {
            return {...state}
        }
    }
}

export default categoriesReducer