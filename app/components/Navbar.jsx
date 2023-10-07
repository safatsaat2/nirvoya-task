import Image from 'next/image';
import React from 'react';
import { logo } from '../items/element';

const Navbar = () => {
    return (
        <>
            <div className='max-w-[1401px] mx-auto'>
                <div className='hidden lg:flex'>
                    <img src={logo} alt="Logo" />
                    <div className='flex ml-[70px]'>
                    <input className='w-[714px] bg-[#F6F6F6] border border-[#F1F1F1] rounded-tl-[5px] rounded-bl-[5px]'  type="text" />
                    <button className='bg-[#0198E9]'>Gaal Mota</button>
                    </div>
                    
                </div>
                <div>

                </div>
            </div>
        </>
    );
};

export default Navbar;