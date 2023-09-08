import React from "react";

const Documents = () => {
  return (
    <>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400"></p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                {/* <defs>
                  <pattern
                    id="84d09fa9-a544-44bd-88b2-08fdf4cddd38"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs> */}
                <rect
                  fill="url(#84d09fa9-a544-44bd-88b2-08fdf4cddd38)"
                  width="52"
                  height="24"
                />
              </svg>
            </span>{" "}
            Documents
          </h2>
        </div>
        <hr />
      </div>

      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            Required university application documents
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            Different universities and programmes will require different
            documents. However, these are the items you are most likely to need
            if you apply to a university in the US:
          </p>
        </div>
        <div className="max-w-lg space-y-3 sm:mx-auto lg:max-w-xl">
          <div className="flex items-center p-2 transition-colors duration-200 border rounded shadow group hover:bg-deep-purple-accent-400 hover:border-deep-purple-accent-400">
            <div className="mr-2"></div>
            <span className="text-gray-800 transition-colors duration-200 ">
              Transcripts or records of grades (high school and/or university)
            </span>
          </div>
          <div className="flex items-center p-2 transition-colors duration-200 border rounded shadow group hover:bg-deep-purple-accent-400 hover:border-deep-purple-accent-400">
            <div className="mr-2"></div>
            <span className="text-gray-800 transition-colors duration-200 ">
              Résumé/CV
            </span>
          </div>
          <div className="flex items-center p-2 transition-colors duration-200 border rounded shadow group hover:bg-deep-purple-accent-400 hover:border-deep-purple-accent-400">
            <div className="mr-2"></div>
            <span className="text-gray-800 transition-colors duration-200 ">
              Test scores (SAT, ACT, GRE, GMAT)
            </span>
          </div>
          <div className="flex items-center p-2 transition-colors duration-200 border rounded shadow group hover:bg-deep-purple-accent-400 hover:border-deep-purple-accent-400">
            <div className="mr-2"></div>
            <span className="text-gray-800 transition-colors duration-200 ">
              Proof of English-language proficiency
            </span>
          </div>
          <div className="flex items-center p-2 transition-colors duration-200 border rounded shadow group hover:bg-deep-purple-accent-400 hover:border-deep-purple-accent-400">
            <div className="mr-2"></div>
            <span className="text-gray-800 transition-colors duration-200 ">
              Motivation letter or statement of purpose
            </span>
          </div>
          <div className="flex items-center p-2 transition-colors duration-200 border rounded shadow group hover:bg-deep-purple-accent-400 hover:border-deep-purple-accent-400">
            <div className="mr-2"></div>
            <span className="text-gray-800 transition-colors duration-200 ">
              Application fee
            </span>
          </div>
          <div className="flex items-center p-2 transition-colors duration-200 border rounded shadow group hover:bg-deep-purple-accent-400 hover:border-deep-purple-accent-400">
            <div className="mr-2"></div>
            <span className="text-gray-800 transition-colors duration-200 ">
              Writing sample
            </span>
          </div>
          <div className="flex items-center p-2 transition-colors duration-200 border rounded shadow group hover:bg-deep-purple-accent-400 hover:border-deep-purple-accent-400">
            <div className="mr-2"></div>
            <span className="text-gray-800 transition-colors duration-200 ">
              Passport photo
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Documents;
