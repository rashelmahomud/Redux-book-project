import React from 'react';

const Product = ({ p }) => {

    const { name, img, description,acadamic } = p;
    return (
        <div className='mx-auto'>
            <div className='border gap-5'>
                <img className='w-72 mx-auto' src={img} alt='img' />
                <h3>{name}</h3>
                <h4>{description}</h4>
                <p>{acadamic}</p>
                <button className='btn w-full btn-outline btn-accent'>BUY NOW</button>
            </div>

        </div>
    );
};

export default Product;