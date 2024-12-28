import React from 'react'
import Navbar from './Navbar'
import Image from 'next/image'
const Hero = () => {
  return (
    <div id='hero' className=' min-h-screen   '
     >
      <Navbar />
      <div className='container grid lg:grid-cols-2  h-[calc(90vh-60px)]' >
        <div className='hidden md:flex items-center justify-center   '>
         
          <Image src={'/profile.jpg'} alt='Profile' width={400} height={400}
           className=' bg-gray-500 shadow-2xl shadow-gray-500/50 rounded-full'/>
        </div>
        <div className='flex  flex-col items-center  justify-center mx-auto  
         font-playwrite '>
          <div className='grid grid-rows-2 mt-[50px] '>
           <div className='ml-12'>
            <h1 className='text-6xl '  data-aos='zoom-in-down'> Haziq Siddiqui</h1>
            <p  className='mt-5 ml-[60px] text-[30px] font-bold' data-aos='zoom-in-down'>I&apos;m a Web Developer </p>
            
            </div><div>
            <p className="text-[20px] mt-3 -ml-5 text-gray-400 italic mx-auto " data-aos='zoom-in-down'> 
      I believe, "Exploring the future one algorithm at a time, because 
      <span className="font-bold underline ml-2 text-gray-600">AI</span><span className='ml-12'> and</span>
      <span className="font-bold underline  ml-1 text-gray-600">WEB DEVELOPMENT</span> 
       <span className='ml-1'>is the language of tomorrow"</span>
    </p></div>
          </div>
          <div className='-ml-[120px]'>
                  <a href='https://github.com/haziqsiddiqui88/' target='_black' className='text-xl p-2 px-3 bg-indigo-800 cursor-pointer rounded-md transition ease-in-out hover:bg-indigo-700  shadow-2xl shadow-indigo-500/50'>Github<i className="fa-brands fa-github ps-2"></i></a>
                 
     </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
