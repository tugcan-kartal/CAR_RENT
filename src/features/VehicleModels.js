import React, { useEffect, useState } from 'react';
import AudiPhoto from "../static/audi.jpg";
import GolfPhoto from "../static/golf.jpg";
import ToyotaPhoto from "../static/toyota.jpg";
import BmwPhoto from "../static/bmw.jpg";
import MercedesPhoto from "../static/mercedes.jpeg";
import PassatPhoto from "../static/passat.png";


const VehicleModels = () => {

    const [car,setCar]=useState("audi-car");

    const [imageofcar,setImageOfCar]=useState(AudiPhoto);

    const [price,setPrice]=useState(45);
    const [model,setModel]=useState("Audi");
    const [mark,setMark]=useState("A1");
    const [year,setYear]=useState("2012");
    const [door,setDoors]=useState("4/5");
    const [ac,setAc]=useState("Yes");
    const [transmission,setTransmission]=useState("Manual");
    const [fuel,setFuel]=useState("Gasoline");

    useEffect(()=>{
        if(car==="audi-car"){
            setImageOfCar(AudiPhoto);
            setPrice(45);
            setModel("Audi");
            setMark("A1");
            setYear("2012");
            setDoors("4/5");
            setAc("Yes");
            setTransmission("Manual");
            setFuel("Gasoline");
        }else if(car==="golf-car"){
            setImageOfCar(GolfPhoto);
            setPrice(37);
            setModel("Golf 6");
            setMark("Volkswagen");
            setYear("2008");
            setDoors("4/5");
            setAc("Yes");
            setTransmission("Manual");
            setFuel("Diesel");
        }else if(car==="toyota-car"){
            setImageOfCar(ToyotaPhoto);
            setPrice(30);
            setModel("Camry");
            setMark("Toyota");
            setYear("2006");
            setDoors("4/5");
            setAc("Yes");
            setTransmission("Automatic");
            setFuel("Hybrid");
        }else if(car==="bmw-car"){
            setImageOfCar(BmwPhoto);
            setPrice(35);
            setModel("320");
            setMark("BMW");
            setYear("2012");
            setDoors("4/5");
            setAc("Yes");
            setTransmission("Manual");
            setFuel("Diesel");
        }else if(car==="mercedes-car"){
            setImageOfCar(MercedesPhoto);
            setPrice(50);
            setModel("Benz GLK");
            setMark("Mercedes");
            setYear("2006");
            setDoors("4/5");
            setAc("Yes");
            setTransmission("Manual");
            setFuel("Diesel");
        }else if(car==="passat-car"){
            setImageOfCar(PassatPhoto);
            setPrice(25);
            setModel("Passat CC");
            setMark("Volkswagen");
            setYear("2008");
            setDoors("4/5");
            setAc("Yes");
            setTransmission("Automatic");
            setFuel("Gasoline");
        }
    },[car])

    


  return (
    <div>
        <div className='bg-gray-100 px-[4vw] h-screen'>

            <div className='text-center'>
                <div className='text-3xl font-semibold mb-[1vh]'>Vehicle Models</div>
                <div className='text-5xl font-bold mb-[3vh]'>Our rental fleet</div>
                <div className="font-extralight text-lg">Choose from a variety of our amazing vehicles to rent for your next<br/> adventure or business trip</div>
            </div>

            <div className='flex gap-x-[10vw]'>


                <div className='flex flex-col gap-y-[2vh] w-[20vw]'>
                    <div onClick={()=>setCar("audi-car")} className='bg-gray-200 h-[10vh] px-[3vw] py-[2vh] font-bold hover:bg-gray-600 transition duration-300 ease-in-out'>Audi A1 S-Line</div>
                    <div onClick={()=>setCar("golf-car")} className='bg-gray-200 h-[10vh] px-[3vw] py-[2vh] font-bold hover:bg-gray-600 transition duration-300 ease-in-out '>VW Golf 6</div>
                    <div onClick={()=>setCar("toyota-car")} className='bg-gray-200 h-[10vh] px-[3vw] py-[2vh] font-bold hover:bg-gray-600 transition duration-300 ease-in-out'>Toyota Camry</div>
                    <div onClick={()=>setCar("bmw-car")} className='bg-gray-200 h-[10vh] px-[3vw] py-[2vh] font-bold hover:bg-gray-600 transition duration-300 ease-in-out'>BMW 320</div>
                    <div onClick={()=>setCar("mercedes-car")} className='bg-gray-200 h-[10vh] px-[3vw] py-[2vh] font-bold hover:bg-gray-600 transition duration-300 ease-in-out'>Mercedes-Benz GLK</div>
                    <div onClick={()=>setCar("passat-car")} className='bg-gray-200 h-[10vh] px-[3vw] py-[2vh] font-bold hover:bg-gray-600 transition duration-300 ease-in-out'>VW Passat CC</div>
                </div>

                <div>
                    <img className='w-[40vw] mx-auto mt-[10vh]' src={imageofcar} alt='not found'/>
                </div>

                <div className='w-[20vw] h-[44vh] mt-[8vh] border-2 border-b-0 border-black text-md'>


                    <div className='flex justify-center items-center gap-x-[1vw] bg-gray-300 border-b-2 border-black pb-[2vh]'>
                        <div className='text-xl font-bold'>${price}</div>
                        <div>/</div>
                        <div className='text-lg'>rent per day</div>
                    </div>

                    <div className='flex justify-center items-center gap-x-[1vw] border-b-2 border-black pb-[2vh]'>
                        <div>Model</div>
                        <div>|</div>
                        <div>{model}</div>
                    </div>

                    <div className='flex justify-center items-center gap-x-[1vw] border-b-2 border-black pb-[2vh]'>
                        <div>Mark</div>
                        <div>|</div>
                        <div>{mark}</div>
                    </div>

                    <div className='flex justify-center items-center gap-x-[1vw] border-b-2 border-black pb-[2vh]'>
                        <div>Year</div>
                        <div>|</div>
                        <div>{year}</div>
                    </div>

                    <div className='flex justify-center items-center gap-x-[1vw] border-b-2 border-black pb-[2vh]'>
                        <div>Doors</div>
                        <div>|</div>
                        <div>{door}</div>
                    </div>

                    <div className='flex justify-center items-center gap-x-[1vw] border-b-2 border-black pb-[2vh]'>
                        <div>AC</div>
                        <div>|</div>
                        <div>{ac}</div>
                    </div>

                    <div className='flex justify-center items-center gap-x-[1vw] border-b-2 border-black pb-[2vh]'>
                        <div>Transmission</div>
                        <div>|</div>
                        <div>{transmission}</div>
                    </div>

                    <div className='flex justify-center items-center gap-x-[1vw] border-b-2 border-black pb-[2vh]'>
                        <div>Fuel</div>
                        <div>|</div>
                        <div>{fuel}</div>
                    </div>


                </div>


            </div>

        </div>
    </div>
  )
}

export default VehicleModels