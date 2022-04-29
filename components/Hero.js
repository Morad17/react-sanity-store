import Link from 'next/link'
import React from 'react'



const Hero = () => {
  return (
    <div className="hero-banner-container">
      <div className="section-1">
        <p className="product-text">
          Small Text
        </p>
        <h3>Mid Text</h3>
        <img src="" alt="product" className="hero-image"/>
        <Link href="/product/ID" >
          <button type="button">Button</button>
        </Link>
        </div>
        <div className="section-2">
          
          <div className="desc">
            <h5>Description</h5>
            <p>Description</p>
          </div>
        </div>
      
    </div>
  )
}

export default Hero