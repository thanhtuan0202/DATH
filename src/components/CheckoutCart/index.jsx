import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "./style.scss";
import { Item, RemoveCart } from "./part";
import { deleteCart } from "../../redux/Reducers/todoCart";
import ReactDOM from "react-dom";
// Call api
const createPayment = async (body) => {
  try {
    const { data } = await axios({
      method: "POST",
      url: "http://localhost:5000/create-order",
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
      errDetail: "System error",
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
  console.log("payment-method: ", paymentMethod);
  const [openPaypal, setOpenPaypal] = useState(false);
  useEffect(() => {}, [listItemCart]);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");
  const [mail, setMail] = useState("");

  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

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
    setName(document.getElementById("name").value);
    setPhone(document.getElementById("phone").value);
    setAddress(document.getElementById("address").value);
    setMail(document.getElementById("email").value)
    setNotes(document.getElementById("note").value);

    // console.log(name, phone, address, mail, notes)
    const items = listItemCart.map((item) => {
      return [
        item.id,
        item.cartQuantity,
      ];
    });
    const numItems = listItemCart.length;
    const data = {
      name,
      phone,
      address,
      payment_method: paymentMethod,
      date,
      items,
      "id": "1",
      // total_amount: total,
      // numItems,
    };
    //call
    console.log(data)
    console.log(items)
    const { errCode, errDetail } = await createPayment(data);
    if (errCode) {
      return alert(errDetail);
    }
    dispatch(deleteCart());
    alert("Thanh toán thành công");
    return navigate("/");
  };

  const handleCheckPaymentMethod = () => {
    if (paymentMethod === "paypal") {
      setOpenPaypal(true);
    } else {
      handleSubmitOrder();
    }
  };
  return (
    <>
      <div className="card receiver">
        <div className="receiver__header">
          <div>Thông tin nhận hàng</div>
        </div>
        <div>
          <div className="card-body receiver__body">
            <input
              type="text"
              id="name"
              className="receiver__form-control mt-2"
              placeholder="Tên người nhận"
            />
            <input
              type="text"
              id="phone"
              className="receiver__form-control mt-2"
              placeholder="Số điện thoại"
            />
            <input
              type="text"
              id="email"
              className="receiver__form-control mt-2"
              placeholder="Email"
            />
            <input
              type="text"
              id="address"
              className="receiver__form-control mt-2"
              placeholder="Địa chỉ người nhận"
            />
            <input
              type="text"
              id="note"
              className="receiver__form-control mt-2"
              placeholder="Ghi chú nhận hàng"
            />
          </div>
        </div>
      </div>
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
            <div className="checkout-cart__footer__total__price">{total}</div>
          </div>
          <button
            className="btn checkout-cart__footer__btn"
            onClick={handleSubmitOrder}
            // disabled={(openPaypal && paymentMethod === 'paypal') || total === 0}
          >
            Đặt hàng
          </button>
        </div>
      </div>
      {/* {openPaypal && paymentMethod === 'paypal' && (
        <div className="card checkout-cart">
          <PaypaylButton
            createOrder={(data, actions) => createOrder(data, actions)}
            onApprove={(data, actions) => onApprove(data, actions)}
          />
        </div>
      )} */}
      <RemoveCart />
    </>
  );
}

CheckoutCart.propTypes = {};

export default CheckoutCart;
