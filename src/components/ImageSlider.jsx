"use client";
import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";

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

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex ] = useState(0);
//   useEffect(()=> {
//     const interval = setInterval(()=>{
//         setCurrentIndex((prev) => (prev === Slider.length - 1 ? 0 : prev + 1))

//     }, 5000)
//     return() => clearInterval(interval)

//   }, [])
  return (
    <div className="overflow-hidden h-[calc(100vh-80px)]">
      <div className="w-max h-full flex transition-all duration-1000 ease-in-out" style={{transform: `translateX(-${currentIndex * 100}vw)`}}>
        {Slider.map((item) => (
          <div
            className={`${item.bg} flex flex-col justify-between w-screen h-full gap-16  xl:flex-row`}
            key={item.id}
          >
            <div className="h-1/2 xl:w-1/2 xl:h-full">
              <h1 className="text-center pt-24  text-xl lg:pt-44 lg:text-2xl xl:text-3xl">
                {item.description}
              </h1>
              <h1 className="text-5xl text-center font-bold py-2">
                {item.title}
              </h1>
              <div className="flex justify-center py-6">
                <Link
                  className="text-center bg-black text-white py-2 px-4 rounded items-center"
                  href={item.url}
                >
                  SHOP NOW
                </Link>
              </div>
            </div>
            <div className="relative h-1/2 md:w-1/2 xl:h-full">
              <img
                src={item.img}
                alt="img"
                fill
                sizes="100%"
                className="object-cover w-full "
              />
            </div>
          </div>
        ))}
      </div>
      <div className="absolute flex m-auto bottom-8 gap-4 left-1/2">
        {
            Slider.map((item, index) => (
                <div key={item.id} onClick = {(() => setCurrentIndex(index))} className={` rounded-full w-3 h-3 cursor-pointer items-center flex justify-center item ring-1 ring-gray-600 ${currentIndex===index ? "scale-125" : ""}`}>
                    {currentIndex === index && (
                        <div className="w-[6px] h-[6px] flex items-center bg-gray-600 rounded-full">

                        </div>
                    )}
                </div>
            ) )
        }

      </div>
    </div>
  );
};

export default ImageSlider;
