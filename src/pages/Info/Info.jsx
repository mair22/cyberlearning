import React from 'react'

export default function Info() {
  return (
    <section className='info'>
      <div className='container'>
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <a className="nav-link text-warning active" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="true">THÔNG TIN CÁ NHÂN</a>
          </li>
          <li className="nav-item" role="presentation">
            <a className="nav-link text-warning" id="courses-tab" data-toggle="tab" href="#courses" role="tab" aria-controls="courses" aria-selected="false">KHÓA HỌC CỦA TÔI</a>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          {/* THÔNG TIN CÁ NHÂN */}
          <div className="personalInfo tab-pane fade show active" id="profile" role="tabpanel" aria-labelledby="profile-tab">
            <div className="card mb-3">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Email</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    abcd@gmail.com
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Họ Tên</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    Nguyễn Văn A
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Số điện thoại</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    2398169029
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Tài khoản</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    nguyenvana
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Mật khẩu</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    123456789
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-12">
                    <a className="btn btn-warning " href="#">Thay đổi thông tin</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* KHÓA HỌC CỦA TÔI */}
          <div className="courses tab-pane fade" id="courses" role="tabpanel" aria-labelledby="courses-tab">
            <div className='content row'>
              <h2 className='col-8'>CÁC KHÓA HỌC ĐÃ THAM GIA</h2>
              <input className='col-3 form-control' type="text" placeholder='Nhập khóa học cần tìm' />
            </div>

            <div className='list'>
              <div className='row item'>
                <div className='col-3 image'>
                  <img src="https://image.winudf.com/v2/image1/Y29tLnVndXIubG9ja3NjcmVlbl9zY3JlZW5fMF8xNTY3MjcwMTI3XzAzNA/screen-0.jpg?fakeurl=1&type=.webp" alt="" />
                </div>
                <div className='col-9 item-content'>
                  <h3>Lập trình frontend với reactjs</h3>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit dolor ex dolore blanditiis. Minus placeat nam vero autem eaque ipsam.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab accusantium dolorum sunt odio rerum ex dicta dignissimos impedit ipsam asperiores?</p>
                  <button className='btn btn-danger'>Hủy</button>
                </div>
              </div>
              <div className='row item'>
                <div className='col-3 image'>
                  <img src="https://image.winudf.com/v2/image1/Y29tLnVndXIubG9ja3NjcmVlbl9zY3JlZW5fMF8xNTY3MjcwMTI3XzAzNA/screen-0.jpg?fakeurl=1&type=.webp" alt="" />
                </div>
                <div className='col-9 item-content'>
                  <h3>Lập trình frontend với reactjs</h3>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit dolor ex dolore blanditiis. Minus placeat nam vero autem eaque ipsam.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab accusantium dolorum sunt odio rerum ex dicta dignissimos impedit ipsam asperiores?</p>
                  <button className='btn btn-danger'>Hủy</button>
                </div>
              </div>
              <div className='row item'>
                <div className='col-3 image'>
                  <img src="https://image.winudf.com/v2/image1/Y29tLnVndXIubG9ja3NjcmVlbl9zY3JlZW5fMF8xNTY3MjcwMTI3XzAzNA/screen-0.jpg?fakeurl=1&type=.webp" alt="" />
                </div>
                <div className='col-9 item-content'>
                  <h3>Lập trình frontend với reactjs</h3>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit dolor ex dolore blanditiis. Minus placeat nam vero autem eaque ipsam.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab accusantium dolorum sunt odio rerum ex dicta dignissimos impedit ipsam asperiores?</p>
                  <button className='btn btn-danger'>Hủy</button>
                </div>
              </div>
              {/* Số trang */}
              <div className=''>
                <nav aria-label="Page navigation example">
                  <ul className="pagination justify-content-center">
                    <li className="page-item">
                      <a className="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">«</span>
                        <span className="sr-only">Previous</span>
                      </a>
                    </li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
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
      </div >
    </section>
  )
}
