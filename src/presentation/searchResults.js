import React from "react";

export const SearchResult = ({ data, context }) => {
  const Tiles = data.map((item, index) => {
    const tile = Object.keys(item).map((elem, indx) => {
      if (indx < 3) {
        return (
          <div key={indx}>
            <strong>{elem}</strong>:<span>{item[elem]}</span>
          </div>
        );
      }
    });
    return (
      <div className="card-sw" key={index}>
        {tile}
      </div>
    );
  });

  return Tiles;
};
