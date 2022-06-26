import React from "react";
import { NavLink } from "react-router-dom";
import "../../assets/scss/pages/_home-page.scss";
import { http } from '../../ulti/setting';
// import axios from 'axios'; // no configuration
import { Button } from "antd";


async function dangky(){
  let result = await http.get('http://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01');
  let firstEight = [];
  try {
    let data = result.data;
    // console.log(data);
    for(let i = 0; i < 8; i++){
      firstEight.push(data[i]);
    }
  }
  catch(err){
    console.log(err);
  }

  for(let data of firstEight){
    console.log(data);
  }

}
export default function ListItem(props) {
  return (
    <section className="listItem">
      <div className="container">
        <h1>Các khóa học mới nhất</h1>
        <div className="row">
          <div className="col-3">
            <div className="item">
              <div className="content">
                <i className="fab fa-autoprefixer" />
                <h1>Khóa học</h1>
                <button className="btn btn-warning" onClick={dangky}>Đăng ký</button>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="item">
              <div className="content">
                <i className="fab fa-autoprefixer" />
                <h1>Khóa học</h1>
                <NavLink className="btn btn-warning" to="/dangky">Đăng ký</NavLink>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="item">
              <div className="content">
                <i className="fab fa-autoprefixer" />
                <h1>Khóa học</h1>
                <NavLink className="btn btn-warning" to="/dangky">Đăng ký</NavLink>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="item">
              <div className="content">
                <i className="fab fa-autoprefixer" />
                <h1>Khóa học</h1>
                <NavLink className="btn btn-warning" to="/dangky">Đăng ký</NavLink>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-3">
            <div className="item">
              <div className="content">
                <i className="fab fa-autoprefixer" />
                <h1>Khóa học</h1>
                <NavLink className="btn btn-warning" to="/dangky">Đăng ký</NavLink>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="item">
              <div className="content">
                <i className="fab fa-autoprefixer" />
                <h1>Khóa học</h1>
                <NavLink className="btn btn-warning" to="/dangky">Đăng ký</NavLink>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="item">
              <div className="content">
                <i className="fab fa-autoprefixer" />
                <h1>Khóa học</h1>
                <NavLink className="btn btn-warning" to="/dangky">Đăng ký</NavLink>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="item">
              <div className="content">
                <i className="fab fa-autoprefixer" />
                <h1>Khóa học</h1>
                <NavLink className="btn btn-warning" to="/dangky">Đăng ký</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
