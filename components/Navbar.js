import React from 'react'
import Link from 'next/link'

import { AiOutlineShopping } from 'react-icons/ai'

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="logo">
        <Link href="/">Hoodie Store</Link>
      </div>

      <button type="button" className="basket-icon" onClick="">
        <AiOutlineShopping /><span className="basket-item-qty">1</span>
      </button>
    </div>
  )
}

export default Navbar