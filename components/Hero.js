import Link from 'next/link'
import React from 'react'

import { urlFor } from '../lib/client'

const Hero = ({ heroBanner }) => {
  
  return (
    <div className="hero-banner-container">
      <div className="section-1">
        <p className="product-text">
          {heroBanner.smallText}
        </p>
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText}</h1>
        
        <img src={urlFor(heroBanner.image)} alt="product" className="hero-image"/>
        <Link href={`/product/${heroBanner.product}`} >
          <button type="button">{heroBanner.buttonText}</button>
        </Link>
        </div>
        <div className="section-2">
          
          <div className="desc">
            <h5>Description</h5>
            <p>{heroBanner.desc}</p>
          </div>
        </div>
      
    </div>
  )
}

export default Hero