
import React, { useEffect } from "react";

import "./index.css";


function TrangChu(){
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });

      }, []);

   return(
        <div className="Home">
            <div className="Home-tk">
                <h2>Thống Kê</h2>
                <div className="Home-tk-1">
                    <h4>Doanh Thu</h4>
                    <input type="date" className="form-control calender-black" />
                </div>
                <div className="Home-tk-2">
                   
                </div>
            </div>
        </div>
   )
}

export default TrangChu;

