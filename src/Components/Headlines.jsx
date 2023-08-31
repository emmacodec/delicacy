import React from 'react'

const Headlines = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
      {/*Headline*/}
      <div className='rounded-xl relative'>
        {/*overlay*/}
        <div className='absolute w-full h-full bg-black/60 rounded-xl text-white'>
            <p className='text-2xl font-bold px-2 pt-4'>Buy one Get one for free(Black November)</p>
            <p className='px-2 font-bold'>Through November</p>
            <button className='border-white bg-white text-black mx-2 absolute bottom-4 font-bold'>Order Now</button>
        </div>
        <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src='https://th.bing.com/th/id/OIP.-ei61GJRJmYE-mq_CVTV2QHaHa?pid=ImgDet&rs=1' alt='' />
      </div>
      {/*Headline*/}
      <div className='rounded-xl relative'>
        {/*overlay*/}
        <div className='absolute w-full h-full bg-black/60 rounded-xl text-white'>
            <p className='text-2xl font-bold px-2 pt-4'>New dishes</p>
            <p className='px-2 font-bold'>Added daily</p>
            <button className='border-white bg-white text-black mx-2 absolute bottom-4 font-bold'>Order Now</button>
        </div>
        <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src='https://th.bing.com/th/id/OIP.m2ljXWCdOtHDt-Wz-ZOM8wHaE8?pid=ImgDet&rs=1' alt='' />
      </div>
      {/*Headline*/}
      <div className='rounded-xl relative'>
        {/*overlay*/}
        <div className='absolute w-full h-full bg-black/60 rounded-xl text-white'>
            <p className='text-2xl font-bold px-2 pt-4'>We deliver</p>
            <p className='px-2 font-bold'>delicious meat too</p>
            <button className='border-white bg-white text-black mx-2 absolute bottom-4 font-bold'>Order Now</button>
        </div>
        <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src='https://th.bing.com/th/id/OIP.HJ5gcypPNa2r96_ekrjEKQHaEK?pid=ImgDet&rs=1' alt='' />
      </div>
    </div>
  )
};

export default Headlines;
