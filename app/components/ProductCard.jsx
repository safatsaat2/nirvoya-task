import React, { useState } from 'react';

const ProductCard = ({img, dis, header, price}) => {
    const [love, setLove] = useState(false)
    const favHandler = () =>{
            setLove(!love)
    }
    return (
        <div className='border border-[#E9E9E9] px-[6px] lg:px-[8px] pt-[5px] lg:pt-[8px] rounded-[10px]'>
            <div className='w-full lg:w-[313.15px] lg:h-[313.15px] relative rounded-[5px] lg:rounded-[10px]'>
                <img className='rounded-[5px] lg:rounded-[10px]' src={img} alt="" />
                {dis ? <div className='absolute discount-box top-0 left-0'>
                    <p className='px-[12px] py-2 text-[8px] lg:text-sm font-semibold text-white textShadow'>
                    -25% OFF
                    </p>
                </div> :
                <></>
                }
                <svg onClick={favHandler} className='cursor-pointer absolute z-10 top-[8px] right-[12px] lg:top-[22px] lg:right-4 w-[12px] lg:text-[24px]' xmlns="http://www.w3.org/2000/svg" width="24" height="21" viewBox="0 0 24 21" fill={love === false ?`none` : `#FF5555`}>
                    <path d="M20.9221 3.48637L20.927 3.49179L20.932 3.49712C21.6648 4.27775 22.108 5.29012 22.3917 6.61114C22.7109 8.54897 22.3418 10.2965 21.1436 12.0253L21.1435 12.0252L21.136 12.0365C20.2064 13.4309 19.0394 14.7274 17.383 16.0925L17.3829 16.0924L17.3735 16.1005C15.7702 17.467 13.9958 18.6578 11.9497 19.801C11.7914 19.8857 11.7261 19.8963 11.635 19.8963C11.544 19.8963 11.4787 19.8858 11.3205 19.8011C8.97513 18.4895 7.13058 17.2265 5.53249 15.81L5.52483 15.8032L5.51697 15.7966C4.37783 14.8412 3.14925 13.6786 2.17719 12.1764L2.1772 12.1763L2.17539 12.1736C1.32524 10.8723 0.885762 9.54138 0.834578 8.09572C0.784732 6.57771 1.26433 5.09802 2.26914 3.76528C3.19078 2.63442 4.40941 1.94946 5.96369 1.78099C7.42086 1.68035 8.66454 1.95656 9.72897 2.59481C10.2707 2.92337 10.7573 3.35756 11.1483 3.79947L11.7407 4.46921L12.2971 3.76922C13.3113 2.49329 14.745 1.7804 16.5395 1.72754H16.7725C18.4746 1.72754 19.8587 2.3085 20.9221 3.48637Z" stroke={love === false ?"#999999" : `none`} stroke-opacity="0.4" stroke-width="1.5" />
                </svg>
            </div>
            <div className='flex gap-x-[2px] items-center mt-[8px] lg:mt-[18px] ml-1'>
                <img className='w-[13px] lg:w-auto' src="https://i.ibb.co/rHPrq16/Star-1.png" alt="star" />
                <img className='w-[13px] lg:w-auto' src="https://i.ibb.co/rHPrq16/Star-1.png" alt="star" />
                <img className='w-[13px] lg:w-auto' src="https://i.ibb.co/rHPrq16/Star-1.png" alt="star" />
                <img className='w-[13px] lg:w-auto' src="https://i.ibb.co/rHPrq16/Star-1.png" alt="star" />
                <img className='w-[13px] lg:w-auto' src="https://i.ibb.co/7267tyM/Star-5.png" alt="star" />
<p className='text-sm text-[#333]'>(0)</p>
            </div>
            <h4 className='w-[165px] lg:w-[294px] h-[35px] lg:h-[46px] text-[14px] lg:text-[18px] leading-[18.2px] lg:leading-[21.6px] ml-1 mt-[12px] pr-[13px] lg:pr-0'>{header}</h4>
            <div className='flex justify-between items-center mt-2 lg:mt-[12px] mb-[12px]'>
                <h1 className='text-base lg:text-[22px] text-primary-0 font-medium'>{price}</h1>
                <img className='w-4 lg:w-6' src="https://i.ibb.co/fn6f01X/basket.png" alt="" />
            </div>
        </div>
    );
};

export default ProductCard;