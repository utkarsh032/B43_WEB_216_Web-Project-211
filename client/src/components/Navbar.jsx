import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Travel & Resort.png';

// Constants for repeated styles and links
const navLinkStyles = 'relative border rounded-2xl px-4 py-1 overflow-hidden transition-all duration-300 ease-in-out transform group';
const authButtonStyles = (isLogin) =>
  `border rounded-2xl px-6 py-1 ${isLogin ? 'bg-white text-black' : 'text-black hover:bg-blue-600 hover:text-white'
  } transition-all duration-300 ease-in-out transform`;
const dividerStyles = 'h-2 w-10 border border-l-0 border-r-0';

const navLinks = [
  { to: '/about', text: 'About' },
  { to: '/technology', text: 'Technology' },
  { to: '/services', text: 'Services' },
  { to: '/support', text: 'Support' },
];

const authButtons = [
  { path: '/signin', text: 'Login', onClick: () => console.log('Login clicked') },
  { path: '/signup', text: 'Signup', onClick: () => console.log('Signup clicked') },
];

function Navbar() {
  return (
    <div className='flex items-center justify-between p-4'>
      <div className='flex items-center'>
        {/* Logo */}
        <div className=''>
          <img src={Logo} alt="Travel & Resort Logo" className='h-20 border rounded-full' />
        </div>
        <div className={dividerStyles}></div>
        {/* NavLinks */}
        <nav className='flex items-center border rounded-3xl px-6 py-2'>
          {navLinks.map((link, index) => (
            <React.Fragment key={link.to}>
              <Link
                to={link.to}
                className={navLinkStyles}
                aria-label={link.text}
              >
                <span className='relative z-10'>{link.text}</span>
                <span className='absolute inset-0 bg-white transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-in-out'></span>
              </Link>
              {index < navLinks.length - 1 && <div className={dividerStyles} />}
            </React.Fragment>
          ))}
        </nav>
      </div>

      {/* Auth Buttons */}
      <div className='flex items-center border rounded-3xl px-6 py-2'>
        {authButtons.map((button, index) => (
          <React.Fragment key={button.text}>
            <Link
              to={button.path}
              className={authButtonStyles(button.text === 'Login')}
              onClick={button.onClick}
              aria-label={button.text}
            >
              {button.text}
            </Link>
            {index < authButtons.length - 1 && <div className={dividerStyles} />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default Navbar;