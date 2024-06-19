

import React from 'react'
import { ExpensesItem } from './ExpensesItem'

export const ExpensesList = ({expenses}) => {
  return (
    <ul className='list-group'>
      {
        expenses.map((ele)=>{
          return  <ExpensesItem key={ele._id} id={ele._id} amount={ele.amount} description={ele.description}/>
          
        })
      }
    </ul>
  )
}
