import React from 'react'

export default function RegisterPage(props) {
  return (
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
                      <input type="text" id="" className="form-control form-control-lg" placeholder='Tài khoản' />
                    </div>
                    <div className="form-outline mb-4">
                      <input type="password" id="" className="form-control form-control-lg" placeholder='Mật khẩu' />
                    </div>
                    <div className="form-outline mb-4">
                      <input type="password" id="" className="form-control form-control-lg" placeholder='Nhập lại mật khẩu' />
                    </div>
                    <div className="form-outline mb-4">
                      <input type="text" id="" className="form-control form-control-lg" placeholder='Họ tên' />
                    </div>
                    <div className="form-outline mb-4">
                      <input type="email" id="" className="form-control form-control-lg" placeholder='Email' />
                    </div>
                    <div className="form-outline mb-4">
                      <input type="number" id="f" className="form-control form-control-lg" placeholder='Số điện thoại' />
                    </div>
                    <div className="d-flex justify-content-center">
                      <button type="button" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Đăng ký</button>
                    </div>
                    <p className="text-center text-muted mt-5 mb-0">Bạn đã có tài khoản? <a href="/loginpage" className="fw-bold text-body"><u>Đăng nhập</u></a></p>
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