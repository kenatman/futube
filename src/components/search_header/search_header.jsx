import React, { useRef } from "react";
import styles from "./search_header.module.css";

const SearchHeader = ({ onSearch }) => {
  const inputRef = useRef();

  const handleSearch = () => {
    const term = inputRef.current.value;
    onSearch(term);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleClick = () => {
    handleSearch();
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.img} src="/images/logo.png" alt="logo"></img>
        <h1 className={styles.title}>Futube</h1>
      </div>
      <input
        className={styles.input}
        type="search"
        placeholder="search..."
        ref={inputRef}
        onKeyPress={handleKeyPress}
      />
      <button className={styles.button} type="submit" onClick={handleClick}>
        <img
          className={styles.buttonImg}
          src="/images/search.png"
          alt="search"
        />
      </button>
    </header>
  );
};

export default SearchHeader;
