import React from "react";

export default function FooterHome(props) {
  return (
    // <footer classname="bg-dark text-white text-center p-3">
    //   <section classname="contact">
    //     <header classname="contact-header">
    //       <div classname="container">
    //         <h1>CONTACT</h1>
    //         <p>
    //           Thank you for your interest in our website &amp; our services. If
    //           you have any questions, please write us a message now!
    //         </p>
    //       </div>
    //     </header>
    //     <main classname="contact-main">
    //       <div classname="container">
    //         <iframe
    //           src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Flophocviet&tabs=timeline&width=330&height=300&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
    //           width={330}
    //           height={300}
    //           style={{ border: "none", overflow: "hidden" }}
    //           scrolling="no"
    //           frameBorder={0}
    //           allowFullScreen="true"
    //           allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
    //         />
    //         <form className="form" action>
    //           <input type="text" placeholder="Usename" />
    //           <input type="email" placeholder="Email" />
    //           <textarea
    //             rows={10}
    //             placeholder="Ask a question..."
    //             defaultValue={""}
    //           />
    //           <button>Submit</button>
    //         </form>
    //       </div>
    //     </main>
    //   </section>
    // </footer>

    <section className="contact bg-dark">
      <header className="contact-header">
        <div className="container">
          <h1>CONTACT</h1>
          <p>
            Thank you for your interest in our website &amp; our services. If
            you have any questions, please write us a message now!
          </p>
        </div>
      </header>
      <main className="contact-main">
        <div className="container">
          <div className="info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci vitae cumque distinctio mollitia exercitationem. Quod non natus explicabo corrupti tempore sit, earum voluptate assumenda quia nihil dolorem obcaecati incidunt saepe!
          </div>
          <form className="form" action>
            <span>Đăng ký tư vấn</span>
            <input type="text" placeholder="Họ và tên *" />
            <input type="email" placeholder="Email liên hệ *" />
            <input type="number" placeholder="Điện thoại liên hệ *" />
            <button>Đăng ký tư vấn</button>
          </form>
          <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Flophocviet&tabs=timeline&width=340&height=331&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width={340} height={331} style={{border: 'none', overflow: 'hidden'}} scrolling="no" frameBorder={0} allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" />
        </div>
      </main>
    </section>
  );
}
