import React from "react";

const CartModal = () => {
  return (
    <div className="w-max p-6 z-20 rounded shadow-[0_3px_10px_rgb(0,0,0,0.2)] text-black absolute top-12 right-0">
      <h1 className="font-bold pb-2">Shopping Cart</h1>
      <div className="flex gap-4">
        <img
          src="https://images.pexels.com/photos/3829441/pexels-photo-3829441.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt="watch"
          className="h-24 w-24 rounded"
        />
        <div>
          <h1>Product Name</h1>
          <p className="pb-6">available</p>
          <p>Quantity 1</p>
        </div>
        <div>
          <p>$40.5</p>
          <button>Remove</button>
        </div>
      </div>
      <div>
       <div className="flex justify-between py-2">
       <h1 className="font-bold">SubTotal</h1>
       <p>$40.5</p>
       </div>
       <div className="flex justify-between">
        <button className="border-[1px] border-stone-700 py-1 rounded px-3">View Cart</button>
       <button className="bg-black text-white py-1 rounded px-3">Checkout</button>
       </div>
      </div>
    </div>
  );
};

export default CartModal;
