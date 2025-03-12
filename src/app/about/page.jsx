// "use client"
// import { getCategory } from "@/app/data/datafetch"
// import { useState, useEffect } from "react"
// import { useCategory } from "./usecategory";

// const Page = () => {
//   const [category, setCategory] = useState([])
  
//   // const {category}= useCategory()
//   useEffect(() => {
//     const interval = setInterval(()=> {
//       const getCat = async () => {
//         try {
//           const data = await getCategory()
//           setCategory(data)
//         } catch (error) {
//           console.error('Error fetching category:', error)
//         }
//       }
  
//       getCat()
//       return()=> clearInterval(interval)
//     },2000)

   
//   }, [])

//   return (
//     // <div>
//     //   {category.length > 0 ? (
//     //     category.map((item) => (
//     //       <ListCat item={item} key={item.id} />
//     //     ))
//     //   ) : (
//     //     <p>No categories available</p>
//     //   )}
//     // </div>
//     <div>
//       {category && category.map((item)=> (
//         <ListCat item={item} key={item.id} />
//       ))}
//     </div>
//   )
// }

// export default Page

// const ListCat = ({ item }) => {
//   return <div>
//     {item.title}
//   </div>
// }

import React from 'react'

const AboutPage = () => {
  return (
    <div>
      This is the about page new
    </div>
  )
}

export default AboutPage

