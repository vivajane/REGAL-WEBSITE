import React from 'react'
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  return (
    <div>
        <form className='relative flex justify-between bg-gray-100 rounded '>
            <input type="search" placeholder='Search' className='bg-transparent flex-1 outline-none py-1 px-10 rounded' />
            <span className='absolute right-4 top-2'><CiSearch/></span>
        </form>
      
    </div>
  )
}

export default SearchBar
