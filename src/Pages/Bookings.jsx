import React from 'react';
import { Link } from 'react-router-dom';

const Bookings = () => {
  return (
    <div className='max-w-[1640px] mx-auto'>
      <img className='absolute w-full h-full object-cover' src='https://th.bing.com/th/id/OIP.crSq4E_QNc5jRsfRik3iVgHaGA?pid=ImgDet&rs=1' alt='' />
      <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
      <div className='fixed w-full px-4 py-24 z-50'>
        <div className='max-w-[500px] h-[900px] mx-auto bg-black/75 text-white'>
          <div className='max-w-[400px] mx-auto py-16'>
            <h1 className='text-3xl font-bold text-center'>Luxury Night Life</h1>
            <form className='w-full flex flex-col py-4'>
              <select className='p-3 my-2 bg-gray-700 rounded-xl'>
                <option>Single (1500 USD)</option>
                <option>Double (5000 USD)</option>
                <option>Gold (10,000 USD)</option>
                <option>Platinum (50,000 USD)</option>
              </select>
              <input type='text' placeholder='Full Name' name='name' className='p-3 my-2 bg-gray-700 rounded-xl' />
              <input className='p-3 my-2 bg-gray-700 rounded-xl' type='date' placeholder='Register' name='date' />
              <textarea className='p-3 my-2 bg-gray-700 rounded-xl' cols={20} placeholder='Make your Reservations here..!' />
              <button className='p-3 my-2 rounded-xl text-2xl font-bold border-2 hover:bg-pink-600 hover:border-gray-600'>
                Book
                </button> {' '}
                <Link className='flex items-center text-xl text-orange-600 justify-center font-bold' to="/Payment">Make your Payment here..!</Link>
            </form>
          </div>
        </div>
      </div>
      
    </div>
  )
};

export default Bookings;
