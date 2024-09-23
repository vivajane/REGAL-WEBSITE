import React from 'react'

const SortBy = () => {
  return (
    <div className='px-6 lg:px-24 xl:px-32 flex flex-wrap justify-between mt-4'>
        <div className=' '>
            <select className= 'bg-slate-300 mr-3 px-4 py-2 rounded-lg my-6' name="type" id="type">
                <option>Type</option>
                <option value="online">Online</option>
                <option value="offline">Offline</option>
            </select>

            <input type="number" placeholder='   min price' name="" id="" className='border-[1px] border-black py-2 rounded-lg my-6 mr-3' />
            <input className='border-[1px] mr-3 border-black  py-2 rounded-lg my-6' type="number" name="" placeholder='   max price' id="" />

            <select className='bg-slate-300 px-4 py-2 rounded-lg my-6 mr-3' name="size" id="size">
                <option>Size</option>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="medium">Large</option>
                <option value="medium">Extralarge</option>
            </select>
            <select className='bg-slate-300 mr-3 px-4 py-2 rounded-lg my-6' name="category" id="category">
                <option>Category</option>
                <option value="shoes">Shoes</option>
                <option value="hairs">Hairs</option>
                <option value="dress">Dress</option>
                <option value="shirt">Shirt</option>
            </select>
            <select className='bg-slate-300 px-4 py-2 rounded-lg my-6' name="all" id="all">
                <option>All</option>
                <option value="online">Online</option>
                <option value="offline">Offline</option>
            </select>
           
        </div>
        <div>
       
            <select className='bg-slate-300 px-4 py-2 rounded-lg my-6' name="sort" id="sort">
                <option>Sort By</option>
                <option value="size">Sizes</option>
                <option value="Colors">Colors</option>
                <option value="luxury">Luxury</option>
                <option value="gender">Gender</option>
               
            </select>
        </div>
      
    </div>
  )
}

export default SortBy
