import { ExternalLinkIcon } from "@radix-ui/react-icons";

function Experience() {
  const experiencesData = [
    {
      roleTitle: "People Engagement Lead",
      companyName: "Capgemini",
      workingPeriod: "January 2026 - Present",
      description: `Design and implement AI-enhanced engagement programs that improve team collaboration and decision-making. Build agentic AI solutions integrated with platforms like Microsoft Teams to foster meaningful workplace connections.`,
      links: [],
      skills: [
        "Agentic AI Development",
        "Employee Engagement Strategy",
        "Program & Budget Management",
        "Stakeholder Collaboration",
        "Microsoft Teams Integration",
      ],
    },
    {
      roleTitle: "AI Research Team Member",
      companyName: "The Align Foundation & Genspace NYC",
      workingPeriod: "July 2025 - Present",
      description: `need proper description here....`,
      links: [],
      skills: ["need to list proper skills here"],
    },
    {
      roleTitle: "AWS re/Start Trainee",
      companyName: "Per Scholas",
      workingPeriod: "August 2025 - November 2025",
      description: `Complete intensive cloud computing training with hands-on AWS projects including EC2, S3, Lambda, and VPC infrastructure. Develop and deploy scalable cloud solutions while implementing security best practices and automation workflows.`,
      links: [],
      skills: [
        "AWS Cloud Architecture",
        "Terraform (IaC)",
        "Linux Administration",
        "CI/CD Pipelines",
        "Cloud Networking (VPC)",
        "Shell Scripting",
        "Cloud Security",
      ],
    },
  ];

  return (
    <>
      {/* map through array of experience objects, will create conditional renders for relevant links section */}
      {experiencesData.map((experience) => (
        <div className="grid grid-cols-1 gap-1 text-gray-200 rounded-md p-3  hover:bg-white/5 hover:shadow  transition-colors duration-150">
          <span className="flex flex-row justify-between items-center ">
            {/* experience title */}
            <h5 className="">{experience.roleTitle}</h5>

            {/* date range opportunity took place */}
            <h3 className="mr-3 text-sm text-white/70 whitespace-nowrap">
              {experience.workingPeriod}
            </h3>
          </span>
          <h4 className="text-sm text-white/70 font-normal">
            {experience.companyName}
          </h4>
          {/* job description */}
          <p className="text-sm leading-relaxed ">{experience.description}</p>
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
            <div className="flex flex-wrap gap-2 mt-2">
              {/* skills list  */}
              {experience.skills.map((skill, index) => (
                <div
                  key={index}
                  className="inline-block px-3 py-1 rounded-full text-sm bg-orange-400/10 text-orange-400 border border-orange-400/10  shadow-2xs"
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
