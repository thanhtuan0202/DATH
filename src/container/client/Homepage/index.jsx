import React from "react";
import Container from '@material-ui/core/Container';

import Banner from "../../../components/Banner";
import {ProductList} from "../../../components/ProductList";

export default function HomePage(){
    return (
        <div style={{ backgroundColor: '#faf7f2' }}>
          <Container className="pt-5 pb-5 ">
            <Banner />
            <div className="row">
              <div className="col"></div>
              <div className="col-7">
                    <ProductList />
              </div>
            </div>
          </Container>
        </div>
      );
}