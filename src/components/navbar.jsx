import React, { useState,memo } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Imagesearch from './Imagesearch'; // Import the search bar component
import { Link } from 'react-router-dom'; // Import Link for navigation

const Navbar = React.memo(({ searchText }) => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 1, text: 'Home', path: '' },
    { id: 2, text: 'Uploads', path: '' }, 
    { id: 3, text: 'Resources', path: '' }, 
    { id: 4, text: 'About', path: '/about' },
    { id: 5, text: 'Contact', path: '' },
  ];

  return (
    <div className='bg-white mt-2 mb-9 flex justify-between items-center h-24 max-w-[2040px] mx-auto px-4 text-black border-2 border-black'>
      {/* Logo */}
      <h1 className='text-3xl font-bold text-black font-sans md:font-serif'>BLUME</h1>

      {/* Navigation and Search Container */}
      <div className='flex items-center '>
        {/* Desktop Navigation */}
        <ul className='hidden md:flex gap-3 ml-44 mr-40 text-xl font-semibold'>
          {navItems.map(item => (
            <li key={item.id} className='p-4 hover:bg-black m-2 cursor-pointer duration-300 hover:text-white border-2 border-black'>
              <Link to={item.path}>{item.text}</Link> {/* Link each item */}
            </li>
          ))}
        </ul>

        {/* Search Bar */}
        <div className='ml-auto'>
          <Imagesearch searchText={searchText} /> {/* Pass the searchText prop to Imagesearch */}
        </div>
      </div>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-white bg-white ease-in-out duration-500 z-50'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%] z-50'
        }
      >
        {/* Mobile Logo */}
        <h1 className='text-3xl bg-white font-bold text-black m-4'>BLUME</h1>
        {navItems.map(item => (
          <li key={item.id} className='p-4 border-b hover:bg-black duration-300 hover:text-white cursor-pointer border-black'>
            <Link to={item.path}>{item.text}</Link> {/* Link each item */}
          </li>
        ))}
      </ul>
    </div>
  );
});

export default Navbar;
