"use client"
import { Swiper, SwiperSlide, useSwiper, } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
const Banner = () => {
    const swiper = useSwiper();
    return (
        <div className='mt-[14px] flex'>
            <div className='w-[925.83px] h-[563.55px] bg-[#EBF0F9] rounded-[10px]'>
                <Swiper
                    modules={[Pagination]} className="mySwiper"
                    spaceBetween={50}
                    pagination={{
                        clickable: true,
                    }}
                    style={{
                        "--swiper-pagination-color": "#0198E9",
                        "--swiper-pagination-bullet-inactive-color": "#FFFF",
                        "--swiper-pagination-bullet-inactive-opacity": "1",
                        "--swiper-pagination-bullet-size": "12px",
                        "--swiper-pagination-bullet-horizontal-gap": "8px",
                    }}
                >
                    <SwiperSlide>

                        <div className='flex items-center'>
                            <div className='ml-[60px]'>
                                <h2 className='text-[45px] font-bold font-header leading-snug text-primary-0'>Explore Men’s Winter Collection</h2>
                                <p className='text-xl text-[#646464] leading-[40px] mt-[27px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                <button className='bg-secondary-0 py-[10px] px-[25px] text-white font-semibold rounded-[5px] mt-[28px]'>
                                    SHOP NOW
                                </button>
                            </div>
                            <img className='mr-[78px]' src="https://i.ibb.co/Sx15r83/portrait-stylish-handsome-young-man-1.png" alt="" />

                        </div>



                    </SwiperSlide>
                    <SwiperSlide>

                        <div className='flex items-center'>
                            <div className='ml-[60px]'>
                                <h2 className='text-[45px] font-bold font-header leading-snug text-primary-0'>Explore Men’s Winter Collection</h2>
                                <p className='text-xl text-[#646464] leading-[40px] mt-[27px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                <button className='bg-secondary-0 py-[10px] px-[25px] text-white font-semibold rounded-[5px] mt-[28px]'>
                                    SHOP NOW
                                </button>
                            </div>
                            <img className='mr-[78px]' src="https://i.ibb.co/Sx15r83/portrait-stylish-handsome-young-man-1.png" alt="" />

                        </div>


                    </SwiperSlide>
                    <SwiperSlide>

                        <div className='flex items-center'>
                            <div className='ml-[60px]'>
                                <h2 className='text-[45px] font-bold font-header leading-snug text-primary-0'>Explore Men’s Winter Collection</h2>
                                <p className='text-xl text-[#646464] leading-[40px] mt-[27px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                <button className='bg-secondary-0 py-[10px] px-[25px] text-white font-semibold rounded-[5px] mt-[28px]'>
                                    SHOP NOW
                                </button>
                            </div>
                            <img className='mr-[78px]' src="https://i.ibb.co/Sx15r83/portrait-stylish-handsome-young-man-1.png" alt="" />

                        </div>


                    </SwiperSlide>
                    <SwiperSlide>

                        <div className='flex items-center'>
                            <div className='ml-[60px]'>
                                <h2 className='text-[45px] font-bold font-header leading-snug text-primary-0'>Explore Men’s Winter Collection</h2>
                                <p className='text-xl text-[#646464] leading-[40px] mt-[27px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                <button className='bg-secondary-0 py-[10px] px-[25px] text-white font-semibold rounded-[5px] mt-[28px]'>
                                    SHOP NOW
                                </button>
                            </div>
                            <img className='mr-[78px]' src="https://i.ibb.co/Sx15r83/portrait-stylish-handsome-young-man-1.png" alt="" />

                        </div>


                    </SwiperSlide>
                    <SwiperSlide>

                        <div className='flex items-center'>
                            <div className='ml-[60px]'>
                                <h2 className='text-[45px] font-bold font-header leading-snug text-primary-0'>Explore Men’s Winter Collection</h2>
                                <p className='text-xl text-[#646464] leading-[40px] mt-[27px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                <button className='bg-secondary-0 py-[10px] px-[25px] text-white font-semibold rounded-[5px] mt-[28px]'>
                                    SHOP NOW
                                </button>
                            </div>
                            <img className='mr-[78px]' src="https://i.ibb.co/Sx15r83/portrait-stylish-handsome-young-man-1.png" alt="" />

                        </div>


                    </SwiperSlide>
                    <SwiperSlide>

                        <div className='flex items-center'>
                            <div className='ml-[60px]'>
                                <h2 className='text-[45px] font-bold font-header leading-snug text-primary-0'>Explore Men’s Winter Collection</h2>
                                <p className='text-xl text-[#646464] leading-[40px] mt-[27px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                <button className='bg-secondary-0 py-[10px] px-[25px] text-white font-semibold rounded-[5px] mt-[28px]'>
                                    SHOP NOW
                                </button>
                            </div>
                            <img className='mr-[78px]' src="https://i.ibb.co/Sx15r83/portrait-stylish-handsome-young-man-1.png" alt="" />

                        </div>


                    </SwiperSlide>
                </Swiper>
            </div>
            <div className='ml-[28px]'>
                <div className='relative'>
                    <img src="https://i.ibb.co/vq9tt7C/Frame-33663.png" alt="" />
                    <div className='flex items-center justify-center'>
                    <button className='absolute z-10 glass-btn text-secondary-0 font-header text-xl font-semibold px-8 py-4 bottom-5'>
                        Groceries collection
                    </button>
                    </div>
                </div>
                <div className='relative mt-[28px]'>
                    <img src="https://i.ibb.co/HxRG7GW/placeholder-2.png" alt="" />
                    <div className='flex items-center justify-center'>
                    <button className='absolute z-10 glass-btn text-secondary-0 font-header text-xl font-semibold px-8 py-4 bottom-5'>
                    Health & Beauty collection
                    </button>
                    </div>
                </div>
                
            </div>

        </div>
    );
};

export default Banner;