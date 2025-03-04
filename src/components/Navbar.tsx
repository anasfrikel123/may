import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingBag, Search, User } from 'lucide-react';
import Products from '../pages/Products';
import Blog from '../pages/Blog';
import About from '../pages/About';
import Home from '../pages/Home';
import Cart from '../pages/Cart';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-serif font-bold text-gray-900">May Style</span>
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link to="Home" className="border-transparent text-gray-900 hover:border-gray-700 hover:text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Home
              </Link>
              <Link to="about" className="border-transparent text-gray-500 hover:border-gray-700 hover:text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                About Us
              </Link>
              <Link to="Products" className="border-transparent text-gray-500 hover:border-gray-700 hover:text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Products
              </Link>
              <Link to="/blog" className="border-transparent text-gray-500 hover:border-gray-700 hover:text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                Blog
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-4">
            <button className="p-1 rounded-full text-gray-500 hover:text-gray-900 focus:outline-none">
              <Search size={20} />
            </button>
            <button className="p-1 rounded-full text-gray-500 hover:text-gray-900 focus:outline-none">
              <User size={20} />
            </button>
            <button className="p-1 rounded-full text-gray-500 hover:text-gray-900 focus:outline-none relative">
              <ShoppingBag size={20} />
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-black rounded-full">2</span>
            </button>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link to="Home" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800">
              Home
            </Link>
            <Link to="About" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800">
              About Us
            </Link>
            <Link to="Products" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800">
              Products
            </Link>
            <Link to="Blog" className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800">
              Blog
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-4 space-x-4">
              <button className="p-1 rounded-full text-gray-500 hover:text-gray-900 focus:outline-none">
                <Search size={20} />
              </button>
              <button className="p-1 rounded-full text-gray-500 hover:text-gray-900 focus:outline-none">
                <User size={20} />
              </button>
              <button className="p-1 rounded-full text-gray-500 hover:text-gray-900 focus:outline-none relative">
                <ShoppingBag size={20} />
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-black rounded-full">2</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;