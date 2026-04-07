import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full">
      <nav className="bg-[#0e0e0e]/60 backdrop-blur-xl rounded-full mt-4 mx-auto max-w-fit px-6 py-2 border border-[#2c2c2c]/20 shadow-[0_0_40px_rgba(41,98,255,0.05)] flex items-center gap-8">
        <Link to="/" className="text-xl font-black text-white tracking-tighter font-headline uppercase no-underline">
          Sarthak Viche
        </Link>
        <div className="hidden md:flex items-center gap-6">
          <Link 
            to="/" 
            className="text-[#2962FF] font-black border-b-2 border-[#2962FF] pb-0.5 font-headline tracking-tight uppercase hover:text-white hover:scale-105 transition-all duration-300 no-underline"
          >
            Home
          </Link>
          <a className="text-gray-400 font-medium font-label text-xs tracking-tight uppercase hover:text-white hover:scale-105 transition-all duration-300 no-underline" href="#projects">Projects</a>
          <a className="text-gray-400 font-medium font-label text-xs tracking-tight uppercase hover:text-white hover:scale-105 transition-all duration-300 no-underline" href="#about">About</a>
          <a className="text-gray-400 font-medium font-label text-xs tracking-tight uppercase hover:text-white hover:scale-105 transition-all duration-300 no-underline" href="#connect">Connect</a>
        </div>
        <div className="flex items-center gap-4 ml-4">
          <a
            href="/resume.pdf"
            download
            className="hidden sm:flex items-center gap-2 px-4 py-1.5 bg-primary/10 border border-primary/30 rounded-full font-label text-[10px] uppercase tracking-widest text-primary hover:bg-primary hover:text-white transition-all duration-300"
          >
            <span className="material-symbols-outlined text-sm">download</span>
            Resume
          </a>
          <span className="material-symbols-outlined text-gray-400 hover:text-white cursor-pointer transition-colors" data-icon="grid_view">grid_view</span>
          <span className="material-symbols-outlined text-gray-400 hover:text-white cursor-pointer transition-colors" data-icon="terminal">terminal</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
