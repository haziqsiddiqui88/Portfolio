import React, { useState } from 'react';
import { CgMenuRight } from 'react-icons/cg';

const Navbar = () => {
  // State to handle mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className='container pt-8'>
       <div className='flex py-4 px-4 justify-between items-center'>
        <h1 className='text-4xl font-semibold'>
          Haziq <span className='text-green-500'>.</span>
        </h1>
        {/* Desktop Menu (visible on medium screens and up) */}
        <ul className='gap-10  lg:gap-16 hidden md:flex ml-auto'>
          <li className='menulink'><a href='#hero'>Home</a></li>
          <li className='menulink'><a href='#about'>About</a></li>
          <li className='menulink'><a href='#projects'>Projects</a></li>
          <li className='menulink'><a href='#skills'>Skills</a></li>
          <li className='menulink'><a href='#contact'>Contact</a></li>
        </ul>
     
        {/* Mobile Menu Toggle Icon */}
        <CgMenuRight 
          className='md:hidden block cursor-pointer' 
          size={30} 
          onClick={toggleMobileMenu} 
          aria-label='Toggle mobile menu'
         
        />
      </div>

      {/* Mobile Menu (visible when isMobileMenuOpen is true) */}
      {isMobileMenuOpen && (
        <div className='md:hidden flex flex-col items-center mt-4'>
          <a href='#hero' className='py-2'>Home</a>
          <a href='#about' className='py-2'>About</a>
          <a href='#projects' className='py-2'>Projects</a>
          <a href='#skills' className='py-2'>Skills</a>
          <a href='#contact' className='py-2'>Contact</a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
