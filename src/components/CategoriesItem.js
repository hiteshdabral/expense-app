import React from "react";
import { useDispatch } from "react-redux";
import { startRemoveCategory,setEditId, setShowCategory } from "../actions/categories-action";

export const CategoriesItem = ({ name, id }) => {
  console.log(name, id);
  const dispatch = useDispatch();
  const handleRemove = () => {
    const consent = window.confirm("are u sure !!");
    if (consent) {
      alert({ name });
    }
    dispatch(startRemoveCategory(id));
  };

  const handleEditID=()=>{
    dispatch(setEditId(id))
  }
  const handleShow=()=>{
    dispatch(setShowCategory(id))
  }
  return (
    <li className="list-group-item">
      {name} 
      <div className="btn-group float-end">

      <button className="btn btn-outline-secondary" onClick={handleEditID}>Edit</button>
      <button className="btn btn-outline-info" onClick={handleShow}>Show</button>
      <button className="btn btn-outline-danger" onClick={handleRemove}>Remove</button>
      </div>
    </li>
  );
};
