import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchInfo } from "../../redux/actions/Main";

class Info extends Component {
  render() {
    console.log("check", this.props);
    return (
      <section className="info">
        <div className="container">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <a
                className="nav-link text-warning active"
                id="profile-tab"
                data-toggle="tab"
                href="#profile"
                role="tab"
                aria-controls="profile"
                aria-selected="true"
              >
                THÔNG TIN CÁ NHÂN
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link text-warning"
                id="courses-tab"
                data-toggle="tab"
                href="#courses"
                role="tab"
                aria-controls="courses"
                aria-selected="false"
              >
                KHÓA HỌC CỦA TÔI
              </a>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            {/* THÔNG TIN CÁ NHÂN */}
            <div
              className="personalInfo tab-pane fade show active"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <div className="card mb-3">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Email</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <p>{this.props.infoDetail.email}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Họ Tên</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <p>{this.props.infoDetail.hoTen}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Số điện thoại</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <p>{this.props.infoDetail.soDT}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Tài khoản</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <p>{this.props.infoDetail.taiKhoan}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Mật khẩu</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <p>{this.props.infoDetail.matKhau}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-12">
                      <a className="btn btn-warning">Thay đổi thông tin</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* KHÓA HỌC CỦA TÔI */}
            <div
              className="courses tab-pane fade"
              id="courses"
              role="tabpanel"
              aria-labelledby="courses-tab"
            >
              <div className="content row">
                <h2 className="col-12 col-lg-9">CÁC KHÓA HỌC ĐÃ THAM GIA</h2>
                <input
                  className="col-12 col-lg-3 form-control"
                  type="text"
                  placeholder="Nhập khóa học cần tìm"
                />
              </div>

              <div className="list row">
                <div className="item col-12 col-sm-6 col-lg-3">
                  <div className="content">
                    <div className="thumbnail">
                      <img
                        src="https://elearningnew.cybersoft.edu.vn/hinhanh/342t354y_gp01.png"
                        alt=""
                      />
                    </div>
                    <div>
                      <h1>Thành thạo Bootstrap qua 10 website</h1>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Debitis, voluptatem error.
                      </p>
                      <div className="readmore">
                        <button className="custom-btn animation">Hủy</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item col-12 col-sm-6 col-lg-3">
                  <div className="content">
                    <div className="thumbnail">
                      <img
                        src="https://elearningnew.cybersoft.edu.vn/hinhanh/342t354y_gp01.png"
                        alt=""
                      />
                    </div>
                    <div>
                      <h1>Thành thạo Bootstrap qua 10 website</h1>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Debitis, voluptatem error.
                      </p>
                      <div className="readmore">
                        <button className="custom-btn animation">Hủy</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item col-12 col-sm-6 col-lg-3">
                  <div className="content">
                    <div className="thumbnail">
                      <img
                        src="https://elearningnew.cybersoft.edu.vn/hinhanh/342t354y_gp01.png"
                        alt=""
                      />
                    </div>
                    <div>
                      <h1>Thành thạo Bootstrap qua 10 website</h1>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Debitis, voluptatem error.
                      </p>
                      <div className="readmore">
                        <button className="custom-btn animation">Hủy</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item col-12 col-sm-6 col-lg-3">
                  <div className="content">
                    <div className="thumbnail">
                      <img
                        src="https://elearningnew.cybersoft.edu.vn/hinhanh/342t354y_gp01.png"
                        alt=""
                      />
                    </div>
                    <div>
                      <h1>Thành thạo Bootstrap qua 10 website</h1>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Debitis, voluptatem error.
                      </p>
                      <div className="readmore">
                        <button className="custom-btn animation">Hủy</button>
                      </div>
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

  componentDidMount() {
    this.props.dispatch(fetchInfo());
  }
}

const mapStateToProps = (state) => ({
  infoDetail: state.info.infoDetail || {
    email: "",
    hoTen: "",
    soDT: "",
    taiKhoan: "",
    matKhau: "",
    chiTietKhoaHocGhiDanh: [],
  },
});

export default connect(mapStateToProps)(Info);
