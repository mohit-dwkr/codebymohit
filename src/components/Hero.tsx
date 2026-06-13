import React from 'react';
import { ArrowRight, Laptop, ShieldCheck, Smartphone, Sparkles, MessageSquare } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[calc(100vh-80px)] w-full overflow-hidden bg-[#fafcff] px-4 py-8 sm:px-8 md:px-16 lg:px-24 flex items-center">

      {/* --- BACKGROUND GRAPHICS & GRADIENTS --- */}
      <div className="absolute top-[-5%] right-[-10%] h-[300px] w-[300px] sm:h-[600px] sm:w-[600px] rounded-full bg-gradient-to-br from-blue-200/40 to-teal-100/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-5%] left-[-5%] h-[250px] w-[250px] sm:h-[400px] sm:w-[400px] rounded-full bg-gradient-to-tr from-indigo-100/30 to-blue-50/20 blur-3xl pointer-events-none" />

      {/* Decorative Floating Ring/Circle Element in Background */}
      <div className="absolute right-[15%] top-[25%] hidden lg:block w-96 h-96 rounded-full border border-blue-200/30 pointer-events-none transform rotate-45 after:content-[''] after:absolute after:inset-4 after:rounded-full after:border after:border-dashed after:border-blue-300/20 animate-[spin_60s_linear_infinite]" />

      {/* Responsive Grid System */}
      <div className="mx-auto max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">

        {/* --- LEFT COLUMN: TEXT CONTENT (Responsive Alignment Fixed) --- */}
        {/* Yahan maine items-center (for mobile) aur lg:items-start (for laptop) use kiya hai */}
        <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 order-1">

          {/* Web Developer Tag (Ab mobile me perfectly center me dikhega) */}
          <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-100 text-blue-600 px-4 py-1.5 rounded-full w-fit shadow-sm">
            <Sparkles className="w-4 h-4 text-blue-500 fill-blue-500" />
            <span className="text-xs font-semibold tracking-wide uppercase">Web Developer</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-[30px] sm:text-4xl md:text-5xl lg:text-[50px] font-extrabold text-slate-900 leading-[1.2] md:leading-[1.15] tracking-tight">
            Building High-Converting Websites & Scalable <br className="hidden md:inline" />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Web Applications
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-sm sm:text-base text-slate-600 max-w-xl leading-relaxed">
            I help brands, startups, and modern businesses grow online with high-performance, custom-crafted websites and powerful backend management ecosystems.
          </p>

          {/* Dual Call To Actions (CTAs) */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 w-full">
            <a
              href="#projects" // Projects section ki ID par target karega
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3.5 rounded-xl shadow-lg shadow-blue-600/20 transition-all duration-300 transform hover:-translate-y-0.5 group no-underline"
            >
              <span>View My Work</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <a
              // NOTE: '91' ke aage apna 10-digit real WhatsApp number daal dena
              href="https://wa.me/919630955951"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 border border-slate-200 bg-white/80 backdrop-blur-sm hover:bg-slate-50 text-slate-700 font-semibold px-6 py-3.5 rounded-xl shadow-sm transition-all duration-300 transform hover:-translate-y-0.5 no-underline"
            >
              <span>Let's Work Together</span>
              <MessageSquare className="w-4 h-4 text-slate-500" />
            </a>
          </div>

          {/* --- THREE FEATURE ICONS ROW --- */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-6 border-t border-slate-100 max-w-xl w-full">
            {/* Modern & Fast */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left space-y-2 sm:space-y-0 sm:space-x-3">
              <div className="flex-shrink-0 p-2 sm:p-2.5 bg-blue-50 border border-blue-100 rounded-xl text-blue-600 shadow-sm">
                <Laptop className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-800 leading-snug">Modern & Fast</h4>
                <p className="text-xs text-slate-500 mt-0.5 hidden md:block">High performance tech stack</p>
              </div>
            </div>

            {/* Secure & Reliable */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left space-y-2 sm:space-y-0 sm:space-x-3">
              <div className="flex-shrink-0 p-2 sm:p-2.5 bg-indigo-50 border border-indigo-100 rounded-xl text-indigo-600 shadow-sm">
                <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-800 leading-snug">Secure & Clean</h4>
                <p className="text-xs text-slate-500 mt-0.5 hidden md:block">Scalable architecture</p>
              </div>
            </div>

            {/* Responsive */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left space-y-2 sm:space-y-0 sm:space-x-3">
              <div className="flex-shrink-0 p-2 sm:p-2.5 bg-teal-50 border border-teal-100 rounded-xl text-teal-600 shadow-sm">
                <Smartphone className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-800 leading-snug">Responsive</h4>
                <p className="text-xs text-slate-500 mt-0.5 hidden md:block">Works on all screens</p>
              </div>
            </div>
          </div>

        </div>

        {/* --- RIGHT COLUMN: MOCKUP CONTAINER --- */}
        <div className="lg:col-span-6 flex justify-center items-center relative w-full h-full min-h-[320px] sm:min-h-[400px] lg:min-h-[500px] order-2 mt-4 lg:mt-0">

          <div className="relative w-full max-w-[450px] sm:max-w-[550px] lg:max-w-[620px] p-4 flex items-center justify-center transition-transform duration-500 hover:scale-[1.01] group">

            {/* 1. Behind-the-scenes Glass Card */}
            <div className="absolute inset-4 bg-white/20 backdrop-blur-md rounded-3xl border border-white/40 shadow-2xl pointer-events-none transform -rotate-1 group-hover:rotate-0 transition-transform duration-500" />

            {/* 2. Floating Analytics Card Element */}
            <div className="absolute top-6 left-[-10px] sm:left-0 z-20 bg-white/90 backdrop-blur-md border border-slate-100 rounded-xl p-2 sm:p-3 shadow-lg flex items-center space-x-2 sm:space-x-3 animate-[bounce_4s_infinite_2s]">
              <div className="w-1.5 h-6 sm:w-2 sm:h-8 bg-blue-500 rounded-full" />
              <div className="w-1.5 h-4 sm:w-2 sm:h-5 bg-indigo-400 rounded-full" />
              <div className="w-1.5 h-5 sm:w-2 sm:h-6 bg-teal-400 rounded-full" />
              <div className="text-[9px] sm:text-[10px] font-bold text-slate-600 uppercase tracking-wider pr-1">Live Analytics</div>
            </div>

            {/* 3. Floating Metrics Tag Element */}
            <div className="absolute right-[-15px] sm:right-[-10px] top-[45%] z-20 bg-white/80 backdrop-blur-md border border-white/60 rounded-xl p-2 sm:p-3 shadow-xl flex flex-col space-y-1 min-w-[90px] sm:min-w-[100px] text-left animate-[bounce_4s_infinite]">
              <div className="text-[9px] sm:text-[10px] text-slate-400 font-medium">Performance</div>
              <div className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                <span>99.8%</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              </div>
            </div>

            {/* 4. Primary Device Mockup Image */}
            <img
              src="/Gemini_Generated_Image_x3qqmrx3qqmrx3qq.png"
              alt="Premium Dashboard Mockup Showcase"
              className="relative z-10 w-full h-auto drop-shadow-[0_15px_25px_rgba(0,0,0,0.06)] md:drop-shadow-[0_25px_35px_rgba(0,0,0,0.08)] select-none pointer-events-none object-contain"
            />

            {/* Subtle soft gradient glow behind the device laptop base */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[80%] h-4 bg-slate-900/10 blur-xl rounded-full z-0" />
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;