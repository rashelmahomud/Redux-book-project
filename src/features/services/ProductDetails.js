import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchSingleProduct } from './productsSlice';

const ProductDetails = () => {
    const {id} = useParams(); 
    const dispatch = useDispatch();
    const { error, isLoading, productDetails } = useSelector((state) => state.productReducer);

    useEffect(() => {
        dispatch(fetchSingleProduct(parseInt(id)));
    }, [id,dispatch])

    return (
        <div>
            <h1>hello Details{productDetails.name}</h1>
            <img src={productDetails.img}  alt='img'/>


        </div>
    );
};

export default ProductDetails;