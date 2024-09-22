import Categories from '@/components/Categories'
import Featured from '@/components/Featured'
import ImageSlider from '@/components/ImageSlider'
import SortBy from '@/components/SortBy'
import React from 'react'

const Home = () => {
  return (
    <div >
      <ImageSlider/>
      <div>
      <h1 className="pt-4 mt-3 text-3xl font-bold text-center">Featured Products</h1>
      <Featured/>
      </div>

      <div>
      <h1 className='text-3xl font-bold text-center pb-8 '>Categories</h1>
      <Categories/>
      </div>
      
    </div>
  )
}

export default Home
