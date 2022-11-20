import React from "react";

const TextCard = ({ picture, name, description, price, stock }) => {
  return (
    <div className="text-card">
      <div className="card-img">
        <img src={picture} alt={name} />
      </div>

      <div className="card-text">
        <h5>{name}</h5>
        <p className="small">{description}</p>

        <div className="mt-4 d-flex justify-content-between">
          <p className="small">Stock</p>
          <p className="small">Price</p>
        </div>

        <div className="d-flex justify-content-between">
          <p className="small">{stock}</p>
          <p className="small">{price}</p>
        </div>
      </div>
    </div>
  );
};

export default TextCard;
