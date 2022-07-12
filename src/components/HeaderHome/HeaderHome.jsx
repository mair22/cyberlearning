import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { http } from '../../ulti/setting';

async function list() {
  let result = await http.get('https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc');
  let dropDown = [];
  try {
    let data = result.data;
    // console.log(data);
    for(let i = 0; i < i; i++){
      dropDown.push(data[i]);
    }
  }
  catch (err) {
    console.log(err);
  }

  for (let data of dropDown) {
    console.log(data);
  }
}

async function research(id) {
  let result = await http.get(`https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=${id}`);
  let input = "";
  try {
    let data = result.data;
    }
  catch (err) {
    console.log(err);
  }
}

export default function HeaderHome(props) {
  const [id, setId] = useState(""); 
  return (
    <header className="header" id="header">
      <div className="container">
        <nav className="header-navbar">
          <ul className="navbar-list-1">
            <button className="navbar-item navbar-toggler">
              <i className="fa fa-bars"></i>
            </button>
            <li className="navbar-item">
              <a className="navbar-item-brand" href="/">
                <img src="https://cybersoft.edu.vn/wp-content/uploads/2021/03/logo-cyber-nav.svg" alt="" />
              </a>
            </li>
            <li className="navbar-item dropdown">
              <a className="nav-link dropdown-toggle" onClick={list} id="navbardropdown">
                Danh mục khóa học
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" onClick={list}>Lập trình Backend</a>
                <a className="dropdown-item" onClick={list}>Thiết kế Web</a>
                <a className="dropdown-item" onClick={list}>Lập trình di động</a>
                <a className="dropdown-item" onClick={list}>Lập trình Frontend</a>
                <a className="dropdown-item" onClick={list}>Lập trình Full Stack</a>
                <a className="dropdown-item" onClick={list}>Tư duy lập trình</a>
              </div>
            </li>
          </ul>
          <ul className="navbar-list-2">
            <form className="navbar-item form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" onChange={(event) => setId(event.target.value)} placeholder="Search" aria-label="Search" />
              <a className="btn btn-outline-warning my-2 my-sm-0" type="submit">Search</a>
            </form>
            <NavLink className="navbar-item font-weight-bolder" to="/dangky">Đăng ký</NavLink>
            <NavLink className="navbar-item font-weight-bolder" to="/dangnhap" >Đăng nhập</NavLink>
          </ul>
        </nav>
      </div>
    </header>
  );
}
