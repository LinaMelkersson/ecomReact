import axios from 'axios';
import actiontypes from '../actiontypes'

export const getProductCatalog = () => {
  return async dispatch => {
    const res = await axios.get('http://localhost:9999/api/products')
    // console.log(res.data)
    dispatch(setProducts(res.data))
  }
}

export const setProducts = products => {
  console.log(products)
  return {
    type: actiontypes().productCatalog.set,
    payload: products
  }
}