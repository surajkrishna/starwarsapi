import React from "react";

export const Categories = ({ api, categoriesname, loadCategory }) => {
  return (
    <div className="card" url={api} onClick={loadCategory}>
      {categoriesname}
    </div>
  );
};
