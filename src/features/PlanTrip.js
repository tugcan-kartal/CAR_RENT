import React from 'react';
import {TbDiscountCheck} from "react-icons/tb";
import {RiCustomerService2Fill} from "react-icons/ri";
import {FaRoad} from "react-icons/fa";

const PlanTrip = () => {
  return (
    <div>
        <div className='flex flex-col justify-center items-center gap-y-[5vh] text-center h-screen bg-gray-100'>

            <div>
                <div className='text-3xl font-semibold mb-[3vh]'>Plan your trip now</div>
                <div className='text-5xl font-bold mb-[3vh]'>Quick & easy car rental</div>
            </div>

            <div className='flex gap-x-[8vw] mt-[8vh]'>

                <div>
                    <div><TbDiscountCheck className='mx-auto text-6xl bg-white p-2 rounded-full mb-[3vh]'/></div>
                    <div className='text-2xl font-bold mb-[2vh]'>Select Car</div>
                    <div>We offers a big range of vehicles for all<br /> your driving needs.
                         We have the<br />  perfect car to meet your needs
                    </div>
                </div>

                <div>
                    <div><RiCustomerService2Fill className='mx-auto text-6xl bg-white p-2 rounded-full mb-[3vh]'/></div>
                    <div className='text-2xl font-bold mb-[2vh]'>Contact Operator</div>
                    <div>
                        Our knowledgeable and friendly <br /> operators are always ready to help <br /> with any questions or concerns
                    </div>
                </div>


                <div>
                    <div><FaRoad className='mx-auto text-6xl bg-white p-2 rounded-full mb-[3vh]'/></div>
                    <div className='text-2xl font-bold mb-[2vh]'>Let's Drive</div>
                    <div>
                        Whether you're hitting the open road,<br /> we've got you covered with our wide<br /> range of cars
                    </div>
                </div>

            </div>

        </div>
    </div>
  )
}

export default PlanTrip