"use client";
import Link from "next/link";
import React from "react";
import { useState } from "react";

const FeaturedProducts = [
  {
    id: 1,
    name: "White Shirt",
    price: 50,
    description: "Affordable Shirt, perfect for cool weather",
    image: [
      "https://images.pexels.com/photos/2403586/pexels-photo-2403586.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/2698918/pexels-photo-2698918.jpeg?auto=compress&cs=tinysrgb&w=400",
    ],
  },
  {
    id: 2,
    name: "Wrist Watch",
    price: 400,
    description: "Luxury watch, perfect for Odogwu's",
    image: [
      "https://images.pexels.com/photos/5081914/pexels-photo-5081914.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/2078268/pexels-photo-2078268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
  },
  {
    id: 3,
    name: "Monostrap",
    price: 40,
    description: "Beautiful monostrap, perfect for hot weather",
    image: [
      "https://images.pexels.com/photos/1375849/pexels-photo-1375849.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/5181087/pexels-photo-5181087.jpeg?auto=compress&cs=tinysrgb&w=400",
    ],
  },
  {
    id: 4,
    name: "Wigs",
    price: 40,
    description: "Beautiful monostrap, perfect for hot weather",
    image: [
      "https://images.pexels.com/photos/5325912/pexels-photo-5325912.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/3615457/pexels-photo-3615457.jpeg?auto=compress&cs=tinysrgb&w=400"
    ],
  },
 
];

const Featured = () => {
    
  return (
    <div className="px-6 lg:px-24 xl:px-32 my-9">
      

      <div className="xl:gap-4 my-6 lg:gap-2 grid xl:grid-cols-4 lg:grid-cols-2 sm:grid-cols-1">
        {FeaturedProducts.map((item) => (
          <Products key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Featured;

const Products = ({ item }) => {
    const [current, setCurrent] = useState(0)

    const hoverMouse=()=> {
        setCurrent(1)
    }

    const hoverOut=()=> {
        setCurrent(0)
    }
  return (
    <Link href="/next" className="pb-6">
      <div onMouseEnter={hoverMouse} onMouseLeave={hoverOut}>
      <img src={item.image[current]} fill className="rounded object-cover" alt="products" />
      </div>
      <div className="flex justify-between my-2 font-bold flex-wrap ">
        <h1>{item.name}</h1>
        <p>${item.price}</p>
      </div>
      <p className="line-clamp-1 pb-6 xl:pb-11">{item.description}</p>
      <button className="border-[1px] border-red-400  text-black py-1 rounded px-3">
        Add to Cart
      </button>
    </Link>
  );
};
