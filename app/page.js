"use client";

import Banner from "./banner/Banner";
import Category from "./category/Category";

import FeatureProduct from "./featureProduct/FeatureProduct";
import FlashDealSProducts from "./flashDealsProduct/FlashDealSProducts";
import Footer from "./components/Footer";

export default function Home() {
  
  return (
    <>
    <div className="max-w-[1401px] mx-auto mb-[40px]">
      <Banner />
      <Category />
      <div className="mt-[30px] lg:mt-[46px]">
        <FlashDealSProducts/>
      </div>
      <div className="mt-[51px]">
      <FeatureProduct/>
      </div>
    </div>
    </>
    
  );
}
