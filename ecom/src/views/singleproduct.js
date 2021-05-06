import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getOneProduct, setOneProduct } from '../store/actions/productcat'

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
                <div>
                    <div>
                    <h1>{ product.title }</h1>
                    <p> { product.description }</p>
                    </div>
                    <div>
                        <img src={`../assets/${product.img}`} alt="..."></img>
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
