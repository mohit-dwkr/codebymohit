import React from 'react';

// Process step ke liye TypeScript interface
interface ProcessStep {
  stepNumber: string;
  title: string;
  description: string;
}

const Process: React.FC = () => {
  // Process data array
  const processSteps: ProcessStep[] = [
    {
      stepNumber: "01",
      title: "Discussion",
      description: "Understanding your requirements, goals and project scope."
    },
    {
      stepNumber: "02",
      title: "Planning & Design",
      description: "Creating the layout, structure and user experience before development."
    },
    {
      stepNumber: "03",
      title: "Development",
      description: "Building a fast, responsive and modern website tailored to your needs."
    },
    {
      stepNumber: "04",
      title: "Testing & Delivery",
      description: "Final testing, optimization and deployment with support."
    }
  ];

  return (
    <section className="py-[120px] bg-[#f8fafc] w-full font-['Plus_Jakarta_Sans',sans-serif]">
      <div className="w-[90%] max-w-[1300px] mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-[700px] mx-auto">
          <span className="inline-block bg-[#e8f0ff] text-[#2563eb] px-[18px] py-2.5 rounded-[50px] text-sm font-semibold">
            Process
          </span>
          <h2 className="mt-5 text-[32px] sm:text-[40px] md:text-[52px] font-bold text-[#0f172a] leading-[1.1]">
            Simple & <span className="text-[#2563eb]">Transparent Process</span>
          </h2>
          <p className="mt-[18px] text-[#64748b] text-[18px] leading-[1.8]">
            From discussion to delivery, every project follows a structured process to ensure quality and smooth execution.
          </p>
        </div>

        {/* Process Grid */}
        <div className="mt-[70px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[25px]">
          {processSteps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#e2e8f0] rounded-[24px] p-[35px] relative transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(15,23,42,0.08)]"
            >
              {/* Step Number */}
              <div className="text-[52px] font-bold text-[#dbeafe] mb-5解决方案 mb-[20px] leading-none">
                {step.stepNumber}
              </div>

              {/* Step Title */}
              <h3 className="text-[24px] font-bold text-[#0f172a] mb-[15px]">
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="text-[#64748b] leading-[1.8]">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Process;