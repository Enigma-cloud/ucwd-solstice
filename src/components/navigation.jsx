import React, { useState, useEffect, useCallback } from 'react';
import { useLocation, Link } from 'react-router-dom';

import LogoButton from './logo-button';
import BurgerMenu from './burger-menu';

const Navigation = () => {
  // State for managing navigation look
  const [navClass, setNavClass] = useState('');
  const [y, setY] = useState(100);
  const [isNavOpen, setNavOpen] = useState(false);

  const location = useLocation();

  const handleNavBackdrop = useCallback(
    e => {
      const window = e.currentTarget;
      if (y > window.scrollY) {
        setNavClass('');
      } else if (y < window.scrollY) {
        setNavClass('backdrop-blur bg-dark-body shadow-lg');
      }
    }, [y]
  );

  const handleMobileNav = () => {
    if (window.screen.width > 768) {
      return null;
    }

    setNavOpen(prevState => !prevState);
  }

  
  // Detects scrolling and changes navigation look
  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", (e) => handleNavBackdrop(e));
  
    return () => {
      window.removeEventListener("scroll", (e) => handleNavBackdrop(e));
    };
  }, [handleNavBackdrop]);

  return (
    <div className={`${navClass} w-full ${location.pathname === '/' ? 'text-white' : 'text-dark-body' } z-10 fixed top-0`}>
      <div className={`flex items-center w-full transition-all ease-in mx-auto py-4 px-8 md:px-14 lg:px-24`}>
        <LogoButton pageLocation={location.pathname} navStatus={navClass} />
        <BurgerMenu isNavOpen={isNavOpen} handleMobileNav={handleMobileNav} />
        {/* WORK IN PROGRESS */}
        <nav className={
          `absolute top-0 opacity-0 right-0 h-screen w-[50vw] 
          ${location.pathname !== '/' ? 'bg-white' : 'bg-dark-body' }  text-white
          transition-all ease-in
          justify-center items-center 
          ${isNavOpen ? 'translate-x-0 opacity-100' : 'translate-x-full md:translate-x-0 md:opacity-100'} 
          md:bg-transparent md:static md:flex md:h-fit md:w-fit`
        }>
          <ul className='flex flex-col h-full items-start px-12 pt-4 mt-[4.7rem] bg-slate-500
            md:bg-transparent md:m-0 md:p-0 md:space-x-12 md:flex-row md:justify-center md:items-center'
          >
            <li>
              <Link className='text-lg' to='/'>
                Home
              </Link>
            </li>
            <li>
              <Link className='text-lg' to='/explore'>
                Explore
              </Link>
            </li>
            <li>
              <Link className='text-lg' to='/contacts'>
                Contacts
              </Link>
            </li>
            <li>
              <Link className='text-lg' to='/signin'>
                Sign In
              </Link>
            </li>
            <li>
              <Link className='text-lg' to='/signup'>
                Sign Up
              </Link>
            </li>
          </ul>
        </nav>
      </div> 
    </div>
  )
}

export default Navigation