import React from 'react';
// Lucide React ke built-in clean icons import kiye hain
import { Linkedin, Github, Instagram, Youtube } from 'lucide-react';

// Social link data ke liye interface
interface SocialLink {
  label: string;
  url: string;
  icon: React.ReactNode; // Direct component render karne ke liye
}

const Footer: React.FC = () => {
  // Social networks array using Lucide Icons
  const socialLinks: SocialLink[] = [
    { label: "LinkedIn",url: "https://linkedin.com/in/mohit-a83472367", icon: <Linkedin className="w-4 h-4" /> },
    { label: "GitHub", url: "https://github.com/mohit-dwkr", icon: <Github className="w-4 h-4" /> },
    { label: "Instagram", url: "https://instagram.com/codeby.mohit", icon: <Instagram className="w-4 h-4" /> },
    { label: "YouTube", url: "https://www.youtube.com/@CodeByMohitYT", icon: <Youtube className="w-4 h-4" /> }
  ];

  return (
    <footer className="bg-white border-t border-[#e2e8f0] pt-12 sm:pt-[80px] pb-6 sm:pb-10 w-full font-['Plus_Jakarta_Sans',sans-serif]">
      <div className="w-[90%] max-w-[1300px] mx-auto">
        
        {/* Responsive Grid Structure: Mobile pe Single Column, Laptop pe Split Side-by-Side */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 lg:gap-[60px] items-start pb-10 sm:pb-14">
          
          {/* Left Block: Brand Info */}
          <div className="text-center lg:text-left max-w-[500px] mx-auto lg:mx-0">
            <h3 className="text-[#0f172a] text-[26px] sm:text-[32px] font-bold tracking-tight mb-2.5 sm:mb-[15px]">
              CodeBy<span className="text-[#2563eb]">Mohit</span>
            </h3>
            <p className="text-[#64748b] text-[15px] sm:text-[16px] leading-[1.7] sm:leading-[1.8]">
              Building modern websites, web applications, and dynamic digital experiences with clean and scalable code.
            </p>
          </div>

          {/* Right Block: Premium Interactive Social Media Network Cards */}
          <div className="flex justify-center lg:justify-end gap-3 sm:gap-[15px] flex-wrap w-full sm:w-auto">
            {socialLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                className="no-underline text-[#475569] font-medium px-4 sm:px-5 py-2.5 sm:py-3.5 bg-[#f8fafc] border border-[#e2e8f0] rounded-[14px] flex items-center gap-2.5 transition-all duration-300 ease-out hover:-translate-y-[4px] hover:border-[#2563eb] hover:text-[#2563eb] hover:bg-blue-50/30 hover:shadow-lg hover:shadow-blue-500/5 text-[14px] sm:text-[15px]"
              >
                {/* Lucide icon content wrappers */}
                <span className="transition-colors duration-300 flex items-center justify-center">{link.icon}</span>
                <span>{link.label}</span>
              </a>
            ))}
          </div>

        </div>

        {/* Bottom Bar: Divider line & Standard Legal Copyright info */}
        <div className="border-t border-[#e2e8f0] pt-6 sm:pt-[25px] flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <p className="text-[#94a3b8] text-[13px] sm:text-[14px]">
            © 2026 CodeByMohit. All rights reserved.
          </p>
          <p className="text-[#cbd5e1] text-[13px] sm:text-[14px] hidden sm:block">
            Designed with ❤️ for performance
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;