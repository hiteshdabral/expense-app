import React from "react";
import { CategoriesItem } from "./CategoriesItem";

export const CategoriesList = ({ categories }) => {
  return (
    <ul className="list-group">
      {categories.map((ele) => {
        return (
          <li key={ele._id}>
            <CategoriesItem name={ele.name} id={ele._id} />
          </li>
        );
      })}
    </ul>
  );
};
