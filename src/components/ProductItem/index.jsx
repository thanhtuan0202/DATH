import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/Reducers/todoCart';

export default function Product(props) {
  const item = props.data;
  const linkToDetail = `detail/${item.id}`;
  const dispatch = useDispatch();
  const addtoCart = () => {
    dispatch(addToCart(item));
  };
  return (
    <div className=" mb-5 col-5 ">
      <div className="food-card bg-white rounded-lg overflow-hidden mb-4 shadow">
        <div className="food-card_img position-relative">
          <img src={item.anh} alt="img" />
          <a href="#!">
            <i className="far fa-heart" />
          </a>
        </div>
        <div className="food-card_content">
          <div className="food-card_title-section overflow-hidden">
            <h4 className="food-card_title">
              <a href="#!" className="text-dark">
                <Link to={linkToDetail}> {item.ten} </Link>
              </a>
            </h4>
          </div>
            <div className="d-flex justify-content-between">
              <div className="food-card_price"> Price: 
                <span> {item.giaBan}</span>
              </div>
              <div className="food-card_order-count">
                <Button
                  onClick={() => addtoCart()}
                  sx={{ fontSize: 10 }}
                  style={{ width: 120 }}
                  color="warning"
                  variant="contained"
                >
                  Thêm sản phẩm
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
