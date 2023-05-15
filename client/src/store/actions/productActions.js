
export const fetchProducts = () =>({
    type: 'FETCH_PRODUCT_REQUESTED'
})


export const recievedProduct = (posts) =>({
    type: 'RECEIVE_PRODUCT',
    posts: posts
})


export const fetchProductsFailed = () =>({
    type: 'FETCH_PRODUCT_FAILED',

})


export const fetchUser = () => {
    return (dispatch, getState) => {
      dispatch({ type: 'FETCH_PRODUCT_REQUEST' });
  
      fetch(`http://localhost:5000/api/user`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
          dispatch({ type: 'RECEIVED_PRODUCT', payload: data });
        })
        .catch(error => {
         dispatch({ type: 'FETCH_PRODUCT_FAILURE', payload: error.message });
        });
    };
  };