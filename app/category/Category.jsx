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
        <div className='mt-[50px]'>
            <h3 className='text-[26px] text-[#383838] font-medium'>
                Category
            </h3>
            <div className='grid grid-cols-5 justify-between gap-[13px] mt-8'>
                {category.map(cat => 
                <div key={cat.name} className='w-[270px] cursor-pointer h-[65px] category-box flex justify-between items-center pl-[16px] pr-[22px]'>
                    <div className='flex items-center gap-x-[10px]'>
                        <img src={cat?.icon} alt="" />
                        <p>{cat?.name}</p>
                    </div>
                    <img className='w-5' src="https://i.ibb.co/NjnzPYV/Arrow-Right-2.png" alt="" />
                </div>
                )}
            </div>
        </div>
    );
};

export default Category;