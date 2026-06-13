import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';

interface NavLink {
  label: string;
  href: string;
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeLink, setActiveLink] = useState<string>('Home');

  const navLinks: NavLink[] = [
    { label: 'Home', href: '#' },
    { label: 'Services', href: '#' },
    { label: 'Projects', href: '#' },
    { label: 'About', href: '#' },
    { label: 'Process', href: '#' },
    { label: 'Reviews', href: '#' },
    { label: 'Contact', href: '#' },
  ];

  return (
    // YAHAN BADLAAV KIYA HAI: bg-transparent hatakar sticky, top-0, z-50 aur glassmorphism background lagaya hai
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-100/50 px-[8%] py-4 flex justify-between items-center font-['Plus_Jakarta_Sans',sans-serif] transition-all duration-300">
      {/* Logo */}
      <div className="text-[22px] font-extrabold text-[#0f172a] tracking-tight">
        <span className="text-[#0052ff]">&lt;/&gt;</span> CodeByMohit
      </div>

      {/* Desktop Navigation Links */}
      <nav className="hidden md:flex items-center space-x-[30px]">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={() => setActiveLink(link.label)}
            className={`text-[15px] font-medium transition-all duration-300 no-underline pb-1
              ${activeLink === link.label
                ? 'text-[#0052ff] border-b-2 border-[#0052ff]'
                : 'text-[#475569] hover:text-[#0052ff] hover:border-b-2 hover:border-[#0052ff]'
              }`}
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* Action Button (Desktop) */}
      <div className="hidden md:block">
        <a
          // NOTE: '91' ke aage apna 10-digit real WhatsApp number daal dena bina space ya '+' ke
          href="https://wa.me/919630955951"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex bg-[#0052ff] hover:bg-[#003ecb] text-white px-6 py-3 rounded-[30px] font-semibold items-center gap-2 transition-all duration-300 cursor-pointer no-underline"
        >
          <MessageSquare className="w-4 h-4" />
          Let's Talk
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5l6 6m0 0l-6 6m6-6H3" />
          </svg>
        </a>
      </div>

      {/* Hamburger Menu Icon (Mobile Only) */}
      <button
        className="md:hidden text-[#0f172a] focus:outline-none cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-7 h-7"
        >
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md p-6 flex flex-col space-y-4 md:hidden z-50 border-t border-gray-100">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => {
                setActiveLink(link.label);
                setIsOpen(false);
              }}
              className={`text-[15px] font-medium py-2 border-b border-gray-50
                ${activeLink === link.label ? 'text-[#0052ff]' : 'text-[#475569]'}`}
            >
              {link.label}
            </a>
          ))}

          <a
            // NOTE: '91' ke aage apna 10-digit real WhatsApp number daal dena bina space ya '+' ke
            href="https://wa.me/919630955951"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0052ff] hover:bg-[#003ecb] text-white px-6 py-3 rounded-[30px] font-semibold flex items-center justify-center gap-2 transition-all duration-300 w-full no-underline"
          >
            Let's Talk
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5l6 6m0 0l-6 6m6-6H3" />
            </svg>
          </a>

        </div>
      )}
    </header>
  );
};

export default Navbar;