import React, { useState } from "react";
import Header from "../Header";
import { storage } from "../../firebase";
import { useFormik } from "formik";
import * as Yup from "yup";
import { v4 } from "uuid";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Select from "react-select";
import "./index.css";
const intialImage ="https://w7.pngwing.com/pngs/88/823/png-transparent-logo-product-design-brand-trademark-new-product-promotion-blue-text-trademark-thumbnail.png";
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
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState(
    intialImage
  );
  const [errorMsg, setErrorMsg] = useState("");

  const formikAddProduct = useFormik({
    initialValues: {
      title: "",
      imgUrl: "",
      price: "",
      brand: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Required*"),
      brand: Yup.string().required("Required*"),
      price: Yup.string()
        //.matches('/^(\$)?(\d{1,3}(,\d{3})*|(\d+))(\.\d{2})?$/',"price needed numbers only")
        .required("Required*"),
    }),
  });

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };
  const handlesubmit = () => {
    const imageRef = ref(storage, "image" + v4());
    uploadBytes(imageRef, image)
      .then(() => {
        getDownloadURL(imageRef)
          .then((url) => {
            console.log(url);
            setUrl(url);
          })
          .catch((error) => {
            console.log(error.message, "eroor getting the url");
          });
        setImage(null);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  //console.log(url);
  return (
    <>
      <Header />
      <div className="add-product-bg-container-total">
        <div className="add-products-img-align">
          
          <form onSubmit={formikAddProduct.handleSubmit} className="add-product-bg-container">
            <div className="add-product-card">
              <div>
                <label className="add-product-label">Category</label>
                <br />
                <Select
                  className="add-product-input"
                  options={categoryList}
                  isSearchable={false}
                  placeholder={<div>Select required category</div>}
                  onChange={(option) => setCategory(option.value)}
                />
                {/* {selectedCategory === undefined ? "Please select catagary":""} */}
              </div>
              <div>
                <label className="add-product-label" htmlFor="title">
                  Title
                </label>
                <br />
                <input
                  {...formikAddProduct.getFieldProps("title")}
                  className="add-product-input"
                  id="title"
                  type="text"
                />
                {formikAddProduct.touched.title &&
                formikAddProduct.errors.title ? (
                  <div className="l-error">{formikAddProduct.errors.title}</div>
                ) : null}
              </div>
              <div>
                <label className="add-product-label" htmlFor="price">
                  Price
                </label>
                <br />
                <input
                  {...formikAddProduct.getFieldProps("price")}
                  className="add-product-input"
                  id="price"
                  type="number number-input"
                />

                {formikAddProduct.touched.price &&
                formikAddProduct.errors.price ? (
                  <div className="l-error">{formikAddProduct.errors.price}</div>
                ) : null}
              </div>
              <div>
                <label className="add-product-label" htmlFor="brand">
                  Brand
                </label>
                <br />
                <input
                  {...formikAddProduct.getFieldProps("brand")}
                  className="add-product-input"
                  id="brand"
                  type="text"
                />
                {formikAddProduct.touched.brand &&
                formikAddProduct.errors.brand ? (
                  <div className="l-error">{formikAddProduct.errors.brand}</div>
                ) : null}
              </div>

              <button type="submit" className="add-product-add-button">Add Item</button>
            </div>
          </form>
        </div>
        <div className="add-product-img-container">
          <img
            className="add-product-img-size"
            src={url}
            alt="uploaded image"
          />
          <div className="add-product-uploadImage-container">
            <input
              className="add-product-choose-file"
              type="file"
              onChange={handleImageChange}
            />
            <button
              className="add-product-submit-button"
              onClick={handlesubmit}
            >
              Add Image
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default AddProducts;
