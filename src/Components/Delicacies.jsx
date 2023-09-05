import React, { useState } from 'react';
import {data} from '../Data/data';
import {TbTruckDelivery} from 'react-icons/tb';
import {FaWallet, FaUserFriends} from 'react-icons/fa';
import {BsFillCartFill} from 'react-icons/bs'

const Delicacies = () => {

const [delicacy, setDelicacy] = useState(data);

const filterType = (category) => {
  setDelicacy(data.filter((item) => {
    return item.category === category
  }))
};


    //console.log(data);
  return (
    <div className='max-w-[1640px] mx-auto px-4 py-12'>
      <h1 className='text-orange-600 font-bold text-center text-4xl'>World Class Menu</h1>
      {/*filter row*/}
      <div className='flex flex-col lg:flex-row justify-between'>
        {/*filter type*/}
        <div>
            <p className='font-bold text-gray-700'>Filter Type</p>
            <div className='flex justify-between flex-wrap'>
                <button onClick={()=>setDelicacy(data)} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>All</button>
                <button onClick={()=>filterType('Burger')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>Burgers</button>
                <button onClick={()=>filterType('Meat')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>Meats</button>
                <button onClick={()=>filterType('Pizza')} className='border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>Pizza</button>
            </div>
        </div>
        {/*filter price*/}
        <div>
            <p className='font-bold text-gray-700'>Filter Price</p>
            <div className='flex justify-between max-w-[390px] w-full cursor-pointer'>
                <FaUserFriends className=' border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1' />
                <FaWallet  className=' border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'/>
                <TbTruckDelivery className=' border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1' />
                <BsFillCartFill className=' border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1' />
            </div>
        </div>
      </div>

      {/*Displaying foods*/}

      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
        {delicacy.map((item, index) =>(
          <div className='border shadow-lg hover:scale-105 duration-300 rounded-lg' key={index}>
            <img src={item.image} alt={item.name} className='w-full h-[200px] object-cover rounded-t-lg' />
            <div className='flex justify-between px-2 py-4'>
              <p className='font-bold text-xl'>{item.name}</p>
              <p className='font-bold'>{item.category}<span className='bg-orange-500 text-white p-1 rounded-full'>{item.price}</span></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
};

export default Delicacies;
