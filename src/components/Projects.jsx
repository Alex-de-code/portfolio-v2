import { useState } from "react";
import { projectsData } from "../data/projects.js";
import { ExternalLinkIcon, VideoIcon } from "@radix-ui/react-icons";
import portfolioImage from "../assets/portfolio-v1.png";
import connectionsImage from "../assets/telegram_screenshot.png";

const projectFilters = [
  { id: "all", label: "All Projects" }, // Everything
  { id: "technical", label: "Technical" }, // Coding, development, implementation
  { id: "educator", label: "Educator" }, // Teaching, tutorials, documentation
  { id: "strategist", label: "Strategist" }, // Planning, architecture, leadership
  { id: "connector", label: "Connector" }, // User-focused, client-facing, collaboration
];

const imageMap = {
  "portfolio-v1": portfolioImage,
  telegram_screenshot: connectionsImage,
};
const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects =
    activeFilter === "all"
      ? projectsData
      : projectsData.filter((p) => p.categories?.includes(activeFilter));

  const handleCardClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="projects" aria-label="Projects section">
      <h2 className="text-xl text-white mb-5 lg:hidden">Projects</h2>
      <div className="hidden lg:block mb-6">
        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-400">Focus:</span>
          <div className="flex flex-wrap gap-2">
            {projectFilters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-3 py-1.5 text-sm rounded-full transition-colors duration-150 ${
                  activeFilter === filter.id
                    ? "bg-white/10 text-white border border-white/20"
                    : "bg-white/1 text-gray-300/75 border border-white/10 hover:bg-white/10 hover:text-white group"
                }`}
              >
                <span className="group-hover:text-white transition-colors duration-150">
                  {filter.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="grid space-y-3">
        {filteredProjects.map((project, index) => (
          <div
            key={index} // Always include a key
            onClick={(e) => {
              // Only trigger card click if NOT clicking on a link
              const isLinkClick =
                e.target.closest("a") || e.target.closest("button");
              if (!isLinkClick && project.projectSite) {
                handleCardClick(project.projectSite);
              }
            }}
            className="cursor-pointer"
          >
            <div className="group grid grid-cols-10 gap-1 text-gray-200 rounded-md p-3 hover:bg-white/5 hover:shadow  transition-colors duration-150">
              <img
                src={imageMap[project.imageName]}
                alt="placeholder image text"
                className="mt-1 p-1 col-span-3 rounded-lg mask-radial-from-15% group-hover:mask-radial-from-90% "
              />
              <div className="col-span-7 ml-1">
                <h3 className="font-medium group-hover:text-orange-400 transition-colors duration-150">
                  {project.projectTitle}
                </h3>
                <p className="text-sm">{project.description}</p>
                {project.links && project.links.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {project.links.map((link, index) => (
                      <a
                        href={link.url}
                        key={index}
                        target="_blank"
                        className="hover:text-sky-400 flex flex-row items-center text-white"
                      >
                        <ExternalLinkIcon className="h-4 w-4 mr-1" />
                        <p className="text-sm">{link.label}</p>
                      </a>
                    ))}
                  </div>
                )}
                {project.tech && project.tech.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tech.map((tool, index) => (
                      <div
                        key={index}
                        className="inline-block px-3 py-1 rounded-full text-sm  bg-orange-500/30 text-white border border-orange-500/50 shadow-2xs"
                      >
                        {tool}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
