"use client"
import CartQuantity from '@/components/CartQuantity'
import ColorChange from '@/components/ColorChange'
import ProductInfo from '@/components/ProductInfo'
import SinglePageImg from '@/components/singlePageImg'
import { fetchSlug } from '@/app/data/slug'
import { useState, useEffect } from 'react'
import React from 'react'
const SlugPage = ({params}) => {
    const[data, setData]= useState(null)
    const[isLoading, setIsLoading]= useState(true)
   useEffect(() => {
    const getSlug = async ()=> {
        const res = await fetchSlug(params.slug)
        setData(res)
        console.log(res, "data from axios");
        setIsLoading(false)
    }
    getSlug()
   },[params.slug])

   if (isLoading) {
    return <div>Loading...</div>;
}
   if(!data){
    return <div>No data avaialble</div>
   }
  return (
    <div className='md:flex relative justify-between gap-16 px-8 md:px-24 xl:px-32 py-8 '>
        <div className=' h-max w-full md:w-1/2 md:sticky top-20  '>
          <SinglePageImg image = {data.image}/>
        </div>
        <div className='md:w-3/4'>
          <h1 className='text-3xl font-bold'>
            {data.name}
          </h1>
          <p className='text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet quod consequatur, eum veniam tenetur at distinctio neque iure quo. In, aliquam aspernatur doloribus voluptatem maxime velit odit. Minus quaerat optio.</p>
          <p className='text-3xl font-bold'>
            <span className='line-through text-2xl pr-4'>${data.price}</span>  $40.5
          </p>
          <div className='py-4'>
            <h1 className='text-2xl font-bold'>Choose Color</h1>
            <div>
              <ColorChange/>
            </div>
          </div>
          <div>
            <h1 className='text-2xl font-bold py-4'>Choose Quantity</h1>
            <CartQuantity/>
          </div>
          <ProductInfo/>
        </div>
      
    </div>
  )
}

export default SlugPage
// "use client"
// import CartQuantity from '@/components/CartQuantity'
// import ColorChange from '@/components/ColorChange'
// import ProductInfo from '@/components/ProductInfo'
// import SinglePageImg from '@/components/singlePageImg'
// import { fetchSlug } from '@/app/data/slug'
// import { useState, useEffect } from 'react'
// import React from 'react'
// import { useRouter } from 'next/router'

// const SlugPage = () => {
//     const router =useRouter()
//     const {slug} = router.query

//     const[data, setData]= useState(null)
//     const[isLoading, setIsLoading]= useState(true)

//    useEffect(() => {
//     if (!router.isReady || !slug) return;
//     const getSlug = async ()=> {
//         const res = await fetchSlug(slug)
//         setData(res)
//         setIsLoading(false)
        
//     }

//     getSlug()
//    },[router.isReady,slug])

//    if (isLoading) {
//     return <div>Loading...</div>;
// }
//    if(!data){
//     return <div>No data avaialble</div>
//    }
//   return (
//     <div className='md:flex relative justify-between gap-16 px-8 md:px-24 xl:px-32 py-8 '>
//         <div className=' h-max w-full md:w-1/2 md:sticky top-20  '>
//           <SinglePageImg/>
//         </div>
//         <div className='md:w-3/4'>
//           <h1 className='text-3xl font-bold'>
//             {data.name}
//           </h1>
//           <p className='text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet quod consequatur, eum veniam tenetur at distinctio neque iure quo. In, aliquam aspernatur doloribus voluptatem maxime velit odit. Minus quaerat optio.</p>
//           <p className='text-3xl font-bold'>
//             <span className='line-through text-2xl pr-4'>$45</span>  $40.5
//           </p>
//           <div className='py-4'>
//             <h1 className='text-2xl font-bold'>Choose Color</h1>
//             <div>
//               <ColorChange/>
//             </div>
//           </div>
//           <div>
//             <h1 className='text-2xl font-bold py-4'>Choose Quantity</h1>
//             <CartQuantity/>
//           </div>
//           <ProductInfo/>
//         </div>
      
//     </div>
//   )
// }

// export default SlugPage
