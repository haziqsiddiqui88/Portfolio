import React from 'react'
import { TbMailFilled } from "react-icons/tb";
import { BsFillTelephoneInboundFill } from "react-icons/bs";

const Contact = () => {
  return (
    <div id='contact' className='pt-32 container'>
    <div className='grid md:grid-cols-2 gap-10'>
      <div className='space-y-8'>
   <h2 className='text-5xl'  data-aos='zoom-in-down'>Get In Touch</h2>
   <p className='text-gray-500 text-[20px] pt-2 '  style={{fontFamily: 'serif'}}  data-aos='zoom-in-down'>
      Drop me a line, give me a call, or send me a message by submitting the forms.
   </p>
   <div className='flex gap-3 items-center'  data-aos='zoom-in-down'>
   <TbMailFilled  size={30} />haziqsiddiqui880@gmail.com
   </div>
   <div className='flex gap-3 items-center'  data-aos='zoom-in-down'>
   <BsFillTelephoneInboundFill size={30} /> (92) 323-2453664

   </div>
      </div>

<div className='space-y-8'>
    <div className='flex flex-col gap-1'  data-aos='zoom-in-down'>
        <label htmlFor='name'>Name</label>
        <input type='text' className='h-[40px] bg-transparent border bg-green  '  id='name' />
    </div>
    <div className='flex flex-col gap-1'  data-aos='zoom-in-down'>
        <label htmlFor='email'>Email</label>
        <input type='text' className='h-[40px] bg-transparent border border-green' id='email' />
    </div>
    <div className='flex flex-col gap-1'  data-aos='zoom-in-down'>
        <label htmlFor='msg'>Message</label>
        <textarea  className=' bg-transparent border border-green' id='msg' rows={8}></textarea>

    </div>
    <button className='bg-accent p-2 px-6'  data-aos='zoom-in-down'  style={{ background: 'green' }}>Send</button>
    </div>
    </div>
  </div>
  )
}

export default Contact

