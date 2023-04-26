
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import logo from "../../assets/products/logoBK.png";

import "./navbar.css"
import { Navigate } from "react-router-dom";
import { Button } from "@mui/material";
import { delLoginAction } from "./../../redux/Reducers/loginUser";

function Header() {
  const number = useSelector((state) => state.todoCart.number);
  const  navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.loginUser);

  const handleLogout = (e) => {
    alert("Đăng xuất thành công!");
    localStorage.removeItem("user");
    dispatch(delLoginAction());
    navigate("/");
  };

  return (
    <nav class="navbar fixed-top navbar-expand-lg header" id="mainNavbar">
      <div class="container-fluid d-flex order-lg-1">
        <div className="header__logo">
          <Link to="/">
            <img src={logo} alt />
          </Link>
          <div style={{margin: "0px 2px"}}>
              <h1>BK Store</h1>
           </div>
        </div>

        <div
          class="collapse navbar-collapse order-lg-2"
          id="navbarNavAltMarkup"
          style = {{

          }}
        >
          <div class="navbar-nav">
            <Link to="/" className="header__link nav-link">
              Trang chủ
            </Link>
            <Link to="/product" className="header__link nav-link">
              Sản phẩm
            </Link>
            <Link to="/" className="header__link nav-link">
              Giới thiệu
            </Link>
          </div>
        </div>

        <div className="header__ctn order-lg-2">
          <div>
            <Link to="/order" className="link">
              <i class="bi bi-cart"></i>
              <span>Giỏ hàng</span>
              <div className="qty">{number}</div>
            </Link>
          </div>
          <div>
            <Link to={user.isLogin ? "/user" : "/login"} className="link">
              <i class="bi bi-person"></i>
              {user.isLogin ? user.userInfo.username : "Đăng nhập"}
            </Link>
          </div>

          {user.isLogin ? (
            <div className="header__logout" title="Đăng xuất">
              <Button type="submit" onClick={handleLogout}>
                <i class="bi bi-box-arrow-right"></i>
              </Button>
            </div>
          ) : (
            ""
          )}
        </div>
{/* 
        <button
          class="navbar-toggler header__btn"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="bi bi-layout-text-sidebar"></i>
        </button> */}
      </div>
    </nav>
  );
}

export default Header;
