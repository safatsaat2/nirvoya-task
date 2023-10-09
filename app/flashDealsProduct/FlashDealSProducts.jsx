import React, { useEffect, useState } from 'react';
import Heading from '../components/Heading';
import ProductCard from '../components/ProductCard';

const FlashDealSProducts = () => {
    const [falshCard, setFalshCard] = useState([])

    useEffect(() => {
        fetch("flashDeals.json")
            .then(res => res.json())
            .then(data => setFalshCard(data))

    }, [])
    return (
        <>
            <Heading header="Flash Deals" />
        <div className="mx-4 lg:mx-0 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-x-6 mt-[16px] lg:mt-[20px]">
          {falshCard.map(card => <ProductCard key={card.id} img={card.img} dis={card.dis} header={card.header} price={card.price}/>)}
        </div>
        </>
    );
};

export default FlashDealSProducts;