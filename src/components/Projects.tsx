import React from 'react'
import Heading from './Heading'
import Card from './Card'
const data = [
    { 
        id: 0,
        title:'Modern Calculator' ,
       
       img:'/project-01.png' ,
       tags: ['HTML',' CSS', 'Javascript '],
    },
    { 
        id: 1,
        title:'Profile Card' ,
       
       img:'/project-02.png' ,
       tags: ['HTML', 'CSS'],
    },
    { 
        id: 2,
        title: 'Online Form',
      
       img: '/project-03.png',
       tags: ['HTML'],
    },
    { 
        id: 3,
        title:'Currency Convertor' ,
       
       img: '/project-04.png',
       tags: ['Typescript', 'Javascript'],
    },
    { 
        id: 4,
        title: 'Cli Number Guessing',
       
       img: '/project-05.png',
       tags: ['Typescript', 'Javascript'],
    },
    { 
        id: 5,
        title:'Todos List' ,
       
       img: '/project-06.png',
       tags: ['Typescript', 'avascript'],
    },
]


const Projects = () => {
  return (
   <div  id='projects' className='container pt-32'>
    <Heading title='My Projects' />
    <div className='mt-5 grid gap-20 xl:gap-0 xl:gap-y-10 sm:ml-32 md:grid-cols-2 lg:grid-cols-3 '>
        {data.map((el) =>(<Card 
         key={el.id}
         title={el.title}
        img={el.img}
        tags={el.tags}
        />))}
    </div>
   </div>
  )
}

export default Projects
