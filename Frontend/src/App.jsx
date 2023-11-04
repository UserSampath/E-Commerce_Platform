import "./app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/signIn/SignIn";
import SignUp from "./pages/signUp/SignUp";
import Home from "./pages/home/Home";
import About from "./pages/About/About"; 
import UploadAvatr from './UploadPhoto'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />}></Route>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/register" element={<SignUp />}></Route>
        <Route path="/About" element={<About />}></Route>

    
      </Routes>
    </BrowserRouter>
  );
}

export default App;
