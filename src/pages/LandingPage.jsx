import { useState } from "react";
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

const LandingPage = () => {
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

      {/* Desktop - Symmetrical Layout */}
      <div className="hidden lg:grid lg:grid-cols-12 min-h-screen">
        {/* Left: Business Card - spans 4 columns */}
        <div className="col-span-6 sticky top-0 h-screen">
          <div className="h-full pl-18 pr-8 pt-22">
            {/* Left padding 16, right padding 8 */}
            <BusinessCard />
          </div>
        </div>

        {/* Right: Content - spans 8 columns */}
        <div className="col-span-6 overflow-y-auto">
          <div className="pl-8 pr-20 py-24 space-y-5">
            {/* Right padding 16, left padding 8 */}

            <div className="mb-16">
              <AboutMe />
            </div>
            <Experience />
            <Projects />

            {/* Other sections */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
