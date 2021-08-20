import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasketSharp";
import { useStateValue } from "./StateProvider";

import { auth } from "./firebase";

function Header() {
  const [{ basket, user }] = useStateValue();

  const login = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <nav className="header">
      <Link to="/login">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>
      <div className="header_search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link className="header__link" to={!user && "/login"}>
          <div onClick={login} className="header__option">
            <span className="header__optionOne">Hello {user?.email}</span>
            <span className="header__optionTwo">
              {user ? "Sign Out" : "Sign in"}
            </span>
          </div>
        </Link>

        <Link className="header__link" to="/orders">
          <div className="header__option">
            <span className="header__optionOne">Return</span>
            <span className="header__optionTwo">& orders</span>
          </div>
        </Link>

        <Link className="header__link">
          <div className="header__option">
            <span className="header__optionOne">Your</span>
            <span className="header__optionTwo">Prime</span>
          </div>
        </Link>

        <Link className="header__link" to="/checkout">
          <div className="header__optionBasket"></div>
          <ShoppingBasketIcon />
          <span className="header__optionTwo header__basketCount">
            {basket?.length}
          </span>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
