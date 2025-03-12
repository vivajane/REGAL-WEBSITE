"use client"
import Image from 'next/image';
import React from 'react';
import { useState } from 'react';

const singlePageImg = [
  
  {
    id:1,
    image: "https://images.pexels.com/photos/2568412/pexels-photo-2568412.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id:2,
    image: "https://images.pexels.com/photos/1844547/pexels-photo-1844547.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id:3,
    image: "https://images.pexels.com/photos/5788785/pexels-photo-5788785.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
 
]

const SinglePageImg = ({image}) => {
  const [currentImage, setCurrentImage] = useState(0);
  return (
    <div>
      <div className='relative h-[300px] w-full  '>
        <Image fill className='object-cover rounded-lg' alt='singlebig ' src={image[currentImage]}/>
      </div>
      <div className='grid grid-cols-3 gap-2 my-6'>
        {
          image.map((item, i) => (
           <div key={item.id} className='relative h-[150px] w-full' onClick={() => setCurrentImage(i)}>
             <Image fill className='object-cover rounded-lg' alt='single' src={item}  />
           </div>
          ))
        }
      </div>

      
    </div>
  )
}

export default SinglePageImg
