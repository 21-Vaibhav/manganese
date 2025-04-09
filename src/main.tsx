import { createRoot } from "react-dom/client";
import "./main.css";
import Home from "./home/Home";
import Product from "./product/Product";
import { BrowserRouter, Route,Routes} from "react-router-dom";
import Developer from "./developer/Developer";
import Pricing from "./pricing/Pricing";
import Enterprise from "./enterprise/Enterprise";


createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/developer" element={<Developer />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/enterprise" element={<Enterprise />} />
    </Routes>
  </BrowserRouter>
);
