import React, { useEffect  } from "react";
import "./index.css";

import { SearchOutlined } from "@ant-design/icons";

function DanhSachGoiVe(){
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, []);



   return(
      
       <div className="LocVe">
            <div className="DoiSoatVe">

            <div className="DoiSoatVe-tk">
                <h2>Đói soát vé</h2>
                <div className="DoiSoatVe-Ve">
                <div className="search">
                    <input  type="text" placeholder='Search'  />
                    <a href="/"><SearchOutlined /></a>
                 </div> 
                    <div className="DoiSoatVe-locVe">
                        <button className="DoiVe" > Chốt đối soát</button>   
                    </div>
                </div>
                <table className="table-doisoatve">
                <thead>
                    <tr>
                        <th>STT</th>            
                        <th>Số vé</th>
                        <th>Ngày sử dụng</th>
                        <th>Tên loại vé</th>
                        <th>Cổng check-in</th>
                        <th> </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>ALT20210501</td>
                        <td>14/04/2021</td>
                        <td>Vé cổng</td>
                        <td>Cổng 1(du lieu ao)</td>
                        <td>Chưa đối soát</td>
                    </tr>
                    
                </tbody>
                </table>
            </div>
            
        </div>
        <div className="DoiSoatVe-2">
            <h2 className="h2-SoatVe">Lọc vé</h2>
            <div className="TinhTrangDoiSoat">
                <h4>Tình trạng đối soát</h4>
                <div className="TinhTrangDoiSoat-item">
                    <div className="item-input"><input type="radio" value={"Tất cả"} /> Tất Cả</div>
                    <div className="item-input"><input type="radio" value={"Đối soát vé"} /> Đối soát vé</div>
                    <div className="item-input"><input type="radio" value={"Chưa đối soát"} /> Chưa đối soát</div>
                </div>
            </div>
            <div className="LoaiVe">
                <h4>Loại vé</h4>
                <p>Vé cổng</p>
            </div>
            <div className="NgayBatDau">
                <h4>Từ ngày</h4>
                <input type="date"/>
            </div>
            <div className="NgayKetThuc">
                <h4>Đến ngày</h4>
                <input type="date"/>
            </div>

            
            <div className="btn">
                <button className="Loc">Lọc</button>
            </div>
        </div>
            
       </div>
        

   )
}

export default DanhSachGoiVe;