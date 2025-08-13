import React from 'react';

const ContactPage = () => {
  return (
    <footer className="bg-black text-white min-h-screen flex flex-col justify-center items-center p-4 sm:p-6 md:p-8">
      <div className="w-full flex-grow flex flex-col justify-center items-center">
        <div className="bg-[#121212] rounded-3xl p-6 sm:p-8 md:p-24 w-full max-w-7xl mx-auto flex flex-col items-center justify-center min-h-[300px] sm:min-h-[350px] md:min-h-[500px]">
          <div className="text-4xl sm:text-5xl md:text-8xl lg:text-[140px] font-light mb-4 sm:mb-1 text-center tracking-tighter group cursor-pointer">
            <span className="hover:opacity-50 transition-opacity duration-300">LET'S TALK</span>
          </div>
          <div className="w-full border-t border-gray-700 mb-6 sm:mb-4"></div>
          <div className="w-full flex flex-col sm:flex-row sm:flex-wrap sm:justify-between items-center gap-4 sm:gap-6 md:gap-8 text-base sm:text-lg">
            <a className="group flex items-center gap-2 hover:text-gray-300 transition-colors duration-300 relative" href="mailto:alex@gmail.com">
              <span className="relative">
                alex@gmail.com
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </span>
              <svg className="w-5 h-5 sm:w-6 sm:h-6 transform transition-transform duration-300 group-hover:rotate-0" fill="currentColor" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"></path>
              </svg>
            </a>
            
            <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-8">
              <a className="group hover:text-gray-300 transition-colors duration-300 relative" href="https://twitter.com" rel="noopener noreferrer" target="_blank">
                <span className="relative">
                  Twitter
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </span>
              </a>
              <a className="group hover:text-gray-300 transition-colors duration-300 relative" href="https://instagram.com" rel="noopener noreferrer" target="_blank">
                <span className="relative">
                  Instagram
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </span>
              </a>
              <a className="group hover:text-gray-300 transition-colors duration-300 relative" href="https://tiktok.com" rel="noopener noreferrer" target="_blank">
                <span className="relative">
                  TikTok
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </span>
              </a>
              <a className="group hover:text-gray-300 transition-colors duration-300 relative" href="https://facebook.com" rel="noopener noreferrer" target="_blank">
                <span className="relative">
                  Facebook
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </span>
              </a>
            </div>
            
            <a className="group flex items-center gap-2 hover:text-gray-300 transition-colors duration-300 relative" href="tel:+1234567890">
              <span className="relative">
                (123) 456 789
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </span>
              <svg className="w-5 h-5 sm:w-6 sm:h-6 transform transition-transform duration-300 group-hover:rotate-0" fill="currentColor" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 mt-4 sm:mt-2 md:mt-0.5 px-4 md:px-0">
        <div className="flex flex-wrap justify-center md:justify-start gap-4 sm:gap-6 text-gray-400">
          <a className="group hover:text-white transition-colors duration-300 relative" href="/home">
            <span className="relative">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </span>
          </a>
          <a className="group hover:text-white transition-colors duration-300 relative" href="/photos">
            <span className="relative">
              Photos
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </span>
          </a>
          <a className="group hover:text-white transition-colors duration-300 relative" href="/videos">
            <span className="relative">
              Videos
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </span>
          </a>
          <a className="group hover:text-white transition-colors duration-300 relative" href="/about">
            <span className="relative">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </span>
          </a>
          <a className="group hover:text-white transition-colors duration-300 relative" href="/contact">
            <span className="relative">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </span>
          </a>
          <a className="group hover:text-white transition-colors duration-300 relative" href="/privacy">
            <span className="relative">
              Privacy
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </span>
          </a>
        </div>
        <div className="text-gray-400 text-sm text-center md:text-right">
          Designed in <a className="group hover:text-white transition-colors duration-300 relative" href="https://framer.com" rel="noopener noreferrer" target="_blank">
            <span className="relative">
              Framer
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </span>
          </a> By <a className="group hover:text-white transition-colors duration-300 relative" href="#" target="_blank">
            <span className="relative">
              Thaer
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default ContactPage;