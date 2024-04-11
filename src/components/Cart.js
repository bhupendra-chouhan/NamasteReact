import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import RestaurantCategoryItemCard from './RestaurantCategoryItemCard'
import { clearCart } from '../utils/store/slices/cartSlice'

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.cartItems)
  console.log(cartItems)

  const dispatch = useDispatch()

  const handleClearCart = () => {
    dispatch(clearCart())
  }

  return (
    <div className="flex flex-col items-center mx-auto my-4 w-[90%] xl:w-[60%] p-4 bg-gray-100 rounded-lg shadow-lg shadow-black">
      <h1 className="text-2xl mb-2">Your cart 🛒</h1>

      {cartItems.length === 0 ? (
        <div className="text-red-600 italic">
          "Your Cart is Empty. Add something to your cart"
        </div>
      ) : (
        <div className='flex flex-col items-center'>
          <button
            onClick={() => handleClearCart()}
            className="m-2 p-3 rounded-lg text-lg font-bold leading-3 text-white bg-red-500"
          >
            Clear Cart
          </button>
          <div>
            {cartItems.map((item) => (
              <RestaurantCategoryItemCard
                key={item.card.info.id}
                itemdata={item}
              />
            ))}
          </div>
          <button
            onClick={() => handleClearCart()}
            className="m-2 p-3 rounded-lg text-lg font-bold leading-3 text-white bg-red-500"
          >
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart