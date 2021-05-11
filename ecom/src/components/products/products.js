import React from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/actions/cartactions';
import './product.css'
import { Link } from 'react-router-dom'

const ProductCard = ({product}) => {
  const dispatch = useDispatch();

  return (
    <div className="col">
      <div className="card h-70">
        <Link to={`/singleproduct/${product._id}`}>
          <img
            src={`../assets/${product.img}`}
            className="card-img-top primg"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <div className="card-text">
            {/* <p>{ product.short }</p> */}
            <p className="text-danger h5">{ product.price }kr</p>
            </div>
          </div>
        </Link>
        <button className="btn btn-info mb-3" onClick={() => {
            console.log(product)
            dispatch(addToCart(product))
          }}>Add to cart</button>
      </div>
    </div>
  )
}

export default ProductCard
