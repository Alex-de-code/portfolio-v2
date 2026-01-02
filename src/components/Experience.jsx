import { ExternalLinkIcon } from "@radix-ui/react-icons";

function Experience() {
  const experiencesData = [
    {
      roleTitle: "People Engagement Lead",
      companyName: "Capgemini",
      workingPeriod: "January 2026 - Present",
      description: `Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source.`,
      links: [{ label: "Project Demo", url: "https://example.com" }],
      skills: ["JavaScript", "React", "NextJS"],
    },
  ];

  return (
    <>
      {/* map through array of experience objects, will create conditional renders for relevant links section */}
      {experiencesData.map((experience) => (
        <div className="grid grid-col-1 gap-1 text-gray-200 rounded-md p-3  hover:bg-white/10 hover:shadow  transition-colors duration-150">
          <span className="flex flex-row justify-between items-center ">
            {/* experience title */}
            <h5 className="">{experience.roleTitle}</h5>
            {/* date range opportunity took place */}
            <h4 className="mr-3 text-sm text-white/70">
              {experience.workingPeriod}
            </h4>
          </span>
          {/* job description */}
          <p className="text-sm">{experience.description}</p>
          {/* relevant links list */}
          {experience.links && experience.links.length > 0 && (
            <div className="flex flex-row mt-2">
              {experience.links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  className="hover:text-orange-400 flex flex-row items-center text-white"
                >
                  <ExternalLinkIcon className="h-4 w-4 mr-1" />
                  <p className="text-sm">{link.label}</p>
                </a>
              ))}
            </div>
          )}
          {experience.skills && experience.skills.length > 0 && (
            <div className="flex flex-row space-x-2 mt-2">
              {/* skills list  */}
              {experience.skills.map((skill, index) => (
                <div
                  key={index}
                  className="inline-block px-3 py-1 rounded-full text-sm bg-orange-400/10 text-orange-400"
                >
                  {" "}
                  {skill}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </>
  );
}

export default Experience;
