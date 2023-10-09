"use client"
import { Swiper, SwiperSlide, } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
const Banner = () => {

    return (
        <div className='mt-[14px] flex'>
            <div className='w-[387.83px] mx-auto lg:mx-0 lg:w-[925.83px] h-[200px] lg:h-[563.55px] bg-[#EBF0F9] rounded-[10px]'>
                <div className='hidden lg:flex'>
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
                                <div className='ml-[21px] mt-[21px] lg:mt-0 lg:ml-[60px]'>
                                    <h2 className='text-[20px] w-[217px] lg:w-[486px] lg:text-[45px] font-bold font-header leading-snug text-primary-0'>Explore Men’s Winter Collection</h2>
                                    <p className='text-xs lg:text-xl text-[#646464] leading-[20px] w-[184px] lg:w-[418px] lg:leading-[40px] lg:mt-[27px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. </p>
                                    <button className='bg-secondary-0 py-2 lg:py-[10px] text-xs lg:text-base px-4 lg:px-[25px] text-white font-semibold rounded-[5px] mt-[12px] lg:mt-[28px]'>
                                        SHOP NOW
                                    </button>
                                </div>
                                <img className='lg:mr-[78px] w-[115px] h-[200px] lg:h-full lg:w-[318px] overflow-hidden' src="https://i.ibb.co/Sx15r83/portrait-stylish-handsome-young-man-1.png" alt="" />

                            </div>



                        </SwiperSlide>
                        <SwiperSlide>

                            <div className='flex items-center'>
                                <div className='ml-[21px] mt-[21px] lg:mt-0 lg:ml-[60px]'>
                                    <h2 className='text-[20px] w-[217px] lg:w-[486px] lg:text-[45px] font-bold font-header leading-snug text-primary-0'>Explore Men’s Winter Collection</h2>
                                    <p className='text-xs lg:text-xl text-[#646464] leading-[20px] w-[184px] lg:w-[418px] lg:leading-[40px] lg:mt-[27px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. </p>
                                    <button className='bg-secondary-0 py-2 lg:py-[10px] text-xs lg:text-base px-4 lg:px-[25px] text-white font-semibold rounded-[5px] mt-[12px] lg:mt-[28px]'>
                                        SHOP NOW
                                    </button>
                                </div>
                                <img className='lg:mr-[78px] w-[115px] h-[200px] lg:h-full lg:w-[318px] overflow-hidden' src="https://i.ibb.co/Sx15r83/portrait-stylish-handsome-young-man-1.png" alt="" />

                            </div>


                        </SwiperSlide>
                        <SwiperSlide>

                            <div className='flex items-center'>
                                <div className='ml-[21px] mt-[21px] lg:mt-0 lg:ml-[60px]'>
                                    <h2 className='text-[20px] w-[217px] lg:w-[486px] lg:text-[45px] font-bold font-header leading-snug text-primary-0'>Explore Men’s Winter Collection</h2>
                                    <p className='text-xs lg:text-xl text-[#646464] leading-[20px] w-[184px] lg:w-[418px] lg:leading-[40px] lg:mt-[27px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. </p>
                                    <button className='bg-secondary-0 py-2 lg:py-[10px] text-xs lg:text-base px-4 lg:px-[25px] text-white font-semibold rounded-[5px] mt-[12px] lg:mt-[28px]'>
                                        SHOP NOW
                                    </button>
                                </div>
                                <img className='lg:mr-[78px] w-[115px] h-[200px] lg:h-full lg:w-[318px] overflow-hidden' src="https://i.ibb.co/Sx15r83/portrait-stylish-handsome-young-man-1.png" alt="" />

                            </div>


                        </SwiperSlide>
                        <SwiperSlide>

                            <div className='flex items-center'>
                                <div className='ml-[21px] mt-[21px] lg:mt-0 lg:ml-[60px]'>
                                    <h2 className='text-[20px] w-[217px] lg:w-[486px] lg:text-[45px] font-bold font-header leading-snug text-primary-0'>Explore Men’s Winter Collection</h2>
                                    <p className='text-xs lg:text-xl text-[#646464] leading-[20px] w-[184px] lg:w-[418px] lg:leading-[40px] lg:mt-[27px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. </p>
                                    <button className='bg-secondary-0 py-2 lg:py-[10px] text-xs lg:text-base px-4 lg:px-[25px] text-white font-semibold rounded-[5px] mt-[12px] lg:mt-[28px]'>
                                        SHOP NOW
                                    </button>
                                </div>
                                <img className='lg:mr-[78px] w-[115px] h-[200px] lg:h-full lg:w-[318px] overflow-hidden' src="https://i.ibb.co/Sx15r83/portrait-stylish-handsome-young-man-1.png" alt="" />

                            </div>


                        </SwiperSlide>
                        <SwiperSlide>

                            <div className='flex items-center'>
                                <div className='ml-[21px] mt-[21px] lg:mt-0 lg:ml-[60px]'>
                                    <h2 className='text-[20px] w-[217px] lg:w-[486px] lg:text-[45px] font-bold font-header leading-snug text-primary-0'>Explore Men’s Winter Collection</h2>
                                    <p className='text-xs lg:text-xl text-[#646464] leading-[20px] w-[184px] lg:w-[418px] lg:leading-[40px] lg:mt-[27px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. </p>
                                    <button className='bg-secondary-0 py-2 lg:py-[10px] text-xs lg:text-base px-4 lg:px-[25px] text-white font-semibold rounded-[5px] mt-[12px] lg:mt-[28px]'>
                                        SHOP NOW
                                    </button>
                                </div>
                                <img className='lg:mr-[78px] w-[115px] h-[200px] lg:h-full lg:w-[318px] overflow-hidden' src="https://i.ibb.co/Sx15r83/portrait-stylish-handsome-young-man-1.png" alt="" />

                            </div>


                        </SwiperSlide>
                        <SwiperSlide>

                            <div className='flex items-center'>
                                <div className='ml-[21px] mt-[21px] lg:mt-0 lg:ml-[60px]'>
                                    <h2 className='text-[20px] w-[217px] lg:w-[486px] lg:text-[45px] font-bold font-header leading-snug text-primary-0'>Explore Men’s Winter Collection</h2>
                                    <p className='text-xs lg:text-xl text-[#646464] leading-[20px] w-[184px] lg:w-[418px] lg:leading-[40px] lg:mt-[27px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. </p>
                                    <button className='bg-secondary-0 py-2 lg:py-[10px] text-xs lg:text-base px-4 lg:px-[25px] text-white font-semibold rounded-[5px] mt-[12px] lg:mt-[28px]'>
                                        SHOP NOW
                                    </button>
                                </div>
                                <img className='lg:mr-[78px] w-[115px] h-[200px] lg:h-full lg:w-[318px] overflow-hidden' src="https://i.ibb.co/Sx15r83/portrait-stylish-handsome-young-man-1.png" alt="" />

                            </div>


                        </SwiperSlide>
                    </Swiper>
                </div>




                {/* MObile Responsive */}
                <div className='flex lg:hidden'>
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
                            "--swiper-pagination-bullet-size": "8px",
                            "--swiper-pagination-bullet-horizontal-gap": "7px",
                        }}
                    >
                        <SwiperSlide>

                            <div className='flex items-start'>
                                <div className='ml-[21px] mt-[21px] lg:mt-0 lg:ml-[60px]'>
                                    <h2 className='text-[20px] w-[217px] lg:w-[486px] lg:text-[45px] font-bold font-header leading-snug text-primary-0'>Explore Men’s Winter Collection</h2>
                                    <p className='text-xs lg:text-xl text-[#646464] leading-[20px] w-[184px] lg:w-[418px] lg:leading-[40px] lg:mt-[27px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. </p>
                                    <button className='bg-secondary-0 py-2 lg:py-[10px] text-xs lg:text-base px-4 lg:px-[25px] text-white font-semibold rounded-[5px] mt-[12px] lg:mt-[28px]'>
                                        SHOP NOW
                                    </button>
                                </div>
                                <img className='lg:mr-[78px] w-[115px] h-[200px] lg:h-full lg:w-[318px] overflow-hidden' src="https://i.ibb.co/Sx15r83/portrait-stylish-handsome-young-man-1.png" alt="" />

                            </div>



                        </SwiperSlide>
                        <SwiperSlide>

                            <div className='flex items-start'>
                                <div className='ml-[21px] mt-[21px] lg:mt-0 lg:ml-[60px]'>
                                    <h2 className='text-[20px] w-[217px] lg:w-[486px] lg:text-[45px] font-bold font-header leading-snug text-primary-0'>Explore Men’s Winter Collection</h2>
                                    <p className='text-xs lg:text-xl text-[#646464] leading-[20px] w-[184px] lg:w-[418px] lg:leading-[40px] lg:mt-[27px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. </p>
                                    <button className='bg-secondary-0 py-2 lg:py-[10px] text-xs lg:text-base px-4 lg:px-[25px] text-white font-semibold rounded-[5px] mt-[12px] lg:mt-[28px]'>
                                        SHOP NOW
                                    </button>
                                </div>
                                <img className='lg:mr-[78px] w-[115px] h-[200px] lg:h-full lg:w-[318px] overflow-hidden' src="https://i.ibb.co/Sx15r83/portrait-stylish-handsome-young-man-1.png" alt="" />

                            </div>


                        </SwiperSlide>
                        <SwiperSlide>

                            <div className='flex items-start'>
                                <div className='ml-[21px] mt-[21px] lg:mt-0 lg:ml-[60px]'>
                                    <h2 className='text-[20px] w-[217px] lg:w-[486px] lg:text-[45px] font-bold font-header leading-snug text-primary-0'>Explore Men’s Winter Collection</h2>
                                    <p className='text-xs lg:text-xl text-[#646464] leading-[20px] w-[184px] lg:w-[418px] lg:leading-[40px] lg:mt-[27px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. </p>
                                    <button className='bg-secondary-0 py-2 lg:py-[10px] text-xs lg:text-base px-4 lg:px-[25px] text-white font-semibold rounded-[5px] mt-[12px] lg:mt-[28px]'>
                                        SHOP NOW
                                    </button>
                                </div>
                                <img className='lg:mr-[78px] w-[115px] h-[200px] lg:h-full lg:w-[318px] overflow-hidden' src="https://i.ibb.co/Sx15r83/portrait-stylish-handsome-young-man-1.png" alt="" />

                            </div>


                        </SwiperSlide>
                        <SwiperSlide>

                            <div className='flex items-start'>
                                <div className='ml-[21px] mt-[21px] lg:mt-0 lg:ml-[60px]'>
                                    <h2 className='text-[20px] w-[217px] lg:w-[486px] lg:text-[45px] font-bold font-header leading-snug text-primary-0'>Explore Men’s Winter Collection</h2>
                                    <p className='text-xs lg:text-xl text-[#646464] leading-[20px] w-[184px] lg:w-[418px] lg:leading-[40px] lg:mt-[27px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. </p>
                                    <button className='bg-secondary-0 py-2 lg:py-[10px] text-xs lg:text-base px-4 lg:px-[25px] text-white font-semibold rounded-[5px] mt-[12px] lg:mt-[28px]'>
                                        SHOP NOW
                                    </button>
                                </div>
                                <img className='lg:mr-[78px] w-[115px] h-[200px] lg:h-full lg:w-[318px] overflow-hidden' src="https://i.ibb.co/Sx15r83/portrait-stylish-handsome-young-man-1.png" alt="" />

                            </div>


                        </SwiperSlide>
                        <SwiperSlide>

                            <div className='flex items-start'>
                                <div className='ml-[21px] mt-[21px] lg:mt-0 lg:ml-[60px]'>
                                    <h2 className='text-[20px] w-[217px] lg:w-[486px] lg:text-[45px] font-bold font-header leading-snug text-primary-0'>Explore Men’s Winter Collection</h2>
                                    <p className='text-xs lg:text-xl text-[#646464] leading-[20px] w-[184px] lg:w-[418px] lg:leading-[40px] lg:mt-[27px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. </p>
                                    <button className='bg-secondary-0 py-2 lg:py-[10px] text-xs lg:text-base px-4 lg:px-[25px] text-white font-semibold rounded-[5px] mt-[12px] lg:mt-[28px]'>
                                        SHOP NOW
                                    </button>
                                </div>
                                <img className='lg:mr-[78px] w-[115px] h-[200px] lg:h-full lg:w-[318px] overflow-hidden' src="https://i.ibb.co/Sx15r83/portrait-stylish-handsome-young-man-1.png" alt="" />

                            </div>


                        </SwiperSlide>
                        <SwiperSlide>

                            <div className='flex items-start'>
                                <div className='ml-[21px] mt-[21px] lg:mt-0 lg:ml-[60px]'>
                                    <h2 className='text-[20px] w-[217px] lg:w-[486px] lg:text-[45px] font-bold font-header leading-snug text-primary-0'>Explore Men’s Winter Collection</h2>
                                    <p className='text-xs lg:text-xl text-[#646464] leading-[20px] w-[184px] lg:w-[418px] lg:leading-[40px] lg:mt-[27px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. </p>
                                    <button className='bg-secondary-0 py-2 lg:py-[10px] text-xs lg:text-base px-4 lg:px-[25px] text-white font-semibold rounded-[5px] mt-[12px] lg:mt-[28px]'>
                                        SHOP NOW
                                    </button>
                                </div>
                                <img className='lg:mr-[78px] w-[115px] h-[200px] lg:h-full lg:w-[318px] overflow-hidden' src="https://i.ibb.co/Sx15r83/portrait-stylish-handsome-young-man-1.png" alt="" />

                            </div>


                        </SwiperSlide>
                    </Swiper>
                </div>

            </div>
            <div className='ml-[28px] hidden lg:block'>
                <div className='relative'>
                    <img src="https://i.ibb.co/mSZw2xy/placeholder-3.png" alt="" />
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