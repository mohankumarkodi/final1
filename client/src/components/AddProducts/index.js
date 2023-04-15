import React, { useState } from "react";
import Select from "react-select";
import "./index.css";
const categoryList = [
  {
    label: "clothes",
    value: "clothes",
  },
  {
    label: "appliances",
    value: "appliances",
  },
  {
    label: "electronics",
    value: "electronics",
  },
  {
    label: "grocery",
    value: "grocery",
  },
  {
    label: "toys",
    value: "toys",
  },
];
function AddProducts() {
  const [selectedCategory, setCategory] = useState([]);
  return (
    <div className="add-product-bg-container">
      <div className="add-product-card">
        <div>
          <label className="add-product-label">Category</label>
          <br />
          <Select
            className="product-category-select"
            options={categoryList}
            isSearchable={false}
            placeholder={<div>Select required category</div>}
            onChange={(option) => setCategory(option.value)}
          />
        </div>
        <div>
          <label className="add-product-label" htmlFor="title">Title</label>
          <br />
          <input className="add-product-input" id="title" type="text" />
        </div>
        <div>
          <label className="add-product-label" htmlFor="price">Price</label>
          <br />
          <input className="add-product-input" id="price" type="text" />
        </div>
        <div>
          <label className="add-product-label" htmlFor="brand">Brand</label>
          <br />
          <input className="add-product-input" id="brand" type="text" />
        </div>

        <button className="add-product-add-button">Add item</button>
      </div>
    </div>
  );
}
export default AddProducts;
