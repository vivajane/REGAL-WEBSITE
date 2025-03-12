"use client"
import React from 'react';
// import { useRef } from 'react';

const ImageSelector = ({label, name}) => {

  // const onClickHandler = () => {
  //   imageRef.current.click()
  // }
  // const imageRef = useRef()
  return (
    <div>
        <div>
            <label htmlFor={name}>{label}</label>
            <input type="file" accept='image/png image/jpeg' name={name} id={name} />
            {/* <input className='hidden' type="file" accept='image/png image/jpeg' name={name} id={name} ref={imageRef} /> */}
        </div>
        {/* <div>
          <button className='bg-slate-700 py-2 ring-1  ring-slate-200 px-4 hover:bg-yellow-400 text-black' type='button' onClick={onClickHandler}>Add Image</button>
        </div> */}
      
    </div>
  )
}

export default ImageSelector
