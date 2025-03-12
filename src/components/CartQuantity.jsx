"use client";
import React from "react";
import { useState } from "react";
import {useRouter} from "next/navigation";



const CartQuantity = () => {
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const add =() => {
      window.alert("Added to cart")
      router.push("/cart")
  }
  return (
    <div className="flex w-full flex-col md:flex-row py:4 md:py-1 gap-4 md:items-center">
      <div className="w-full md:flex gap-4 items-center">
        <div className="bg-gray-500 flex w-32 my-3 gap-8 px-6  py-3 rounded-3xl">
          <button onClick={decreaseQuantity}>-</button>
          <p>{quantity}</p>
          <button onClick={increaseQuantity}>+</button>
        </div>
        <p className="md:text-xl">Only <span className="font-bold">{quantity - 1}</span> left in stock - order soon</p>
      </div>
      <button onClick={add} className="ring-1 hover:bg-rose-700 hover:text-white disabled:cursor-not-allowed disabled:bg-rose-100 disabled:text-gray-400  ring-rose-700 px-4 py-2 w-36 text-rose-700 rounded-3xl">
        Add to Cart
      </button>
    </div>
  );
};

export default CartQuantity;
