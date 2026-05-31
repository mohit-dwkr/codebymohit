import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="py-[120px] bg-white w-full font-['Plus_Jakarta_Sans',sans-serif]">
      <div className="w-[90%] max-w-[1300px] mx-auto">
        
        {/* Gradient CTA Card */}
        <div className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] rounded-[40px] padding-90-60 p-[60px_25px] sm:p-[90px_60px] text-center relative overflow-hidden">
          
          {/* Decorative Glowing Circle Blur (CSS ::before replacement) */}
          <div className="absolute w-[350px] h-[350px] bg-[#2563eb] blur-[120px] opacity-25 -top-[100px] -right-[100px] pointer-events-none z-0" />

          {/* Subtag/Badge */}
          <span className="inline-block px-[18px] py-2.5 rounded-[50px] bg-white/5 text-[#93c5fd] text-[14px] font-semibold relative z-10 backdrop-blur-sm">
            Let's Build Something Great Together
          </span>

          {/* Main Title Heading */}
          <h2 className="mt-[25px] text-[42px] md:text-[64px] font-bold text-white leading-[1.1] relative z-10">
            Have a Project in Mind?
          </h2>

          {/* Description Paragraph */}
          <p className="max-w-[700px] mx-auto mt-[25px] text-[#cbd5e1] text-[16px] md:text-[18px] leading-[1.9] relative z-10">
            Looking for a modern website, admin panel or custom management system? Let's discuss your idea and turn it into a professional digital experience.
          </p>

          {/* Action Buttons Layout */}
          <div className="mt-[45px] flex justify-center relative z-10">
            <a 
              href="#" 
              className="no-underline font-semibold bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-30 py-4 px-[30px] rounded-[14px] transition-all duration-300 hover:-translate-y-0.75 shadow-lg shadow-blue-500/20 text-center"
            >
              Let's Talk
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;