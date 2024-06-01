import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Add from "./Add";
import "./style/index.css";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/add" element={<Add></Add>} />
      </Routes>
    </BrowserRouter>
  );
}



export default App;
