import React, {useEffect} from 'react';

import { connect, useDispatch } from 'react-redux';

import {fetchUser} from '../store/actions/productActions';


function Products({products, fetchProduct}){

    const dispatch = useDispatch();

    useEffect(() =>{
         dispatch(fetchUser())
    },[])
     
    return(
        <>
         <div>

            <h2> Products section</h2>
            {products ? products.map((product)=>(<>
              <div>
                <h1>{product.name} </h1>
                <p>Hii</p>
              </div>
            </>)): null}
         </div>  
        </>
    )
}


const mapStateToProps = (state) => ({
    products: state.product.products
})


const mapDispatchToProps = () => ({
   fetchProduct: fetchUser(),
})

export default  connect(mapStateToProps, mapDispatchToProps)(Products);