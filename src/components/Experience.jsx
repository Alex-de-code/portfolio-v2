import { ExternalLinkIcon } from "@radix-ui/react-icons";
import { experiencesData } from "../data/experiences.js";

const Experience = () => {
  const handleCardClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
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
      <div className="grid space-y-3">
        {experiencesData.map((experience, index) => (
          <div
            key={index}
            onClick={() => handleCardClick(experience.companySite)}
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
