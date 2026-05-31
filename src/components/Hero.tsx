import React from 'react';

// Features ke liye TypeScript Interface
interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Hero: React.FC = () => {
  const features: Feature[] = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.63 3.18a14.98 14.98 0 00-6.16 12.12A14.98 14.98 0 0015.59 14.37zm0 0L12 18.25" />
        </svg>
      ),
      title: "Modern & Fast",
      description: "High performance websites"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ),
      title: "Secure & Reliable",
      description: "Secure, scalable & reliable"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
        </svg>
      ),
      title: "Responsive",
      description: "Works perfectly on all devices"
    }
  ];

  return (
    <main className="w-full flex flex-col lg:flex-row items-center justify-between px-[4%] lg:px-[8%] py-10 lg:py-[40px] gap-10 font-['Plus_Jakarta_Sans',sans-serif]">
      
      {/* Left Content Column */}
      <div className="flex-1 max-w-[600px] text-center lg:text-left">
        {/* Badge */}
        <span className="bg-[#e2ecff] text-[#0052ff] px-4 py-1.5 rounded-[20px] text-v small font-semibold inline-block mb-5 text-[13px]">
          Web Developer
        </span>

        {/* Heading */}
        <h1 className="text-[34px] sm:text-[44px] font-extrabold text-[#0f172a] leading-[1.2] mb-5">
          Building Modern Websites & Management Systems for{' '}
          <span className="text-[#0052ff]">Coaching Institutes</span>
        </h1>

        {/* Paragraph Description */}
        <p className="text-[#566885] text-base leading-[1.6] mb-[35px]">
          I help coaching institutes and educational businesses grow online with professional websites and powerful management systems.
        </p>

        {/* Call To Action Buttons */}
        <div className="flex flex-wrap gap-[15px] mb-[50px] justify-center lg:justify-start">
          <button className="bg-[#0052ff] hover:bg-[#003ecb] text-white font-semibold px-7 py-3.5 rounded-g border-none rounded-lg flex items-center gap-2.5 transition-all duration-300 cursor-pointer">
            View My Work
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5l6 6m0 0l-6 6m6-6H3" />
            </svg>
          </button>
          
          <button className="bg-transparent text-[#0052ff] border-[1.5px] border-[#0052ff] hover:bg-[#e2ecff]/30 font-semibold px-7 py-3.5 rounded-lg flex items-center gap-2.5 transition-all duration-300 cursor-pointer">
            Let's Work Together
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
            </svg>
          </button>
        </div>

        {/* Features Row */}
        <div className="flex flex-col sm:flex-row justify-between gap-[25px] sm:gap-[15px] text-left">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-3">
              {/* Icon Container */}
              <div className="bg-[#e2ecff] text-[#0052ff] p-2.5 rounded-lg flex items-center justify-center shrink-0">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#0f172a]">{feature.title}</h3>
                <p className="text-xs text-[#64748b] mt-0.5">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Mockup Image Column */}
      <div className="flex-1 w-full flex justify-center items-center bg-[#f3f7fa] p-5">
        <img
         src="/Gemini_Generated_Image_x3qqmrx3qqmrx3qq.png"
          alt="Dashboard Mockup"
          className="w-[110%] max-w-[650px] h-auto mix-blend-multiply transition-transform duration-300 hover:scale-[1.02]"
        />
      </div>

    </main>
  );
};

export default Hero;