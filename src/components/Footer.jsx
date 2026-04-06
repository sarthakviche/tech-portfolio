import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] w-full py-10 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

        <div>
          <span className="text-white font-headline font-black tracking-tighter text-lg uppercase">Sarthak Viche</span>
          <p className="font-label text-[10px] uppercase tracking-[0.2em] text-gray-600 mt-1">
            © 2026 · Built with React & Vite
          </p>
        </div>

        <div className="flex gap-6 items-center">
          <a
            href="https://www.linkedin.com/in/sarthakviche/"
            target="_blank" rel="noopener noreferrer"
            className="font-label text-[10px] uppercase tracking-widest text-gray-500 hover:text-white transition-colors no-underline"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/sarthakviche"
            target="_blank" rel="noopener noreferrer"
            className="font-label text-[10px] uppercase tracking-widest text-gray-500 hover:text-white transition-colors no-underline"
          >
            GitHub
          </a>
          <a
            href="https://x.com/sarthakviche"
            target="_blank" rel="noopener noreferrer"
            className="font-label text-[10px] uppercase tracking-widest text-gray-500 hover:text-white transition-colors no-underline"
          >
            X
          </a>
          <a
            href="https://www.instagram.com/sarthak.viche/"
            target="_blank" rel="noopener noreferrer"
            className="font-label text-[10px] uppercase tracking-widest text-gray-500 hover:text-white transition-colors no-underline"
          >
            Instagram
          </a>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse shadow-[0_0_6px_rgba(74,222,128,0.6)]"></div>
          <span className="font-label text-[10px] uppercase tracking-widest text-gray-600">Open to work</span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
