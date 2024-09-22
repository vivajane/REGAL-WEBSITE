"use client"
import { useState } from 'react'
import ServiceModal from '../components/ServiceModal'
import React from 'react'

const page = () => {
    const [modal, setModal] = useState(false)

    const Show = ()=>{
        setModal((prev)=>!prev)
    }
  return (
   <div className='relative'>
     <div onClick={Show}>
      Service
    </div>
    {modal && <ServiceModal/>}
   </div>
  )
}

export default page
