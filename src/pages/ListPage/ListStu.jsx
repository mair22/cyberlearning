import React from "react";
import { NavLink } from "react-router-dom";
import { http } from "../../ulti/setting"



async function dangky1(){
  let result = await http.get('https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=TuDuy&MaNhom=GP01');}

export default function ListStu(props) {
  return (
    <div className="container">
        <div className="">Các khóa học phổ biến</div>
      <div className="row">
        <div className="col-3">
          <div className="item">
            <div className="content">
              <i className="fab fa-autoprefixer" />
              <h1>Khóa học</h1>
              <NavLink className="btn btn-warning" to="/dangky">
                Đăng ký
              </NavLink>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="item">
            <div className="content">
              <i className="fab fa-autoprefixer" />
              <h1>Khóa học</h1>
              <NavLink className="btn btn-warning" to="/dangky">
                Đăng ký
              </NavLink>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="item">
            <div className="content">
              <i className="fab fa-autoprefixer" />
              <h1>Khóa học</h1>
              <NavLink className="btn btn-warning" to="/dangky">
                Đăng ký
              </NavLink>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="item">
            <div className="content">
              <i className="fab fa-autoprefixer" />
              <h1>Khóa học</h1>
              <NavLink className="btn btn-warning" to="/dangky">
                Đăng ký
              </NavLink>
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
              <NavLink className="btn btn-warning" to="/dangky">
                Đăng ký
              </NavLink>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="item">
            <div className="content">
              <i className="fab fa-autoprefixer" />
              <h1>Khóa học</h1>
              <NavLink className="btn btn-warning" to="/dangky">
                Đăng ký
              </NavLink>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="item">
            <div className="content">
              <i className="fab fa-autoprefixer" />
              <h1>Khóa học</h1>
              <NavLink className="btn btn-warning" to="/dangky">
                Đăng ký
              </NavLink>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="item">
            <div className="content">
              <i className="fab fa-autoprefixer" />
              <h1>Khóa học</h1>
              <NavLink className="btn btn-warning" to="/dangky">
                Đăng ký
              </NavLink>
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
              <NavLink className="btn btn-warning" to="/dangky">
                Đăng ký
              </NavLink>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="item">
            <div className="content">
              <i className="fab fa-autoprefixer" />
              <h1>Khóa học</h1>
              <NavLink className="btn btn-warning" to="/dangky">
                Đăng ký
              </NavLink>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="item">
            <div className="content">
              <i className="fab fa-autoprefixer" />
              <h1>Khóa học</h1>
              <NavLink className="btn btn-warning" to="/dangky">
                Đăng ký
              </NavLink>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="item">
            <div className="content">
              <i className="fab fa-autoprefixer" />
              <h1>Khóa học</h1>
              <NavLink className="btn btn-warning" to="/dangky">
                Đăng ký
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
