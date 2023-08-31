import React from 'react'

const Home = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4'>
        <div className='max-h-[500px] relative'>
            {/*image overlay with text in it*/}
            <div className='absolute w-full h-full max-h-[500px] text-gray-200 bg-black/50 flex flex-col justify-center'>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>The <span className='text-orange-600'>Best</span></h1>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'> <span className='text-orange-600'>Delicacies</span>Delivery</h1>
            </div>
            <img className='w-full max-h-[500px] object-cover' src='https://th.bing.com/th/id/OIP.crSq4E_QNc5jRsfRik3iVgHaGA?pid=ImgDet&rs=1' alt='' />
        </div>
    </div>
  )
};

export default Home;
