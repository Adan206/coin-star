import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className='header'>
      <Link to='/'>
        <div className='logo'>CoinStar</div>
      </Link>
    </div>
  );
};

export default Header;

/* <div className='logo'>CoinStar</div> */
