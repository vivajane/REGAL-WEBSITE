

"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";
import { fetchProducts } from "@/app/data/products";



const Featured = () => {
    const[product, setProduct] = useState([])
   useEffect(()=>{
    const getProducts = async () => {
        const data = await fetchProducts()
      
        setProduct(data)
    }
    getProducts()
   },[])
  return (
    <div className="px-6 lg:px-24 xl:px-32 my-9">
        
      <div className="xl:gap-4 my-6 md:gap-2 grid lg:grid-cols-4 md:grid-cols-2 ">
        {product && product.length > 0 ? ( product.map((item) => (
          <Products key={item.id} products={item}/>
        ))):(
          <p>No products available</p>
        )}
      </div>
    </div>
  );
};

export default Featured;

const Products = ({products}) => {
    const {name, price, description, image, slug} = products
    const [current, setCurrent] = useState(0)

    const hoverMouse=()=> {
        setCurrent(1)
    }

    const hoverOut=()=> {
        setCurrent(0)
    }
  return (
    <Link href={`/shop/${slug}`} className="pb-6">
      <div className="relative h-[200px] md:h-[350px] w-full" onMouseEnter={hoverMouse} onMouseLeave={hoverOut}>
        <Image src={image[current]} fill className="rounded object-cover" alt="products"/>
      
      </div>
      <div className="flex justify-between my-2 font-bold flex-wrap ">
        <h1>{name}</h1>
        <p>${price}</p>
      </div>
      <p className="line-clamp-1 pb-6 xl:pb-11">{description}</p>
      <button className="border-[1px] border-red-400  text-black py-1 rounded px-3">
        Add to Cart
      </button>
    </Link>
  );
};

