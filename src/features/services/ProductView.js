import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Product from './Product';
import { fetchProducts } from './productsSlice';

const ProductView = () => {

    const { error, isLoading, product } = useSelector((state) => state.productReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [])


    return (
        <div>
            <h1 className='text-4xl my-10 font-bold'>BEST ALL PRODUCT</h1>

            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5'>

                {isLoading && <p>Loading...</p>}
                {error && <p>{error}</p>}
                {product && product.map((p) => <Product p={p} key={p.id} />)}

            </div>


        </div>

    );
};

export default ProductView;