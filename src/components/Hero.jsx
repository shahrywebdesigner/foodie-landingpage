import React from 'react'
import {MdDirectionsBike, MdKeyboardDoubleArrowRight } from "react-icons/md";
import food from "../assets/hero-food-image.jpg"
const Hero = () => {
  return (
    <div id="home">
      <div className="max-w-7xl px-6 pt-20 pb-10 mx-auto grid gap-40 grid-cols-2">
        <div className="">
            <button className='flex items-center pl-2 bg-orange-200 rounded-full text-orange-600'>Bike Delivery <span className='rounded-full p-1 border border-gray-100  bg-white'> <MdDirectionsBike size={20} /> </span> </button>
            <h1 className='text-7xl text-gray-900 font-bold w-110 tracking-wider mt-7 mb-7'>The Fastest Delivery <br /> in <span className='text-orange-600 font-sans'>Your City</span></h1>
            <p className=' tracking-wide leading-normal w-130 mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis minus maiores distinctio laudantium molestiae quidem!</p>
            <button className=' flex items-center gap-1 bg-orange-500 text-white text-lg font-medium rounded px-3 py-2
            my-4 hover:bg-white hover:text-orange-500 hover:border-2 hover:border-orange-500 '>Ordere Now <MdKeyboardDoubleArrowRight size={15} /> </button>
        </div>
        <div className=" ">
            <div className="rounded-full h-110 w-110">
                <img className='rounded-full w-full h-full object-cover hover:rotate-4' src={food} alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
