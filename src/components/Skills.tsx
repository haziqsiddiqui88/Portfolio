import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
        <div className='grid md:grid-cols-2 gap-20 items center'>
            <div  data-aos='zoom-in-down'>
                <h2 className='text-4xl md:text-5xl' >Technologies I Work With</h2>
                <p className='text-gray-500  pt-2' style={{fontSize:'18px',fontFamily: 'serif'}}>
                    I have a solid foundation in web development, specializing in HTML, CSS & JavaScript. My 
                    experience extends to using frameworks like Next.js to create dynamic and user-friendly applications.
                     I&apos;m also proficient in Tailwind CSS for efficient styling and design. With a passion for learning,
                      I stay updated on the latest technologies to enhance my 
                    skills set & contribute effectively to Projects. 
                </p>
            </div>
            <div >
                <div className=' grid grid-cols-2  text-3xl sm:text-4xl' style={{ color: 'green' }}>
                    <div className='space-y-2'>
                    <h2  data-aos='zoom-in-down'>Typescript</h2>
                        <h2  data-aos='zoom-in-down'>React.js</h2>
                        <h2  data-aos='zoom-in-down'>Next.js</h2>
                    </div>
                    <div className='space-y-2'>
                    <h2  data-aos='zoom-in-down'>HTML</h2>
                        <h2  data-aos='zoom-in-down'>CSS</h2>
                        <h2  data-aos='zoom-in-down'>JavaScript</h2>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Skills
