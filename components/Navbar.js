import React from 'react'
import Link from 'next/link'

import { AiOutlineShopping } from 'react-icons/ai'
import { Basket } from './'
import { useStateContext } from '../context/StateContext'

const Navbar = () => {
  const { showBasket, setShowBasket, totalQuantities } = useStateContext()
  return (
    <div className="navbar-container">
      <div className="logo">
        <Link href="/">Hoodie Store</Link>
      </div>

      <button type="button" className="basket-icon" onClick="">
        <AiOutlineShopping /><span className="basket-item-qty">{totalQuantities}</span>
      </button>
      <Basket />
    </div>
  )
}

export default Navbar