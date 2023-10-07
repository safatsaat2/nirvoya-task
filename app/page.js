"use client";
import { useEffect, useState } from "react";
import Banner from "./banner/Banner";
import Category from "./category/Category";
import Heading from "./components/Heading";
import ProductCard from "./components/ProductCard";
import FeatureProduct from "./featureProduct/FeatureProduct";
import FlashDealSProducts from "./flashDealsProduct/FlashDealSProducts";

export default function Home() {
  
  return (
    <div className="max-w-[1401px] mx-auto">
      <Banner />
      <Category />
      <div className="mt-[46px]">
        <FlashDealSProducts/>
      </div>
      <div className="mt-[51px]">
      <FeatureProduct/>
      </div>
    </div>
  );
}
