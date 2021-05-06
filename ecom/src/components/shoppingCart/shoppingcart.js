import React from 'react'
import { useSelector } from 'react-redux'
import CartProduct from '../shoppingCart/cartproduct'
import './shoppingcart.css'


const ShoppingCart = () => {

  const shoppingCart = useSelector(state => state.cartReducer.shoppingCart);
  const totalCartAmount = useSelector(state => state.cartReducer.totalCartAmount);
  const totalCartQuantity = useSelector(state => state.cartReducer.totalCartQuantity);

  const empty = (
    <div className="p-2 d-flex align-items-center cartrad">
      Your cart is empty
    </div>
  )

  return (
    <div className="cartcontainer">
      {
        shoppingCart && shoppingCart.map(product => (
          <CartProduct key={product._id} product={product} />
        ))
      }
      {
        shoppingCart.length < 1 && empty
      }

      <div className="dropdown-divider"></div>

      <div className="p-2 d-flex justify-content-between align-items-center cartrad">
        <div>
          <div className="total-price">
            Total Amount: <span> { totalCartAmount }kr </span>
          </div>
          <div className="total-price">
            Total Quantity: <span> { totalCartQuantity } </span>
          </div>
        </div>
        <button className="btn btn-info">Checkout</button>
      </div>
    </div>
  )
}

export default ShoppingCart
