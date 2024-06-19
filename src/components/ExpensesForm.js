import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { startAddExpense } from '../actions/expenses-actions'


export const ExpensesForm = () => {
    const [amount,setAmount]=useState("")
    const [description,setDescription]=useState("")
    const [date,setDate]=useState("")
    const dispatch=useDispatch()
    const handleSubmit=(e)=>{
        e.preventDefault()
        const obj={
            expenseDate:date,
            amount:Number(amount),
            description:description,
        }
        console.log(obj)
        dispatch(startAddExpense(obj))
        
    }
  return (
    <div className='form-group'>
    <form onSubmit={handleSubmit} >
      
        <label><b>ADD AMOUNT</b></label>
        <input type='number' value={amount} className='form-control' onChange={(e)=>setAmount(e.target.value)}/>
        
        <label><b>ADD DESCRIPTION</b></label>
        <input type='text'value={description} className='form-control' onChange={(e)=>setDescription(e.target.value)}/>
        
        <label><b>DATE</b></label>
        <input type='date'value={date} className='form-control' onChange={(e)=>setDate(e.target.value)}/>
       
        <input type='submit' className='btn btn-primary'/>
    </form>
    </div>
  )
}
