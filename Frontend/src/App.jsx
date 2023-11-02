import "./app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/signIn/SignIn";
import SignUp from "./pages/signUp/SignUp";
import Home from "./pages/home/Home";
import About from "./pages/About/About"; 
import MyOrder from "./pages/myorderPage/MyOrder"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/register" element={<SignUp />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path = "/MyOrder" element={<MyOrder/>}></Route>
    
      </Routes>
    </BrowserRouter>
  );
}

export default App;
