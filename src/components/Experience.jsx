import { ExternalLinkIcon } from "@radix-ui/react-icons";

function Experience() {
  return (
    <>
      {/* map through array of experience objects, will create conditional renders for relevant links section */}
      <div className="grid grid-col-1 gap-1 text-gray-200 rounded-md p-3  hover:bg-white/10 hover:shadow  transition-colors duration-150">
        <span className="flex flex-row justify-between items-center ">
          {/* experience title */}
          <h5 className="">Experience Title</h5>
          {/* date range opportunity took place */}
          <h4 className="mr-3 text-sm text-white/70">
            {" "}
            JANUARY 2026 - PRESENT{" "}
          </h4>
        </span>
        {/* job description */}
        <p className="text-sm">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source.
        </p>
        {/* relevant links list */}
        <div className="flex flex-row mt-2">
          {/* map urls here */}
          <a
            href=""
            target="_blank"
            className="hover:text-orange-400 flex flex-row items-center text-white"
          >
            <ExternalLinkIcon className="h-4 w-4 mr-1" />
            <p className="text-sm">Link</p>
          </a>
        </div>
        <div className="flex flex-row space-x-2 mt-2">
          {/* skills list  */}
          <div className="inline-block px-3 py-1 rounded-full text-sm bg-orange-400/10 text-orange-400">
            Javascript
          </div>
          <div className="inline-block px-3 py-1 rounded-full text-sm bg-orange-400/10 text-orange-400">
            React.JS
          </div>
          <div className="inline-block px-3 py-1 rounded-full text-sm bg-orange-400/10 text-orange-400">
            Next.JS
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
