import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startAddCategory,startEditCategory } from "../actions/categories-action";
export const CategoryForm = ({ id,toggle }) => {
  const dispatch = useDispatch();

  const serverErrors = useSelector((state) => state.categories.serverErrors);

  const category = useSelector((state) => {
    return state.categories.data.find((ele) => ele._id === id);
  });
  console.log(category)

  const [name, setName] = useState(category ? category.name :"");

  const [clientErrors, setClientErrors] = useState({});

  const errors = {};

  function resetForm() {
    setName("");
  }

  const runValidations = () => {
    if (name.trim().length === 0) {
      errors.name = "Name can not be blank";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    runValidations();
    if (Object.keys(errors).length === 0) {
      const formData = {
        name: name,
      };
      if (category) {
        dispatch(startEditCategory(formData,id,toggle))
      } else {
        dispatch(startAddCategory(formData, resetForm));
        setClientErrors({});
      }
      setName("");
    } else {
      setClientErrors(errors);
    }
  };
  return (
    <>
      {serverErrors.length > 0 && (
        <div className="alert alert-danger">
          <ul>
            {serverErrors.map((ele) => {
              return <li>{ele}</li>;
            })}
          </ul>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">{category?"UPDATE ":"ADD "}CATEGORY</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            className="form-control"
          />
        </div>
        {clientErrors && <p className="text-danger">{clientErrors.name}</p>}
        <input type="submit" className="btn btn-primary" />
      </form>
    </>
  );
};
