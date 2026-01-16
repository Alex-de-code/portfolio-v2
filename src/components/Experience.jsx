import { useState } from "react";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import { experiencesData } from "../data/experiences.js";

const experienceFilters = [
  { id: "all", label: "All Experience" }, // Everything
  { id: "technical", label: "Technical" }, // Coding, development, technical execution
  { id: "educational", label: "Teaching" }, // Education, mentoring, knowledge transfer
  { id: "leadership", label: "Leadership" }, // Management, strategy, team leadership
  { id: "client", label: "Client-Facing" }, // Consulting, client work, stakeholder management, customer service
];

const Experience = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredExperiences =
    activeFilter === "all"
      ? experiencesData
      : experiencesData.filter((exp) => exp.categories?.includes(activeFilter));

  const handleCardClick = (url) => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  // const handleLinkClick = (e, url) => {
  //   e.stopPropagation(); // Prevent card click
  //   window.open(url, "_blank", "noopener,noreferrer");
  // };
  return (
    <>
      {/* <hr className="border-2 rounded-2xl border-white/70" /> */}
      {/* <h6 className="text-gray-200 text-xl text- ">Experience</h6> */}
      {/* map through array of experience objects, will create conditional renders for relevant links section */}
      <h5 className="text-xl text-white mb-5 lg:hidden">Experience</h5>
      <div className="hidden lg:block mb-6">
        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-400">Roles:</span>
          <div className="flex flex-wrap gap-2">
            {experienceFilters.map((filter) => (
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
        {filteredExperiences.map((experience, index) => (
          <div
            key={index}
            onClick={(e) => {
              // Only trigger card click if NOT clicking on a link
              const isLinkClick =
                e.target.closest("a") || e.target.closest("button");
              if (!isLinkClick && experience.companySite) {
                handleCardClick(experience.companySite);
              }
            }}
            className="cursor-pointer"
          >
            <div className="group grid grid-cols-1 gap-1 text-gray-200 rounded-md p-3  hover:bg-white/5 hover:shadow  transition-colors duration-150">
              <span className="flex flex-row justify-between items-center ">
                {/* experience title */}
                <h5 className="font-medium group-hover:text-orange-400 transition-colors duration-150">
                  {experience.roleTitle}
                </h5>

                {/* date range opportunity took place */}
                <h3 className="mr-3 text-sm text-white/70 whitespace-nowrap">
                  {experience.workingPeriod}
                </h3>
              </span>
              <h4 className="text-sm text-white/70 font-normal">
                {experience.companyName}
              </h4>
              {/* job description */}
              <p className="text-sm leading-relaxed ">
                {experience.description}
              </p>
              {/* relevant links list */}
              {experience.links && experience.links.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {experience.links.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      className="hover:text-teal-200 flex flex-row items-center text-white"
                    >
                      <ExternalLinkIcon className="h-4 w-4 mr-1" />
                      <p className="text-sm">{link.label}</p>
                    </a>
                  ))}
                </div>
              )}
              {experience.skills && experience.skills.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {/* skills list  */}
                  {experience.skills.map((skill, index) => (
                    <div
                      key={index}
                      className="inline-block px-3 py-1 rounded-full text-sm bg-orange-400/10 text-orange-400 border border-orange-400/10 shadow-2xs"
                    >
                      {" "}
                      {skill}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Experience;
