import React from 'react'
import {useDispatch} from "react-redux"
import { startRemoveExpense } from '../actions/expenses-actions'

export const ExpensesItem = ({id,amount,description}) => {
const dispatch=useDispatch()
    const handleRemove=()=>{
        const consent=window.confirm("are u sure")
        if(consent){
            alert(amount+"-"+description)
            dispatch(startRemoveExpense(id))
        }
    }
  return (
    <>
   <li key={id} className='list-group-item'>{description}-{amount} {""} <button onClick={handleRemove}  className='btn btn btn-outline-danger float-end'>REMOVE</button></li>
   
   
    </>
  )
}
