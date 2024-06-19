import axios from "axios";
import { toastError, toastSuccess } from "../utils/toastify";

export const SET_CATEGORIES = "SET_CATEGORIES";
export const REMOVE_CATEGORY = "REMOVE_CATEGORY";
export const ADD_CATEGORY = "ADD_CATEGORY";
export const SET_CATEGORY_ID = "SET_CATEGORY_ID";
export const SET_CATEGORY_ERROR = "SET_CATEGORY_ERROR";
export const UPDATE_CATEGORY = "UPDATE_CATEGORY";
export const SET_SHOW_CATEGORY_ID="SET_SHOW_CATEGORY_ID"
export const startGetCategories = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:8080/all-categories");
      const result = response.data;
      dispatch(setCategories(result));
    } catch (err) {}
  };
};

const setCategories = (categories) => {
  return { type: SET_CATEGORIES, payload: categories };
};

export const startRemoveCategory = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/delete-route/${id}`
      );
      const result = response.data;

      dispatch(removeCategory(result._id));
      toastSuccess("REmoved Successfully");
    } catch (err) {
      toastError("something went wrong");
    }
  };
};

function removeCategory(id) {
  return { type: REMOVE_CATEGORY, payload: id };
}

export const startAddCategory = (formData, resetForm) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/create-category",
        formData
      );
      const result = response.data;
      dispatch(addCategory(result));
      dispatch(setErrors([]));
      toastSuccess("Added Successfully");
      resetForm();
    } catch (err) {
      dispatch(setErrors(err.response.data.errors));
      toastError("something went wrong");
    }
  };
};

const addCategory = (category) => {
  return { type: ADD_CATEGORY, payload: category };
};

const setErrors = (errors) => {
  return { type: SET_CATEGORY_ERROR, payload: errors };
};

export const setEditId = (id) => {
  return { type: SET_CATEGORY_ID, payload: id };
};

export const startEditCategory = (formData, id,toggle) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(
        `http://localhost:8080/update-route/${id}`,
        formData
      );
      const result = response.data;
      dispatch(updateCategory(result));
      toggle()
      toastSuccess("successful updation ")
    } catch (err) {
      toastError("error in update");
    }
  };
};

function updateCategory(category) {
  return { type:UPDATE_CATEGORY,payload:category };
}

export const setShowCategory=(id)=>{
return {type:SET_SHOW_CATEGORY_ID,payload:id}
}
