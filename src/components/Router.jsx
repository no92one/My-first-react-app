import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import SecondPage from "../pages/SecondPage.jsx";
import MyNav from "./MyNav.jsx";
import MyUseState from "../pages/MyUseState.jsx";
import MyUseState2 from "../pages/MyUseState2.jsx";
import Products from "../pages/Products.jsx";
import UseContext1 from "../pages/UseContext1.jsx";
import UseContext2 from "../pages/UseContext2.jsx";
import GetData from "../pages/GetData.jsx";
import MyJsonServer from "../pages/MyJsonServer.jsx";


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
          <Route path="/useContext1" element={<UseContext1 />} />
          <Route path="/useContext2" element={<UseContext2 />} />
          <Route path="/getData" element={<GetData />} />
          <Route path="/myJsonServer" element={<MyJsonServer />} />
        </Routes>
      </BrowserRouter>
    </>
}
