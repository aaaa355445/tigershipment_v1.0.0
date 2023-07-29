import React, { useState } from "react";
import styles from './Search.module.css'; 
import { useNavigate } from "react-router";

const Search = () => {
  let navigate = useNavigate()
  const [keyword, setKeyword] = useState("");


  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if(keyword.trim()) {
        navigate(`/products/${keyword}`);
    }else {
        navigate("/products");
    }
  };

  return (
    <>
      <form className={styles.searchBox} onSubmit={searchSubmitHandler}>
        <input
          type="text"
          placeholder="Search Product"
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button type="submit"><img src="/images/search_icon.png" alt="" /></button>
      </form>
    </>
  );
};

export default Search;
