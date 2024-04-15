import React from 'react'
import style from './Hero.module.css'
function Hero() {
  return (
    <section className={style.hero}>
   
      <div className={style.description}>
      <h1>Welcome to <em><strong>TasteBuns</strong></em></h1>
        <p>Hello, welcome to our online resturant. We offer the best 
            selling food you, at the best price, Order up and hit up your
             <strong> TasteBuns</strong>
        </p>
        <div className={style.cta}>
            <a href='.Item'><button>Order Up</button></a>
        </div>
      </div>
    </section>
  )
}

export default Hero