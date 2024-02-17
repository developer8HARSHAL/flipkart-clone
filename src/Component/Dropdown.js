import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart, faListAlt, faSignInAlt } from '@fortawesome/free-solid-svg-icons';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOutsideClick = (e) => {
    if (e.target.id === 'dropdown-button') {
      toggleDropdown();
    }
  };

  return (
    <div className="relative" onClick={handleOutsideClick}>
      {/* Dropdown button */}
      <button
        id="dropdown-button"
        className="flex items-center text-gray-700 hover:text-gray-900 focus:outline-none"
        onClick={toggleDropdown}
      >
        <span className="mr-1 font-xl">Login</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-4 w-4 transform rotate-280"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <ul
          className="absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="dropdown-button"
        >
          <li>
            <a
              href="/Signup.js"
              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              <FontAwesomeIcon icon={faSignInAlt} className="mr-2" />
              Signup
            </a>
          </li>
          <li>
            <a
              href="/favourites"
              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              <FontAwesomeIcon icon={faUser} className="mr-2" />
              Favourites
            </a>
          </li>
          <li>
            <a
              href="/gift"
              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
              Gift
            </a>
          </li>
          <li>
            <a
              href="/orders"
              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              <FontAwesomeIcon icon={faListAlt} className="mr-2" />
              Orders
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;