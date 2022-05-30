import React, { useEffect,useState } from "react";
import "./index.css";
import * as todo from "../../service/todo";

function TableDoiSoat(){
    
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        fetchTodos();
      }, []);
      const fetchTodos = async () => {
        // clean the todos
        setTodos([]);
        const _todos = await todo.all();
        // set state
        setTodos(_todos);
        const checkVe = document.getElementsByClassName('CheckVe');
        for ( let i = 0; i < checkVe.length; i++) {
            if(checkVe[i].innerHTML === "Chưa đối soát")
            {   
                checkVe[i].classList.add("CheckVe-active1");
            }
            if(checkVe[i].innerHTML === "Đã đối soát")
            {
                checkVe[i].classList.add("CheckVe-active2");
            }
          }
        
    };
        


    const [todos, setTodos] = useState<Array<todo.Todo>>([]);
   return(
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
   )
}

export default TableDoiSoat;
// LeVanThang

