import React, { useRef} from 'react'
import Link from 'next/link'
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping  } from 'react-icons/ai'
import { TiDeleteOutline } from 'react-icons/ti'
import toast from 'react-hot-toast'

import { useStateContext } from '../context/StateContext'
import { urlFor } from '../lib/client'
import getStripe from '../lib/getStripe'

const Basket = () => {
  const basketRef = useRef()
  const { totalPrice, totalQuantities, basketItems, setShowBasket, toggleBasketItemQuantity, onRemove} = useStateContext()
  
  const handleCheckout = async () => {
    const stripe = await getStripe();

    const response = await fetch('/api/stripe', { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(basketItems),
    })

    if(response.statusCode === 500) return;

    const data = await response.json();

    toast.loading('Redirecting...')

    stripe.redirectToCheckout({ sessionId: data.id })
  }

  return (
    <div className="basket-wrapper" ref={basketRef}>
      <div className="basket-container">
        <button 
          type="button" 
          className="basket-heading" 
          onClick={()=> setShowBasket(false)}>
            <AiOutlineLeft />
            <span className="heading">Your Basket</span>
            <span className="basket-num-items">({ totalQuantities} items)</span>
        </button>
        { basketItems.length < 1 && (
          <div className="empty-basket">
            <AiOutlineShopping size={150} />
            <h3>Your Shopping Bag's Empty</h3>
            <Link href="/">
              <button
                type="button"
                onClick={() => setShowBasket(false)}
                className="button1">
                  Continue Shopping
              </button>
            </Link>
          </div>
        )}

        <div className="product-container">
          {basketItems.length >= 1 && basketItems.map((item) => (
            <div className="product" key={item._id}>
              <img src={urlFor(item?.image[0])} className="basket-product-image" alt="" />
              <div className="item-desc">
                <div className="flex top">
                  <h5>{item.name}</h5>
                  <h4>£{item.price}</h4>
                </div>
                <div className="flex bottom">
                  <div className="">
                    <p className="quantity-description">
                      <span className="minus" 
                        onClick={() => toggleBasketItemQuantity(item._id,'dec') }>
                          <AiOutlineMinus />
                      </span>
                      <span className="num" onClick="">{item.quantity}</span>
                      <span className="plus" 
                        onClick={() => toggleBasketItemQuantity(item._id,'inc') }>
                          <AiOutlinePlus />
                      </span>
                    </p>
                  </div>
                  <button 
                    type="button" 
                    className="remove-item"
                    onClick={()=> onRemove(item)}><TiDeleteOutline /></button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {basketItems.length >= 1 && (
          <div className="basket-bottom">
            <div className="total">
              <h3>SubTotal:</h3>
              <h3>£{totalPrice}</h3>
            </div>
            <div className="btn-container">
              <button 
                type="button" 
                className="button-1" 
                onClick={handleCheckout}>Pay With Stripe</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Basket