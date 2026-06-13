import React from 'react';

// Stats data ke liye TypeScript interface
interface StatItem {
  value: string;
  label: string;
}

const About: React.FC = () => {
  // Stats items array
  const statsData: StatItem[] = [
    { value: "5+", label: "Projects" },
    { value: "1+", label: "Clients" },
    { value: "100%", label: "Responsive" }
  ];

  return (
    <section className="py-[60px] sm:py-[120px] bg-[#f8fafc] w-full font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Fixed: text-center ko condition-based responsive kiya hai */}
      <div className="w-[90%] max-w-[1300px] mx-auto flex flex-col items-center lg:items-start text-center lg:text-left">

        {/* About Me Tag */}
        <span className="inline-block bg-[#e8f0ff] text-[#2563eb] px-[18px] py-2 rounded-[50px] text-[14px] font-semibold w-fit mx-auto lg:mx-auto mb-20 mt-[-50px]">
          About Me
        </span>

        {/* About Wrapper Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[450px_1fr] gap-[40px] lg:gap-[80px] items-center w-full">

          {/* Left Column: Image */}
          <div className="w-full max-w-[340px] sm:max-w-[450px] mx-auto lg:mx-0 relative">
            <img
              src="mohit-photo.png"
              alt="Mohit"
              className="w-full block rounded-[30px] shadow-[0_20px_50px_rgba(15,23,42,0.12)]"
            />
          </div>

          {/* Right Column: Content */}
          <div className="w-full flex flex-col items-center lg:items-start text-center lg:text-left">

            <h2 className="text-[32px] sm:text-[38px] md:text-[52px] font-bold text-[#0f172a] leading-[1.15] sm:leading-[1.1]">
              Hi, I'm <span className="text-[#2563eb]">Mohit</span>
            </h2>

            <p className="mt-[20px] sm:mt-[25px] text-[#64748b] text-[14px] sm:text-[17px] leading-[1.8] sm:leading-[1.9]">
              I'm a web developer focused on building modern websites, admin panels and management systems that help businesses establish a professional online presence and streamline their operations.
            </p>

            <p className="mt-[15px] sm:mt-[25px] text-[#64748b] text-[14px] sm:text-[17px] leading-[1.8] sm:leading-[1.9]">
              My goal is to create clean, responsive and user-friendly digital experiences that are not only visually appealing but also practical and easy to manage.
            </p>

            {/* Stats Block */}
            <div className="flex flex-row justify-center lg:justify-start gap-8 sm:gap-10 mt-8 sm:mt-10 w-full sm:w-auto">
              {statsData.map((stat, idx) => (
                <div key={idx} className="min-w-[80px] sm:min-w-[100px] text-center lg:text-left">
                  <h3 className="text-[#2563eb] text-[28px] sm:text-[34px] font-bold mb-1 sm:mb-2">
                    {stat.value}
                  </h3>
                  <span className="text-[#64748b] text-[14px] sm:text-[16px]">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            {/* Fixed: Duplicate py classes removed & handled for mobile */}
            <div className="flex flex-col sm:flex-row gap-[15px] mt-8 sm:mt-10 w-full sm:w-auto justify-center lg:justify-start">
              <a
                href="https://linkedin.com/in/mohit-a83472367"
                className="w-full sm:w-auto inline-block bg-[#2563eb] text-white no-underline px-[26px] py-[15px] rounded-[14px] font-semibold transition-all duration-300 hover:-translate-y-0.5 shadow-md shadow-blue-500/10 text-center"
              >
                View LinkedIn
              </a>
              <a
                href="https://wa.me/919630955951"
                className="w-full sm:w-auto inline-block bg-transparent text-[#2563eb] border border-[#2563eb] no-underline px-[26px] py-[15px] rounded-[14px] font-semibold transition-all duration-300 hover:bg-[#2563eb] hover:text-white text-center"
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