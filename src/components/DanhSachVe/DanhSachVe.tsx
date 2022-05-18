import React, { useEffect } from "react";
import "./index.css";

import { SearchOutlined,FilterOutlined } from "@ant-design/icons";

function DanhSachVe(){
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
                        <div className="DanhSach-locVe1"><button className="LocVe" ><FilterOutlined /> Lọc Vé</button></div>       
                        <div className="DanhSach-locVe1"><button className="XuatFile" > Xuất file(.csv)</button></div>
                    </div>
                </div>
                
                <table className="table-danhsachve">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Booking code</th>             
                        <th>Số vé</th>
                        <th>Tên sự kiện</th>
                        <th>Ngày sử dụng</th>
                        <th>Ngày xuất vé</th>
                        <th>Cổng check-in</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>ALT20210501</td>
                        <td>Hội chợ triển lãm tiêu dùng 2021</td>
                        <td>Chưa sử dụng</td>
                        <td>14/04/2021</td>
                        <td>14/04/2021</td>
                        <td>Cổng 1(du lieu ao)</td>
                    </tr>                   
                </tbody>
                </table>

            </div>
        </div>
   )
}

export default DanhSachVe;

