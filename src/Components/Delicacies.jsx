import React from 'react';
import {data} from '../Data/data';
import {TbTruckDelivery} from 'react-icons/tb';
import {FaWallet, FaUserFriends} from 'react-icons/fa';
import {BsFillCartFill} from 'react-icons/bs'

const Delicacies = () => {
    console.log(data);
  return (
    <div className='max-w-[1640px] mx-auto px-4 py-12'>
      <h1 className='text-orange-600 font-bold text-center text-4xl'>World Class Menu</h1>
      {/*filter row*/}
      <div className='flex flex-col lg:flex-row justify-between'>
        {/*filter type*/}
        <div>
            <p>Filter Type</p>
            <div>
                <button>All</button>
                <button>Burgers</button>
                <button>Meats</button>
                <button>Pizza</button>
            </div>
        </div>
        {/*filter price*/}
        <div>
            <p>Filter Price</p>
            <div className='flex justify-between'>
                <FaUserFriends className='text-gray-800' />
                <FaWallet  className='text-gray-800'/>
                <TbTruckDelivery className='text-gray-800' />
                <BsFillCartFill className='text-gray-800' />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Delicacies;
