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
            <div className="grid grid-cols-4 gap-6 mt-[20px]">
          {card.map(card => <ProductCard key={card.header} img={card.img} header={card.header} price={card.price}/>)}
        </div>
        <div className='flex justify-center items-center'>
        <button className='bg-[#34ADED] py-[11px] px-[26px] mt-[50px] rounded-[80px] uppercase text-white flex items-center justify-center gap-x-1'>
            See more <img src="https://i.ibb.co/8sDP576/Arrow-Chevron-Right.png" alt="" />
        </button>
        </div>
        </div>
    );
};

export default FeatureProduct;