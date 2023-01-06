import React from 'react'

const portfolio = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 text-center'>
      <h1 className='font-bold text-2xl p-4'>Travel Photos</h1>
      <div className='grid grid-rows-none md:grid-cols-5 p-4 gap-4'>
        <div className='w-full h-full col-span-2 md:col-span-3 row-span-2'>
          <img src="/ig-img-1.jpeg" alt=""/>
        </div>
        <div className='w-full h-full'>
          <img src="/ig-img-2.jpeg" alt=""/>
        </div>
        <div className='w-full h-full'>
          <img src="/ig-img-3.jpeg" alt=""/>
        </div>
        <div className='w-full h-full'>
          <img src="/ig-img-6.jpeg" alt=""/>
        </div>
        <div className='w-full h-full'>
          <img src="/ig-img-5.jpeg" alt=""/>
        </div>
      </div>
    </div>
  )
}

export default portfolio