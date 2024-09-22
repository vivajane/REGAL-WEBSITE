"use client"
import React from 'react'
import { CgProfile } from "react-icons/cg";
import { IoIosNotifications } from "react-icons/io";
import { FaCartArrowDown } from "react-icons/fa";
import { useState } from 'react';
import Link from 'next/link';
import CartModal from './CartModal';
import { useRouter } from 'next/navigation';

const Iconss = () => {
    const[isProfile, setIsProfile]= useState(false)
    const[isNote, setIsNote]= useState(false)
    const[isCart, setIsCart]= useState(false)

    const router = useRouter()

    const isLogged = false


    const isProfileClick = ()=>{
        if(!isLogged){
            router.push("/login")

        }
        setIsProfile((prev)=>!prev)
    }

    const isCartOpen= ()=>{
        setIsCart((prev)=>!prev)
    }
  return (
    <div className='flex gap-8 items-center justify-between'>
        <div className='relative cursor-pointer'>
        <CgProfile onClick={isProfileClick}/>
        {isProfile && <div className='absolute bg-white text-black rounded-lg p-2 flex flex-col my-4 py-3 px-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
            <Link className='py-1' href="/profile">Profile</Link>
            <Link className='py-1' href="/logout">Logout</Link>
            </div>}
        </div>
        <div>
        <IoIosNotifications/>
        </div>
        <div className='relative cursor-pointer' >
        <FaCartArrowDown onClick={isCartOpen}/>
        <div className='w-max absolute -top-4 -right-4 text-white rounded-full h-4 flex  flex-col justify-center items-center bg-rose-600 py-3 px-2'>2</div>
        {
            !isCart ? (
                <div className='absolute top-4 text-red-400 right-0 w-max'>
                    Cart is empty
                </div>
            ): isCart && <CartModal/>
        }
        </div>

      
    </div>
  )
}

export default Iconss
