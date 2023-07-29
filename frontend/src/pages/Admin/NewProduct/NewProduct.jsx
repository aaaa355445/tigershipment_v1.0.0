import React, { useEffect, useState } from "react";
import "./NewProduct.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, createProduct } from "../../../actions/productAction";
import { Button } from "@material-ui/core";
import MetaData from "../../../components/shared/MetaData/MetaData";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import DescriptionIcon from "@material-ui/icons/Description";
import StorageIcon from "@material-ui/icons/Storage";
import SpellcheckIcon from "@material-ui/icons/Spellcheck";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import SideBar from "../../../components/shared/Sidebar/Sidebar";
import { NEW_PRODUCT_RESET } from "../../../constants/productConstants";
import { useNavigate } from "react-router";
import FroalaEditor from "froala-editor";
import "froala-editor/js/plugins.pkgd.min.js";
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/css/plugins.pkgd.min.css";

const NewProduct = ({ history }) => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const { loading, error, success } = useSelector((state) => state.newProduct);

  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSucessMessage] = useState(null);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [mrp, setMrp] = useState(0);
  const [description, setDescription] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [company_detail, setCompany_detail] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState([]);
  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);

  const categories = [
    "Gems and jewellery",
    "Engineering goods",
    "Auto parts and accessories",
    "Fashion and apparels",
    "Cotton yarn",
    "Leather products",
    "Handloom products",
    "Jute products",
  ];

  // Froala Editor
  useEffect(() => {
    const config = {
      events: {
        contentChanged: function () {
          const content = this.html.get();
          setDescription(content);
        },
      },
      imageUploadURL: "/api/v1/upload-image", // Backend API route for image upload
    };

    new FroalaEditor("#description", config);

    const companyDetailConfig = {
      events: {
        contentChanged: function () {
          const content = this.html.get();
          setCompany_detail(content);
        },
      },
      imageUploadURL: "/api/v1/upload-image", // Backend API route for image upload
    };

    new FroalaEditor("#company_description", companyDetailConfig);
  }, []);

  useEffect(() => {
    if (error) {
      setErrorMessage(error);
      dispatch(clearErrors());
    }
    if (success) {
      setSucessMessage("Product Created Successfully");
      navigate("/admin/products");
      dispatch({ type: NEW_PRODUCT_RESET });
    }
  }, [dispatch, error, success, navigate]);

  const onClose = () => {
    setErrorMessage(null);
  };

  // Getting form data

  const createProductSubmitHandler = async (e) => {
    e.preventDefault();

    let myForm = new FormData(e.target);

    myForm.set("name", name);
    myForm.set("price", price);
    myForm.set("mrp", mrp);
    myForm.set("description", description);
    myForm.set("shortDescription", shortDescription);
    myForm.set("company_detail", company_detail);
    myForm.set("category", category);
    myForm.set("tags", tags);

    images.forEach((image) => {
      myForm.append("images", image);
    });
    dispatch(createProduct(myForm));
  };

  const createProductImagesChange = (e) => {
    const files = Array.from(e.target.files);

    setImages([]);
    setImagesPreview([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPreview((old) => [...old, reader.result]);
          setImages((old) => [...old, reader.result]);
        }
      };

      reader.readAsDataURL(file);
    });
  };

  return (
    <>
      <MetaData title="Create Product" />
      <div className="dashboard">
        <SideBar />
        <div className="newProductContainer">
          <form
            className="createProductForm"
            encType="multipart/form-data"
            onSubmit={createProductSubmitHandler}
          >
            {errorMessage && (
              <div className="error">
                {errorMessage}{" "}
                <button onClick={onClose}>
                  <img src="/images/close.png" alt="" />
                </button>{" "}
              </div>
            )}
            {successMessage && <div className="success">{successMessage}</div>}
            <h1>Create Product</h1>

            <div className="desc">
              <label>
                <SpellcheckIcon /> Product Name:{" "}
              </label>
              <input
                type="text"
                placeholder="Product Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="desc">
              <label>
                <AttachMoneyIcon /> Price:{" "}
              </label>
              <input
                type="number"
                placeholder="Price"
                required
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="desc">
              <label>
                <AttachMoneyIcon /> MRP:{" "}
              </label>
              <input
                type="number"
                placeholder="MRP"
                required
                onChange={(e) => setMrp(e.target.value)}
              />
            </div>

            <div className="desc">
              <label>
                {" "}
                <DescriptionIcon /> Short Description:{" "}
              </label>
              <textarea
                placeholder="Short Description"
                value={shortDescription}
                onChange={(e) => setShortDescription(e.target.value)}
                cols="30"
                rows="1"
              ></textarea>
            </div>

            <div className="desc">
              <label>
                {" "}
                <DescriptionIcon /> Description:{" "}
              </label>
              <textarea
                id="description"
                name="description"
                placeholder="Product Desciption"
                value={description}
              ></textarea>
            </div>
            <div className="desc">
              <label>
                <DescriptionIcon /> Company Details:{" "}
              </label>
              <textarea
                id="company_description"
                name="company_description"
                placeholder="Company Description"
                value={company_detail}
              ></textarea>
            </div>

            <div className="desc">
              <label>
                <AccountTreeIcon />
                Category:{" "}
              </label>
              <select onChange={(e) => setCategory(e.target.value)}>
                <option value="">Choose Category</option>
                {categories.map((cate) => (
                  <option key={cate} value={cate}>
                    {cate}
                  </option>
                ))}
              </select>
            </div>

            <div className="desc">
              <label>
                <StorageIcon />
                Tags:{" "}
              </label>
              <input
                type="text"
                placeholder="Tags"
                required
                onChange={(e) => setTags(e.target.value)}
              />
            </div>

            <div id="createProductFormFile">
              <input
                type="file"
                name="avatar"
                accept="image/*"
                onChange={createProductImagesChange}
                multiple
              />
            </div>

            <div id="createProductFormImage">
              {imagesPreview.map((image, index) => (
                <img key={index} src={image} alt="Product Preview" />
              ))}
            </div>

            <Button
              id="createProductBtn"
              type="submit"
              disabled={loading ? true : false}
            >
              Create
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default NewProduct;
