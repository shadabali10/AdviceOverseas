import React from "react";
import Faq from "../../componets/Services/Faq";

// bak
// https://cdn.pixabay.com/photo/2020/05/22/21/44/review-5207277_960_720.jpg

const Insurance = () => {
  const faqdata = [
    {
      id: 1,
      que: "Online Brand Audit",
      ans: "Identifying unfavorable search results of your brand and prioritizing restoration actions accordingly.",
    },
    {
      id: 2,
      que: "Social Network Analysis",
      ans: "Analyzing social media conversations about your brand and converting the negatives into positive.",
    },
    {
      id: 3,
      que: "Content Development & Promotion",
      ans: "Writing and publishing positive content about your brand on high authority sites and blogs.",
    },
    {
      id: 4,
      que: "Online Reviews and Forums",
      ans: "Obtaining positive customer reviews on relevant sites and forums, and suppressing negative results.",
    },
    {
      id: 5,
      que: "Data Subject Request",
      ans: "Modern privacy regulations grant consumers broad rights to the personal data that enterprises collect from them and about them. Depending upon their location, consumers can request access to their data, request that an organization stop processing it, or request it be deleted. Enterprises must fulfill such requests promptly, with only a few exceptions allowed for legal reasons. Each request from a consumer can translate into large numbers of often ill-defined tasks that you must perform inside your company.",
    },
    {
      id: 6,
      que: "Privacy By Design",
      ans: "Privacy by Design is a framework based on proactively embedding privacy into the design and operation of IT systems, networked infrastructure, and business practices",
    },
  ];

  return (
    <div className="md:-mt-28 mt-0 bg-white text-black">
      <div
        className="mb-5 bg-center bg-cover image-style"
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/7734586/pexels-photo-7734586.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")`,
        }}
      >
        <div className="flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-50">
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-black uppercase lg:text-3xl cursor-pointer">
              Network <span className="text-blue-400 underline">Saas</span>
              Data Privacy
            </h1>
            <button className="w-full px-4 py-2 mt-4 text-sm font-medium text-white uppercase transition-colors duration-200 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
              Start project
            </button>
          </div>
        </div>
      </div>
      <div className="md:mx-16 mx-2">
        <div className="text-center md:text-4xl text-xl font-bold">
          Insurance
        </div>
        <hr className="h-px my-6 bg-gray-900 border-none dark:bg-gray-700 md:mx-24 mx-8" />
        <div className="md:text-xl text-black">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius sed odit
          fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
          accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
          molestias architecto voluptate aliquam
        </div>
        <div className="md:text-xl text-black">
          Our skilled Data Privacy consultants will help you in designing a
          global privacy framework based on the initial gap assessment. We
          assist in improving the privacy posture by providing an expert
          guidance on process improvement and privacy implementations.
          Leveraging technology has always been elemental in Paramount and hence
          its easier with us to automate privacy impact assessments or to
          discover personal data from any system within or outside the
          organization.
        </div>

        <div className="md:text-4xl text-xl pt-12 text-center font-bold">
          Solutions
        </div>
        <hr className="h-px my-6 bg-gray-900 border-none dark:bg-gray-700 md:mx-24 mx-8" />
        <div className="">
          {faqdata.map((item) => (
            <Faq key={item.id} que={item.que} ans={item.ans} />
          ))}
        </div>

        <div className="md:text-4xl text-center font-bold text-xl pt-12">
          Key Benefits
        </div>
        <hr className="h-px my-6 bg-gray-900 border-none dark:bg-gray-700 md:mr-16 mr-4" />
        <div className="flex flex-wrap align-middle justify-center items-center">
          <div className="md:w-1/2 w-full">
            <div className="md:text-xl text-md"></div>
            <div className="md:text-xl text-md"></div>
            <div className="flex flex-col">
              <div className="inline-flex py-4">
                <div className="font-bold md:text-xl text-md">1.</div>
                <div className="md:text-xl pl-2">
                  Round-the-Clock Monitoring to avert Negative Publicity
                </div>
              </div>
              <div className="inline-flex py-4">
                <div className="font-bold md:text-xl text-md">2.</div>
                <div className="md:text-xl pl-2">
                  Emphasis on Creating Relevant, Engaging Content
                </div>
              </div>
              <div className="inline-flex py-4">
                <div className="font-bold md:text-xl text-md">3.</div>
                <div className="md:text-xl pl-2">
                  Advanced Analytics for Scrutinizing Social Channels
                </div>
              </div>
              <div className="inline-flex py-4">
                <div className="font-bold md:text-xl text-md">4.</div>
                <div className="md:text-xl pl-2">
                  Agile Crisis Management Team
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 w-full items-center align-middle">
            <img src="/assets/images/customer.jpg" alt="Network Security" />
          </div>
        </div>

        <div className="flex lg:flex-wrap flex-wrap-reverse align-middle justify-center items-center">
          <div className="md:w-1/2 w-full items-center align-middle">
            <img src="/assets/images/problems1.jpg" alt="Network Security" />
          </div>
          <div className="md:w-1/2 w-full">
            <div className="md:text-4xl text-xl pt-12">Why Alpha Secs</div>
            <hr className="h-px my-6 bg-gray-300 border-none dark:bg-gray-700 md:mr-16 mr-4" />
            <div className="md:text-xl text-md">
              AlphaSecs is the leading Cybersecurity provider for companies
              across the Middle East enabling customers to protect their
              critical Information Assets and Infrastructure through a prudent
              combination of People, Process and Technology. Headquartered in
              the UAE, we also have offices in Kuwait, Oman, Bahrain, Qatar and
              Saudi Arabia. And here is our simplified approach to Data Privacy
              which can be easily assimilated in your organization:
            </div>
            <div>
              <div className="inline-flex py-4">
                <div className="font-bold md:text-xl text-md">1.</div>
                <div className="md:text-xl pl-2">
                  Initial Readiness Assessment - Check the applicability of Data
                  Privacy Regulation
                </div>
              </div>
              <div className="inline-flex py-4">
                <div className="font-bold md:text-xl text-md">2.</div>
                <div className="md:text-xl pl-2">
                  Roadmap Building - Build a phase wise plan for Data Privacy
                  journey
                </div>
              </div>
              <div className="inline-flex py-4">
                <div className="font-bold md:text-xl text-md">3.</div>
                <div className="md:text-xl pl-2">
                  Data Privacy Implementation - Implement the agreed building
                  blocks of Data Privacy program
                </div>
              </div>
              <div className="inline-flex py-4">
                <div className="font-bold md:text-xl text-md">4.</div>
                <div className="md:text-xl pl-2">
                  Constant Health Check - Forecast and monitor the upcoming Data
                  Privacy risks
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:text-4xl text-xl pt-12 text-center font-bold">
          Solutions
        </div>
        <hr className="h-px my-6 bg-gray-900 border-none dark:bg-gray-700 md:mx-24 mx-8" />
        <div className="">
          {faqdata.map((item) => (
            <Faq key={item.id} que={item.que} ans={item.ans} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Insurance;
