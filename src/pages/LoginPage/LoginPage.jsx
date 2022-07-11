import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { http } from "../../ulti/setting";
import { Button } from "antd";
import { Validation } from "../../validation/Validation";

let kiemTra = new Validation();

async function dangNhap(taiKhoan, matKhau) {
  console.log(taiKhoan, matKhau);
  const body = {
    taiKhoan: taiKhoan,
    matKhau: matKhau,
  };

  //Check validation
  let valid = true;
  valid &= kiemTra.kiemTraRong(taiKhoan,'#error_required_taiKhoan') & kiemTra.kiemTraRong(matKhau,'#error_required_matKhau');
  if(valid != true){
    return;
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

export default function LoginPage(props) {
  const [taiKhoan, setTaiKhoan] = useState("");
  const [matKhau, setMatKhau] = useState("");

  return (
    <section className="login">
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-12 col-md-9 col-lg-7 col-xl-6">
            <div className="card" style={{ borderRadius: 15 }}>
              <div className="card-body p-5">
                <h2 className="text-uppercase text-center mb-5">Đăng nhập</h2>
                <form>
                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      id="taiKhoan"
                      className="form-control form-control-lg"
                      placeholder="Tài khoản"
                      onChange={(event) => setTaiKhoan(event.target.value)}
                    />
                    <p className="text-danger" id="error_required_taiKhoan"></p>
                  </div>
                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      id="matKhau"
                      className="form-control form-control-lg"
                      placeholder="Mật khẩu"
                      onChange={(event) => setMatKhau(event.target.value)}
                    />
                    <p className="text-danger" id="error_required_matKhau"></p>
                  </div>
                  <div className="d-flex justify-content-center">
                    <Button
                      type="button"
                      onClick={() => dangNhap(taiKhoan, matKhau)}
                      className="custom-btn animation btn-block btn-lg gradient-custom-4 text-body"
                    >
                      Đăng nhập
                    </Button>
                  </div>
                  <p className="text-center text-muted mt-5 mb-0">
                    Bạn chưa có tài khoản?{" "}
                    <NavLink to="/dangky" className="fw-bold text-body">
                      <u>Đăng kí</u>
                    </NavLink>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/*
onClick = {() => func1(data1, data2)} 

func1

func1(data1, data2);
func1(data1, data2){
  ...
}
*/
