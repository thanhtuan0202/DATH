
import HomePage from "../container/client/Homepage"
import Checkout from "../container/client/Checkout"
import Order from "../container/client/Order"
import { ProductList } from "../components/ProductList";
import DetailProduct from "../container/client/DetailProduct";
const RouteHome = [
    {
      exact: true,
      path: "/",
      component: HomePage,
      layout: "default",
    },
    {
      exact: false,
      path: "/product",
      component: ProductList,
      layout: "default",
    },
    {
      exact: false,
      path: "/checkout",
      component: Checkout,
      layout: ""
    },
    {
      exact: false,
      path: "/cart",
      component: Order,
      layout: "default",
    },
    {
      exact: false,
      path: "Product/detail/:id",
      component: DetailProduct,
      layout: "default",
    },
  ];

  export {RouteHome}