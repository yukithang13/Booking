import React, { useEffect } from "react";
import "./index.css";

import { SearchOutlined,FilterOutlined } from "@ant-design/icons";
import TableVe from "./TableVe";

function DanhSachVe(){
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, []);


      const ShowLocVe = () =>{
         document.getElementsByClassName("Background-black")
         const element: HTMLElement = document.getElementById('Background-black') as HTMLElement
         element.style.display = 'block'
      }
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
                        <div className="DanhSach-locVe1"><button className="LocVe" onClick={ShowLocVe} ><FilterOutlined /> Lọc Vé</button></div>       
                        <div className="DanhSach-locVe1"><button className="XuatFile" > Xuất file(.csv)</button></div>
                    </div>
                </div>
                
                <table className="table-danhsachve">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th className="cantrai">Booking code</th>             
                        <th className="cantrai">Số vé</th>
                        <th className="cantrai">Tình trạng</th>
                        <th className="canphai">Ngày sử dụng</th>
                        <th className="canphai">Ngày xuất vé</th>
                        <th className="cantrai">Cổng check-in</th>
                        <th> </th>
                    </tr>
                </thead>
                <TableVe/>
                </table>

            </div>
            <div id="Background-black">
                <div className="BangLocVe">
                    <h2>Lọc vé</h2>
                    <div className="LocVe-Date">
                        <div className="date1">
                            <h4>Từ ngày</h4>
                            <input type="date" />
                        </div>
                        <div className="date2">
                            <h4>Đến ngày</h4>
                            <input type="date" />
                        </div>
                    </div>
                    <h4 className="h4-sd">Tình trạng sử dụng</h4>
                    <div className="LocVe-TinhTrang">
                        <div className="item-input"><input type="radio" value={"Tất cả"}/>Tất cả</div>
                        <div className="item-input"><input type="radio" value={"Đã sử dụng"}/>Đã sử dụng</div>
                        <div className="item-input"><input type="radio" value={"Chưa sử dụng"}/>Chưa sử dụng</div>
                        <div className="item-input"><input type="radio" value={"Hết hạn"}/>Hết hạn</div>
                    </div>
                    <h4 className="h4-sd">Cổng Check-in</h4>
                    <div className="LocVe-All">
                    <div className="LocVe-Cong">
                        <div className="item-checkbox"><input type="checkbox" value={"Tất cả"}/> Tất cả</div>
                        <div className="item-checkbox"><input type="checkbox" value={"Cổng 3"}/> Cổng 3</div>             
                    </div>
                    <div className="LocVe-Cong1">
                        <div className="item-checkbox"><input type="checkbox" value={"Cổng 1"}/> Cổng 1</div>
                        <div className="item-checkbox"><input type="checkbox" value={"Cổng 4"}/> Cổng 4</div>      
                    </div>
                    <div className="LocVe-Cong2">
                        <div className="item-checkbox"><input type="checkbox" value={"Cổng 2"}/> Cổng 2</div>
                        <div className="item-checkbox"><input type="checkbox" value={"Cổng 5"}/> Cổng 5</div>
                    </div>
                    </div>
                    <button className="btn-LocVe1" onClick={ShowLocVe}>Lọc</button>
                </div>
                
            </div>
        </div>

   )
}

export default DanhSachVe;

