import { useState } from "react";
import "../App.css";
import BusinessCard from "../components/BusinessCard.jsx";

const LandingPage = () => {
  return (
    <>
      <div className="bg-teal-900 min-h-screen">
        <div className="sm:py-14 sm:px-8 lg:py-20 lg:px-16 p-4 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className=" rounded-md px-4 py-2 col-span-1 ">
              <BusinessCard />
            </div>
            <div className="p-3  md:col-span-1">
              <div className="grid grid-col-1 gap-4 text-gray-200">
                <p>
                  I work at the intersection of technology and human
                  connection—whether that means engineering scalable software,
                  troubleshooting IT systems, creating educational tools, or
                  inventing new ways for people to interact with technology. My
                  approach combines technical depth with creative
                  problem-solving and a focus on real-world impact.
                </p>
                <p>
                  Currently a People Engagement Lead at{" "}
                  <span className="text-white font-semibold hover:text-orange-400">
                    <a href="https://www.capgemini.com/" target="_blank">
                      Capgemini
                    </a>
                  </span>
                  , developing AI systems to enhance workplace collaboration
                  alongside people engagement initiatives. My technical
                  background spans AWS cloud infrastructure, full-stack
                  development, biotechnology research, and hands-on IT support.
                </p>
                <p>
                  Previously, I’ve had the chance to work across several
                  domains—contributing to AI protein engineering research,
                  building AWS-powered analytics platforms through the{" "}
                  <span className="text-white font-semibold hover:text-orange-400">
                    <a href="https://www.genspace.org/" target="_blank">
                      Per Scholas
                    </a>
                  </span>{" "}
                  AWS re/Start program, developing full-stack applications
                  during a software engineering fellowship, and participating in
                  biotechnology research with CRISPR-Cas9 at{" "}
                  <span className="text-white font-semibold hover:text-orange-400">
                    <a href="https://perscholas.org/" target="_blank">
                      Genspace
                    </a>
                  </span>{" "}
                  . I’ve also built personal automation tools and rapid
                  prototypes during hackathons. Each experience reinforces my
                  drive to build technology that extends human
                  capability—because every tool we create is about helping us
                  become more than we were before.
                </p>
                <p>
                  Offline, I'm usually composing music, hiking, biking, drinking
                  morning tea, exploring, sipping an old fashioned to live jazz,
                  or reading at a wonderfully slow pace.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
