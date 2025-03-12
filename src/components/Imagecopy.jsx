"use client";

// import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {useState, useEffect } from "react";

const Slider = [
  {
    id: 1,
    title: "Luxury dresses",
    img: "https://images.pexels.com/photos/7988430/pexels-photo-7988430.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "50% discount on all orders",
    url: "/",
    bg: "bg-gradient-to-r from-rose-500 to-orange-500",
  },
  {
    id: 2,
    title: "Dinner wears",
    img: "https://images.pexels.com/photos/11046456/pexels-photo-11046456.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "50% discount on all orders",
    url: "/",
    bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
  },
  {
    id: 3,
    title: "Casual wears",
    img: "https://images.pexels.com/photos/28484975/pexels-photo-28484975/free-photo-of-urban-fashion-shoot-with-industrial-truck.jpeg?auto=compress&cs=tinysrgb&w=400",
    description: "50% discount on all orders",
    url: "/",
    bg: "bg-gradient-to-r from -pink-50 to-blue-50",
  },
];



const Imagecopy = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(()=>{
      setIndex((index) => (index === Slider.length-1 ? 0 : index +1))
    },1000)
    return ()=> clearInterval(interval)
  }, [])


  // useEffect(()=> {
  //   //     const interval = setInterval(()=>{
  //   //         setCurrentIndex((prev) => (prev === Slider.length - 1 ? 0 : prev + 1))
    
  //   //     }, 5000)
  //   //     return() => clearInterval(interval)
    
  //   //   }, [])


  return (
    <div className="overflow-hidden h-[500px]">
      <div className="w-max h-full flex transition-all duration-1000 ease-in-out" style={{transform: `translateX(-${index *100})`}}>
        {Slider.map((item) => (
          <div className="flex gap-6 w-screen h-full">
            <div className="w-1/2 h-full">
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              <Link href={item.url}>
                <button>Shop Now</button>
              </Link>
            </div>
            <div className="relative h-full w-1/2">
              <Image src={item.img} fill className="object-cover" alt="image" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Imagecopy;
