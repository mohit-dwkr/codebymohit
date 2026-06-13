import React from 'react';

const Featured: React.FC = () => {
  // Features list array data
  const projectFeatures: string[] = [
    "Online Admission Form",
    "Student Dashboard",
    "Study Material Management",
    "Admin Panel",
    "Notices & Updates",
    "Mobile Friendly"
  ];

  return (
    <section className="py-[60px] sm:py-[120px] bg-white w-full font-['Plus_Jakarta_Sans',sans-serif]">
      <div className="w-[90%] max-w-[1300px] mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-[700px] mx-auto mb-[50px] sm:mb-[70px]">
          <span className="inline-block bg-[#e8f0ff] text-[#2563eb] px-[18px] py-2.5 rounded-[50px] text-[14px] font-semibold">
            Featured Project
          </span>
          <h2 className="mt-5 text-[28px] sm:text-[40px] md:text-[52px] font-bold text-[#0f172a] leading-[1.15] sm:leading-[1.1]">
            Coaching Management <span className="text-[#2563eb]">System</span>
          </h2>
          <p className="mt-[18px] text-[#64748b] text-[16px] sm:text-[18px] stroke-none leading-[1.7] sm:leading-[1.8]">
            A complete web platform designed to manage admissions, study materials, notices and student access from a single dashboard.
          </p>
        </div>

        {/* Project Card Grid (Fixed typo 'grid-columns-1' to 'grid-cols-1' and added responsive gaps) */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 sm:gap-12 lg:gap-[60px] items-center bg-[#f8fafc] border border-[#e2e8f0] rounded-[32px] p-5 sm:p-10 lg:p-[50px] overflow-hidden">
          
          {/* Project Image Column */}
          <div className="w-full">
            <img 
              src="/Screenshot (1112).png" 
              alt="Project Preview" 
              className="w-full block border-2 border-slate-200 rounded-[20px] shadow-[0_15px_40px_rgba(15,23,42,0.08)]"
            />
          </div>

          {/* Project Content Column */}
          <div className="w-full">
            <h3 className="text-[24px] sm:text-[34px] font-bold text-[#0f172a] mb-4 sm:mb-5 leading-snug">
              Complete Coaching Management Platform
            </h3>
            <p className="text-[#64748b] text-[16px] sm:text-[17px] leading-[1.7] sm:leading-[1.8] mb-6 sm:mb-[35px]">
              Built for a coaching institute to streamline admissions, student management, study material distribution and important updates.
            </p>
            
            {/* Features Sub-Grid (Handles mobile 1 column and tablet/desktop 2 columns) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[14px] sm:gap-[18px] mb-8 sm:mb-10">
              {projectFeatures.map((feature, idx) => (
                <div 
                  key={idx} 
                  className="bg-white p-[14px_16px] sm:p-[15px_18px] rounded-[14px] border border-[#e2e8f0] text-[#0f172a] font-medium flex items-center gap-2.5 shadow-sm text-[14px] sm:text-[15px]"
                >
                  {/* Tailwind check icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4 text-[#2563eb] shrink-0">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  {feature}
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-[15px]">
              <a 
                href="https://coaching-2.netlify.app" 
                className="inline-block bg-[#2563eb] text-white no-underline p-[15px_26px] rounded-[14px] font-semibold transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 shadow-md shadow-blue-500/10 text-center text-[15px] sm:text-[16px]"
              >
                View Project &rarr;
              </a>
              
              {/* <a 
                href="#" 
                className="inline-block bg-transparent text-[#2563eb] border border-[#2563eb] no-underline p-[15px_26px] rounded-[14px] font-semibold transition-all duration-300 hover:bg-[#2563eb] hover:text-white text-center text-[15px] sm:text-[16px]"
              >
                Live Demo
              </a> */}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Featured;