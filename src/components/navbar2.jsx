import React, { useState, memo } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Imagesearch from './Imagesearch'; // Import the search bar component
import { Link } from 'react-router-dom'; // Import Link for navigation

const Navbar2 = memo(({ searchText }) => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 1, text: 'Home', path: '/' },
    { id: 2, text: 'Uploads', path: '/uploads' },
    { id: 3, text: 'Resources', path: '/resources' },
    { id: 4, text: 'About', path: '/about' },
    { id: 5, text: 'Contact', path: '/contact' },
  ];

  return (
    <div className='bg-white mt-1 mb-8 flex justify-between items-center h-20 max-w-[1800px] mx-auto px-3 text-black border-2 border-black'>
      {/* Logo */}
      <h1 className='text-2xl font-bold text-black font-serif'>BLUME</h1>

      {/* Navigation and Search Container */}
      <div className='flex items-center flex-grow'>
        {/* Desktop Navigation */}
        <ul className='hidden md:flex gap-3 flex-grow justify-center text-lg font-medium'>
          {navItems.map(item => (
            <li key={item.id} className='px-2 py-1 hover:bg-black cursor-pointer duration-300 hover:text-white border-2 border-black'>
              <Link to={item.path}>{item.text}</Link>
            </li>
          ))}
        </ul>

        {/* Search Bar */}
        <div className='ml-auto'>
          <Imagesearch searchText={searchText} />
        </div>
      </div>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={`${
          nav ? 'left-0' : 'left-[-100%]'
        } fixed md:hidden top-0 w-[60%] h-full border-r border-black bg-white ease-in-out duration-500 z-50`}
      >
        {/* Mobile Logo */}
        <h1 className='text-2xl font-bold text-black m-4'>BLUME</h1>
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-3 border-b border-black hover:bg-black hover:text-white duration-300 cursor-pointer'
            onClick={() => setNav(false)} // Close menu on link click
          >
            <Link to={item.path}>{item.text}</Link>
          </li>
        ))}
        {/* Mobile Search Bar */}
        <div className='p-3'>
          <Imagesearch searchText={searchText} />
        </div>
      </ul>
    </div>
  );
});

export default Navbar2;
