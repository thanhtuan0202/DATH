import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import CartItem from "../CartItem"
import TotalItemOrder from "../TotalItemOrder";
import "./style.css";

export default function Cart() {
  const cart = useSelector((state) => state.todoCart.cartItem);
  console.log(cart);
  useEffect(() => {}, [cart]);
  return (
    <div>
      <div className="cart-area pd-top-120 pd-bottom-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="table-responsive mb-4">
                <table className="table">
                  <thead>
                    <tr>
                      <th className="blank" />
                      <th className="blank" />
                      <th className="title-name">Sản phẩm</th>
                      <th scope="col">Giá</th>
                      <th scope="col">Số lượng</th>
                      <th>Tổng tiền</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((item, index) => {
                      return <CartItem key={index} data={item} />;
                    })}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-8"></div>
            <TotalItemOrder />
          </div>
        </div>
      </div>
    </div>
  );
}