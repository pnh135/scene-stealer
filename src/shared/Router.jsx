import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Sidebar from "../pages/Sidebar";
import Detail from "../pages/Detail";

const Router = () => {
  return (
    <BrowserRouter>
      <Sidebar/> //전체 페이지 내 사이드 바 렌더링
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/detail/:id" element={<Detail/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
