// Define the initial state
const initialState = {
    products:[],
    loading: false,
    error: String,
  };
  
  // Define the reducer
  const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_PRODUCT_REQUESTED':
        return { ...state, loading: true };
      case 'RECEIVED_PRODUCT':
        return { ...state, products: action.payload, loading: false };
    
      case 'FETCH_PRODUCT_FAILED':
         return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  

  module.exports = productReducer;