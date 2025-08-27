import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
      const [isMenuOpen, setIsMenuOpen] = useState(false);
    
  return (
      <div className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-blue-400">Echoes</h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 px-3 py-2 text-sm font-medium"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-blue-300 px-3 py-2 text-sm font-medium"
                >
                  Quotes
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-blue-300 px-3 py-2 text-sm font-medium"
                >
                  Stories
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-blue-300 px-3 py-2 text-sm font-medium"
                >
                  Favorites
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-blue-300 px-3 py-2 text-sm font-medium"
                >
                  Settings
                </a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-blue-300 p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-800 border-t border-gray-700">
                <a
                  href="#"
                  className="text-blue-400 block px-3 py-2 text-base font-medium"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-blue-300 block px-3 py-2 text-base font-medium"
                >
                  Quotes
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-blue-300 block px-3 py-2 text-base font-medium"
                >
                  Stories
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-blue-300 block px-3 py-2 text-base font-medium"
                >
                  Favorites
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-blue-300 block px-3 py-2 text-base font-medium"
                >
                  Settings
                </a>
              </div>
            </div>
          )}
        </div>
      </div>  )
}

export default Navbar