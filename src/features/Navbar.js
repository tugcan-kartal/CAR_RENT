import React from 'react';
import {AiFillCar} from "react-icons/ai";

const Navbar = () => {
  return (
    <div className='flex justify-between m-[2vw]'>
        <div className='text-4xl'>
            <AiFillCar />
        </div>

        <div className='flex gap-x-[2vw] font-semibold'>
            <div>Home</div>
            <div>About</div>
            <div>Vehicle Models</div>
            <div>Testimonials</div>
            <div>Our Team</div>
            <div>Contact</div>
        </div>

        <div className='flex gap-x-[1vw] font-bold'>
            <div>Sign In</div>
            <div>Register</div>
        </div>

    </div>
  )
}

export default Navbar