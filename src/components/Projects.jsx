import Wave from "../assets/wave-3.png";

const Projects = () => {
  return (
    <>
      <div>
        <div>Projects</div>
        <div className="group grid grid-cols-10 gap-1 text-gray-200 rounded-md p-3  hover:bg-white/5 hover:shadow  transition-colors duration-150">
          <img
            src={Wave}
            alt="placeholder image text"
            className="mt-1 p-1 col-span-3 sm:block h-3/5 w-full mask-radial-from-15% group-hover:mask-radial-from-90% "
          />
          <div className="col-span-7 ml-1">
            <h5 className="font-medium group-hover:text-orange-400 transition-colors duration-150">
              Project Title
            </h5>
            <p className="text-sm">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              {/* skills list  */}

              <div className="inline-block px-3 py-1 rounded-full text-sm bg-orange-400/10 text-orange-400 border border-orange-400/10 shadow-2xs">
                Test
              </div>
              <div className="inline-block px-3 py-1 rounded-full text-sm bg-orange-400/10 text-orange-400 border border-orange-400/10 shadow-2xs">
                Test
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
