import React from 'react';

import { Navbar } from '../../components/Navbar/navbar';
import FooterClient from '../../components/FooterClient';
function LayoutHome(props) {
    return (
      <div className="App">
        <Navbar />
        {props.children}
        <FooterClient />
      </div>
    );
    
  }
export default LayoutHome
