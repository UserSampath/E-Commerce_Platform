import "./app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/signIn/SignIn";
import SignUp from "./pages/signUp/SignUp";
import Inventory from "./pages/Inventory/Inventory";
import About from "./pages/About/About"; 
import ProductList from "./pages/Product/ProductList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />}></Route>
        <Route path="/Inventory" element={<Inventory />}></Route>
        <Route path="/register" element={<SignUp />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/products" element={<ProductList/>}></Route>

    
      </Routes>
    </BrowserRouter>
  );
}

export default App;
