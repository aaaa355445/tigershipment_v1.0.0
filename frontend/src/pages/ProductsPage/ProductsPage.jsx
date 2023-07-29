import React, { useEffect, useState } from "react";
import HorizontalProduct from "../../components/shared/HorizontalProduct/HorizontalProduct";
import { useParams } from "react-router-dom";
import { getProduct, clearErrors } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
import Pagination from "react-js-pagination";
import styles from "./ProductsPage.module.css";

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

const ProductsPage = () => {
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([0, 25000]);
  const [category, setCategory] = useState("");

  const { loading, error, products, productsCount, resultPerPage } =
    useSelector((state) => state.products);

  const { keyword } = useParams();

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  const priceHandler = (event, newPrice) => {
    setPrice(newPrice);
  };

  useEffect(() => {
    dispatch(getProduct(keyword, currentPage, price, category));
  }, [dispatch, error, keyword, currentPage, price, category]);

  // let count = filteredProductsCount;

  return (
    <>
      <h1 className={styles.heading}>Products</h1>
    <div className={`${styles.containerBox} ${styles.productDiv}`}>
        <div className={styles.filterBox}>
          <h1 className={styles.Filtersheading}>Filters</h1>

          <Typography className={styles.filtertitle}>Price</Typography>
          <Slider
            value={price}
            onChange={priceHandler}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
            min={0}
            max={25000}
          />
          <Typography className={styles.filtertitle}>Categories</Typography>
          <ul className={styles.categoryBox}>
            {categories.map((category) => (
              <li
                className={styles.categoryLink}
                key={category}
                onClick={() => setCategory(category)}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.productscard}>
          {products &&
            products.map((product) => <HorizontalProduct product={product} />)}

          {resultPerPage < productsCount && (
            <div className={styles.paginationBox}>
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
          )}
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
