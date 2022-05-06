import React from 'react'

import { client } from '../lib/client';

import Hero from '../components/Hero'
import FooterHero from '../components/FooterHero'
import Product from '../components/Product'

const Home = ({ products, bannerData }) => {
  return (
    <>
      <Hero heroBanner={bannerData.length && bannerData[0]}/>

      <div className="">
        <h2>Best Selling Products</h2>
      </div>

      <div className="product-list">
      { products?.map(
        (product) => <Product key={product._id} product={product}/>
      )
      }
      </div>

      <FooterHero footerHero={ bannerData && bannerData[0]}/>
    </>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData}
  }
}


export default Home