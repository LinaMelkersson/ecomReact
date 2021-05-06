import actiontypes from '../actiontypes';

const initState = {
  set: [],
  product: null
};

const productCatalogReducer = (state = initState, action) => {
  switch(action.type) {
    case actiontypes().productCatalog.set:
      // console.log(action.payload)
      return {
        ...state,
        set: action.payload
      }

    case actiontypes().productCatalog.product:
      // console.log(action.payload)
      return {
        ...state,
        product: action.payload
      } 
      
    default:
      return state
  }
}

export default productCatalogReducer;