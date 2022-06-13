import React from 'react'
import HeaderHome from '../../components/HeaderHome/HeaderHome'
import "../../assets/scss/pages/_home-page.scss"

export default function HomePage(props) {
  return (
    <section class="carousel">
      <main class="carousel-main">
        <div class="container">
          <p>WELCOME TO MEIPALY AGENCY</p>
          <h1>
            SMART WEB <br />
            DESIGN AGENCY
          </h1>
          <a href="#">Read more</a>
          <i class="fa fa-angle-down"></i>
        </div>
      </main>
    </section>
  )
}
