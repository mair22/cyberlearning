import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { http } from '../../ulti/setting';
import { Button } from "antd";

async function dangky(taiKhoan, matKhau, hoTen, soDT, maNhom, email) {
  console.log(taiKhoan, matKhau);
  const body = {
    taiKhoan: taiKhoan,
    matKhau: matKhau,
    hoTen: hoTen,
    soDT: soDT,
    maNhom: maNhom,
    email: email,
  };
  try {
    const result = await http.post(
      "https://elearningnew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
      body
    );
    console.log(result.data.accessToken);
    localStorage.setItem("token", result.data.accessToken);
  } catch (error) {
    console.log(error);
  }

  try {
    const result = await http.post(
      "https://elearningnew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      body
    );
    console.log(result.data.accessToken);
    localStorage.setItem("token", result.data.accessToken);
  } catch (error) {
    console.log(error);
  }

}

export default function RegisterPage(props) {
  const [taiKhoan, setTaiKhoan] = useState("");
  const [matKhau, setMatKhau] = useState("");
  const [hoTen, setHoTen] = useState("");
  const [soDT, setSoDT] = useState("");
  const [maNhom, setMaNhom] = useState("");
  const [email, setEmail] = useState("");
  return (
    // <section className=" bg-image" style={{ backgroundImage: 'url("https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp")' }}>
    <section className="register">
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-12 col-md-9 col-lg-7 col-xl-6">
            <div className="card" style={{ borderRadius: 15 }}>
              <div className="card-body p-5">
                <h2 className="text-uppercase text-center mb-5">Đăng ký</h2>
                <form>
                  <div className="form-outline mb-4">
                    <input type="text" id="taiKhoan" className="form-control form-control-lg" placeholder='Tài khoản' onChange={(event) => setTaiKhoan(event.target.value)} />
                  </div>
                  <div className="form-outline mb-4">
                    <input type="password" id="matKhau" className="form-control form-control-lg" placeholder='Mật khẩu' onChange={(event) => setMatKhau(event.target.value)} />
                  </div>
                  <div className="form-outline mb-4">
                    <input type="password" id="matKhau" className="form-control form-control-lg" placeholder='Nhập lại mật khẩu' onChange={(event) => setMatKhau(event.target.value)} />
                  </div>
                  <div className="form-outline mb-4">
                    <input type="text" id="hoTen" className="form-control form-control-lg" placeholder='Họ tên' onChange={(event) => setHoTen(event.target.value)} />
                  </div>
                  <div className="form-outline mb-4">
                    <input type="email" id="email" className="form-control form-control-lg" placeholder='Email' onChange={(event) => setEmail(event.target.value)} />
                  </div>
                  <div className="form-outline mb-4">
                    <input type="number" id="soDT" className="form-control form-control-lg" placeholder='Số điện thoại' onChange={(event) => setSoDT(event.target.value)} />
                  </div>
                  <div className="d-flex justify-content-center">
                    <Button type="button" onClick={() => dangky(taiKhoan, matKhau, hoTen, soDT, maNhom, email)} className="custom-btn animation btn-block btn-lg gradient-custom-4 text-body">Đăng ký</Button>
                  </div>
                  <p className="text-center text-muted mt-5 mb-0">Bạn đã có tài khoản? <NavLink to="/dangnhap" className="fw-bold text-body"><u>Đăng nhập</u></NavLink></p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}