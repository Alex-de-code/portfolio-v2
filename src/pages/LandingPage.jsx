import { useState, useEffect, useRef } from "react";
import "../App.css";
import BusinessCard from "../components/BusinessCard.jsx";
import AboutMe from "../components/AboutMe.jsx";
import Experience from "../components/Experience.jsx";
import Projects from "../components/Projects.jsx";

// const LandingPage = () => {
//   return (
//     <>
//       <div className="bg-teal-900 min-h-screen">
//         <div className="sm:py-14 sm:px-8 lg:py-20 lg:px-16 p-4 ">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//             <div className="rounded-md px-4 py-2 col-span-1 ">
//               <BusinessCard />
//             </div>
//             <div className="p-3  md:col-span-1">
//               <AboutMe />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// const LandingPage = () => {
//   return (
//     <div className="bg-teal-900 min-h-screen">
//       {/* Mobile Layout (stacked) */}
//       <div className="lg:hidden">
//         <div className="px-4 py-7 sm:p-8">
//           <BusinessCard />
//         </div>
//         <div className="p-4 sm:p-8 space-y-12">
//           <AboutMe />
//           {/* <AboutMe /> */}

//           {/* Add Experience and Projects components here */}
//           {/* <Experience /> */}
//           {/* <Projects /> */}
//         </div>
//       </div>

//       {/* Desktop Layout (fixed left, scrollable right) */}
//       <div className="hidden lg:flex min-h-screen">
//         {/* Left: Fixed Business Card */}
//         <div className="w-1/2 lg:w-1/3 sticky h-screen top-0">
//           <div className="h-full flex items-center justify-center p-8 lg:px-16">
//             <BusinessCard />
//           </div>
//         </div>

//         {/* Right: Scrollable Content */}
//         <div className="w-1/2 lg:w-1/2 overflow-y-auto">
//           <div className="p-8 lg:py-20 lg:px-16 space-y-20">
//             <AboutMe />
//             <AboutMe />

//             {/* Add Experience and Projects here */}
//             {/* <Experience /> */}
//             {/* <Projects /> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const LandingPage = () => {
//   return (
//     <div className="bg-teal-900 min-h-screen">
//       {/* Mobile */}
//       <div className="lg:hidden">
//         <div className="px-4 py-7 sm:p-8">
//           <BusinessCard />
//         </div>
//         <div className="p-4 sm:p-8 space-y-5">
//           <div className="mb-12">
//             <AboutMe />
//           </div>
//           <Experience />
//           <Projects />
//         </div>
//       </div>

//       {/* Desktop - Symmetrical Layout */}
//       <div className="hidden lg:grid lg:grid-cols-12 min-h-screen">
//         {/* Left: Business Card - spans 4 columns */}
//         <div className="col-span-6 sticky top-0 h-screen">
//           <div className="h-full pl-18 pr-8 pt-22">
//             {/* Left padding 16, right padding 8 */}
//             <BusinessCard />
//           </div>
//         </div>

//         {/* Right: Content - spans 8 columns */}
//         <div className="col-span-6 overflow-y-auto">
//           <div className="pl-8 pr-20 py-24 space-y-5">
//             {/* Right padding 16, left padding 8 */}

//             <div className="mb-16">
//               <AboutMe />
//             </div>
//             <Experience />
//             <Projects />

//             {/* Other sections */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

const LandingPage = () => {
  // Create refs for each section
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const contentContainerRef = useRef(null);

  // Handle TOC clicks - SIMPLE WORKING VERSION
  const scrollToSection = (sectionRef) => {
    console.log("Scroll function called");

    if (!sectionRef.current || !contentContainerRef.current) {
      console.log("Missing refs");
      return;
    }

    const container = contentContainerRef.current;
    const section = sectionRef.current;

    // SIMPLEST METHOD - Just scroll the section into view
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });

    console.log("Scrolled to section:", section.id);
  };

  // Intersection Observer for animations and active state
  useEffect(() => {
    // Wait a bit for DOM to be ready
    const timer = setTimeout(() => {
      const sections = [aboutRef, experienceRef, projectsRef];
      const tocLinks = document.querySelectorAll(".toc-link");

      // Don't run if container doesn't exist
      if (!contentContainerRef.current) {
        console.log("No container found");
        return;
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const section = entry.target;

            // Add animation class
            if (entry.isIntersecting) {
              section.classList.add("visible");
            }

            // Update active TOC link
            if (entry.isIntersecting) {
              const sectionId = section.id;
              tocLinks.forEach((link) => {
                link.classList.remove("active");
                if (link.getAttribute("data-section") === sectionId) {
                  link.classList.add("active");
                }
              });
            }
          });
        },
        {
          root: contentContainerRef.current,
          rootMargin: "-20% 0px -30% 0px",
          threshold: 0.1,
        }
      );

      // Observe all sections
      sections.forEach((ref) => {
        if (ref.current) {
          observer.observe(ref.current);
          console.log("Observing section:", ref.current.id);
        }
      });

      console.log("Observer set up for", sections.length, "sections");
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-teal-900 min-h-screen">
      {/* Mobile */}
      <div className="lg:hidden">
        <div className="px-4 py-7 sm:p-8">
          <BusinessCard />
        </div>
        <div className="p-4 sm:p-8 space-y-5">
          <div className="mb-12">
            <AboutMe />
          </div>
          <Experience />
          <Projects />
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden lg:grid lg:grid-cols-12 min-h-screen">
        {/* Left Column */}
        <div className="col-span-6 sticky top-0 h-screen">
          <div className="h-full pl-18 pr-8 pt-22">
            <BusinessCard />

            {/* Table of Contents */}
            <div className="mt-12 toc-container">
              <nav className="toc-nav">
                <ul className="space-y-4">
                  <li>
                    <button
                      onClick={() => {
                        console.log("About button clicked");
                        scrollToSection(aboutRef);
                      }}
                      className="toc-link w-full text-left"
                      data-section="about"
                    >
                      <span className="toc-text">About</span>
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        console.log("Experience button clicked");
                        scrollToSection(experienceRef);
                      }}
                      className="toc-link w-full text-left"
                      data-section="experience"
                    >
                      <span className="toc-text">Experience</span>
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        console.log("Projects button clicked");
                        scrollToSection(projectsRef);
                      }}
                      className="toc-link w-full text-left"
                      data-section="projects"
                    >
                      <span className="toc-text">Projects</span>
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div
          className="col-span-6 overflow-y-auto section"
          ref={contentContainerRef}
          id="content-container"
          style={{ height: "100vh" }} // Force height
        >
          <div className="pl-8 pr-20 py-24 space-y-5">
            <div ref={aboutRef} id="about" className="section mb-16">
              <AboutMe />
            </div>
            <div ref={experienceRef} id="experience" className="section">
              <Experience />
            </div>
            <div ref={projectsRef} id="projects" className="section">
              <Projects />
            </div>

            {/* Add some extra space to ensure scrolling works */}
            <div style={{ height: "500px" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
