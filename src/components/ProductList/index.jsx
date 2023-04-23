import React, { useEffect, useState } from "react";
import  Product  from "../ProductItem";
import Sidebar  from "../Sidebar";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { fetchCart } from "../../redux/Reducers/todoCart";

import "./style.css";

export const ProductList = () => {
  const [loading, setLoading] = useState(false);
  const listCart = useSelector((state) => state.todoCart.listCart);
  const dispatch = useDispatch();
  
  const fetchListCart = async () => {
    const res = await axios .get(
      "http://localhost:5000/read-list-product"
    );
    dispatch(fetchCart(res.data));
    setLoading(true);
  };
  useEffect(() => {
    fetchListCart();
  }, []);
  useEffect(() => {
    console.log("ListCart: ", listCart);
    console.log("data: ", listCart.data);
  }, [loading]);
  return loading === true ? (
    <div className="shop">
      
      <div className="shopTitle">
        <h1>Sản phẩm</h1>
      </div >
      <div className = "grid-container productlist">
        <Sidebar class="grid-item"/>
        <div className="products grid-item">
          {listCart.data.map((product,index) => (
            <Product data={product} key= {index}/>
          ))}
        </div>
      </div>
    </div>
  )
  :( 
    <div> Hiện không có sản phẩm.</div>
  );
};
