import React, { useEffect, useState } from "react";
import "./index.css";

import { EditOutlined, SearchOutlined } from "@ant-design/icons";
import * as todoPackets  from "../../service/todoPacket";
import { CSVLink } from "react-csv";

function DanhSachGoiVe(){
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        fetchTodoPacket();
      }, []);

      const ShowThemVe = () =>{
        const element: HTMLElement = document.getElementById('Background-black1') as HTMLElement
        element.style.display = 'block'
     }
     const HuyThemVe = () =>{
        const element: HTMLElement = document.getElementById('Background-black1') as HTMLElement
        element.style.display = 'none'
     }
     const [todoPacket, setTodoPacket] = useState<Array<todoPackets.TodoPacket>>([]);
     const fetchTodoPacket = async () => {
        setTodoPacket([]);
        const _todopacket = await todoPackets.all();
        setTodoPacket(_todopacket);
        const checkGoiVe = document.getElementsByClassName('CheckTinhTrang');
        for ( let i = 0; i < checkGoiVe.length; i++) {
            if(checkGoiVe[i].innerHTML === "Đang Áp dụng")
            {
                checkGoiVe[i].classList.add("TinhTrang-chuasudung");
            }
            if(checkGoiVe[i].innerHTML === "Tắt")
            {
                checkGoiVe[i].classList.add("TinhTrang-hethan");
            }
          }
    };
    
    const headers =[
        { label: "id", key: "id" },
        { label: "TenGoiVe", key: "TenGoiVe" },
        { label: "NgayApDung", key: "NgayAD" },
        { label: "NgayHetHan", key: "NgayHH" },
        { label: "GiaVe", key: "GiaVe" },
        { label: "GiaCombo", key: "GiaVe" },
        { label: "GiaCombo", key: "GiaVe" },
        { label: "TinhTrangGoi", key: "TinhTrangGoi" },
        { label: "SoLuong", key: "SoLuong" },
        
     ]

     const cvreport = {
        data: todoPacket,
        headers: headers,
        filename: 'XuatGoiVe.csv'
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
                        <div className="DanhSach-locVe1"><CSVLink {...cvreport}  className="XuatFile" > Xuất file(.csv)</CSVLink></div>
                        <div className="DanhSach-locVe1"><button className="ThemVe" onClick={ShowThemVe}> Thêm gói vé</button></div>       
                    </div>
                </div>
                <table className="table-danhsachgoive">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th className="cantrai">Mã gói</th>             
                        <th className="cantrai">Tên gói vé</th>
                        <th className="canphai">Ngày áp dụng</th>
                        <th className="canphai">Ngày hết hạn</th>
                        <th className="canphai">Giá vé(VNĐ/Vé)</th>
                        <th className="cantrai">Giá Combo(VNĐ/Combo)</th>
                        <th className="cantrai">Tình Trạng</th>
                        <th> </th>
                    </tr>
                </thead>
                <tbody>
                {todoPacket.map((todopacket, index) => (
                        <tr>
                        <td>{index + 1}</td>
                        <td className="cantrai">{todopacket.id}</td>
                        <td className="cantrai">{todopacket.TenGoiVe}</td>
                        <td className="canphai">{todopacket.NgayAD.toDate().toLocaleDateString()}</ td>
                        <td className="canphai">{todopacket.NgayHH.toDate().toLocaleDateString()}</td>
                        <td className="canphai">{todopacket.GiaVe.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</td>
                        <td className="cantrai">{todopacket.GiaCombo.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})} / {todopacket.SoLuong} vé</td>
                        <td className="cantrai"><div className="CheckTinhTrang">{todopacket.TinhTrangGoi}</div></td>
                        <td><button className="btn-capnhap"><EditOutlined className="EditOutlined" /> Cập nhập</button></td>
                    </tr>
                 ))}
                   
                    
                </tbody>
                </table>

            </div>
            <div id="Background-black1">
                <div className="BangThemVe">
                    <h2>Thêm gói vé</h2>
                    <div className="ThemVe-Ten">
                        <h4>Tên gói vé <span>*</span></h4>
                        <input type="text" placeholder="Nhập tên gói vé"/>
                    </div>
                    <div className="ThemVe-Date">
                        <div className="date1">
                            <h4>Ngày áp dụng</h4>
                            <input className="Date-Them" type="date" />
                            <input type="time" />
                        </div>
                        <div className="date2">
                            <h4>Ngày hết hạn</h4>
                            <input className="Date-Them" type="date" />
                            <input type="time" />
                        </div>
                    </div>
                    <div className="ThemVe-GiaVe">
                        <h4>Giá vé áp dụng</h4>
                        <div className="Ve-Le">
                            <input type="checkbox" /> Vé lẻ (vnđ/vé) với giá <input className="text-ve" placeholder="Giá vé" type="text" /> / vé
                        </div>
                        <div className="Ve-Combo">
                            <input type="checkbox" /> Combo vé với giá <input className="text-ve" placeholder="Giá vé" type="text" /> / <input className="text-ve1" placeholder="Giá vé" type="text" /> vé
                        </div>
                    </div>
                    <div className="ThemVe-TinhTrang">
                        <h4>Tình Trạng</h4>
                        <select className="Cbm">
                            <option value="Đang áp dụng">Đang áp dụng</option>
                            <option value="Chưa áp dụng">Chưa áp dụng</option>
                        </select>
                    </div>
                    <p className="Batbuoc"><span>*</span>là thông tin bắt buộc</p>
                    <div className="btn-ThemVe">
                        <button className="btn-huy" onClick={HuyThemVe}>Hủy</button>
                        <button className="btn-them">Lưu</button>
                    </div>
                </div>
            </div>
        </div>
   )
}

export default DanhSachGoiVe;