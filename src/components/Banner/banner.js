import React from 'react';
import banner from '../../assets/ai.jpg';
import logo from '../../assets/new.png'
const Banner = () => {
  return (
    <section>
      <img src={banner} alt="" className='w-full h-[600px]' />
      <img src={logo} alt="Logo" className='absolute left-[8%] transform -translate-x-1/2 -top-1 h-[6rem] ' />
      <h1 className="absolute top-[40%] left-1/2 font-bold transform -translate-x-1/2 -translate-y-1/2 text-black text-6xl">
        Hello We're here
      </h1>
      <p className='absolute top-[50%] left-[50%] font-semibold transform -translate-x-1/2 -translate-y-1/2'>
        Lorem, Lorem wuhsb ahfjh fbbjhw fbips Lorem ipsum dolor sit amet. lorem 5 ipsum dolor sit amet consectetur adipisicing elit. Sed, amet.
      </p>
      <button className='bg-green-800 text-white text-lg absolute top-[70%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg rounded-full w-[300px] h-[50px] font-semibold hover:bg-yellow-400 hover:duration-700 border border-black'>
        Click here
        <span className="material-symbols-outlined justify-center items-center">
          arrow_forward
        </span>
      </button>
    </section>
  );
}

export default Banner;
