import React, { useState } from 'react';
import AudiPhoto from "../static/audi.jpg";
import GolfPhoto from "../static/golf.jpg";
import ToyotaPhoto from "../static/toyota.jpg";
import BmwPhoto from "../static/bmw.jpg";
import MercedesPhoto from "../static/mercedes.jpeg";
import ToyotoPhoto from "../static/toyota.jpg";


const VehicleModels = () => {

    const [car,setCar]=useState("audi-car");

    const [imageofcar,setImageOfCar]=useState("");

    const [price,setPrice]=useState(45);
    const [model,setModel]=useState("Audi");
    const [mark,setMark]=useState("A1");
    const [year,setYear]=useState("2012");
    const [door,setDoors]=useState("4/5");
    const [ac,setAc]=useState("Yes");
    const [transmission,setTransmission]=useState("Manual");
    const [fuel,setFuel]=useState("Gasoline");


  return (
    <div>
        <div className='bg-gray-100 h-screen'>

            <div className='text-center'>
                <div className='text-3xl font-semibold mb-[1vh]'>Vehicle Models</div>
                <div className='text-5xl font-bold mb-[3vh]'>Our rental fleet</div>
                <div className="font-extralight text-lg">Choose from a variety of our amazing vehicles to rent for your next<br/> adventure or business trip</div>
            </div>

            <div className='flex'>
                <div>
                    <div>Audi A1 S-Line</div>
                    <div>VW Golf 6</div>
                    <div>Toyota Camry</div>
                    <div>BMW 320 ModernLine</div>
                    <div>Mercedes-Benz GLK</div>
                    <div>VW Passat CC</div>
                </div>

                <div>
                    <img src={AudiPhoto} alt=''/>
                </div>

                <div>
                    <div>"" rent per day</div>
                    <div>Model ""</div>
                    <div>Mark</div>
                    <div>Year</div>
                    <div>Doors</div>
                    <div>AC</div>
                    <div>Transmission</div>
                    <div>Fuel</div>
                    <div>RESERVE NOW</div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default VehicleModels