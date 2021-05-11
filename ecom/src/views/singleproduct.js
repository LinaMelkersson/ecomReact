import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getOneProduct, setOneProduct } from '../store/actions/productcat'
import { addToCart } from '../store/actions/cartactions'

const Singleproduct = () => {

    const id = useParams().id
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getOneProduct(id))
        return () => {
            dispatch(setOneProduct(null))
        }
    }, [dispatch,id])

    const product = useSelector(state => state.productReducer.product)

    console.log(product)

    return (
        <div>
            {
                product ? 
                <div className="gridprod">
                    <div>
                        <img className="onepic" 
                        src={`../assets/${product.img}`} 
                        alt="..."></img>
                    </div>
                    <div>
                        <h1>{ product.title }</h1>
                        <p> { product.description }</p>
                        <h3> { product.price } kr</h3>
                        <br></br>
                        <button className="btn btn-info mb-3" onClick={() => {
                            console.log(product)
                        dispatch(addToCart(product))
                        }}>Add to cart</button>
                    </div>

                </div>
                : <div>Loading...</div>
            }

            {/* <div>
                <img src={`../components/assets/${product.img}`} alt="..."></img>
            </div> */}
            
        </div>
    )
}

export default Singleproduct
