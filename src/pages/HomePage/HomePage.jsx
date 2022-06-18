import React from 'react'
import HeaderHome from '../../components/HeaderHome/HeaderHome'
import "../../assets/scss/pages/_home-page.scss"
import { NavLink } from 'react-router-dom'

export default function HomePage(props) {
  return (
    <section class="carousel">
      <main class="carousel-main">
        <div class="container">
          <h1>KHỞI ĐẦU SỰ NGHIỆP CỦA BẠN</h1>
          <p>
            Trở thành lập trình viên chuyên nghiệp tại Cybersoft
          </p>
          <NavLink to="/">Xem khóa học</NavLink>
          <NavLink to="/">Tư vấn học</NavLink>
          <i class="fa fa-angle-down"></i>
        </div>
      </main>
    </section>
  )
}
