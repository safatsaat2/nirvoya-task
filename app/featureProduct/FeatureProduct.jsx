import React, { useEffect, useState } from 'react';
import Heading from '../components/Heading';
import ProductCard from '../components/ProductCard';

const FeatureProduct = () => {
    const [card, setCard] = useState([])

    useEffect(() => {
        fetch("featureProduct.json")
            .then(res => res.json())
            .then(data => setCard(data))

    }, [])

    return (
        <div>
            <Heading header="Featured Product" />
            <div className="mx-4 lg:mx-0 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mt-[16px] lg:mt-[20px]">
          {card.map(card => <ProductCard key={card.id} img={card.img} header={card.header} price={card.price}/>)}
        </div>
        <div className='flex justify-center items-center'>
        <button className='bg-[#34ADED] py-[11px] px-[19px] lg:px-[26px] mt-[20px] lg:mt-[40px] rounded-[80px] uppercase text-white text-xs lg:text-base flex items-center justify-end gap-x-1'>
            See more <img className='w-[14px] lg:w-[18px]' src="https://i.ibb.co/8sDP576/Arrow-Chevron-Right.png" alt="" />
        </button>
        </div>
        </div>
    );
};

export default FeatureProduct;