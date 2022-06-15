import React, { FormEvent, useEffect, useState } from "react";
import "./index.css";

import { EditOutlined, SearchOutlined } from "@ant-design/icons";
import * as todoPackets  from "../../service/todoPacket";
import { CSVLink } from "react-csv";
import { Checkbox } from "antd";

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
     const [TenGoiVe, setTenGoiVe] = useState("");
     const [NgayApDung, setNgayApDung] = useState("");
     const [NgayHetHan, setNgayHetHan] = useState("");
     const [AllHetHan, setAllHetHan] = useState("");
     const [AllApDung, setAllApDung] = useState("");
     const [GiaVe, setGiaVe] = useState(0);
     const [GiaCombo, setGiaCombo] = useState(0);
     const [SoLuong, setSoLuong] = useState(0);
     
     const [TimeApDung, setTimeApDung] = useState("");
     const [TimeHetHan, setTimeHetHan] = useState("");
     const [TinhTrangGoi, setTinhTrangGoi] = useState("");
     const [isEditMode, setIsEditMode] = useState(false);
     const [selectedId, setSelectedId] = useState("");
     const [isSubmitting, setIsSubmitting] = useState(false);

     const onSubmit = async (e: FormEvent)  => {
        e.preventDefault();
        setIsSubmitting(true);
        if(!isEditMode) await todoPackets.create({TenGoiVe: TenGoiVe, NgayAD: new Date(NgayApDung), NgayHH:new Date(NgayHetHan), GiaVe:GiaVe, GiaCombo:GiaCombo, TinhTrangGoi:TinhTrangGoi, SoLuong:SoLuong });
        else await todoPackets.update(selectedId, {TenGoiVe: TenGoiVe, NgayAD: new Date(NgayApDung), NgayHH:new Date(NgayHetHan), GiaVe:GiaVe, GiaCombo:GiaCombo, TinhTrangGoi:TinhTrangGoi, SoLuong:SoLuong });
        // clean the form
        setTenGoiVe(TenGoiVe);
        setNgayApDung(AllApDung);
        setGiaVe(GiaVe);
        setSoLuong(SoLuong);
        setGiaCombo(GiaCombo);
        setNgayHetHan(AllHetHan);
        setTinhTrangGoi(TinhTrangGoi)
        const element: HTMLElement = document.getElementById('Background-black1') as HTMLElement
        element.style.display = 'none'
        fetchTodoPacket();
        
    };


     const toEditMode = (id: string, TenGoiVe: string, NgayAD: any, NgayHH:any, GiaVe:number, GiaCombo:number, TinhTrangGoi:string, SoLuong:number) => {
        const element: HTMLElement = document.getElementById('Background-black1') as HTMLElement
        element.style.display = 'block'
        setIsEditMode(true);

        // need to tweak the date first before put it in input datetime local
        const _date =
            new Date(NgayAD.toDate()).getFullYear() +
            "-" +
            (new Date(NgayAD.toDate()).getMonth() + 1) +
            "-" +
            (new Date(NgayAD.toDate()).getDate().toString().length === 1 ? "0" + new Date(NgayAD.toDate()).getDate() : new Date(NgayAD.toDate()).getDate());

        const time =
            new Date(NgayAD.toDate()).toLocaleTimeString().replaceAll("AM", "").replaceAll("PM", "").replace(/\s/g, "").length === 7
                ? "0" + new Date(NgayAD.toDate()).toLocaleTimeString().replaceAll("AM", "").replaceAll("PM", "").replace(/\s/g, "")
                : new Date(NgayAD.toDate()).toLocaleTimeString().replaceAll("AM", "").replaceAll("PM", "").replace(/\s/g, "");
         const _date1 =
            new Date(NgayHH.toDate()).getFullYear() +
            "-" +
            (new Date(NgayHH.toDate()).getMonth() + 1) +
            "-" +
            (new Date(NgayHH.toDate()).getDate().toString().length === 1 ? "0" + new Date(NgayHH.toDate()).getDate() : new Date(NgayHH.toDate()).getDate());

        const time1 =
            new Date(NgayHH.toDate()).toLocaleTimeString().replaceAll("AM", "").replaceAll("PM", "").replace(/\s/g, "").length === 7
                ? "0" + new Date(NgayHH.toDate()).toLocaleTimeString().replaceAll("AM", "").replaceAll("PM", "").replace(/\s/g, "")
                : new Date(NgayHH.toDate()).toLocaleTimeString().replaceAll("AM", "").replaceAll("PM", "").replace(/\s/g, "");


        const dateString = (_date + time).toString();
        const dateString1 = (_date1 + time1).toString();

        // set the form value
        setTenGoiVe(TenGoiVe);
        setNgayApDung(_date);
        setTimeApDung(time);
        setTimeHetHan(time1);
        setAllApDung(dateString)
        setAllHetHan(dateString1)
        setGiaVe(GiaVe);
        setSoLuong(SoLuong);
        setGiaCombo(GiaCombo);
        setNgayHetHan(_date1);
        setTinhTrangGoi(TinhTrangGoi)
        // also the the selectedid state
        setSelectedId(id);
    };
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
                {todoPacket.length === 0 ? (
                   <div className="container">
                   <span className="loader"></span>
                 </div>
                ) : null}
                {todoPacket.map((todopacket, index) => (
                        <tr>
                        <td>{index + 1}</td>
                        <td className="cantrai">{todopacket.id}</td>
                        <td className="cantrai">{todopacket.TenGoiVe}</td>
                        <td className="canphai">{todopacket.NgayAD.toDate().toLocaleDateString( ) }</ td>
                        <td className="canphai">{todopacket.NgayHH.toDate().toLocaleDateString() }</td>
                        <td className="canphai">{todopacket.GiaVe.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</td>
                        <td className="cantrai">{todopacket.GiaCombo.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})} / {todopacket.SoLuong} vé</td>
                        <td className="cantrai"><div className="CheckTinhTrang">{todopacket.TinhTrangGoi}</div></td>
                        <td><button className="btn-capnhap" onClick={() => toEditMode(todopacket.id!!,todopacket.TenGoiVe ,todopacket.NgayAD, todopacket.NgayHH, todopacket.GiaVe, todopacket.GiaCombo, todopacket.TinhTrangGoi, todopacket.SoLuong)}><EditOutlined className="EditOutlined" /> Cập nhập</button></td>
                        
                    </tr>
                 ))}
                   
                    
                </tbody>
                </table>

            </div>
            <div id="Background-black1">
                <form onSubmit={onSubmit} className="BangThemVe">
                    <h2>{isEditMode ? "Cập nhập thông tin gói vé" : "Thêm gói vé"}</h2>
                    <div className="ThemVe-Ten">
                        <h4>Tên gói vé <span>*</span></h4>
                        <input 
                            type="text" 
                            placeholder="Nhập tên gói vé" 
                            value={TenGoiVe}
                            onChange={(e) => setTenGoiVe(e.target.value)} 
                        />
                    </div>
                    <div className="ThemVe-Date">
                        <div className="date1">
                            <h4>Ngày áp dụng</h4>
                            <input
                                className="Date-Them" type="date" 
                                value={NgayApDung}
                                
                                onChange={(e) => setNgayApDung(e.target.value)} 
                            />
                            <input 
                                type="time"
                                value={TimeApDung}
                                onChange={(e) => setTimeApDung(e.target.value)} 
                            />
                        </div>
                        <div className="date2">
                            <h4>Ngày hết hạn</h4>
                            <input 
                                className="Date-Them" type="date" 
                                value={NgayHetHan}
                                
                                onChange={(e) => setNgayHetHan(e.target.value)} 
                            />
                            <input 
                                type="time" 
                                value={TimeHetHan}
                                onChange={(e) => setTimeHetHan(e.target.value)} 
                            />
                        </div>
                    </div>
                    <div className="ThemVe-GiaVe">
                        <h4>Giá vé áp dụng</h4>
                        <div className="Ve-Le">
                            <input 
                                type="checkbox"
                                
                             /> Vé lẻ (vnđ/vé) với giá 
                             <input 
                                value={GiaVe}
                               
                                onChange={(e) => setGiaVe(e.target.valueAsNumber)}  
                                className="text-ve" 
                                placeholder="Giá vé" 
                                type="number" /> / vé
                        </div>
                        <div className="Ve-Combo">
                            <input type="checkbox" /> Combo vé với giá 
                            <input 
                                value={GiaCombo}
                                
                                onChange={(e) => setGiaCombo(e.target.valueAsNumber)}  
                                className="text-ve" 
                                placeholder="Giá vé" 
                                type="number" /> / 
                            <input 
                                value={SoLuong}
                                
                                onChange={(e) => setSoLuong(e.target.valueAsNumber)} 
                                className="text-ve1"
                                placeholder="Giá vé" 
                                type="number" 
                            /> vé
                        </div>
                    </div>
                    <div className="ThemVe-TinhTrang">
                        <h4>Tình Trạng</h4>
                        <select value={TinhTrangGoi} onChange={(e) => setTinhTrangGoi(e.target.value)} className="Cbm">
                            <option>Chọn</option>
                            <option value="Đang Áp dụng" >Đang áp dụng</option>
                            <option value="Tắt" >Tắt</option>
                        </select>
                    </div>
                    <p className="Batbuoc"><span>*</span>là thông tin bắt buộc</p>
                    <div className="btn-ThemVe">
                        <span className="btn-huy" onClick={HuyThemVe}>Hủy</span>
                        <button type="submit" className="btn-them" >{isEditMode ? "Sửa" : "Lưu"}</button>
                    </div>
                </form>
            </div>
        </div>
   )
}

export default DanhSachGoiVe;