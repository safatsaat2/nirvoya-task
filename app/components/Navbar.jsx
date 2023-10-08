"use client"
import React from 'react';
import { logo } from '../items/element';
import { Icon } from '@iconify/react';

const Navbar = () => {
    const loginColor = "#29292E"
    const pColor = "#4D4D4D"
    const menuColor = "#505050"

    const menuItems = [
        "Women's Fashion",
        "men's Fashion",
        "Kid's Fashion",
        "Home & Lifestyle",
        "Arts & Crafts",
        "Computer & Electronics",
        "Food & Grocery",
    ]
    return (
        <>
            <div className='border-b border-[#EFEEEE] border-[1.5px]'>
                <div className='max-w-[1401px] mx-auto mt-2 lg:mt-[33px]'>
                    {/* For Mobile */}
                    <div className='lg:hidden mx-4'>
                        <div className='flex justify-between items-center'>
                            <img className='w-[100px]' src={logo} alt="Logo" />
                            <div className='flex items-end gap-x-[16px]'>
                                <img src="https://i.ibb.co/r0Jx8nn/Profile.png" alt="" />
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M1.87187 9.59832C0.798865 6.24832 2.05287 2.41932 5.56987 1.28632C7.41987 0.689322 9.46187 1.04132 10.9999 2.19832C12.4549 1.07332 14.5719 0.693322 16.4199 1.28632C19.9369 2.41932 21.1989 6.24832 20.1269 9.59832C18.4569 14.9083 10.9999 18.9983 10.9999 18.9983C10.9999 18.9983 3.59787 14.9703 1.87187 9.59832Z" stroke="#4D4D4D" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <div className='relative'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21" viewBox="0 0 24 21" fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M19.8361 6.5456L15.7257 0.374327C15.6019 0.188765 15.4095 0.0599751 15.1907 0.0162902C14.972 -0.0273946 14.7448 0.0176037 14.5593 0.141386C14.3737 0.265168 14.2449 0.457595 14.2012 0.676335C14.1576 0.895075 14.2026 1.12221 14.3263 1.30777L17.8155 6.5456H5.68427L9.17691 1.30781C9.30069 1.12224 9.34572 0.895074 9.30203 0.676335C9.25835 0.457595 9.12956 0.265168 8.94399 0.141386C8.75843 0.0176036 8.5313 -0.0273946 8.31256 0.0162902C8.09385 0.0599699 7.90144 0.188734 7.77766 0.37426L3.6638 6.5456H0.840909C0.617886 6.5456 0.403998 6.63419 0.246297 6.79189C0.0885955 6.94959 0 7.16348 0 7.38651C0 7.60953 0.0885954 7.82342 0.246297 7.98112C0.403998 8.13882 0.617887 8.22742 0.840909 8.22742H2.18182V17.2047C2.18182 18.0064 2.50028 18.7752 3.06715 19.3421C3.63403 19.909 4.40287 20.2274 5.20455 20.2274H18.2955C19.0971 20.2274 19.866 19.909 20.4328 19.3421C20.9997 18.7752 21.3182 18.0064 21.3182 17.2047V8.22742H22.6591C22.8821 8.22742 23.096 8.13882 23.2537 7.98112C23.4114 7.82342 23.5 7.60953 23.5 7.38651C23.5 7.16348 23.4114 6.94959 23.2537 6.79189C23.096 6.63419 22.8821 6.5456 22.6591 6.5456H19.8361ZM3.86364 8.22742H19.6364V17.2047C19.6364 17.5603 19.4951 17.9014 19.2436 18.1529C18.9922 18.4043 18.6511 18.5456 18.2955 18.5456H5.20455C4.84891 18.5456 4.50785 18.4043 4.25638 18.1529C4.00491 17.9014 3.86364 17.5603 3.86364 17.2047V8.22742ZM7.6 9.74995C7.13056 9.74995 6.75 10.1305 6.75 10.5999V15.3999C6.75 15.8694 7.13056 16.2499 7.6 16.2499C8.06944 16.2499 8.45 15.8694 8.45 15.3999V10.5999C8.45 10.1305 8.06944 9.74995 7.6 9.74995ZM10.75 10.5999C10.75 10.1305 11.1306 9.74995 11.6 9.74995C12.0694 9.74995 12.45 10.1305 12.45 10.5999V15.3999C12.45 15.8694 12.0694 16.2499 11.6 16.2499C11.1306 16.2499 10.75 15.8694 10.75 15.3999V10.5999ZM15.6 9.74995C15.1306 9.74995 14.75 10.1305 14.75 10.5999V15.3999C14.75 15.8694 15.1306 16.2499 15.6 16.2499C16.0694 16.2499 16.45 15.8694 16.45 15.3999V10.5999C16.45 10.1305 16.0694 9.74995 15.6 9.74995Z" fill="#4C4C4C" />
                                    </svg>
                                    <div className='w-5 h-5 absolute -top-2 -right-2 rounded-full bg-secondary-0 text-white flex justify-center items-center  text-[12px]'>
                                        1
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='flex mt-2'>
                            <input className='w-full active:border-none focus:border-red-700 bg-[#F6F6F6] border border-[#F1F1F1] rounded-tl-[5px] rounded-bl-[5px] pl-5 text-[#9B9B9B]' placeholder="I'm looking for..." type="text" />
                            <button className='bg-[#0198E9] rounded-tr-[5px] rounded-br-[5px] text-white text-[28px] px-[18px] py-[11px]'><Icon icon="bx:bx-search" /></button>
                        </div>

                       



                    </div>
                    {/* For PC */}
                    <div className='hidden lg:flex items-center'>
                        <img className='w-[120px]' src={logo} alt="Logo" />

                        <div className='flex ml-[70px]'>
                            <input className='w-[700px] active:border-none focus:border-red-700 bg-[#F6F6F6] border border-[#F1F1F1] rounded-tl-[5px] rounded-bl-[5px] pl-5 text-[#9B9B9B]' placeholder="I'm looking for..." type="text" />
                            <button className='bg-[#0198E9] rounded-tr-[5px] rounded-br-[5px] text-white text-[28px] px-[18px] py-[11px]'><Icon icon="bx:bx-search" /></button>
                        </div>
                        <div className='ml-[73px] flex justify-center items-center gap-x-[6px]'>
                            <img src="https://i.ibb.co/r0Jx8nn/Profile.png" alt="" />
                            <p className={`text-${loginColor} leading-[19.2px]`}>Log in</p>
                        </div>


                        <div className='ml-[40px] flex justify-center items-center gap-x-[6px]'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M1.87187 9.59832C0.798865 6.24832 2.05287 2.41932 5.56987 1.28632C7.41987 0.689322 9.46187 1.04132 10.9999 2.19832C12.4549 1.07332 14.5719 0.693322 16.4199 1.28632C19.9369 2.41932 21.1989 6.24832 20.1269 9.59832C18.4569 14.9083 10.9999 18.9983 10.9999 18.9983C10.9999 18.9983 3.59787 14.9703 1.87187 9.59832Z" stroke="#4D4D4D" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <p className={`text-${pColor} leading-[19.2px]`}>Wishlist</p>
                        </div>


                        <div className='ml-[41px] flex justify-center items-center gap-x-[6px]'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21" viewBox="0 0 24 21" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M19.8361 6.5456L15.7257 0.374327C15.6019 0.188765 15.4095 0.0599751 15.1907 0.0162902C14.972 -0.0273946 14.7448 0.0176037 14.5593 0.141386C14.3737 0.265168 14.2449 0.457595 14.2012 0.676335C14.1576 0.895075 14.2026 1.12221 14.3263 1.30777L17.8155 6.5456H5.68427L9.17691 1.30781C9.30069 1.12224 9.34572 0.895074 9.30203 0.676335C9.25835 0.457595 9.12956 0.265168 8.94399 0.141386C8.75843 0.0176036 8.5313 -0.0273946 8.31256 0.0162902C8.09385 0.0599699 7.90144 0.188734 7.77766 0.37426L3.6638 6.5456H0.840909C0.617886 6.5456 0.403998 6.63419 0.246297 6.79189C0.0885955 6.94959 0 7.16348 0 7.38651C0 7.60953 0.0885954 7.82342 0.246297 7.98112C0.403998 8.13882 0.617887 8.22742 0.840909 8.22742H2.18182V17.2047C2.18182 18.0064 2.50028 18.7752 3.06715 19.3421C3.63403 19.909 4.40287 20.2274 5.20455 20.2274H18.2955C19.0971 20.2274 19.866 19.909 20.4328 19.3421C20.9997 18.7752 21.3182 18.0064 21.3182 17.2047V8.22742H22.6591C22.8821 8.22742 23.096 8.13882 23.2537 7.98112C23.4114 7.82342 23.5 7.60953 23.5 7.38651C23.5 7.16348 23.4114 6.94959 23.2537 6.79189C23.096 6.63419 22.8821 6.5456 22.6591 6.5456H19.8361ZM3.86364 8.22742H19.6364V17.2047C19.6364 17.5603 19.4951 17.9014 19.2436 18.1529C18.9922 18.4043 18.6511 18.5456 18.2955 18.5456H5.20455C4.84891 18.5456 4.50785 18.4043 4.25638 18.1529C4.00491 17.9014 3.86364 17.5603 3.86364 17.2047V8.22742ZM7.6 9.74995C7.13056 9.74995 6.75 10.1305 6.75 10.5999V15.3999C6.75 15.8694 7.13056 16.2499 7.6 16.2499C8.06944 16.2499 8.45 15.8694 8.45 15.3999V10.5999C8.45 10.1305 8.06944 9.74995 7.6 9.74995ZM10.75 10.5999C10.75 10.1305 11.1306 9.74995 11.6 9.74995C12.0694 9.74995 12.45 10.1305 12.45 10.5999V15.3999C12.45 15.8694 12.0694 16.2499 11.6 16.2499C11.1306 16.2499 10.75 15.8694 10.75 15.3999V10.5999ZM15.6 9.74995C15.1306 9.74995 14.75 10.1305 14.75 10.5999V15.3999C14.75 15.8694 15.1306 16.2499 15.6 16.2499C16.0694 16.2499 16.45 15.8694 16.45 15.3999V10.5999C16.45 10.1305 16.0694 9.74995 15.6 9.74995Z" fill="#4C4C4C" />
                            </svg>
                            <div className={`text-${pColor} leading-[19.2px] flex items-center gap-x-[8px]`}>My Cart <div className='w-5 h-5 rounded-full bg-[#FF5D5D] text-white flex justify-center items-center  text-[12px]'>
                                1
                            </div></div>
                        </div>
                    </div>
                    <div className='relative'>
                    <div className='lg:mx-[33px]  flex justify-between gap-x-[18px] px-[18px] lg:px-0 items-center mt-[26px] lg:mt-[34px] overflow-x-scroll lg:overflow-hidden whitespace-nowrap'>
                        {menuItems.map(item => <p className={`text-${menuColor} cursor-pointer hover:text-secondary-0 uppercase font-medium pb-[6px] text-sm lg:text-base lg:hover:border-b hover:border-b-secondary-0 lg:px-[11px]`} key={item}>{item}</p>)}
                        
                    </div>
                    <img className='absolute top-0 right-0' src="https://i.ibb.co/WfpMNSj/Arrow-Right-2.png" alt="" />
                    </div>
                    
                </div>
            </div>
        </>
    );
};

export default Navbar;