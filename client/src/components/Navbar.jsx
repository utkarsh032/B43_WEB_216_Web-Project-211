import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/Travel & Resort.png';

// Constants for repeated styles and links
const navLinkStyles = 'relative border rounded-2xl px-4 py-1 overflow-hidden transition-all duration-300 ease-in-out transform group';
const authButtonStyles = (isLogin) =>
  `border rounded-2xl px-6 py-1 ${isLogin ? 'bg-white text-black' : 'text-black hover:bg-blue-600 hover:text-white'
  } transition-all duration-300 ease-in-out transform`;
const dividerStyles = 'h-2 w-10 border border-l-0 border-r-0';

const navLinks = [
  { to: '/about', text: 'About' },
  { to: '/exchange', text: 'Exchange' },
  { to: '/services', text: 'Services' },
  { to: '/support', text: 'Support' },
];

function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is authenticated
    const token = localStorage.getItem('token');
    const storedUsername = localStorage.getItem('username');

    if (token && storedUsername) {
      setIsAuthenticated(true);
      setUsername(storedUsername);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    setIsAuthenticated(false);
    navigate('/signin');
  };

  return (
    <div className='flex items-center justify-between p-4'>
      <div className='flex items-center'>
        {/* Logo */}
        <div className=''>
          <Link to='/'>
            <img src={Logo} alt="Travel & Resort Logo" className='h-20 border rounded-full' />
          </Link>
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

      {/* Auth Section */}
      <div className='flex items-center border rounded-3xl px-6 py-2'>
        {isAuthenticated ? (
          <>
            <span className='text-black px-4 border rounded-full font-bold py-1'>👤 {username}</span>
            <div className={dividerStyles}></div>
            <button
              onClick={handleLogout}
              className={authButtonStyles(true)}
              aria-label='Logout'
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to='/signin' className={authButtonStyles(true)} aria-label='Login'>
              Login
            </Link>
            <div className={dividerStyles}></div>
            <Link to='/signup' className={authButtonStyles(false)} aria-label='Signup'>
              Signup
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
