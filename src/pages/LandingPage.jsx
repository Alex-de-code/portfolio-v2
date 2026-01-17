import { useState, useEffect, useRef } from "react";
import "../App.css";
import BusinessCard from "../components/BusinessCard.jsx";
import AboutMe from "../components/AboutMe.jsx";
import Experience from "../components/Experience.jsx";
import Projects from "../components/Projects.jsx";

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
      <h1 className="sr-only">Alexander Gonzalez - Portfolio Site</h1>

      <main>
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
                <nav className="toc-nav" aria-label="Table of Contents">
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
      </main>
    </div>
  );
};

export default LandingPage;
