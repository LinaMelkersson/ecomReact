import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart, removeFromCart, deleteProduct } from '../../store/actions/cartactions' 
import './cartproduct.css'

const CartProduct = ({product}) => {

  const dispatch = useDispatch();

  const add = e => {
    e.stopPropagation();
    dispatch(addToCart(product))
  }

  const remove = e => {
    e.stopPropagation();
    dispatch(removeFromCart(product._id))
  }

  const del = e => {
    e.stopPropagation();
    dispatch(deleteProduct(product._id))
  }

  return (
    <div>
      <div className="p-2 d-flex justify-content-between align-items-center">

        <div className="d-flex align-items-center">
          <img src={`../assets/${product.img}`} alt="product" className="img-fluid img-w"/>
          <div>
            <div><strong>{ product.title }</strong></div>
            <div><small>{ product.quantity } x { product.price }kr</small></div>
          </div>
        </div>

        <div>
          <button type="button" className="btn btn-sm px-3" onClick={remove}>-</button>
          <button type="button" className="btn btn-sm px-3" onClick={add}>+</button>
          <button type="button" className="btn btn-sm btn-danger px-3" onClick={del}><i className="fas fa-trash"></i></button>
        </div>

      </div>
      
    </div>
  )
}

export default CartProduct
