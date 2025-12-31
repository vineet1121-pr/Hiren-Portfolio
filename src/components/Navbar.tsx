import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b border-gray-800 bg-black/95 backdrop-blur-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="text-xl sm:text-2xl font-bold text-white tracking-wider flex items-center gap-2">
            <svg className="w-6 h-6 sm:w-7 sm:h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span><span className="text-accent">HIREN</span> VADHER</span>
          </Link>
          
          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-accent transition"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex gap-8">
            <Link 
              to="/" 
              className="text-gray-300 hover:text-accent transition font-medium tracking-wide"
            >
              Home
            </Link>
            <Link 
              to="/gallery" 
              className="text-gray-300 hover:text-accent transition font-medium tracking-wide"
            >
              Gallery
            </Link>
            <Link 
              to="/services" 
              className="text-gray-300 hover:text-accent transition font-medium tracking-wide"
            >
              Services
            </Link>
            <Link 
              to="/about" 
              className="text-gray-300 hover:text-accent transition font-medium tracking-wide"
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-300 hover:text-accent transition font-medium tracking-wide"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 bg-black/95 backdrop-blur-sm">
            <Link 
              to="/" 
              onClick={() => setIsOpen(false)}
              className="block py-2 text-gray-300 hover:text-accent transition font-medium"
            >
              Home
            </Link>
            <Link 
              to="/gallery" 
              onClick={() => setIsOpen(false)}
              className="block py-2 text-gray-300 hover:text-accent transition font-medium"
            >
              Gallery
            </Link>
            <Link 
              to="/services" 
              onClick={() => setIsOpen(false)}
              className="block py-2 text-gray-300 hover:text-accent transition font-medium"
            >
              Services
            </Link>
            <Link 
              to="/about" 
              onClick={() => setIsOpen(false)}
              className="block py-2 text-gray-300 hover:text-accent transition font-medium"
            >
              About
            </Link>
            <Link 
              to="/contact" 
              onClick={() => setIsOpen(false)}
              className="block py-2 text-gray-300 hover:text-accent transition font-medium"
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
