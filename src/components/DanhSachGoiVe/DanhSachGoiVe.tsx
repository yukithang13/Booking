import React, { useEffect } from "react";
import "./index.css";

import { EditOutlined, SearchOutlined } from "@ant-design/icons";

function DanhSachGoiVe(){
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, []);
   return(
        <div className="DanhSach">
            <div className="DanhSach-tk">
                <h2>Danh Sách Vé</h2>
                <div className="DanhSach-Ve">
                <div className="search">
                    <input  type="text" placeholder='Search'  />
                    <a href="/"><SearchOutlined /></a>
                 </div> 
                    <div className="DanhSach-locVe">
                        <div className="DanhSach-locVe1"><button className="XuatFile" > Xuất file(.csv)</button></div>
                        <div className="DanhSach-locVe1"><button className="ThemVe" > Thêm gói vé</button></div>       
                    </div>
                </div>
                <table className="table-danhsachgoive">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Mã gói</th>             
                        <th>Tên gói vé</th>
                        <th>Ngày áp dụng</th>
                        <th>Ngày hết hạn</th>
                        <th>Giá vé(VNĐ/Vé)</th>
                        <th>Giá Combo(VNĐ/Combo)</th>
                        <th>Tình Trạng</th>
                        <th> </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>ALT20210501</td>
                        <td>Gió gia đình</td>
                        <td>14/04/2021</td>
                        <td>14/04/2021</td>
                        <td>90000 VNĐ</td>
                        <td>360000 VNĐ/4 vé</td>
                        <td>Đang áp dụng</td>
                        <td><button className="btn-capnhap"><EditOutlined className="EditOutlined" /> Cập nhập</button></td>
                    </tr>
                    
                </tbody>
                </table>

            </div>
        </div>
   )
}

export default DanhSachGoiVe;