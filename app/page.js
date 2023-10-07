"use client"
import Banner from './banner/Banner'
import Category from './category/Category'
import Heading from './components/Heading'

export default function Home() {
  return (
    <div className='max-w-[1401px] mx-auto'>
      <Banner/>
      <Category/>
      <div className='mt-[46px]'>
        <Heading header="Flash Deals"/>
      </div>
    </div>
  )
}
