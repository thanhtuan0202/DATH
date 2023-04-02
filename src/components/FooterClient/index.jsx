import React from 'react';
import './FooterClient.css';
import { colors } from '@material-ui/core';

function FooterClient() {
  return (
  <div>
    <br />
    <br />
    <br />
    <br />
    <div className="container-fluid footer">
      <div className="container-lg">
        <div className="row" >

          <div className="col-lg-4 footer__first">
            <h3 className="footer__title">Chính sách</h3>
            <ul className="footer__links">
              <li>Chính sách bảo hành</li>
              <li>Chính sách vận chuyển</li>
              <li>Chính sách thanh toán</li>
              <li>Chính sách đổi trả</li>
              <li>Chính sách bảo mật</li>
            </ul>
          </div>
          
          <div className="col-lg-4 ">
                <h3 className="footer__title">Mọi thắc mắc vui lòng liên hệ</h3>
                <ul className="footer__links">
                <li>
                    <i className="fa fa-facebook" />
                    BK Store
                </li>
                <li>
                    <i className="fa fa-phone" />
                    01234567
                </li>
                <li>
                    <i className="far fa-envelope" />
                    abcd@hcmut.edu.vn
                </li>
                </ul>
            </div>

            <div className="col-lg-4 ">
                <h3 className="footer__title">Mọi thắc mắc vui lòng liên hệ</h3>
                <ul className="footer__links">
                <li>
                    <i className="fa fa-facebook" />
                    BK Store
                </li>
                <li>
                    <i className="fa fa-phone" />
                    01234567
                </li>
                <li>
                    <i className="far fa-envelope" />
                    abcd@hcmut.edu.vn
                </li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default FooterClient;
