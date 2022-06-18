import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Carosel() {
  return (
    <section className="carousel">
      <div className="container">
      <main className="carousel-main">
          <h1>KHỞI ĐẦU SỰ NGHIỆP CỦA BẠN</h1>
          <p>Trở thành lập trình viên chuyên nghiệp tại Cybersoft</p>
          <NavLink className="btn btn-warning text-white mr-3" to="/listpage">Xem khóa học</NavLink>
          <NavLink className="btn btn-outline-light" to="/">Tư vấn học</NavLink>
      </main>
      </div>
    </section>
  )
}
