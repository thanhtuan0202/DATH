import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/navbar";
import Banner from "./components/Banner";
import { ProductList } from "./components/ProductList";
import { ShopContextProvider } from "./context/shop-context";
import FooterClient from "./components/FooterClient";
import { Cart } from "./components/Cart";
import { RouteHome} from "./router"

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar/>
          <Banner/>
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <FooterClient />
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
