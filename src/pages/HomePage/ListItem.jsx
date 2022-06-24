import React from "react";
import { NavLink } from "react-router-dom";
import "../../assets/scss/pages/_home-page.scss";

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
