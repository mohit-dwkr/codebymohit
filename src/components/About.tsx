import React from 'react';

// Stats data ke liye TypeScript interface
interface StatItem {
  value: string;
  label: string;
}

const About: React.FC = () => {
  // Stats items array
  const statsData: StatItem[] = [
    { value: "2+", label: "Projects" },
    { value: "1+", label: "Clients" },
    { value: "100%", label: "Responsive" }
  ];

  return (
    <section className="py-[120px] bg-[#f8fafc] w-full font-['Plus_Jakarta_Sans',sans-serif]">
      <div className="w-[90%] max-w-[1300px] mx-auto">
        
        {/* About Wrapper Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[450px_1fr] gap-[50px] lg:gap-[80px] items-center">
          
          {/* Left Column: Image */}
          <div className="w-full max-w-[450px] mx-auto lg:mx-0 relative">
            <img 
              src="mohit-photo.jpg" // Agar public/images me hai toh direct chalega
              alt="Mohit" 
              className="w-full block rounded-[30px] shadow-[0_20px_50px_rgba(15,23,42,0.12)]"
            />
          </div>

          {/* Right Column: Content */}
          <div className="w-full text-left">
            <span className="inline-block bg-[#e8f0ff] text-[#2563eb] px-[18px] py-2.5 rounded-[50px] text-sm font-semibold">
              About Me
            </span>

            <h2 className="mt-5 text-[38px] md:text-[52px] font-bold text-[#0f172a] leading-[1.1]">
              Hi, I'm <span className="text-[#2563eb]">Mohit</span>
            </h2>

            <p className="mt-[25px] text-[#64748b] text-[17px] leading-[1.9]">
              I'm a web developer focused on building modern websites, admin panels and management systems that help businesses establish a professional online presence and streamline their operations.
            </p>

            <p className="mt-[25px] text-[#64748b] text-[17px] leading-[1.9]">
              My goal is to create clean, responsive and user-friendly digital experiences that are not only visually appealing but also practical and easy to manage.
            </p>

            {/* Stats Block */}
            <div className="flex flex-wrap gap-10 mt-10">
              {statsData.map((stat, idx) => (
                <div key={idx} className="min-w-[100px]">
                  <h3 className="text-[#2563eb] text-[34px] font-bold mb-2">
                    {stat.value}
                  </h3>
                  <span className="text-[#64748b]">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-[15px] mt-10">
              <a 
                href="#" 
                className="inline-block bg-[#2563eb] text-white no-underline px-[26px] py-15 py-[15px] rounded-[14px] font-semibold transition-all duration-300 hover:-translate-y-0.5 shadow-md shadow-blue-500/10 text-center"
              >
                View LinkedIn
              </a>
              <a 
                href="#" 
                className="inline-block bg-transparent text-[#2563eb] border border-[#2563eb] no-underline px-[26px] py-[15px] rounded-[14px] font-semibold transition-all duration-300 hover:bg-[#2563eb] hover:text-white text-center"
              >
                Contact Me
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;