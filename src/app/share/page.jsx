import ImageSelector from '@/components/ImageSelector'
import React from 'react'

const SharePage = () => {
  return (
    <div className='bg-slate-500 px-6 lg:px-24 xl:px-32 py-9 text-white ring-1 ring-slate-800 '>
      <form>
        <div className='flex gap-4 w-[100%] py-3'>
          <label htmlFor="yourName">YOUR NAME
          <input className='bg-slate-700 py-2 ring-1 w-[100%] px-28 ring-slate-200' type="text" name="yourName" id="yourName" />
          </label>
          <label htmlFor="yourEmail">YOUR EMAIL
          <input className='bg-slate-700 px-28 py-2 ring-1 w-[100%] ring-slate-200'  type="email" name="yourEmail" id="yourEmail" />
          </label>
        </div>
        <div>
          <label className=""  htmlFor="title">TITLE</label>
          <input className='bg-slate-700 ring-1 py-2 w-[100%] ring-slate-200'  type="text" name="title" id="title" />
        </div>
        <div className='py-3'>
          <label htmlFor="des">DESCRIPTION</label>
          <input className='bg-slate-700 py-2 ring-1 w-[100%] ring-slate-200'  type="text" name="des" id="des" />
        </div>
       <div>
       <ImageSelector/>
       </div>

        <div className='py-6'>
        <button className='bg-slate-700 py-2 ring-1  ring-slate-200 px-4 hover:bg-yellow-400 text-black' type="submit">SHARE PRODUCTS</button>
        </div>

      </form>

    </div>
  )
}

export default SharePage
