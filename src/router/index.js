
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
    },
    {
      exact: false,
      path: "/product",
      component: ProductList,
    },
    {
      exact: false,
      path: "/checkout",
      component: Checkout,
    },
    {
      exact: false,
      path: "/cart",
      component: Order,
    },
    {
      exact: false,
      path: "/detail/:id",
      component: DetailProduct,
    },
  ];

  export {RouteHome}