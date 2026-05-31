import React from 'react';

// Social link data ke liye interface
interface SocialLink {
  label: string;
  url: string;
}

const Footer: React.FC = () => {
  // Social networks array
  const socialLinks: SocialLink[] = [
    { label: "LinkedIn", url: "#" },
    { label: "GitHub", url: "#" },
    { label: "Instagram", url: "#" },
    { label: "YouTube", url: "#" }
  ];

  return (
    <footer className="bg-white border-t border-[#e2e8f0] pt-[70px] pb-[30px] w-full font-['Plus_Jakarta_Sans',sans-serif]">
      <div className="w-[90%] max-w-[1300px] mx-auto">
        
        {/* Footer Center Content Wrapper */}
        <div className="text-center max-w-[700px] mx-auto">
          
          {/* Brand Logo / Title */}
          <h3 className="text-[#0f172a] text-[32px] font-bold mb-[15px]">
            CodeByMohit
          </h3>

          {/* Tagline */}
          <p className="text-[#64748b] text-[16px] leading-[1.8] mb-[35px]">
            Building modern websites and digital experiences.
          </p>

          {/* Social Links Cards Layout */}
          <div className="flex justify-center gap-[15px] flex-wrap mb-[35px]">
            {socialLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                className="no-underline text-[#0f172a] font-semibold px-5 py-3  bg-[#f8fafc] border border-[#e2e8f0] rounded-[12px] transition-all duration-300 ease-out hover:-translate-y-[3px] hover:border-[#2563eb] hover:text-[#2563eb]"
              >
                {link.url.startsWith('#') ? "" : null}
                {link.label}
              </a>
            ))}
          </div>

          {/* Copyright Divider & Text */}
          <div className="border-t border-[#e2e8f0] pt-[25px] text-center">
            <p className="text-[#94a3b8] text-[14px]">
              © 2026 CodeByMohit. All rights reserved.
            </p>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;