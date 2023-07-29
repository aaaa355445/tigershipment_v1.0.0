import React, { useEffect, useState } from "react";
import styles from "./Category.css";
import Product from "../Home/Product";
import { useParams } from "react-router-dom";
import { getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";

// const categories = [
//   "Gems and jewellery",
//   "Engineering goods",
//   "Auto parts and accessories",
//   "Fashion and apparels",
//   "Cotton yarn",
//   "Leather products",
//   "Handloom products",
//   "Jute products",
// ];

const CategoryPage = () => {

  const dispatch = useDispatch();

  const { loading, error, products } = useSelector((state) => state.products);

  const { categorySlug } = useParams();

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch, error]);

  const filteredProducts = products.filter(product => product.category === categorySlug);

  // let count = filteredProductsCount;

  return (
    <>
      <h1 className="heading">Category</h1>
      <div className="containerBox productDiv">
        {/* <div className="filterBox">
          <h1 className="Filtersheading">Filters</h1>

          <Typography className="filtertitle">Price</Typography>
          <Slider
            value={price}
            onChange={priceHandler}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
            min={0}
            max={25000}
          />
          <Typography className="filtertitle">Categories</Typography>
          <ul className="categoryBox">
            {categories.map((category) => (
              <li
                className="category-link"
                key={category.name}
                onClick={() => setCategory(category.name)}
              >
                {category}
              </li>
            ))}
          </ul>
        </div> */}

        <div className="productsCard">
          {filteredProducts && filteredProducts.map((product) => <Product product={product} />)}
        </div>

      </div>

      {/* {resultPerPage < productsCount && (
        <div className="paginationBox">
          <Pagination
            activePage={currentPage}
            itemsCountPerPage={resultPerPage}
            totalItemsCount={productsCount}
            onChange={setCurrentPageNo}
            nextPageText="Next"
            prevPageText="Prev"
            firstPageText="1st"
            lastPageText="Last"
            itemClass="page-item"
            linkClass="page-link"
            activeClass="pageItemActive"
            activeLinkClass="pageLinkActive"
          />
        </div>
      )} */}
    </>
  );
};

export default CategoryPage;
