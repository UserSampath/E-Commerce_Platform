import "./app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/signIn/SignIn";
import SignUp from "./pages/signUp/SignUp";
import Inventory from "./pages/Inventory/Inventory";
import About from "./pages/About/About";

import ConfirmCheckout from "./components/Checkout/ConfirmCheckout";
import Checkout from "./components/Checkout/Checkout";

//import UploadAvatr from './UploadPhoto'

import Cart from "./pages/Cart/Cart";
import ProductList from "./pages/Product/ProductList";
import MyOrder from "./pages/myorderPage/MyOrder";
import OrdDetails from "./pages/OrdDetails/OrdDetails";
// import Home from "./pages/home/Home";
import ProductView from "./pages/ProductView/ProductView";
import AvailableProductDelivery from "./pages/AvailableProductDelivery/AvailableProductDelivery";
import DeliveryAccepted from "./pages/DeliveryAccepted/DeliveryAccepted";
import DeliveryPickup from "./pages/DeliveryPickup/DeliveryPickup";
// import PickupItems from "./pages/PickupItems/PickupItems";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />}></Route>
        <Route path="/Inventory" element={<Inventory />}></Route>
        <Route path="/register" element={<SignUp />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Cart" element={<Cart />}></Route>
        <Route path="/products" element={<ProductList />}></Route>
        <Route path="/MyOrder" element={<MyOrder />}></Route>
<<<<<<< HEAD
        <Route path="/MyOrder/OrdDeatils/:id" element={<OrdDetails />}></Route>
        <Route path="/" element={<SignIn />}></Route>
=======
        <Route path="/OrdDetails" element={<OrdDetails />}></Route>
        {/* <Route path="/register" element={<SignIn />}></Route> */}
>>>>>>> 90eb1a7f4f0c63873a9590ccafa3c2c1be8f890f
        <Route path="/register" element={<SignUp />}></Route>
        <Route path="/DeliveryAccepted" element={<DeliveryAccepted />}></Route>
        <Route
          path="/products/productView/:id"
          element={<ProductView />}></Route>
        <Route path="/DeliveryPickup" element={<DeliveryPickup />}></Route>
        <Route path="/confirmCheckout" element={<ConfirmCheckout />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route
          path="/AvailableProductDelivery"
          element={<AvailableProductDelivery />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
