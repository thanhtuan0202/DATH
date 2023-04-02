import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";
import logoBK from "../../assets/products/logoBK.png";
export const Navbar = () => {
  return (
    <nav className="navbar" >
      <div className="container">
        <div className="navbar__logo">
            <div> <Link to = "/">
              <img src={logoBK} alt="Store Logo" className="logo" />
            </Link> </div>
            <div class = "link"> <Link to = "/"> <h1>BK Store</h1></Link></div>
        </div>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Tim kiem"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
        <div class = "link"><Link to="/cart"> <ShoppingCart size={32} /></Link></div>
      </div>

      <div class="navbar-expand-sm">
        <div class="container-fluid">
          <ul class="navbar-nav">
            <li class="nav-item"> <button class = "button"> <Link to="/"> Trang chủ </Link> </button></li>
            <li class="nav-item"> <button class = "button"> <Link to="/Product"> Sản phẩm</Link> </button></li>
            <li class="nav-item"> <button class = "button"> <Link to="/AboutMe"> Về chúng tôi</Link> </button></li>
            <li class="nav-item"> <button class = "button"> <Link to="/Support"> Hỗ trợ </Link> </button> </li>
          </ul>
        </div>
      </div>

    </nav>
  );
};