import React from "react";
import Container from '@material-ui/core/Container';
import Banner from "../../../components/Banner";
import Search from "../../../components/Search";
export default function HomePage(){
  
    return (
        <div>
          <Container>
            <Banner />
            <div className="row">
              <div className="col"></div>
            </div>
          </Container>
        </div>
    );
}