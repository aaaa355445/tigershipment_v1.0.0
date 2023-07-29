import React from "react";
import styles from "./ReviewCard.module.css";
import ReactStars from "react-rating-stars-component";

const ReviewCard = ({ review }) => {
  const options = {
    edit: false,
    color: "rgba(20,20,20,0.1)",
    activeColor: "tomato",
    size: window.innerWidth < 600 ? 15 : 20,
    value: review.rating,
    isHalf: true,
  };
  const dateString = review.createdAt;

  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();
  const formattedDate = `${day} ${month} ${year}`;

  return (
    <div className={styles.reviewCard}>
      <h3>{review.name}</h3>
      <div>
        <ReactStars {...options} /> <span>{formattedDate}</span>
      </div>

      <p>{review.comment}</p>
    </div>
  );
};

export default ReviewCard;
