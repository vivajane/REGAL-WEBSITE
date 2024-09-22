"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const CategoriesList = [
    {
        id: 1,
        category: "Wigs",
        image: "https://images.pexels.com/photos/6923521/pexels-photo-6923521.jpeg?auto=compress&cs=tinysrgb&w=400"

    },
    {
        id: 2,
        category: "Wristwatch",
        image: "https://images.pexels.com/photos/2078268/pexels-photo-2078268.jpeg?auto=compress&cs=tinysrgb&w=400"

    },
    {
        id: 3,
        category: "Men's Shirt",
        image: "https://images.pexels.com/photos/2635315/pexels-photo-2635315.jpeg?auto=compress&cs=tinysrgb&w=400"

    },
    {
        id: 4,
        category: "Men's Shoes",
        image: "https://images.pexels.com/photos/28370578/pexels-photo-28370578/free-photo-of-a-person-s-feet-are-up-in-the-air-with-their-shoes-on.jpeg?auto=compress&cs=tinysrgb&w=400"

    },
    {
        id: 5,
        category: "Wigs",
        image: "https://images.pexels.com/photos/5886004/pexels-photo-5886004.jpeg?auto=compress&cs=tinysrgb&w=400"

    },

    {
        id: 6,
        category: "All",
        image: "https://images.pexels.com/photos/3620411/pexels-photo-3620411.jpeg?auto=compress&cs=tinysrgb&w=400"

    },
    {
        id: 7,
        category: "Ladies heels",
        image: "https://images.pexels.com/photos/3782789/pexels-photo-3782789.jpeg?auto=compress&cs=tinysrgb&w=400"

    },

    {
        id: 8,
        category: "Face caps",
        image: "https://images.pexels.com/photos/1192601/pexels-photo-1192601.jpeg?auto=compress&cs=tinysrgb&w=400"

    },
 

]

const Categories = () => {
  return (
    <div className='overflow-x-auto hide-scroll'>

      <div className='flex gap-4 xl:w-1/6 lg:w-1/3 sm:w-1/2 px-2 '>
        {
            CategoriesList.map((item) =>
                <Category key={item.id} category={item.category} image={item.image}/> 
            ) 
        }

      </div>
    </div>
  )
}

export default Categories

const Category = ({category, image})=> {
    return <Link className='flex-shrink-0 w-full ' href='/cat'>
        <div className='relative w-full h-auto '>
        <Image className='rounded-md object-cover' width={400} height={100} src={image} alt="image"></Image>
        </div>
        <h1 className='font-bold text-center py-2'>{category}</h1>



    </Link>
}
