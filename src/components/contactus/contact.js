import React from 'react'



const Contact = () => {
  return (
    <section>
      <div className='max-w-screen-md px-4 py-8 mx-auto lg:py-16 '><h1 className='text-4xl font-bold text-center text-white underline'>ContactUs</h1>
      <p className='text-xl font-thin text-center text-white text-wrap'>hello we're using the good content for your <br /> need like the basics human need so let me know <br /> what we'll provide to you</p>
   
   <form action="#" className='space-y-8'>
   <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
              <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@chatgpt.com" required/>
          </div>
          <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Password</label>
              <input type="password" id="subject" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@chatgpt.com" required/>
          </div>
          <div className='sm:col-span-2'>
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-black dark:text-white">Your Message</label>
<textarea name="Your Message" id="message" cols="95" rows="5" className='border border-white ' placeholder='Your Message'></textarea>
          </div>
          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Submit</button>

   </form>
   </div>
    </section>
  )
}

export default Contact