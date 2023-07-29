import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import styles from "./HorizontalProduct.module.css";

const HorizontalProduct = ({ product }) => {
  const options = {
    edit: false,
    color: "rgba(20,20,20,0.1)",
    activeColor: "tomato",
    size: window.innerWidth < 600 ? 20 : 25,
    value: product.rating,
    isHalf: true,
  };

  let discount = product.mrp - product.price;
  let discountPercntage = (discount / product.mrp) * 100;
  let newdic = discountPercntage.toFixed(0);

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <Link
      className={styles.productCard}
      to={`/product/${product.category}/${product.slug}`}
    >
      <img src={product.images[0].url} alt={product.name} />
      <div className={styles.productMain}>
        <h1>{product.name}</h1>
        <div className={styles.reviews}>
          <ReactStars {...options} />{" "}
          <span> ({product.numOfReviews} Reviews)</span>
        </div>
        <p>{product.shortDescription}</p>
      </div>
      <div className={styles.priceDiv}>
        <span className={styles.pricing}>₹ {product.price}</span>
        <div>
          <span className={styles.mrp}>₹ {product.mrp}</span>
          <span className={styles.discount}> {newdic}%</span>
        </div>
      </div>
    </Link>
  );
};

export default HorizontalProduct;
