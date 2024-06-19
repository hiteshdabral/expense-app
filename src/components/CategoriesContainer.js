import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { startGetCategories } from '../actions/categories-action'
import { CategoriesList } from './CategoriesList'
import { CategoryForm } from './CategoryForm'
import { CategoryEdit } from './CategoryEdit'
import { CategoryShow } from './CategoryShow'

export const CategoriesContainer = () => {
const dispatch=useDispatch()

useEffect(()=>{
    dispatch(startGetCategories())
},[dispatch])

    const categories=useSelector(state=>state.categories)
  return (
    <>
    <div>
     Listing Categories  -{categories.data.length}
    </div>
     <div className='col-md-8'>
     <CategoriesList categories={categories.data}/>
     </div>

     <div className='col-md-4'>
    <CategoryForm/>
     </div>
     {categories.editCategoryId && <CategoryEdit id={categories.editCategoryId}/>}
     {categories.showCategoryId && <CategoryShow id={categories.showCategoryId}/>}
      
    </>
  )
}
