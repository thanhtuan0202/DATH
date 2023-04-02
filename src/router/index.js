import Homepage from "../container/client/Homepage"
import Checkout from "../components/Checkout";
import {Cart} from "../components/Cart";
const RouteHome = [
    {
      exact: true,
      path: "/",
      component: Homepage,
    },
    {
      exact: false,
      path: "/checkout",
      component: Checkout,
    },
    {
      exact: false,
      path: "/cart",
      component: Cart,
    },
  ];

  export {RouteHome}