import actiontypes from '../actiontypes';

const initState = null;

const productCatalogReducer = (state = initState, action) => {
  switch(action.type) {
    case actiontypes().productCatalog.set:
      // console.log(action.payload)
      state = action.payload
      return state
      
    default:
      return state
  }
}

export default productCatalogReducer;