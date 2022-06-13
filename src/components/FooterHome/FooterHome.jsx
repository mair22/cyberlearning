import React from "react";

export default function FooterHome(props) {
  return (
    <section className="contact bg-dark">
      <main className="contact-main">
        <div className="container">
          <div className="info">
            {/* logo */}
            <p>CyberSoft Academy - Hệ thống đào tạo lập trình chuyên sâu theo dự án thực tế.</p>
            <br />

            <h4 className="text-white">NHẬN TIN SỰ KIỆN & KHUYẾN MÃI</h4>
            <p>CyberSoft sẽ gởi các khóa học trực tuyến & các chương trình CyberLive hoàn toàn MIỄN PHÍ và các chương trình KHUYẾN MÃI hấp dẫn đến các bạn</p>
            <div className="row">
              <div className="col-7">
                <input type="email" style={{width:"100%"}} placeholder="your.address@email.com"/>
              </div>
              <div className="col-5">
                <button className="btn btn-warning text-white">ĐĂNG KÝ</button>
              </div>
            </div>

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci vitae cumque distinctio mollitia exercitationem. Quod non natus explicabo corrupti tempore sit, earum voluptate assumenda quia nihil dolorem obcaecati incidunt saepe!
          </div>
          <form className="form" action>
            <span>Đăng ký tư vấn</span>
            <input type="text" placeholder="Họ và tên *" />
            <input type="email" placeholder="Email liên hệ *" />
            <input type="number" placeholder="Điện thoại liên hệ *" />
            <button className="btn btn-warning">ĐĂNG KÍ TƯ VẤN</button>
          </form>
          <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Flophocviet&tabs=timeline&width=340&height=331&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width={340} height={331} style={{border: 'none', overflow: 'hidden'}} scrolling="no" frameBorder={0} allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" />
        </div>
      </main>
    </section>
  );
}
