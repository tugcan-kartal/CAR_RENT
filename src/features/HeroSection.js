import React from 'react';
import {AiOutlineRight,AiOutlineCheckCircle} from "react-icons/ai";
import CarImg from "../static/car.png";

const HeroSection = () => {
  return (
    <div className='flex items-center p-[3vw]'>
    
        <div className='w-[60vw]'>

            <div className='text-left'>
                <div className='text-xl font-bold mb-[2vh]'>Plan your trip now</div>
                <div className='text-4xl font-extrabold mb-[4vh]'>Save big with our car rental</div>
                <div className='text-gray-700 mb-[4vh] text-lg'>
                    Rent the car of your dreams. 
                    <br />
                    Unbeatable prices, unlimited miles, flexible pick-up options and much more.
                </div>
            </div>

            <div className='flex gap-x-[2vw] text-xl'>
                <div className='flex items-center gap-x-[0.5vw] text-black hover:text-gray-400 cursor-pointer font-semibold'>Book Ride <AiOutlineCheckCircle /></div>
                <div className='flex items-center gap-x-[0.5vw] text-black hover:text-gray-400 cursor-pointer font-semibold'>Learn More <AiOutlineRight /></div>
            </div>

        </div>

        <div className='w-[40vw]'>
            <img alt='not found' src={CarImg}/>
        </div>
        
    </div>
  )
}

export default HeroSection