"use client"
import Banner from './banner/Banner'
import Category from './category/Category'

export default function Home() {
  return (
    <div className='max-w-[1401px] mx-auto'>
      <Banner/>
      <Category/>
    </div>
  )
}
