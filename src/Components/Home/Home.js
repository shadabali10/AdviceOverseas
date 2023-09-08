import React from "react";
import homeimg from "../../images/home.png";
import Hero from "../Hero";
// import InfoSection from "../InfoSection";
// import { InfoData } from "../data/InfoData";
import { SliderData } from "../data/SliderData";
// import GlobalStyle from "../globalStyles";
import { useHistory } from "react-router-dom";
import Contact from "../contact/Contact";
import Counter from "../Counter";
import Testimonials from "../Testimonials";
// import Testonomials from "../Testonomials";

const Home = () => {
  // const scrollToTop = () => {
  //   window.scrollTo(0, 0);
  // };
  let history = useHistory();

  function clickUSA() {
    history.push("/usa");
  }

  function clickUK() {
    history.push("/uk");
  }

  function clickNEWZEELAND() {
    history.push("/newzeeland");
  }

  function clickCANADA() {
    history.push("/canada");
  }

  function clickASIA() {
    history.push("/asia");
  }

  function clickAUSTRALIA() {
    history.push("/australia");
  }
  return (
    <>
      <Hero slides={SliderData} />

      <section class="text-gray-600 body-font lg:px-20 sm:px-10">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Study Abroad
              <br class="hidden lg:inline-block" />
            </h1>
            <p class="mb-8 leading-relaxed ">
              Study Abroad Programs give you the opportunity to experience the
              world as your classroom. Rather than picking things up from books
              and the Internet, navigating a new landscape may open your eyes to
              culture, history, a new language or your heritage. Studying Abroad
              opens the door to personal growth and discovery too. As you learn
              to say ‘hello’ in a foreign language, make friends, eat exciting
              new foods, it is bound to boost your confidence, teach you
              self-reliance and stretch the parameters of your comfort zone.
            </p>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              class="object-cover object-center h-96 rounded"
              alt="hero"
              src={homeimg}
            />
          </div>
        </div>
      </section>
      <section class="bg-white dark:bg-gray-800">
        <div class="container px-6 py-16 mx-auto text-center">
          <div class="max-w-lg mx-auto">
            <h1 class="text-3xl font-bold text-gray-800 dark:text-white md:text-4xl">
              PLAN YOU ACADEMIC FUTURE ABROAD
            </h1>
            <p class="mt-6 text-gray-500 dark:text-gray-300">
              We provide you with everything from advice on choosing a study
              destination, to guidance on applying for scholarships, and useful
              information for international students.
            </p>
          </div>

          <div class="flex justify-center mt-10">
            <img
              class="w-full h-96 object-cover object-top rounded-xl md:w-4/5"
              alt="imagehere"
              src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
            ></img>
          </div>
        </div>
      </section>
      <section>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <div></div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              <span className="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  {/* <defs>
                    <pattern
                      id="1d4040f3-9f3e-4ac7-b117-7d4009658ced"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs> */}
                  <rect
                    fill="url(#1d4040f3-9f3e-4ac7-b117-7d4009658ced)"
                    width="52"
                    height="24"
                  />
                </svg>
              </span>{" "}
              Turn your study abroad dream into reality
            </h2>   
            <p className="text-base text-gray-700 md:text-lg">
              Here are the various countries we help you get into
            </p>
          </div>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div onClick={clickUSA}>
              <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                <img
                  className="object-cover w-full h-56 md:h-64 xl:h-80"
                  src="https://images.unsplash.com/photo-1508433957232-3107f5fd5995?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1186&q=80"
                  alt="Person"
                />
                <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                  <p className="mb-1 text-lg font-bold text-gray-100">USA</p>
                </div>
              </div>
            </div>
            <div onClick={clickUK}>
              <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                <img
                  className="object-cover w-full h-56 md:h-64 xl:h-80"
                  src="https://static.toiimg.com/photo/80742236.cms"
                  alt="Person"
                />
                <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                  <p className="mb-1 text-lg font-bold text-gray-100">UK</p>
                </div>
              </div>
            </div>
            <div onClick={clickCANADA}>
              <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                <img
                  className="object-cover w-full h-56 md:h-64 xl:h-80"
                  src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F874837640%2FUrban-skyline-including-the-CN-Tower--point-of-view-from---%2F960x0.jpg%3Ffit%3Dscale"
                  alt="Person"
                />
                <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                  <p className="mb-1 text-lg font-bold text-gray-100">Canada</p>
                </div>
              </div>
            </div>
            <div onClick={clickNEWZEELAND}>
              <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                <img
                  className="object-cover w-full h-56 md:h-64 xl:h-80"
                  src="https://cdn.britannica.com/66/96866-050-BBAE91CE/Flag-European-Union.jpg"
                  alt="Person"
                />
                <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                  <p className="mb-1 text-lg font-bold text-gray-100">Newzeeland</p>  
                </div>
              </div>
            </div>
            <div onClick={clickAUSTRALIA}>
              <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                <img
                  className="object-cover w-full h-56 md:h-64 xl:h-80"
                  src="https://images.unsplash.com/photo-1518684079-3c830dcef090?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80"
                  alt="Person"
                />
                <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                  <p className="mb-1 text-lg font-bold text-gray-100">
                    Australia
                  </p>
                </div>
              </div>
            </div>
            <div onClick={clickASIA}>
              <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                <img
                  className="object-cover w-full h-56 md:h-64 xl:h-80"
                  src="https://images.unsplash.com/photo-1540820658620-e933c0ec78aa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1316&q=80"
                  alt="Person"
                />
                <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                  <p className="mb-1 text-lg font-bold text-gray-100">Asia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Contact/>
        <Testimonials/>
        <Counter/>
       
      </section>
    </>
  );
};

export default Home;
