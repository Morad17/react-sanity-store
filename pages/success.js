import Link from 'next/link'
import React, { useState, useEffect} from 'react'
import { BsBagCheckFill } from 'react-icons/bs'

import { useStateContext } from '../context/StateContext'
import { runConfetti } from '../lib/utils'

const success = () => {
    const { setBasketItems, setTotalPrice, setTotalQuantities } = useStateContext()
    useStateContext()
    
    useEffect(() => {
        localStorage.clear();
        setBasketItems = ([])
        setTotalPrice = (0)
        setTotalQuantities = (0)
        runConfetti()
    }, [])

  return (
    <div className="success-wrapper">
        <div className="success">
            <p className="icon">
                <BsBagCheckFill />
            </p>
            <h2>Thank's For Your Order</h2>
            <p className="email-message">We've sent you a confimation email</p>
            <p className="description">Any Questions email:
                <a href="mailto:order@example.com" className="email">order@example.com</a>
            </p>
            <Link href="/">
                <button typee="button" className="button-1">Continue Shopping</button>
            </Link>
        </div>
    </div>
  )
}

export default success