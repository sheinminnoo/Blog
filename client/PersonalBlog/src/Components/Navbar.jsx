import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef(null);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('click', handleClickOutside);
    } else {
      window.removeEventListener('click', handleClickOutside);
    }

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false); // Close the navbar when a link is clicked
  };



  return (
    <nav ref={navbarRef} className="bg-gray-800 p-4 fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src="https://i1.sndcdn.com/artworks-M3OMIcfwms82qqrz-AtR73w-t500x500.jpg" className="h-8 w-auto" alt="Logo" />
          <span className="text-white font-bold uppercase text-lg">PersonalBlog</span>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-white" onClick={handleLinkClick}>Home</Link>
          <Link to="/about" className="text-white" onClick={handleLinkClick}>About</Link>
          <Link to="/blogs/blogform" className="text-white" onClick={handleLinkClick}>Create</Link>
          <button onClick={handleLinkClick} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Login
          </button>
          <button onClick={handleLinkClick} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-2 border-b-4 border-blue-700 hover:border-blue-500 rounded">
            Register
          </button>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleNavbar} className="text-white focus:outline-none">
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path fillRule="evenodd" clipRule="evenodd" d="M5 4H19C19.5523 4 20 4.44772 20 5C20 5.55228 19.5523 6 19 6H5C4.44772 6 4 5.55228 4 5C4 4.44772 4.44772 4 5 4ZM19 10H5C4.44772 10 4 10.4477 4 11C4 11.5523 4.44772 12 5 12H19C19.5523 12 20 11.5523 20 11C20 10.4477 19.5523 10 19 10ZM19 18H5C4.44772 18 4 18.4477 4 19C4 19.5523 4.44772 20 5 20H19C19.5523 20 20 19.5523 20 19C20 18.4477 19.5523 18 19 18Z" fill="white"/>
              ) : (
                <path fillRule="evenodd" clipRule="evenodd" d="M3 4C3 3.44772 3.44772 3 4 3H20C20.5523 3 21 3.44772 21 4C21 4.55228 20.5523 5 20 5H4C3.44772 5 3 4.55228 3 4ZM20 11C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H20ZM20 19C20.5523 19 21 19.4477 21 20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20C3 19.4477 3.44772 19 4 19H20Z" fill="white"/>
              )}
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden mt-2 flex flex-col items-center space-y-4">
          <Link to="/" className="text-white py-2" onClick={handleLinkClick}>Home</Link>
          <Link to="/about" className="text-white py-2" onClick={handleLinkClick}>About</Link>
          <Link to="/blogs/blogform" className="text-white py-2" onClick={handleLinkClick}>Create</Link>
          <button onClick={handleLinkClick} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Login
          </button>
          <button onClick={handleLinkClick} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-2 border-b-4 border-blue-700 hover:border-blue-500 rounded">
            Register
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
