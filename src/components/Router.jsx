import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import SecondPage from "../pages/SecondPage.jsx";
import MyNav from "./MyNav.jsx";
import MyUseState from "../pages/MyUseState.jsx";
import MyUseState2 from "../pages/MyUseState2.jsx";
import Products from "../pages/Products.jsx";


export default function Router() {
  return <>
    <BrowserRouter>
        <MyNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/secondPage" element={<SecondPage />} />
          <Route path="/myUseState" element={<MyUseState />} />
          <Route path="/myUseState2" element={<MyUseState2 />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </>
}
