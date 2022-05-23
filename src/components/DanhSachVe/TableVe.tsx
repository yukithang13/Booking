import React, { useEffect,useState } from "react";
import "./index.css";
import * as todo from "../../service/todo";

function TableVe(){
    
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        fetchTodos();
      }, []);
      const fetchTodos = async () => {
        // clean the todos
        setTodos([]);
        // fetch todos from repository
        const _todos = await todo.all();
        // set todos to state
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
    };

    const [todos, setTodos] = useState<Array<todo.Todo>>([]);
   return(
            <tbody>
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
   )
}

export default TableVe;
//LeVanThang