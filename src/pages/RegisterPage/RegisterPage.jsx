import React from 'react'
import { NavLink } from 'react-router-dom'
import { http } from '../../ulti/setting';
import { Button } from "antd";

async function dangky(){
  let result = await http.post('http://elearningnew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy');
  let hocvien = [];
  try {
    let data = result.data;
    // console.log(data);
    for(let i = 0; i < i; i++){
      hocvien.push(data[i]);
    }
  }
  catch(err){
    console.log(err);
  }

  for(let data of hocvien){
    console.log(data);
  }

}

async function luu(){
  let storage = JSON.stringify(dangky);
  localStorage.setItem("dangky", storage);
}


export default function RegisterPage(props) {
  return (
    // <section className=" bg-image" style={{ backgroundImage: 'url("https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp")' }}>
    <section className="register">
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card" style={{ borderRadius: 15 }}>
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center mb-5">Đăng ký</h2>
                  <form>
                    <div className="form-outline mb-4">
                      <input type="text" id="taiKhoan" className="form-control form-control-lg" placeholder='Tài khoản' />
                    </div>
                    <div className="form-outline mb-4">
                      <input type="password" id="matKhau" className="form-control form-control-lg" placeholder='Mật khẩu' />
                    </div>
                    <div className="form-outline mb-4">
                      <input type="password" id="matKhau" className="form-control form-control-lg" placeholder='Nhập lại mật khẩu' />
                    </div>
                    <div className="form-outline mb-4">
                      <input type="text" id="hoTen" className="form-control form-control-lg" placeholder='Họ tên' />
                    </div>
                    <div className="form-outline mb-4">
                      <input type="email" id="email" className="form-control form-control-lg" placeholder='Email' />
                    </div>
                    <div className="form-outline mb-4">
                      <input type="number" id="soDT" className="form-control form-control-lg" placeholder='Số điện thoại' />
                    </div>
                    <div className="d-flex justify-content-center">
                      <Button type="button" onClick={dangky} className="custom-btn animation btn-block btn-lg gradient-custom-4 text-body">Đăng ký</Button>
                    </div>
                    <p className="text-center text-muted mt-5 mb-0">Bạn đã có tài khoản? <NavLink to="/dangnhap" className="fw-bold text-body"><u>Đăng nhập</u></NavLink></p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}