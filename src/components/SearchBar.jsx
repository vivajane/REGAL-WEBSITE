"use client"
import React from 'react'
import { CiSearch } from "react-icons/ci";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const router = useRouter()

  // const onChangeHandler = (e)=>{
  //   setSearch(e.target.value)
  // }

  const onSubmitHandler = (e)=>{
    e.preventDefault()

    const formdata = new FormData(e.currentTarget)
    const name = formdata.get("name")
    router.push(`/list?name=${name}`)
    console.log(search)
  }
  return (
    <div>
        <form onSubmit={onSubmitHandler} className='relative flex justify-between bg-gray-100 rounded  '>
            <input type="search" placeholder='Search' name="name" className='bg-transparent flex-1 outline-none py-1 px-10 rounded' />
            <span className='absolute right-4 top-2'><CiSearch/></span>
        </form>
      
    </div>
  )
}

export default SearchBar
