import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./ProductDetails.module.css";
import ReactStars from "react-rating-stars-component";
import Carousel from "react-material-ui-carousel";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetails } from "../../actions/productAction";
import ReviewCard from "../../components/shared/ReviewCard/ReviewCard.jsx";
import MetaData from "../../components/shared/MetaData/MetaData";
import InquiryForm from "../../components/shared/InquiryForm/InquiryForm";

const ProductDetails = () => {
  const dispatch = useDispatch();

  const [showProductDescription, setShowProductDescription] = useState(true);

  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(true);
  };

  const { product, loading, error } = useSelector(
    (state) => state.productDetails
  );
  const { slug, category } = useParams();

  useEffect(() => {
    dispatch(getProductDetails(category, slug));
  }, [dispatch, slug, category]);

  const options = {
    edit: false,
    color: "rgba(20,20,20,0.1)",
    activeColor: "tomato",
    size: window.innerWidth < 600 ? 15 : 20,
    value: 4,
    isHalf: true,
  };

  let discount = product.mrp - product.price;
  let discountPercntage = (discount / product.mrp) * 100;
  let newdic = discountPercntage.toFixed(0);

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handleThumbnailClick = (index) => {
    setActiveImageIndex(index);
  };

  return (
    <>
      {/* Meta Tags, title, description Start */}
      <MetaData
        title={product.name}
        description={product.shortDescription}
        keyword={product.tags}
      />
      {/* Meta Tags, title, description end */}

      <div className={styles.productPage}>
        {/* Path design Start */}
        <span className={styles.path}>
          <Link className={styles.pathlink} to="/">
            Home
          </Link>
          /<Link className={styles.pathlink}> {product.category} </Link> /
          <Link className={styles.pathlink}> {product.name}</Link>
        </span>
        {/* Path design end */}

        {/* Upper Section start */}
        <div className={styles.ProductDetails}>
          <div className={styles.leftBox}>
            <div className={styles.productImg}>
              <Carousel
                autoPlay={false}
                indicators={false}
                index={activeImageIndex}
              >
                {product.images &&
                  product.images.map((item, i) => (
                    <img
                      className={styles.CarouselImage}
                      key={i}
                      src={item.url}
                      alt={`${i} Slide`}
                    />
                  ))}
              </Carousel>
            </div>
            <div className={styles.productImgs}>
              {product.images &&
                product.images.map((item, i) => (
                  <img
                    className={styles.CarouselImage}
                    key={i}
                    src={item.url}
                    alt={`${i} Slide`}
                    onClick={() => handleThumbnailClick(i)}
                  />
                ))}
            </div>
          </div>
          <div className={styles.rightBox}>
            <h2>{product.name}</h2>
            <p>{product.shortDescription}</p>
            <div className={styles.review}>
              <ReactStars {...options} />{" "}
              <span> ({product.numOfReviews} Reviews)</span>
            </div>
            <div className={styles.priceDiv}>
              <span className={styles.pricing}>₹ {product.price}</span>
              <span className={styles.mrp}>₹ {product.mrp}</span>
              <span className={styles.discount}> {newdic}%</span>
            </div>

            <div className={styles.inquireBtn}>
              <button onClick={handleButtonClick}>Inquire Now</button>
              {showForm && (
                <InquiryForm
                  className={styles.inquiryModal}
                  id={product._id}
                  onClose={() => setShowForm(false)}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Upper Section end */}

      <div className={`${styles.descriptionWrapper} ${styles.containerBox}`}>
        <div className={styles.toggleButton}>
          <button
            className={`${showProductDescription ? styles.active : ""}`}
            onClick={() => setShowProductDescription(true)}
          >
            Product Description
          </button>
          <button
            className={`${!showProductDescription ? styles.active : ""}`}
            onClick={() => setShowProductDescription(false)}
          >
            Company Details
          </button>
        </div>

        {showProductDescription ? (
          <div
            className={styles.desc}
            dangerouslySetInnerHTML={{ __html: product.description }}
          ></div>
        ) : (
          <div
            className={styles.desc}
            dangerouslySetInnerHTML={{ __html: product.company_detail }}
          ></div>
        )}
      </div>

      {/* Description Section Start */}
      {/* <h3 className={styles.reviewHeading}>Product Description</h3>

      <div className={styles.containerBox}>
      <div dangerouslySetInnerHTML={{ __html: product.description }}></div>

      </div> */}
      {/* Description Section end */}

      {/* Description Section Start */}
      {/* <h3 className={styles.reviewHeading}>Company Details</h3>

      <div className={styles.containerBox}>
      <div dangerouslySetInnerHTML={{ __html: product.company_detail }}></div>

      </div> */}
      {/* Description Section end */}

      {/* Reviews Section Start */}
      <h3 className={styles.reviewHeading}>Reviews</h3>

      <div className={styles.containerBox + " " + styles.otherDetails}>
        <div className={styles.reviewDesign}>
          <div className={styles.firstSection}>
            <h5>Total Reviews</h5>
            <span>10.0K</span>
          </div>

          <hr />

          <div className={styles.secondSection}>
            <h5>Average Rating</h5>
            <span>
              <p>{product.rating}.0</p> <ReactStars {...options} />
            </span>
            <p>Average rating on this product</p>
          </div>

          <hr />

          <div className={styles.thirdSection}>
            <div className={styles.rateBox}>
              <span className={styles.value}>★ 5</span>
              <div className={styles.progressBar}>
                <span className={styles.progress}></span>
              </div>
              <span className={styles.count}>0</span>
            </div>
            <div className={styles.rateBox}>
              <span className={styles.value}>★ 4</span>
              <div className={styles.progressBar}>
                <span className={styles.progress}></span>
              </div>
              <span className={styles.count}>0</span>
            </div>
            <div className={styles.rateBox}>
              <span className={styles.value}>★ 3</span>
              <div className={styles.progressBar}>
                <span className={styles.progress}></span>
              </div>
              <span className={styles.count}>0</span>
            </div>
            <div className={styles.rateBox}>
              <span className={styles.value}>★ 2</span>
              <div className={styles.progressBar}>
                <span className={styles.progress}></span>
              </div>
              <span className={styles.count}>0</span>
            </div>
            <div className={styles.rateBox}>
              <span className={styles.value}>★ 1</span>
              <div className={styles.progressBar}>
                <span className={styles.progress}></span>
              </div>
              <span className={styles.count}>0</span>
            </div>
          </div>
        </div>

        <div className="reviewdb">
          {product.reviews && product.reviews[0] ? (
            <div className={styles.reviews}>
              {product.reviews &&
                product.reviews.map((review) => <ReviewCard review={review} />)}
            </div>
          ) : (
            <p className={styles.noReviews}>No Reviews Yet</p>
          )}
        </div>
      </div>
      {/* Reviews Section Send */}
    </>
  );
};

export default ProductDetails;
