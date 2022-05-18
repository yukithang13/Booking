import React, { useEffect } from "react";
import {Routes, Route} from 'react-router-dom'
import DanhSachGoiVe from "../DanhSachGoiVe/DanhSachGoiVe";
import DanhSachVe from "../DanhSachVe/DanhSachVe";
import DoiSoatVe from "../DoiSoatVe/DoiSoatVe";
import TrangChu from "../TrangChu/TrangChu";

function DuongDanURL(){
    useEffect(() => {
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }, 550);
      }, []);
   return(
    <Routes>
        <Route path="/" element={<TrangChu/>} />
        <Route path="/DanhSachVe" element={<DanhSachVe/>} />
        <Route path="/DanhSachGoiVe" element={<DanhSachGoiVe/>} />
        <Route path="/DoiSoatVe" element={<DoiSoatVe/>} />
    </Routes>
   )
}

export default DuongDanURL;

