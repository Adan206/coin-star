import "./Header.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [coin, setCoin] = useState("");

  const submitHandler = (e: any) => {
    console.log("SEARCH ME");
    e.preventDefault();
    if (coin === "") return alert("Please enter search term!");
    setCoin(" ");
  };

  return (
    <div className='header'>
      <Link to='/'>
        <div className='logo'>CoinStar</div>
      </Link>

      <div className='search-bar'>
        <form onSubmit={submitHandler}>
          <input
            type='text'
            // value={term}
            placeholder='Search for coins'
            onChange={(e) => setCoin(e.target.value)}
          />
          <button type='submit'>
            <i className='fa fa-search'></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;
