import React from 'react';

// Service item ke liye TypeScript interface
interface ServiceItem {
  icon: string;
  title: string;
  description: string;
}

const Services: React.FC = () => {
  // Services ka static data array
  const servicesData: ServiceItem[] = [
    {
      icon: "🌐",
      title: "Website Development",
      description: "Modern, responsive and fast-loading websites tailored to your business needs."
    },
    {
      icon: "⚙️",
      title: "Admin Panels",
      description: "Easy-to-manage dashboards that allow you to control content and data efficiently."
    },
    {
      icon: "📊",
      title: "Management Systems",
      description: "Custom solutions for admissions, study materials, updates and business workflows."
    },
    {
      icon: "🎨",
      title: "UI / UX Design",
      description: "Clean and user-friendly interfaces focused on better user experience."
    }
  ];

  return (
    <section className="py-[120px] bg-white w-full font-['Plus_Jakarta_Sans',sans-serif]">
      <div className="w-[90%] max-w-[1300px] mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-[700px] mx-auto">
          <span className="inline-block bg-[#e8f0ff] text-[#2563eb] px-[18px] py-2.5 rounded-[50px] text-sm font-semibold">
            Services
          </span>
          <h2 className="mt-5 text-[32px] sm:text-[40px] md:text-[52px] font-bold text-[#0f172a] leading-[1.1]">
            Services I <span className="text-[#2563eb]">Provide</span>
          </h2>
          <p className="mt-[18px] text-[#64748b] text-[18px] leading-[1.8]">
            Modern web solutions designed to help businesses build a strong online presence and manage operations efficiently.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-[70px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-[25px]">
          {servicesData.map((service, idx) => (
            <div
              key={idx}
              className="bg-[#f8fafc] border border-[#e2e8f0] rounded-[24px] p-[35px] transition-all duration-300 ease-out cursor-pointer hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(15,23,42,0.08)] group"
            >
              {/* Icon Box */}
              <div className="w-[65px] h-[65px] flex items-center justify-center text-[28px] rounded-[16px] bg-[#dbeafe] mb-25 mb-[25px] transition-colors duration-300 group-hover:bg-[#2563eb]/10">
                {service.icon}
              </div>

              {/* Service Title */}
              <h3 className="text-[24px] font-bold text-[#0f172a] mb-[15px]">
                {service.title}
              </h3>

              {/* Service Description */}
              <p className="text-[#64748b] line-height-[1.8] leading-[1.8]">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;