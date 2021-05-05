import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../components/products/products';
import { getProductCatalog } from '../store/actions/productcat';

const Products = () => {

  const dispatch = useDispatch();
  const productCatalog = useSelector(state => state.productReducer)

  useEffect(() => {
    dispatch(getProductCatalog())
  }, [dispatch])

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {
        productCatalog && productCatalog.map(product => (
          <ProductCard key={product._id} product={product} />
          
        ))
      }
      
    </div>
  )
}

export default Products
