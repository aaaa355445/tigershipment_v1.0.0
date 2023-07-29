import React, {useEffect} from 'react';
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import styles from './Home.module.css';


const Product = ({ product }) => {
  const options = {
    edit: false,
    color: "rgba(20,20,20,0.1)",
    activeColor: "tomato",
    size: window.innerWidth < 600 ? 20: 25,
    value: product.rating,
    isHalf: true,
  };

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <Link className={styles.productCard} to={`/product/${product.category}/${product.slug}`}>
        <img src={product.images[0].url} alt={product.name} />
        <p>{product.name}</p>
        <div>
            <ReactStars {...options} /> <span> ({product.numOfReviews} Reviews)</span>
        </div>
        <span>{`₹ ${product.price}`}</span>
    </Link>
    
  );
};

export default Product