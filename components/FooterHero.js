import React from 'react'
import Link from 'next/link'

import { urlFor } from '../lib/client'

const FooterHero = ({ footerHero: { discount, largeText1, largeText2,
   saleTime, smallText, midText, product, buttonText, image, desc}}) => {
  return (
    <div className="footer-banner-container">
        <div className="left">
          <p>{discount}</p>
          <h3>{largeText1}</h3>
          <h3>{largeText2}</h3>
          <p>{saleTime}</p>
        </div>
        <img className="footer-banner-image" src={urlFor(image)} alt="banner-image" />
        <div className="right">
          <p>{smallText}</p>
          <h3>{midText}</h3>
          <p>{desc}</p>
          <Link href={`/product/${product}`}>
            <button type="button" className="button-2">Shop Now</button>
          </Link>
        </div>
    </div>
  )
}

export default FooterHero