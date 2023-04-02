import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import { Navbar } from '../../components/Navbar/navbar';
import FooterClient from '../../components/FooterClient';

function LayoutHome(props) {
    return (
      <>
        <Navbar />
        {props.children}
        <FooterClient />
      </>
    );
    
  }
export default class HomeTemplate extends Component {
    render() {
      const { exact, path, component } = this.props;
      return (
        <LayoutHome>
          <Route exact={exact} path={path} component={component} />
        </LayoutHome>
      );
    }
}