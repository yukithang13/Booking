import React, { useEffect,useState  } from "react";
import "./index.css";
import * as todo from "../../service/todo";
import { SearchOutlined } from "@ant-design/icons";


function DanhSachGoiVe(){
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        fetchTodos();
        
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
      const checkdoisoat = () =>  {
        const checkVe = document.getElementsByClassName('CheckVe');
    for ( let i = 0; i < checkVe.length; i++) {
        if(checkVe[i].innerHTML === "Chưa đối soát")
        {   
            checkVe[i].classList.add("CheckVe-active1");
            checkVe[i].classList.remove("CheckVe-active2");
        }
        if(checkVe[i].innerHTML === "Đã đối soát")
        {
            checkVe[i].classList.add("CheckVe-active2");
            checkVe[i].classList.remove("CheckVe-active1");
        }
      }
    
    }
     
      const chooseOption = async (param: {
        type: string
    }) => {

        switch(param.type) {

            case 'all':
                const data =  await todo.all();
                setTodos(data);
                checkdoisoat();
                break;
            
            case 'doisoat':
                const data1 =   (await todo.all()).filter((item: any) => item.DoiSoat === "Đã đối soát");
                setTodos(data1);
                checkdoisoat();
                break;

            case 'chuadoisoat':
                const data2 =    (await todo.all()).filter((item: any) => item.DoiSoat === "Chưa đối soát");
                setTodos(data2);
                checkdoisoat();
                break;
                
        }
        
    }
      const fetchTodos = async () => {
        // clean the todos
        setTodos([]);
        const _todos = await todo.all();
        // set state
        setTodos(_todos);
        checkdoisoat();
        
    };
    
      const [todos, setTodos] = useState<Array<todo.Todo>>([]);
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
                        <th className="cantrai">Số vé</th>
                        <th className="canphai">Ngày sử dụng</th>
                        <th className="cantrai">Tên loại vé</th>
                        <th className="cantrai">Cổng check-in</th>
                        <th > </th>
                    </tr>
                </thead>
                <tbody>
                    {todos.length === 0 ? (
                    <div className="container1">
                    <span className="loader1"></span>
                    </div>
                    ) : null}
                    {todos.map((todos, index) => (
                    <tr>
                            <td className="cangiua">{index + 1}</td>
                            <td className="cantrai">{todos.BookingCode}</td>
                            <td className="canphai">{todos.NgaySuDung.toDate().toLocaleDateString()}</td>
                            <td className="cantrai">{todos.TenLoaiVe}</td>
                            <td className="cantrai">{todos.CongCheckIn}</td>
                            <td className="cantrai CheckVe">{todos.DoiSoat}</td>
                        </tr>
                    ))}
               
            </tbody>   
                </table>
            </div>
            
        </div>
        <div className="DoiSoatVe-2">
            <h2 className="h2-SoatVe">Lọc vé</h2>
            <div className="TinhTrangDoiSoat">
                <h4>Tình trạng đối soát</h4>
                <div className="TinhTrangDoiSoat-item">
                    <div className="item-input"><input type="radio" name="option" value={"Tất cả"} onChange={() => chooseOption({type: 'all'})} /> Tất Cả</div>
                    <div className="item-input"><input type="radio" name="option" value={"Đối soát vé"} onChange={() => chooseOption({type: 'doisoat'})}  /> Đối soát vé</div>
                    <div className="item-input"><input type="radio" name="option" value={"Chưa đối soát"} onChange={() => chooseOption({type: 'chuadoisoat'})}  /> Chưa đối soát</div>
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