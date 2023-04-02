import React from "react";
import { PRODUCTS } from "../ProductItem/products";
import { Product } from "../ProductItem";
import Sidebar  from "../Sidebar";
import "./style.css";

export const ProductList = () => {
  return (
    <div className="shop">
      
      <div className="shopTitle">
        <h1>Sản phẩm</h1>
      </div >

      <div className = "grid-container productlist">
        <Sidebar class="grid-item"/>
        <div className="products grid-item">
          {PRODUCTS.map((product) => (
            <Product data={product} />
          ))}
        </div>
      </div>
    </div>
  );
};
