import React from "react";
import { NavLink } from "react-router-dom";
import "../../assets/scss/pages/_userpage.scss";

export default function UserPage(props) {
  return (
    <section className="user">
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card" style={{ borderRadius: 15 }}>
                <div className="card-body p-5">
                  <a className="text-uppercase text-center mb-5">
                    Thêm người dùng
                  </a>
                  <form>
                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        id=""
                        className="form-control form-control-lg"
                        placeholder="Tài khoản hoặc họ tên người dùng"
                      />
                      <button
                        type="button"
                        className="custom-btn animation text-body"
                      >
                        Tìm
                      </button>
                    </div>
                  </form>
                  {/* Bảng danh sách thông tin */}
                  <div class="mt-2">
                    <table class="table">
                      <thead>
                        <tr>
                          <th>Số thứ tự</th>
                          <th>Tài khoản</th>
                          <th>Họ tên</th>
                          <th>Email</th>
                          <th>Số điện thoại</th>
                          <th>Thao tác</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody id=""></tbody>
                    </table>
                  </div>
                  {/* Nút qua trang */}
                  <div className="">
                    <nav aria-label="Page navigation example">
                      <ul className="pagination justify-content-center">
                        <li className="page-item">
                          <a
                            className="page-link"
                            href="#"
                            aria-label="Previous"
                          >
                            <span aria-hidden="true">«</span>
                            <span className="sr-only">Previous</span>
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            1
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            2
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            3
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">»</span>
                            <span className="sr-only">Next</span>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
