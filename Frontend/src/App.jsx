import "./app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/signIn/SignIn";
import SignUp from "./pages/signUp/SignUp";
import Home from "./pages/home/Home";
import ProductView from "./pages/ProductView/ProductView"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/register" element={<SignUp />}></Route>
        <Route path="/ProductView" element={<ProductView />}></Route>

    
      </Routes>
    </BrowserRouter>
  );
}

export default App;
