import Image from 'next/image'
import React from 'react'
import SortBy from '@/components/SortBy'
import Featured from '@/components/Featured'

const ListPage = () => {
  return (
   <div>
     <div className=' md:flex w-full justify-between bg-neutral-400'>
      <div className='sm:w-full flex flex-col lg:w-2/3'>
        <h1 className='sm:text-2xl lg:text-6xl md:text-4xl  leading-tight font-bold pt-12 xl:text-center md:text-left px-6 text-center md:mt-20 '>Get upto 50% off <br /> on <br /> your first order</h1>
        
        <div className='text-center mt-10 pb-10 lg:pb-0'>
        <button className='bg-pink-400 text-white text-center items-center py-3 rounded-lg px-12 '>Buy Now</button>
        </div>
      </div>
      <div className='lg:w-1/3'>
        <Image className='w-full object-cover ' src={'https://images.pexels.com/photos/4153802/pexels-photo-4153802.jpeg?auto=compress&cs=tinysrgb&w=400'} width={400} height={400} alt="image"/>
      </div>
    </div>
    <SortBy/>
      <h1 className='pt-6 text-3xl font-bold px-6 lg:px-24 xl:px-32'>
        Dresses for you!
      </h1>
      <Featured/>

   </div>
  )
}

export default ListPage
