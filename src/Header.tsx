import "./Header.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [searchcoin, setSearchCoin] = useState("");

  const submitHandler = (e: any) => {
    e.preventDefault();

    if (searchcoin === "") return alert("Please enter search term!");
    setSearchCoin(" ");
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
            onChange={(e) => setSearchCoin(e.target.value)}
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
