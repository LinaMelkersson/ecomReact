import React from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/actions/cartactions';
import './product.css'

const ProductCard = ({product}) => {
  const dispatch = useDispatch();



  return (
    <div className="col">
      <div className="card h-70">
        <img
          src={`assets/${product.img}`}
          className="card-img-top primg"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <div className="card-text">
          <p>{ product.short }</p>
          <p className="text-danger h5">{ product.price }</p>
          <button className="btn btn-info" onClick={() => {
            dispatch(addToCart(product))
          }}>Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
