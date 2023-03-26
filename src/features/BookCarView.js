import React from 'react';
import {BsCarFrontFill} from "react-icons/bs";
import {HiLocationMarker} from "react-icons/hi";
import {GrLocationPin} from "react-icons/gr";
import {MdDateRange} from "react-icons/md";
import toast from 'react-hot-toast';


const BookCarView = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-100 pt-[10vh] pb-[10vh]">

        <div className="bg-white rounded-2xl px-[5vw] py-[3vh]">

            <div className='text-2xl font-bold mb-[2vh]'>Book a car</div>

            <div className='flex justify-center text-md gap-x-[4vw] mb-[5vh]'>

                <div>
                    <div className='font-semibold flex items-center gap-x-[1vw] mb-[1vh]'> <BsCarFrontFill /> Select Your Car Type *</div>
                    <div>
                        <select className='text-gray-500 px-[2vw] py-[1vh] border-2 border-gray-200 text-left'>
                            <option>Select your car type</option>
                            <option>Audi A1 S-Line</option>
                            <option>VW Golf 6</option>
                            <option>Toyota Camry</option>
                            <option>BMW 320 ModernLine</option>
                            <option>Mercedes-Benz GLK</option>
                            <option>VW Passat CC</option>
                        </select>
                    </div>
                </div>

                <div>
                    <div className='font-semibold flex items-center gap-x-[1vw] mb-[1vh]'> <HiLocationMarker /> Pick-up</div>
                    <div>
                        <select className='text-gray-500 px-[2vw] py-[1vh] border-2 border-gray-200 text-left'>
                            <option>Select pick up location</option>
                            <option>Belgrade</option>
                            <option>Novi Sad</option>
                            <option>Nis</option>
                            <option>Kragujevac</option>
                            <option>Subotica</option>
                        </select>
                    </div>
                </div>

                <div>
                    <div className='font-semibold flex items-center gap-x-[1vw] mb-[1vh]'><GrLocationPin /> Drop-of</div>
                    <div>
                        <select className='text-gray-500 px-[2vw] py-[1vh] border-2 border-gray-200 text-left'>
                        <option>Select pick up location</option>
                            <option>Belgrade</option>
                            <option>Novi Sad</option>
                            <option>Nis</option>
                            <option>Kragujevac</option>
                            <option>Subotica</option>
                        </select>
                    </div>
                </div>

            </div>

            <div className='flex justify-center items-center text-md gap-x-[4vw] mb-[5vh]'>

                <div>
                    <div className='font-semibold flex items-center gap-x-[1vw] mb-[1vh]'><MdDateRange /> Pick-up</div>
                    <div>
                        <input className='text-gray-500 px-[2vw] py-[1vh] border-2 border-gray-200 text-left' type="date"/>
                    </div>
                </div>

                <div>
                    <div className='font-semibold flex items-center gap-x-[1vw] mb-[1vh]'><MdDateRange />Drop-of</div>
                    <div>
                        <input className='text-gray-500 px-[2vw] py-[1vh] border-2 border-gray-200 text-left' type="date"/>
                    </div>
                </div>    

            </div>

            <div className='flex justify-center items-center text-md'>
                <div onClick={()=>toast.error("cars are not available yet")} className='cursor-pointer text-white bg-gray-500 font-bold text-center px-[2vw] py-[1vh] border-2 border-gray-200 rounded-2xl'>Search</div>
            </div>


        </div>

    </div>
  )
}

export default BookCarView;