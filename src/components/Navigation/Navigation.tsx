import React from 'react';
import "./index.css";
import { NavLink } from 'react-router-dom';
import logo from '../Images/logo.jpg'
import LogoAlta from '../Images/Logo-Alta.png'
import { HomeOutlined,BellOutlined,CreditCardOutlined,MailOutlined, ContainerOutlined,SettingOutlined,SearchOutlined } from '@ant-design/icons';

function Navigation() {
    
    return(

        <div className="wrapper">
            <div className="sidebar" >
                <img className='sidebar-logo' src={logo} alt="logo" />
                <div  className='sidebar-ul'>     
                    <NavLink className="nav-link" to="/"><HomeOutlined /> Trang chủ</NavLink>
                    <NavLink className="nav-link" to="/DanhSachVe"><CreditCardOutlined />Quản lý vé</NavLink>
                    <NavLink className="nav-link" to="/DoiSoatVe"><ContainerOutlined /> Đổi soát vé</NavLink>
                    <NavLink className="nav-link" to="/DanhSachGoiVe"><SettingOutlined /> Cài đặt</NavLink>
                </div>     
            </div>
            <div className="main_content">
                <div className="search">
                    <input  type="text" placeholder='Search'  /><a href="/"><SearchOutlined /></a>
                </div>  
                <div className="user">
                    <NavLink to="/Mail"><MailOutlined /></NavLink>
                    <NavLink to="/Bell"><BellOutlined /></NavLink>
                    <img src={LogoAlta} alt="User" />
                </div>
            </div>
        </div>
         
    );
}

export default Navigation;