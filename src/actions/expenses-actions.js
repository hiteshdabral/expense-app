import axios from "axios"
import { toastError, toastSuccess } from "../utils/toastify"
export const GET_EXPENSES="GET_EXPENSES"
export const REMOVE_EXPENSES="REMOVE_EXPENSES"
export const ADD_EXPENSES="ADD_EXPENSES"

export const startGetExpenses=()=>{
    return async(dispatch)=>{
        const response=await axios.get('http://localhost:8080/expense')
        const result=response.data
        dispatch(getExpenses(result))
    }
}

function getExpenses(expenses){
    return{type:GET_EXPENSES,payload:expenses}
}


export const startRemoveExpense=(id)=>{
    return async(dispatch)=>{
     try {await axios.delete(`http://localhost:8080/delete-expense/${id}`)
      dispatch(removeExpense(id))
      toastSuccess("successfully deleted")}
      catch(err){
        toastError("oops something went wrong")
    }
}
}


function removeExpense(id){
    return {type:REMOVE_EXPENSES,payload:id}
}


export const startAddExpense=(expense)=>{
    return async(dispatch)=>{
       try{ const response=await axios.post('http://localhost:8080/create-expense',expense)
        const result=response.data
        dispatch(addExpense(result))
        toastSuccess("successfully Added")}
        catch(err){
            toastError("oops something went wrong")
        }
    }
}


function addExpense(expense){
    return {type:ADD_EXPENSES,payload:expense}
    }