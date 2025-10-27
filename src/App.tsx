import { useState } from 'react';
import { Search, ShoppingCart } from 'lucide-react';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full z-50 bg-gray-900 text-white transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-yellow-500 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                </svg>
              </div>
              <span className="text-xl font-bold">Arkio</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="relative py-2 group">
                <span className="relative z-10 transition-colors duration-300 group-hover:text-yellow-500">Home</span>
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </a>
              <a href="#about" className="relative py-2 group">
                <span className="relative z-10 transition-colors duration-300 group-hover:text-yellow-500">About</span>
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </a>
              <a href="#services" className="relative py-2 group">
                <span className="relative z-10 transition-colors duration-300 group-hover:text-yellow-500">Services</span>
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </a>
              <a href="#projects" className="relative py-2 group">
                <span className="relative z-10 transition-colors duration-300 group-hover:text-yellow-500">Projects</span>
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </a>
              <a href="#shop" className="relative py-2 group">
                <span className="relative z-10 transition-colors duration-300 group-hover:text-yellow-500">Shop</span>
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </a>
              <a href="#blog" className="relative py-2 group">
                <span className="relative z-10 transition-colors duration-300 group-hover:text-yellow-500">Blog</span>
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </a>
              <a href="#pages" className="relative py-2 group">
                <span className="relative z-10 transition-colors duration-300 group-hover:text-yellow-500">Pages</span>
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </a>
              <a href="#contact" className="relative py-2 group">
                <span className="relative z-10 transition-colors duration-300 group-hover:text-yellow-500">Contact</span>
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </a>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <button className="hover:text-yellow-500 transition-all duration-300 transform hover:scale-110">
                <Search className="w-5 h-5" />
              </button>
              <button className="hover:text-yellow-500 transition-all duration-300 transform hover:scale-110 relative">
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute -top-2 -right-2 bg-yellow-500 text-gray-900 text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  2
                </span>
              </button>
            </div>

            <button
              className="md:hidden w-10 h-10 relative focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className="sr-only">Open main menu</span>
              <div className="absolute w-6 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span
                  className={`absolute h-0.5 w-6 bg-white transform transition duration-300 ease-in-out ${
                    mobileMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
                  }`}
                ></span>
                <span
                  className={`absolute h-0.5 w-6 bg-white transform transition duration-300 ease-in-out ${
                    mobileMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                ></span>
                <span
                  className={`absolute h-0.5 w-6 bg-white transform transition duration-300 ease-in-out ${
                    mobileMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        <div
          className={`md:hidden bg-gray-800 border-t border-gray-700 overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-4 py-4 space-y-1">
            <a
              href="#home"
              className="block py-2 px-4 rounded-md hover:bg-gray-700 hover:text-yellow-500 transition-all duration-200 transform hover:translate-x-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#about"
              className="block py-2 px-4 rounded-md hover:bg-gray-700 hover:text-yellow-500 transition-all duration-200 transform hover:translate-x-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#services"
              className="block py-2 px-4 rounded-md hover:bg-gray-700 hover:text-yellow-500 transition-all duration-200 transform hover:translate-x-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#projects"
              className="block py-2 px-4 rounded-md hover:bg-gray-700 hover:text-yellow-500 transition-all duration-200 transform hover:translate-x-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </a>
            <a
              href="#shop"
              className="block py-2 px-4 rounded-md hover:bg-gray-700 hover:text-yellow-500 transition-all duration-200 transform hover:translate-x-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Shop
            </a>
            <a
              href="#blog"
              className="block py-2 px-4 rounded-md hover:bg-gray-700 hover:text-yellow-500 transition-all duration-200 transform hover:translate-x-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </a>
            <a
              href="#pages"
              className="block py-2 px-4 rounded-md hover:bg-gray-700 hover:text-yellow-500 transition-all duration-200 transform hover:translate-x-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pages
            </a>
            <a
              href="#contact"
              className="block py-2 px-4 rounded-md hover:bg-gray-700 hover:text-yellow-500 transition-all duration-200 transform hover:translate-x-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <AboutSection />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
