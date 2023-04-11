import React from 'react';
import './Checkout.css';
import CheckoutForm from '../../../components/CheckoutForm';

function Checkout(props) {
  return (
    <div className="checkout">
      <div className="text-center checkout__title">
        <i className="fas fa-clipboard-check checkout__title__icon"></i>
        Xác nhận đơn hàng
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <CheckoutForm />
          </div>
          <div className="col-md-6">
            
          </div>
        </div>
      </div>
    </div>
  );
}

Checkout.propTypes = {};

export default Checkout;
