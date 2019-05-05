import React from "react";
import { Categories } from "./Categories";

export const CategoriyCard = ({ categories, loadCategory }) => {
  return Object.keys(categories).map((item, index) => {
    return (
      <Categories
        key={index}
        api={categories[item]}
        categoriesname={item}
        loadCategory={() => loadCategory(categories[item], item)}
      />
    );
  });
};
