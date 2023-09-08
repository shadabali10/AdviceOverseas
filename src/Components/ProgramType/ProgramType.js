import React from "react";
import { Link } from "react-router-dom";

const ProgramType = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            Program Type
          </h2>
          <div className="relative grid gap-8 row-gap-5 mb-8 px-5 md:px-10">
            <div className="absolute inset-0 flex items-center justify-center sm:hidden lg:flex"></div>
            <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
              <div className="flex items-center justify-between mb-2">
                <p className="text-lg font-bold leading-5">
                  <Link to="/undergrad">UNDERGRADUATE</Link>
                </p>
                <p className="flex items-center justify-center w-6 h-6 font-bold rounded text-deep-purple-accent-400 bg-indigo-50">
                  1
                </p>
              </div>
            </div>
            <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
              <div className="flex items-center justify-between mb-2">
                <p className="text-lg font-bold leading-5">
                  <Link to="/masters">MASTERS</Link>
                </p>
                <p className="flex items-center justify-center w-6 h-6 font-bold rounded text-deep-purple-accent-400 bg-indigo-50">
                  2
                </p>
              </div>
            </div>
            <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
              <div className="flex items-center justify-between mb-2">
                <p className="text-lg font-bold leading-5">
                  <Link to="phd">PHD</Link>
                </p>
                <p className="flex items-center justify-center w-6 h-6 font-bold rounded text-deep-purple-accent-400 bg-indigo-50">
                  3
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgramType;
