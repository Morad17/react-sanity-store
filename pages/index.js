import React from 'react'

import { client } from '../lib/client';

import Hero from '../components/Hero'
import FooterHero from '../components/FooterHero'
import Product from '../components/Product'

const Home = ({ products, bannerData }) => {
  return (
    <>
      <Hero />

      <div className="">
        <h2>Best Selling Products</h2>
      </div>

      <div className="">
      { products?.map(
        (product) => product.name
      )
      }
      </div>

      <FooterHero />
    </>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: {products, bannerData}
  }
}


export default Home