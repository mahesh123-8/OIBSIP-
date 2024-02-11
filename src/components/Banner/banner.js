import React from 'react';
import banner from '../../assets/ai.jpg';
import logo from '../../assets/new.png'
const Banner = () => {
  return (
    <section>
      <img src={banner} alt="" className='w-full h-[600px]' />
      <img src={logo} alt="Logo" className='absolute left-[8%] transform -translate-x-1/2 -top-1 h-[6rem] ' />
      <h1 className="absolute top-[40%] left-1/2 font-thin transform -translate-x-1/2 -translate-y-1/2 text-black text-6xl">
        Hello We're here
      </h1>
    
      <p className='text-white bg-black shadow-sm shadow-black absolute top-[55%] left-[50%] font-semibold transform -translate-x-1/2 -translate-y-1/2   font-thin'>
      ChatGPT is a language model developed by OpenAI, specifically part of the GPT (Generative Pre-trained Transformer) series. The "GPT" in ChatGPT stands for "Generative Pre-trained Transformer." It is trained using a diverse range of internet text and is designed to generate human-like responses to text prompts.      </p>
   {/* <button type="button" class="  text-white bg-[#24292F] absolute hover:bg-[#24292F]/90 top-[70%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2">
   <a href="https://chat.openai.com/" >
    </a>

Sign in with Github
</button> */}
<button type="button" className=" text-white bg-[#24292F] absolute hover:bg-[#24292F]/90 top-[70%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2">
MORE EXPLORE
<a href="https://chat.openai.com/">
</a>
<svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10" >
<path stroke="currentColor" strokeLinecap="round"  strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>

</svg>
</button>

</section>
  );
}

export default Banner;
