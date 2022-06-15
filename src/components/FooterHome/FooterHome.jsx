import React from "react";

export default function FooterHome(props) {
  return (
    <div className="bg-dark">
      <div className="container pt-5 pb-5">
        <div className="row">
          <div className="col-4 info">
            <h2>LOGO</h2>
            <p>CyberSoft Academy - Hệ thống đào tạo lập trình chuyên sâu theo dự án thực tế.</p>
            <br />
            <h5 className="text-white">NHẬN TIN SỰ KIỆN & KHUYẾN MÃI</h5>
            <p>CyberSoft sẽ gởi các khóa học trực tuyến & các chương trình CyberLive hoàn toàn MIỄN PHÍ và các chương trình KHUYẾN MÃI hấp dẫn đến các bạn</p>
            <br />
            <div className="form-row align-items-center">
              <div className="col-8">
                <input className="form-control" type="email" style={{ width: "100%" }} placeholder="your.address@email.com" />
              </div>
              <div className="col-4">
                <button className="btn btn-warning text-white">ĐĂNG KÝ</button>
              </div>
            </div>
          </div>

          <div className="col-4">
            <h4 className="text-white">ĐĂNG KÝ TƯ VẤN</h4>
            <div className="form-group">
              <input type="text" className="form-control" id="" placeholder="Họ và tên *" />
            </div>
            <div className="form-group">
              <input type="email" className="form-control" id="" placeholder="Email liên hệ *" />
            </div>
            <div className="form-group">
              <input type="number" className="form-control" id="" placeholder="Điện thoại liên hệ *" />
            </div>
            <div className="form-group">
              <button className="btn btn-warning text-white">ĐĂNG KÝ TƯ VẤN</button>
            </div>
          </div>

          <div className="col-4">
            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Flophocviet&tabs=timeline&width=340&height=331&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width={340} height={331} style={{ border: 'none', overflow: 'hidden' }} scrolling="no" frameBorder={0} allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" />
          </div>
        </div>
      </div>
    </div>
  );
}
