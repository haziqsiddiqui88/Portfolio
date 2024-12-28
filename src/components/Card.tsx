import React from 'react'
import Image from 'next/image';
interface propsType{
    title: string;
    img : string;
tags: string[];    
    
}

const Card:React.FC<propsType> = ({title, img, tags}) => {
  return (
    <div className='border border-accent w-[300px] sm:w-[350px]' data-aos='zoom-in-down'>
      <div>
        <Image className='w-[300px] sm:w-[350px] h-auto '
        src={img}
        width={350}
        height={350}
        alt={title}
        />
      </div>
      <div className='p-4 space-y-4'>
        <div className='text-4xl font-extralight'>{title}</div>
           <div>
            {tags.map((el) =>( <div className='tags' key={el}>
          {el}
            </div>))}
           </div>
      </div>
    </div>
  )
}

export default Card
