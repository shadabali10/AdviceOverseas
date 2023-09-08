import React from "react";

const HowToApply = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
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
              How To Apply
            </h2>
          </div>
          <hr />
        </div>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="p-8 rounded shadow-xl sm:p-16">
            <div className="flex flex-col lg:flex-row">
              <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
                <h2 className="font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                  PREPARE TO APPLY
                </h2>
              </div>
              <div className="lg:w-1/2">
                <p className="mb-4 text-base flex items-center text-gray-700">
                  <img
                    className="h-3 pr-3"
                    src="https://img.icons8.com/material-outlined/24/000000/filled-circle--v1.png"
                    alt="abc"
                  />
                  Most universities give you the option to apply directly on
                  their websites.
                </p>
                <p className="mb-4 text-base flex align-middle text-gray-700">
                  <img
                    className="h-3 pr-3 mt-2"
                    src="https://img.icons8.com/material-outlined/24/000000/filled-circle--v1.png"
                    alt="abc"
                  />
                  Be sure to read the requirements carefully when applying to
                  American universities. Some will require standardised tests
                  (e.g. GRE, GMAT, MCAT, LSAT), and others will ask for
                  different documents (writing samples, portfolio, list of
                  patents) as part of the application process.
                </p>
                <p className="mb-4 text-base flex align-middle text-gray-700">
                  <img
                    className="h-3 pr-3 mt-2"
                    src="https://img.icons8.com/material-outlined/24/000000/filled-circle--v1.png"
                    alt="abc"
                  />
                  University application fees are usually between 75-100 USD,
                  depending on the university. If you have trouble paying your
                  admission fee, contact the university or programme directly.
                </p>
                <p className="mb-4 text-base flex align-middle text-gray-700">
                  <img
                    className="h-3 pr-3 mt-2"
                    src="https://img.icons8.com/material-outlined/24/000000/filled-circle--v1.png"
                    alt="abc"
                  />
                  Non-US students may be required to supply proof that their
                  English-language skills are proficient enough to attend
                  classes. Be sure to have your TOEFL iBT, IELTS Academic, PTE
                  Academic, or C1 Advanced certificates available.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <h2 className="max-w-lg pr-1 mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              Language requirements for US university applications
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              To ensure that you are able to effectively learn and participate
              in your classes, you will need to show that you have good enough
              English-language skills to apply for admission to a U.S.
              university. The minimum scores will depend largely on the
              programme and the university. Most U.S. universities will accept
              one of these tests:
            </p>
          </div>
          <div className="grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-4 sm:grid-cols-2">
            <div className="duration-300 transform bg-white border-l-4 border-deep-purple-accent-400 hover:-translate-y-2">
              <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
                <h6 className="mb-2 font-semibold leading-5">IELTS Academic</h6>
                <p className="text-sm text-gray-900">
                  (International English Language Testing Service)
                </p>
              </div>
            </div>
            <div className="duration-300 transform bg-white border-l-4 border-deep-purple-accent-400 hover:-translate-y-2">
              <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
                <h6 className="mb-2 font-semibold leading-5">TOEFL iBT</h6>
                <p className="text-sm text-gray-900">
                  (Test of English as a Foreign Language)
                </p>
              </div>
            </div>
            <div className="duration-300 transform bg-white border-l-4 border-deep-purple-accent-400 hover:-translate-y-2">
              <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
                <h6 className="mb-2 font-semibold leading-5">PTE Academic</h6>
                <p className="text-sm text-gray-900">
                  (Pearson Test of English)
                </p>
              </div>
            </div>
            <div className="duration-300 transform bg-white border-l-4 border-deep-purple-accent-400 hover:-translate-y-2">
              <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
                <h6 className="mb-2 font-semibold leading-5">C1 Advanced</h6>
                <p className="text-sm text-gray-900">
                  (formerly known as Cambridge English Advanced)
                </p>
              </div>
            </div>
          </div>
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <p className="text-base text-gray-700 md:text-lg">
              Double check the university and programme requirements to see the
              minimum score they expect from applicants.
            </p>
          </div>
        </div>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              Required university application documents
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Different universities and programmes will require different
              documents. However, these are the items you are most likely to
              need if you apply to a university in the US:
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
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="p-8 rounded shadow-xl sm:p-16">
            <div className="flex flex-col lg:flex-row">
              <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
                <h2 className="font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                  University application deadlines in the US
                </h2>
                <p className="pt-8 text-lg">
                  If you are applying for an undergraduate (Bachelors) degree in
                  the US, universities will typically offer two application
                  deadlines - early admission and regular admission.
                </p>
              </div>
              <div className="lg:w-1/2 mt-24">
                <p className="mb-4 text-base flex items-center text-gray-700">
                  <img
                    className="h-3 pr-3"
                    src="https://img.icons8.com/material-outlined/24/000000/filled-circle--v1.png"
                    alt="abc"
                  />
                  If you are applying for the fall (autumn) admission, early
                  deadlines will be between October and November, the previous
                  year.
                </p>
                <p className="mb-4 text-base flex align-middle text-gray-700">
                  <img
                    className="h-3 pr-3 mt-2"
                    src="https://img.icons8.com/material-outlined/24/000000/filled-circle--v1.png"
                    alt="abc"
                  />
                  If youre applying for the fall (autumn) admission, regular
                  admission deadlines will be between February and March, the
                  same year.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row">
              <div className="mb-6 mt-20 lg:mb-0 lg:w-1/2 lg:pr-5">
                <p className="pt-8 text-lg">
                  If you are applying for a post-graduate (Masters or PhD)
                  degree, your American university application deadline will
                  depend on the semester in which you are enrolling (spring
                  intake or fall intake).
                </p>
              </div>
              <div className="lg:w-1/2 mt-24">
                <p className="mb-4 text-base flex items-center text-gray-700">
                  <img
                    className="h-3 pr-3"
                    src="https://img.icons8.com/material-outlined/24/000000/filled-circle--v1.png"
                    alt="abc"
                  />
                  If you are applying for the fall admission, your deadline can
                  be anywhere from January to March.
                </p>
                <p className="mb-4 text-base flex align-middle text-gray-700">
                  <img
                    className="h-3 pr-3 mt-2"
                    src="https://img.icons8.com/material-outlined/24/000000/filled-circle--v1.png"
                    alt="abc"
                  />
                  If you are applying for the spring admission, your deadline is
                  probably anywhere between July and September, the previous
                  year.
                </p>
              </div>
            </div>
            <p className="pt-8 italic">
              These deadlines can vary drastically depending on which programme
              you are applying for or which university you wish to attend. Be
              sure to contact the programme itself if you&#39;re not sure about
              the correct deadline.
            </p>
          </div>
        </div>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col mb-6 lg:flex-row md:mb-10">
            <div className="lg:w-1/2">
              <h2 className="max-w-md mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none xl:max-w-lg">
                Final steps after receiving the university acceptance letter
              </h2>
            </div>
            <div className="lg:w-1/2">
              <p className="text-base text-gray-700 md:text-lg">
                Congratulations on getting your acceptance letter!
              </p>
            </div>
          </div>
          <div className="grid gap-8 row-gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex align-middle max-w-md">
              <img
                className="h-3 pr-3 mt-2"
                src="https://img.icons8.com/material-outlined/24/000000/filled-circle--v1.png"
                alt="abc"
              />
              <p className="mb-3 text-md font-semibold text-gray-900">
                If you arent a US citizen, you will need to use your acceptance
                letter to apply for the F-1 student visa.
              </p>
            </div>
            <div className="flex align-middle max-w-md">
              <img
                className="h-3 pr-3 mt-2"
                src="https://img.icons8.com/material-outlined/24/000000/filled-circle--v1.png"
                alt="abc"
              />
              <p className="mb-3 text-md font-semibold text-gray-900">
                If you arent a US citizen, you will need to use your acceptance
                letter to apply for the F-1 student visa.
              </p>
            </div>
            <div className="flex align-middle max-w-md">
              <img
                className="h-3 pr-3 mt-2"
                src="https://img.icons8.com/material-outlined/24/000000/filled-circle--v1.png"
                alt="abc"
              />
              <p className="mb-3 text-md font-semibold text-gray-900">
                Check whether the university you applied to requires an
                enrolment fee to secure your spot there.
              </p>
            </div>
            <div className="flex align-middle max-w-md">
              <img
                className="h-3 pr-3 mt-2"
                src="https://img.icons8.com/material-outlined/24/000000/filled-circle--v1.png"
                alt="abc"
              />
              <p className="mb-3 text-md font-semibold text-gray-900">
                Celebrate your victory of being admitted at the university of
                your dreams!
              </p>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default HowToApply;
