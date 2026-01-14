import { projectsData } from "../data/projects.js";
import Wave from "../assets/wave-3.png";
import { ExternalLinkIcon, VideoIcon } from "@radix-ui/react-icons";

const Projects = () => {
  const handleCardClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <>
      <div>
        <h5 className="text-xl text-white mb-5 lg:hidden">Projects</h5>
        <div className="grid space-y-3">
          {projectsData.map((project, index) => (
            <div
              key={index} // Always include a key
              onClick={() => handleCardClick(project.projectSite)}
              className="cursor-pointer"
            >
              <div className="group grid grid-cols-10 gap-1 text-gray-200 rounded-md p-3 hover:bg-white/5 hover:shadow  transition-colors duration-150">
                <img
                  src={project.imagePath}
                  alt="placeholder image text"
                  className="mt-1 p-1 col-span-3 rounded-lg mask-radial-from-15% group-hover:mask-radial-from-90% "
                />
                <div className="col-span-7 ml-1">
                  <h5 className="font-medium group-hover:text-orange-400 transition-colors duration-150">
                    {project.projectTitle}
                  </h5>
                  <p className="text-sm">{project.description}</p>
                  {project.links && project.links.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {project.links.map((link, index) => (
                        <a
                          href={link.url}
                          key={index}
                          target="_blank"
                          className="hover:text-teal-200 flex flex-row items-center text-white"
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
                          className="inline-block px-3 py-1 rounded-full text-sm bg-orange-400/10 text-orange-400 border border-orange-400/10 shadow-2xs"
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
      </div>
    </>
  );
};

export default Projects;
