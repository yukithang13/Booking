import React, {useEffect, useState } from "react";
import "./index.css";
import * as todo from "../../service/todo";
import { SearchOutlined,FilterOutlined } from "@ant-design/icons";
import { CSVLink } from "react-csv";

function DanhSachVe(){
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        fetchTodos();
      }, []);

      const [todos, setTodos] = useState<Array<todo.Todo>>([]);
    

      const ShowLocVe = () =>{
         const element: HTMLElement = document.getElementById('Background-black') as HTMLElement
         element.style.display = 'block'
      }
      const LocData = () =>{
        const element: HTMLElement = document.getElementById('Background-black') as HTMLElement
        element.style.display = 'none'

     }
     
     
     const fetchTodos = async () => {
        setTodos([]);
        const _todos = await todo.all();
        // set state
        setTodos(_todos);
        const checkVe = document.getElementsByClassName('CheckTinhTrang');
        for ( let i = 0; i < checkVe.length; i++) {
            if(checkVe[i].innerHTML === "Đã sử dụng")
            {   
                checkVe[i].classList.add("TinhTrang-dasudung");
            }
            if(checkVe[i].innerHTML === "Chưa sử dụng")
            {
                checkVe[i].classList.add("TinhTrang-chuasudung");
            }
            if(checkVe[i].innerHTML === "Hết hạn")
            {
                checkVe[i].classList.add("TinhTrang-hethan");
            }
          }

         
        }
        const headers =[
            { label: "id", key: "id" },
            { label: "BookingCode", key: "BookingCode" },
            { label: "NgaySuDung", key: "NgaySuDung" },
            { label: "NgayXuatVe", key: "NgayXuatVe" },
            { label: "TinhTrang", key: "TinhTrang" },
            { label: "CongCheckIn", key: "CongCheckIn" },
         ]
    
         const cvreport = {
            data: todos,
            headers: headers,
            filename: 'XuatVe.csv'
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
                        <div className="DanhSach-locVe1"><CSVLink {...cvreport}  className="XuatFile" > Xuất file(.csv)</CSVLink></div>
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
                <tbody>
                {todos.length === 0 ? (
                   <div className="container">
                   <span className="loader"></span>
                 </div>
                ) : null}
               {todos.map((todos, index) => (
                   
                   <tr>
                        <td className="cangiua">{index + 1}</td>
                        <td className="cantrai">{todos.BookingCode}</td>
                        <td className="cantrai">{todos.id}</td>
                        <td className="cantrai"><div className="CheckTinhTrang">{todos.TinhTrang}</div></td>
                        <td className="canphai">{todos.NgaySuDung.toDate().toLocaleDateString()}</td>
                        <td className="canphai">{todos.NgayXuatVe.toDate().toLocaleDateString()}</td>
                        <td className="cantrai">{todos.CongCheckIn}</td>
                        <td></td>
                    </tr>
                ))}
               
            </tbody>   
                </table>

            </div>
            <div  id="Background-black">
                <form className="BangLocVe">
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
                    <button className="btn-LocVe1" onClick={LocData}>Lọc</button>
                </form>
                
            </div>
        </div>

   )
}

export default DanhSachVe;

