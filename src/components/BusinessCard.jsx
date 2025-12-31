import Pangolin from "../assets/pangolin-customized.svg";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

const BusinessCard = () => {
  return (
    <>
      <div>
        <div className="grid gap-2">
          <h1 className="text-4xl sm:text-5xl  font-semibold text-white">
            Alexander Gonzalez
          </h1>
          <h2 className="text-xl text-gray-100">
            Software Engineer / IT Professional
          </h2>
          {/* <h3 className="text-xl font-extralight">
                      alias: Alex-de-code
                    </h3> */}
          <div className="text-gray-200 text-base/6">
            <p>I build empathy-driven solutions</p>
            <p>to make positive changes </p>
            <p>in the world.</p>
          </div>

          <div>
            <div class="flex flex-wrap gap-4 text-gray-200">
              <a
                href="https://github.com/Alex-de-code/"
                target="_blank"
                className="hover:text-teal-200 transition-colors duration-200"
              >
                <GitHubLogoIcon className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/alexander-gonzalez-can-code/"
                target="_blank"
                className="hover:text-teal-200 transition-colors duration-200"
              >
                <LinkedInLogoIcon className="h-6 w-6" />
              </a>
            </div>
          </div>
          {/* Pangolin Spinner for loading screen */}
          {/* <div className="animate-pulse">
            <img src={Pangolin} alt="Loading" className="h-12 animate-spin" />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default BusinessCard;
