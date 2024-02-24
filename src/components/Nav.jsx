import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import { FiMenu } from 'react-icons/fi'; // Import hamburger icon from react-icons library
import { useState } from 'react';


const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-900 text-white py-4 px-6 md:py-8 md:px-12 lg:px-20">
      <nav className="flex justify-between items-center max-w-screen-xl mx-auto">
        <a href="/">
          <img
            src={headerLogo}
            alt="logo"
            width={129}
            height={29}
            className="w-auto h-8 md:h-10"
          />
        </a>
        <div className="hidden md:flex md:items-center md:space-x-6">
          <ul className="flex space-x-6">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-base font-semibold hover:text-gray-300 transition duration-300"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex space-x-6">
            <a
              href="/"
              className="text-base font-medium hover:text-gray-300 transition duration-300"
            >
              Sign in
            </a>
            <span className="text-base">/</span>
            <a
              href="/"
              className="text-base font-medium hover:text-gray-300 transition duration-300"
            >
              Explore now
            </a>
          </div>
        </div>
        {/* Hamburger menu for mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <FiMenu className="w-6 h-6" />
          </button>
        </div>
      </nav>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4">
          <ul className="space-y-4">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="block text-lg font-semibold hover:text-gray-300 transition duration-300"
                  onClick={toggleMenu}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/"
                className="block text-lg font-semibold hover:text-gray-300 transition duration-300"
                onClick={toggleMenu}
              >
                Sign in
              </a>
            </li>
            <li>
              <a
                href="/"
                className="block text-lg font-semibold hover:text-gray-300 transition duration-300"
                onClick={toggleMenu}
              >
                Explore now
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Nav;
