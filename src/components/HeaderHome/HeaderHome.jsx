import React from "react";
import { NavLink } from "react-router-dom";
import { http } from '../../ulti/setting';
import { Button } from "antd";

async function list(){
  let result = await http.get('http://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc');
  let dropDown = [];
  try {
    let data = result.data;
    // console.log(data);
    for(let i = 0; i < i; i++){
      dropDown.push(data[i]);
    }
  }
  catch(err){
    console.log(err);
  }

  for(let data of dropDown){
    console.log(data);
  }

}

export default function HeaderHome(props) {
  return (
    <header className="header" id="header">
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <a className="navbar-brand" href="/">
            <img src="https://cybersoft.edu.vn/wp-content/uploads/2021/03/logo-cyber-nav.svg" alt="" />
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item dropdown">
                <Button className="nav-link dropdown-toggle text-warning" onClick={list} id="navbardropdown" role="button" data-toggle="dropdown" aria-expanded="false">
                  Danh mục khóa học
                </Button>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Button className="dropdown-item" onClick={list}>Lập trình Backend</Button>
                  <Button className="dropdown-item" onClick={list}>Thiết kế Web</Button>
                  <Button className="dropdown-item" onClick={list}>Lập trình di động</Button>
                  <Button className="dropdown-item" onClick={list}>Lập trình Frontend</Button>
                  <Button className="dropdown-item" onClick={list}>Lập trình Full Stack</Button>
                  <Button className="dropdown-item" onClick={list}>Tư duy lập trình</Button>
                </div>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-warning my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
          <div>
            <NavLink className="ml-5 text-warning font-weight-bolder" to="/dangky">Đăng ký</NavLink>
            <NavLink className="ml-2 text-warning font-weight-bolder" to="/dangnhap" >Đăng nhập</NavLink>
          </div>
        </nav>

        {/* <NavLink className="logo" to="/">
          <img src="https://cybersoft.edu.vn/wp-content/uploads/2021/03/logo-cyber-nav.svg" alt="" />
        </NavLink>
        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-expanded="false"
          >
            Danh sách khóa học
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">
              Action
            </a>
            <a class="dropdown-item" href="#">
              Another action
            </a>
            <a class="dropdown-item" href="#">
              Something else here
            </a>
          </div>
        </div>
        <form classname="form-inline my-2 my-lg-0">
          <input
            classname="form-control mr-sm-2"
            type="search"
            placeholder="Tìm kiếm"
            aria-label="Search"
          />
          <button
            classname="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Tìm kiếm
          </button>
<<<<<<< HEAD
        </form>
          <NavLink className="btn btn-success" to="/registerpage">Đăng ký</NavLink>
          <NavLink className="btn btn-primary" to="/loginpage">Đăng nhập</NavLink>
=======
        </form> */}
      </div>
    </header>
  );
}
