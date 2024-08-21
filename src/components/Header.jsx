import React from 'react';

const Header = () => {
    return (
      <header className="bg-black grad-text text-white">
        <div className="container mx-auto flex justify-between items-center py-4 px-6 w-full">
          
          <img 
            src="/assets/sign.png" 
            alt="Your Logo" 
            className="w-32 h-auto object-cover rounded-lg shadow-lg"
          />
          
          {/* Navigation */}
          <nav className="flex-1">
            <ul className="flex justify-end space-x-8">
              <li><a href="/" className="hover:text-gray-300">Home</a></li>
              <li><a href="skills" className="hover:text-gray-300">Skills</a></li>
              <li><a href="#Portfolio" className="hover:text-gray-300">Portfolio</a></li>
              <li><a href="#journey" className="hover:text-gray-300">Journey</a></li>
              <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
            </ul>
          </nav>
          
        </div>
      </header>
    );
  };


export default Header;
