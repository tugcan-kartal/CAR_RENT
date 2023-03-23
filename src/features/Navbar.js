import React from 'react';
import {AiFillCar} from "react-icons/ai";

const Navbar = () => {
  return (
    <div className='flex justify-between p-[2vw]'>
        <div className='text-4xl'>
            <AiFillCar />
        </div>

        <div className='flex gap-x-[2vw] font-semibold'>
            <div className='text-black hover:text-gray-400 cursor-pointer'>Home</div>
            <div className='text-black hover:text-gray-400 cursor-pointer'>About</div>
            <div className='text-black hover:text-gray-400 cursor-pointer'>Vehicle Models</div>
            <div className='text-black hover:text-gray-400 cursor-pointer'>Testimonials</div>
            <div className='text-black hover:text-gray-400 cursor-pointer'>Our Team</div>
            <div className='text-black hover:text-gray-400 cursor-pointer'>Contact</div>
        </div>

        <div className='flex gap-x-[1vw] font-bold'>
            <div className='text-black hover:text-gray-400 cursor-pointer bg-gray-200 px-[1vw] py-[2vh] rounded-full'>Sign In</div>
            <div className='text-black hover:text-gray-400 cursor-pointer bg-gray-200 px-[1vw] py-[2vh] rounded-full'>Register</div>
        </div>

    </div>
  )
}

export default Navbar