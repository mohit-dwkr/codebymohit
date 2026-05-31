import React from 'react';

// Project item ke liye TypeScript interface
interface Project {
  imageSrc: string;
  category: string;
  title: string;
  description: string;
  projectUrl: string;
}

const Projects: React.FC = () => {
  // Projects data array
  const projectsData: Project[] = [
    {
      imageSrc: "Screenshot (1112).png",
      category: "Client Project",
      title: "Coaching Management System",
      description: "Complete admission, study material and student management platform.",
      projectUrl: "#"
    },
    {
      imageSrc: "/images/project2.jpg",
      category: "Personal Project",
      title: "Developer Portfolio Website",
      description: "Modern portfolio designed to showcase projects and services.",
      projectUrl: "#"
    },
    {
      imageSrc: "/images/project3.jpg",
      category: "Concept Project",
      title: "School Website Concept",
      description: "Professional school website focused on admissions and online presence.",
      projectUrl: "#"
    }
  ];

  return (
    <section className="py-[120px] bg-white w-full font-['Plus_Jakarta_Sans',sans-serif] ">
      <div className="w-[90%] max-w-[1300px] mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-[700px] mx-auto">
          <span className="inline-block bg-[#e8f0ff] text-[#2563eb] px-[18px] py-2.5 rounded-[50px] text-sm font-semibold">
            Projects
          </span>
          <h2 className="mt-5 text-[32px] sm:text-[40px] md:text-[52px] font-bold text-[#0f172a] leading-[1.1]">
            Selected <span className="text-[#2563eb]">Projects</span>
          </h2>
          <p className="mt-[18px] text-[#64748b] text-[18px] leading-[1.8]">
            A collection of projects showcasing modern design, functionality and user-focused development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="mt-[70px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px] ">
          {projectsData.map((project, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#e2e8f0] rounded-[24px] overflow-hidden transition-all duration-350 ease-out hover:-translate-y-2.5 hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)] group"
            >
              {/* Project Image Box */}
              <div className="overflow-hidden ">
                <img
                  src={project.imageSrc}
                  alt={project.title}
                  className="w-full block transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
              </div>

              {/* Project Info / Details */}
              <div className="padding-28 p-[28px]">
                {/* Category Badge */}
                <span className="inline-block px-[14px] py-2 bg-[#dbeafe] text-[#2563eb] rounded-[50px] text-[13px] font-semibold mb-[18px]">
                  {project.category}
                </span>

                {/* Title */}
                <h3 className="text-[24px] font-bold text-[#0f172a] mb-[14px]">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-[#64748b] leading-[1.8] mb-[20px]">
                  {project.description}
                </p>

                {/* Link */}
                <a
                  href={project.projectUrl}
                  className="text-decoration-none text-[#2563eb] font-semibold flex items-center gap-1 transition-all group-hover:underline"
                >
                  View Project &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;