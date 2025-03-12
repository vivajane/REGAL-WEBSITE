import React from "react";

const ColorChange = () => {
  return (
    <div>
      <div className="flex gap-4 items-center">
        <div className="h-6 w-6 bg-black rounded-full"></div>
        <div className="ring-1 w-8 h-8  ring-purple-500 text-center flex items-center justify-center rounded-full">
          <div className="bg-purple-800   text-center w-6 h-6 rounded-full"></div>
        </div>
        <div className="w-8 h-8 ring-1 ring-gray-500 cursor-not-allowed bg-rose-700 relative rounded-full">
          <div className="absolute w-10 h-[2px] bg-red-400 transform -translate-x-1/2 -translate-y-1/2 rotate-45 left-1/2 top-1/2">

          </div>
          
        </div>
      </div>
      <div className="">
        <h1 className="text-2xl font-bold py-4">Choose size</h1>

        <div className="flex gap-4 items-center">
          <div className="ring-rose-700 cursor-pointer text-rose-700 ring-1 rounded-md px-6 py-1 inline-flex">
            Large
          </div>
          <div className="disabled text-white ring-1 cursor-not-allowed ring-pink-50 bg-rose-50 rounded-md px-6 py-1 inline-flex">
            Medium
          </div>
          <div className="ring-rose-700 cursor-pointer bg-rose-700 text-white  ring-1 rounded-md px-6 py-1 inline-flex">
            Small
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorChange;
