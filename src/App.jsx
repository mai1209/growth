import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Add from "./Add";
import "./style/index.css";
import Money from "./Money";
import User from "./User";
import LogIn from "./LogIn";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/"  element={<Money></Money>} ></Route>
        <Route path="/add" element={<Add></Add>} />
        <Route path="/user" element={<User></User>} />
        <Route path="/login" element={<LogIn></LogIn>}> </Route>
      </Routes>
    </BrowserRouter>
  );
}



export default App;
