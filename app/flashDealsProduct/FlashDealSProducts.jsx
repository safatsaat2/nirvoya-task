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
        <div className="grid grid-cols-4 gap-x-6 mt-[20px]">
          {falshCard.map(card => <ProductCard key={card.header} img={card.img} dis={card.dis} header={card.header} price={card.price}/>)}
        </div>
        </>
    );
};

export default FlashDealSProducts;