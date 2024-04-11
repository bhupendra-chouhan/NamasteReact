import React from 'react'
import { useSelector } from'react-redux'

const Cart = () => {
  const selectCart = useSelector()

  return (
    <div>
      <h1>Products in your cart</h1>
    </div>
  )
}

export default Cart