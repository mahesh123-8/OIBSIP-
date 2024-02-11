import React from 'react'
import  docs from '../../assets/docs1.jpg'
import chat from '../../assets/chatgpton.png'
const Brief = () => {
  return (
<section className=''>
  <div className='flex items-center '>
    <img
      src={docs}
      alt=""
      className='h-[300px] mr-12 ml-[18%] mt-20 rounded-md mb-20 hover:scale-[1.2] transition-all duration-500'
    />

    <div className='grid grid-cols-1 '>
      
      <p className='text-lg font-thin text-white'>
        It excels in natural language understanding and generation, <br /> showcasing remarkable capabilities in comprehending and
        <br /> producing human-like text. Trained on diverse datasets, <br /> ChatGPT exhibits proficiency in a wide range of tasks, from
        <br /> answering questions and generating creative content to assisting
        <br /> with coding queries.
      </p>
      <button
        type="button"
        className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        See Moree....
      </button>
    </div>
  </div>

  <div className='flex items-center '>
  {/* <div>
      <h1 className='text-2xl font-semibold'>Research On Chatgpt</h1>
      </div> */}
    <p className='text-white mb-4 text-lg font-thin mt-2 mr-12 ml-[18%] '>
     
      It excels in natural language understanding and generation, <br /> showcasing remarkable capabilities in comprehending and
      <br /> producing human-like text. Trained on diverse datasets, <br /> ChatGPT exhibits proficiency in a wide range of tasks, from
      <br /> answering questions and generating creative content to assisting
      <br /> with coding queries. <br />
      <button
        type="button"
        className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium font-semibold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-full"
      >
        See Moree....
      </button>
    </p>
    <div className='grid grid-cols-1'>
      <img
        src={chat}
        alt=""
        className='h-[300px] mr-12 ml-[18%] mt-20 rounded-md mb-20 hover:scale-[1.2] transition-all duration-500'
      />
    </div>
  </div>
</section>
  )
}

export default Brief;