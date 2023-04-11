import React from "react";
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { RouteHome} from "./router"
import LayoutHome from "./container/client"
import { ShopContextProvider } from "./context/shop-context";

function App() {
  return (
    <div >
      <ShopContextProvider>
      <BrowserRouter>
        <Routes> {
          RouteHome.map((item, index) => {
            const Page = item.component
            return (
              <Route key={index} exact= {item.exact} path={item.path} element=  { <LayoutHome> <Page/> </LayoutHome>}/>
            );
          })} 
        </Routes>
      </BrowserRouter>
      </ShopContextProvider>
    </div>
  );
}
export default App;
