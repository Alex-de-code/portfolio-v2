import { useState } from "react";
import "./App.css";
import Pangolin from "./assets/pangolin-customized.svg";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

function App() {
  return (
    <>
      <div className="bg-teal-900 min-h-screen">
        <div className="sm:py-14 sm:px-8 lg:py-20 lg:px-16 p-4 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className=" rounded-md p-4 col-span-1 ">
              <div>
                <div className="grid gap-2">
                  <h1 className="text-6xl fond-bold text-white">
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
                        href="https://github.com/Alex-de-code"
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
                    <img
                      src={Pangolin}
                      alt="Loading"
                      className="h-12 animate-spin"
                    />
                  </div> */}
                </div>
              </div>
            </div>
            <div className="p-3  md:col-span-1">
              <div className="grid grid-col-1 gap-4 text-gray-200">
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in Virginia,
                  looked up one of the more obscure Latin words, consectetur,
                  from a Lorem Ipsum passage, and going through the cites of the
                  word in classical literature, discovered the undoubtable
                  source.
                </p>
                <p>
                  Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de
                  Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
                  Cicero, written in 45 BC. This book is a treatise on the
                  theory of ethics, very popular during the Renaissance. The
                  first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
                  comes from a line in section 1.10.32.
                </p>
                <p>
                  The standard chunk of Lorem Ipsum used since the 1500s is
                  reproduced below for those interested. Sections 1.10.32 and
                  1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are
                  also reproduced in their exact original form, accompanied by
                  English versions from the 1914 translation by H. Rackham.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
