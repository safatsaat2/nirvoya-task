"use client";
import { useEffect, useState } from "react";
import Banner from "./banner/Banner";
import Category from "./category/Category";
import Heading from "./components/Heading";
import ProductCard from "./components/ProductCard";

export default function Home() {
  const [falshCard, setFalshCard] = useState([])

    useEffect(() => {
        fetch("flashDeals.json")
            .then(res => res.json())
            .then(data => setFalshCard(data))

    }, [])
  return (
    <div className="max-w-[1401px] mx-auto">
      <Banner />
      <Category />
      <div className="mt-[46px]">
        <Heading header="Flash Deals" />
        <div className="grid grid-cols-4 gap-x-6 mt-[20px]">
          {falshCard.map(card => <ProductCard key={card.header} img={card.img} dis={card.dis} header={card.header} price={card.price}/>)}
        </div>
      </div>
    </div>
  );
}
