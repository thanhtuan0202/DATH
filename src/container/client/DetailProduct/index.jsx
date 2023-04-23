import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { addToCart } from "../../../redux/Reducers/todoCart";
import "./style.css";

export default function DetailProduct(props) {
  const { id } = useParams(props, "id");
  const [product, setproduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProduct = async () => {
    const res = await axios.get(
      `http://localhost:5000/get-detail-product/${id}`
    );

    setproduct(res.data);
    setLoading(true);
  };

  useEffect(() => {
    fetchProduct();
  }, []);
  console.log(product.data);
  return (
    <div className="detail-product">
      <div class="navbar-detail">
        <Link to="/Product">
          <i class="bi bi-chevron-left" style={{ fontsize: 100 }}></i>
          Quay lại
        </Link>
      </div>
      <div className="productInfo container">
        <div className="row justify-content-center">
          <div className="col-6">
            <img src={product.anh} alt="img" />
          </div>
          <div className="col-6">
            <div>
              <h2
                style={{
                  fontSize: "50px",
                  fontWeight: "600",
                  marginBottom: "20px",
                }}
              >
                {/* {product.data.map(pro => (<p> {pro.ten}</p>))} */}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
