import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import './style.css';
import { Item, RemoveCart } from './part';
import { deleteCart } from '../../redux/Reducers/todoCart';
import ReactDOM from 'react-dom';
// Call api
const createPayment = async (body) => {
  try {
    const { data } = await axios({
      method: 'POST',
      url: 'http://localhost:5000/createNewOrder',
      data: body,
    });
    return {
      errCode: data.errCode,
      errDetail: data.errDetail,
      result: data.data,
    };
  } catch (error) {
    return {
      errCode: 1,
      errDetail: 'System error',
      result: null,
    };
  }
};

function CheckoutCart(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const listItemCart = useSelector((state) => state.todoCart.cartItem);
  const total = useSelector((state) => state.todoCart.total);
  const paymentMethod = useSelector((state) => state.paymentMethod.method);
  console.log('payment-method: ', paymentMethod);
  const [openPaypal, setOpenPaypal] = useState(false);
  useEffect(() => {}, [listItemCart]);
  // const PaypaylButton = window.paypal.Buttons.driver('react', {
  //   React,
  //   ReactDOM,
  // });
  function createOrder(data, actions) {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: total,
          },
        },
      ],
    });
  }

  const onApprove = async (data, actions) => {
    await handleSubmitOrder();
    return actions.order.capture();
  };
  
  const handleSubmitOrder = async () => {
    const customer_id = localStorage.getItem('user')
      ? JSON.parse(localStorage.getItem('user')).customer.id
      : null;
      const items = listItemCart.map((item) => {
        return {
          quantity: item.cartQuantity,
          total_amount: item.totalPriceItem,
          product: item.id,
        };
      });
      const numItems = listItemCart.length;
      const data = {
        items,
        customer_id,
        total_amount: total,
        payment_method: paymentMethod,
        numItems,
      };
      const { errCode, errDetail } = await createPayment(data);
      if (errCode) {
        return alert(errDetail);
      }
      dispatch(deleteCart());
      alert('Thanh toán thành công');
      return navigate('/');
  };

  const handleCheckPaymentMethod = () => {
    if (paymentMethod === 'paypal') {
      setOpenPaypal(true);
    } else {
      handleSubmitOrder();
    }
  };
  return (
    <>
      <div className="card checkout-cart mb-5">
        <div className="checkout-cart__header">
          <div>Các món đã chọn</div>
          <button className="btn btn-sm checkout-cart__add-item">
            <Link to="/" className="checkout-cart__add-item__link">
              Thêm món
            </Link>
          </button>
        </div>
        {listItemCart.map((item) => (
          <Item key={item.id} item={item} />
        ))}
        <div className="checkout-cart__footer ">
          <div className="checkout-cart__footer__total">
            <div>Thành tiền</div>
            <div className="checkout-cart__footer__total__price">
              {total}
            </div>
          </div>
          <button
            className="btn checkout-cart__footer__btn"
            onClick={handleCheckPaymentMethod}
            disabled={(openPaypal && paymentMethod === 'paypal') || total === 0}
          >
            Đặt hàng
          </button>
        </div>
      </div>
      {openPaypal && paymentMethod === 'paypal' && (
        <div className="card checkout-cart">
          <PaypaylButton
            createOrder={(data, actions) => createOrder(data, actions)}
            onApprove={(data, actions) => onApprove(data, actions)}
          />
        </div>
      )}
      <RemoveCart />
    </>
  );
}

CheckoutCart.propTypes = {};

export default CheckoutCart;
