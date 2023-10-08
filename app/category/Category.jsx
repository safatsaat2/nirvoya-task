"use client"
import React, { useEffect, useState } from 'react';


const Category = () => {

    const [category, setCategory] = useState([])

    useEffect(() => {
        fetch("category.json")
            .then(res => res.json())
            .then(data => setCategory(data))

    }, [])


    return (
        <div className=' mt-[30px] mx-4 lg:mx-0 lg:mt-[50px]'>
            <h3 className='text-[26px] text-[#383838] font-medium hidden lg:block'>
                Category
            </h3>
            <h3 className='text-[16px] text-[#383838] leading-[20px] font-medium block lg:hidden'>
                Main categories
            </h3>
            <div className='grid grid-cols-2 lg:grid-cols-5 justify-between gap-[13px] mt-4 lg:mt-8'>
                {category.map(cat =>
                    <div key={cat.key} className='w-full lg:w-[270px] cursor-pointer h-[65px] category-box flex justify-between items-center pl-[16px] pr-[22px]'>
                        <div className='flex items-center gap-x-[10px]'>
                            <img className='w-[26px] lg:w-[30px]' src={cat?.icon} alt="" />
                            <p className='text-sm lg:text-base'>{cat?.name}</p>
                        </div>
                        <img className='w-4 lg:w-5' src="https://i.ibb.co/NjnzPYV/Arrow-Right-2.png" alt="" />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Category;