import React, { useEffect } from "react";
import styles from "./Home.module.css";
import Product from "./Product.jsx";
import MetaData from "../../components/shared/MetaData/MetaData";
import { getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Home = () => {
  const categories = [
    { slug: "gems-and-jewellery", name: "Gems and jewellery", image: "gems_icon"},
    { slug: "engineering-goods",name: "Engineering goods", image: "engineering_icon" },
    { slug: "auto-parts-and-accessories", name: "Auto parts and accessories", image: "autopart_icon" },
    { slug: "fashion-and-apparels", name: "Fashion and apparels", image: "fashion_icon" },
    { slug: "cotton-yarn", name: "Cotton yarn", image: "cotton_icon" },
    { slug: "leather-products", name: "Leather products", image: "leather_icon" },
    { slug: "handloom-products", name: "Handloom products", image: "handloom_icon" },
    { slug: "jute-products", name: "Jute products", image: "jute_icon" },
    // { slug: "categories", name: "All categories", image: "category_icon" },
  ];

  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  const buttons = document.querySelectorAll("[data-carousel-btn]");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const offset = btn.dataset.carouselButton === "next" ? 1 : -1;
      const slides = btn
        .closest("[data-carousel]")
        .querySelector("[data-slides]");

      const activeSlide = slides.querySelector("[data-active]");
      let newIndex = [...slides.children].indexOf(activeSlide) + offset;
      if (newIndex < 0) newIndex = slides.children.length - 1;
      if (newIndex >= slides.children.length) newIndex = 0;

      slides.children[newIndex].dataset.active = true;
      delete activeSlide.dataset.active;
    });
  });

  return (
    <>
      <MetaData title="Tiger Shipment" description="This is home page" />

      <div className={styles.containerBox}>
        <div className={styles.category}>
          <h2 className={styles.catTitle}>My markets</h2>
          <hr />
          <ul>
            {categories.map((category) => (
              <li className={styles.categoryLink} key={category.id}>
                <Link to={`/category/${category.name}`} className={styles.catLink}>
                  <img src={`/images/${category.image}.png`} alt="" />
                  <span>{category.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.carousel} data-carousel>
          <button
            className={styles.btn + " " + styles.prev}
            data-carousel-btn="prev"
          >
            ◀
          </button>
          <button
            className={styles.btn + " " + styles.next}
            data-carousel-btn="next"
          >
            ▶
          </button>

          <ul data-slides>
            <li className={styles.slide} data-active >
              <img src="/images/1.png" alt="" />
            </li>

            <li className={styles.slide} >
              <img src="/images/2.png" alt="" />
            </li>

            <li className={styles.slide}>
              <img src="https://i.postimg.cc/9z3qrWFN/img-05.jpg" alt="" />
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.containerBox + " " + styles.homeCards}>
        <div className={styles.cardItem}>
          <h2>New arrivals</h2>
        </div>
        <div className={styles.cardItem}>
          <h2>Top ranking</h2>
        </div>
        <div className={styles.cardItem}>
          <h2>Analyst's choice</h2>
        </div>
      </div>

      <div className={styles.containerBox + " " + styles.productDiv}>
        {products && products.map((product) => <Product product={product} />)}
      </div>
    </>
  );
};

export default Home;
