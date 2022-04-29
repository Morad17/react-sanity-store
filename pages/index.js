import React from 'react'

import Hero from '../components/Hero'
import FooterHero from '../components/FooterHero'
import Product from '../components/Product'

const Home = () => {
  return (
    <>
      <Hero />

      <div className="">
        <h2>Best Selling Products</h2>
      </div>

      <div className="">
      {/* {['Product1'].map(
        (product) => product
      )
      } */}
      </div>

      <FooterHero />
    </>
  )
}

export default Home