import Link from 'next/link'
import React from 'react'

import { urlFor } from '../lib/client'

const Hero = ({ heroBanner }) => {
  
  return (
    <div className="hero-banner-container">
      <div className="section-1">
        <p className="hero-product-text">
          {heroBanner.smallText}
        </p>
        <h3 className="hero-product-heading-1">{heroBanner.midText}</h3>
        <h1 className="hero-product-heading-2">{heroBanner.largeText}</h1>
        
        <img src={urlFor(heroBanner.image)} alt="product" className="hero-image"/>
        <Link href={`/product/${heroBanner.product}`} >
          <button type="button" className="button-1">{heroBanner.buttonText}</button>
        </Link>
        </div>
        <div className="section-2">
          
          <div className="hero-description">
            <h5 className="hero-description-heading">Description</h5>
            <p className="hero-description-text">{heroBanner.desc}</p>
          </div>
        </div>
      
    </div>
  )
}

export default Hero