import React, { useState } from 'react'

import { client, urlFor } from '../../lib/client'
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai'
import Product from '../../components/Product'

import { useStateContext } from '../../context/StateContext'

const ProductDetails = ({ product, products }) => {

    const { image, name, details, price} = product
    const [index, setIndex ] = useState(0)
    const { decQty, incQty, qty, onAdd, setShowBasket } = useStateContext()


    const handleBuyNow = () => {
        onAdd(product, qty)

        setShowBasket(true)
    }
  return (
    

    <div>
        <div className="product-detail-container">
            <div className="">
                <div className="product-image-container">
                    <img src={urlFor(image && image[index])} alt="product-image" />
                </div>
                <div className="small-images-container">
                    {image?.map((item, i) => (
                        <img 
                            src={urlFor(item)}
                            key={i}
                            className={i == index ? 'small-image selected-image' : 'small-image'}
                            onMouseEnter={() => setIndex(i)}
                        />
                    ))}
                </div>
                <div className="product-details-desc">
                    <h1>{name}</h1>
                    <div className="product-reviews">
                        <div className="">
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiOutlineStar />
                        </div>
                        <p>
                            (20)
                        </p>
                    </div>
                    <h4>Details: </h4>
                    <p>{details}</p>
                    <p className="price">£{price}</p>
                    <div className="quantity">
                        <h3>Quantity:</h3>
                        <p className="quantity-description">
                            <span className="minus" onClick={decQty}><AiOutlineMinus /></span>
                            <span className="num">{qty}</span>
                            <span className="plus" onClick={incQty}><AiOutlinePlus /></span>
                        </p>
                    </div>
                    <div className="buttons">
                        <button type="button" className="add-to-basket" onClick={() => onAdd(product, qty)}>Add To Basket</button>
                        <button type="button" className="buy-now" onClick={handleBuyNow}>Buy Now</button>
                    </div>
                </div>
            </div>
            <div className="maylike-products">
                <h2>You may also like</h2>
                <div className="marquee">
                    <div className="maylike-products-container">
                        {products.map((item)=> (
                            <Product key={item._id} product={item}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export const getStaticPaths = async () => {
    const query = `*[_type == "product"] {
        slug {
            current
        }
    }`

    const products = await client.fetch(query)
    const paths = products.map((product) => ({
        params: {
            slug: product.slug.current
        }   
    }))

    return {
        paths,
        fallback: 'blocking'
    }
}


export const getStaticProps = async ({params: { slug }}) => {
    const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
    
    const productsQuery = '*[_type == "product"]'

    const product = await client.fetch(query);
    const products = await client.fetch(productsQuery);
  
    console.log(product)

    return {
      props: {products, product}
    }
  }

export default ProductDetails