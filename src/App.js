import { Route, Routes, BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./Pages/Home";
import NavBar from "./Component/ComHome/NavBar";
import Enroll from "./Pages/Enroll";
import Index from "./Potal";

function App() {
  return (
    <div>
      {/* <Home /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/enroll" element={<Enroll />} />
          <Route path="/potal" element={<Index />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
