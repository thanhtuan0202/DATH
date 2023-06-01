import React from "react";
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { RouteHome,RouteAdmin} from "./router"
import LayoutHome from "./container/client"
import { ShopContextProvider } from "./context/shop-context";
import { Fragment } from "react";
import NavbarAdmin from "./container/admin/Navbar";
function App() {
  return (
    <div>
      <ShopContextProvider>
      <BrowserRouter>
        <Routes> {
          RouteHome.map((item, index) => {
            const Page = item.component
            if (item.layout == "default"){
              return (
                <Route key={index} exact= {item.exact} path={item.path} element=  { <LayoutHome> <Page/> </LayoutHome>}/>
              );
            }
            else{
              return (
                <Route key={index} exact= {item.exact} path={item.path} element=  { <Fragment> <Page/> </Fragment>}/>
              );              
            }
          })} 
        </Routes>
        <Routes>
          {
            RouteAdmin.map((item, index) => {
              const Page = item.component;
              return (<Route key={index} exact= {item.exact} path={item.path} element= {<NavbarAdmin> <Page/> </NavbarAdmin>  } />)
            })
          };
        </Routes>
      </BrowserRouter>
      </ShopContextProvider>
    </div>
  );
}
export default App;
