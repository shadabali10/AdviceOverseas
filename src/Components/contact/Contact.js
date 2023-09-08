import React, { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import "./sweetalert.css";

function Contact() {
  //   useLayoutEffect(() => {
  //     window.scrollTo(0, 0)
  // });

  // const customStyle = {
   
  //   color: 'blue',
  //   width: '900px', 
  //   height: '950px', 
  //   border: '5px solid red', 
  //   allowfullscreen: '',
  //   loading: 'lazy', 
  //   referrerpolicy: 'no-referrer-when-downgrade', 
   
  // };
  

  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [mailBody, setmailBody] = useState("");
  const [subject, setSubject] = useState("");
  const [reason, setReason] = useState("");

  const handleContactSubmit = (e) => {
    if (name === "" || email === "" || mailBody === "" || subject === "") {
      swal({
        title: "Please fill all the fields",
        text: "",
        icon: "warning",
        buttons: {
          confirm: { text: "Okay", className: "sweet-warning" },
        },
      });
      return;
    }
    e.preventDefault();
    axios
      .post(
        "https://study-abroad-nodemailer.herokuapp.com/api/postcontactmail",
        {
          name,
          email,
          subject,
          reason,
          mailBody,
        }
      )
      .catch((err) => console.log(err));
    swal({
      title: "Email Sent Successfully!",
      text: "",
      icon: "success",
      buttons: {
        confirm: { text: "Okay", className: "sweet-warning" },
      },
    });
    setName("");
    setemail("");
    setmailBody("");
    setSubject("");
  };
  return (
    <div className="mt-20 md:mt-172 bg-white hidden sm:block">
      {/* <div
        className="bg-center bg-cover main-img mb-5"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1525182008055-f88b95ff7980?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80")`,
        }}
      >
        <div className="flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-50">
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-black uppercase lg:text-3xl cursor-pointer">
              Network <span className="text-blue-400 underline">Saas</span>
              Contact Us
            </h1>
            <button className="w-full px-4 py-2 mt-4 text-sm font-medium text-white uppercase transition-colors duration-200 transform bg-blue-600 rounded-md lg:w-auemail hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
              Start project
            </button>
          </div>
        </div>
      </div> */}
      <h1 className="text-center text-2xl font-semibold text-black uppercase lg:text-3xl">
        Get in Touch
      </h1>
      
      <div className="flex flex-wrap align-middle">
      <div className="lg:w-2/5 lg:mt-60 w-full">
  <div className="flex flex-col justify-items-center items-center align-middle lg:pl-8 lg:mt-0 mt-4 mx-3">
 
   
  
  <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27859.061781462937!2d78.9569229!3d29.212295100000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390a43c0c5694dd1%3A0xe193d5f15c9333a0!2sKashipur%2C%20Uttarakhand%20244713!5e0!3m2!1sen!2sin!4v1693960899857!5m2!1sen!2sin"
  title="Example Website"
  style={{ width: '600px', height: '600px', marginTop: '-190px' }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>

  </div>
</div>

        <div className="lg:w-3/5 w-full flex justify-center items-center">
          <section className="px-6 py-4 mx-auemail bg-white text-black rounded-md dark:bg-gray-800 mt-4 ">
            {/* <h2 className="text-3xl font-semibold text-center text-black dark:text-white">
              Get in Touch
            </h2> */}
            <p className="mt-3 text-center text-gray-700 dark:text-gray-400 text-justify">
            We're here to listen and assist you on your educational journey. Whether you're seeking information on admissions, scholarships, academic programs, or anything else related to your college experience, we're just a message away. Feel free to reach out to us using the form below, and we'll ensure you receive the guidance and support you need. Your success is our priority, and we look forward to connecting with you!


            </p>

            <div className="grid grid-cols-1 lg:gap-6 mt-6 sm:grid-cols-2 md:grid-cols-3">
              <a
                href="tel:+233557167223"
                className="flex flex-col cursor-pointer items-center px-4 py-4 text-black rounded-md dark:text-gray-800 hover:bg-black hover:text-white dark:hover:bg-blue-500"
              >
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>

                <span className="mt-2">+91 91491-84927 | +91 84334-40872</span>
              </a>

              <a
                href="mailto:sammedsani@gmail.com"
                className="flex flex-col items-center cursor-pointer px-4 py-4 text-black rounded-md dark:text-gray-800 hover:bg-black hover:text-white dark:hover:bg-blue-500"
              >
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>

                <span className="mt-2">adviseoverseas@gmail.com</span>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://goo.gl/maps/zfNznJfY1BjZCYX97"
                className="flex flex-col items-center px-4 py-3 text-black rounded-md dark:text-gray-200 hover:bg-black hover:text-white dark:hover:bg-blue-500"
              >
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>

                <span className="mt-2 text-center">Kashipur,Uttarakhand</span>
              </a>
              {/* <a
                target="_blank"
                rel="noreferrer"
                href="https://goo.gl/maps/znK6vY1CzEUjoQtD8"
                className="flex flex-col items-center px-4 py-3 text-black rounded-md dark:text-gray-200 hover:bg-black hover:text-white dark:hover:bg-blue-500"
              >
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>

                <span className="mt-2 text-center">
                  Samrat Ganana Building, Udaya Ravi Road, K block, Opp Jayamma
                  Govinde Gowda Convention Hall Kuvempunagar Mysuru 570023
                </span>
              </a> */}
            </div>

            <div className="mt-6 ">
              <form onSubmit={handleContactSubmit}>
                <div className="items-center -mx-2 md:flex">
                  <div className="w-full mx-2">
                    <label className="block mb-2 text-sm font-medium text-gray-800 dark:text-gray-800">
                      Name
                    </label>

                    <input
                      name="name"
                      id="name"
                      className="block w-full px-4 py-2 text-black bg-white border border-gray-700 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                      type="text"
                    />
                  </div>

                  <div className="w-full mx-2 mt-4 md:mt-0">
                    <label className="block mb-2 text-sm font-medium text-gray-800 dark:text-gray-800">
                      E-mail
                    </label>

                    <input
                      className="block w-full px-4 py-2 text-black bg-white border border-gray-700 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                      onChange={(e) => setemail(e.target.value)}
                      value={email}
                      id="email"
                      type="email"
                      name="email"
                    />
                  </div>
                </div>
                <div className="-ml-2 pt-2 md:flex">
                  <div className="w-full mx-2">
                    <label className="block mb-2 text-sm font-medium text-gray-800 dark:text-gray-200">
                      Subject
                    </label>

                    <input
                      className="block w-full px-4 py-2 text-black bg-white border border-gray-700 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                      onChange={(e) => setSubject(e.target.value)}
                      value={subject}
                      id="subject"
                      type="text"
                      name="subject"
                    />
                  </div>
                  <div className="w-full mx-2 mt-4 md:mt-0">
                    <label className="block mb-2 text-sm font-medium text-gray-800 dark:text-gray-800">
                      Reason for Contact
                    </label>

                    <select
                      className="block w-auto px-4 py-2 text-black bg-white border border-gray-700 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                      onChange={(e) => setReason(e.target.value)}
                      value={reason}
                      id="reason"
                      type="reason"
                      name="reason"
                    >
                      <option className="text-center" value="General Enquiry">
                        General Enquiry
                      </option>
                      <option
                        className="text-center"
                        value=" Study Aboard Programs Related Enquiry"
                      >
                        Study Aboard Programs Related Enquiry
                      </option>
                      <option
                        className="text-center"
                        value="I want to enquire about Scholarships"
                      >
                        I want to enquire about Scholarships
                      </option>
                      <option
                        className="text-center"
                        value="I want to enquire about the documents required"
                      >
                        I want to enquire about the documents required
                      </option>
                    </select>

                    {/* <input
                      className="block w-full px-4 py-2 text-black bg-white border border-gray-700 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                      onChange={(e) => setReason(e.target.value)}
                      value={reason}
                      id="reason"
                      type="reason"
                      name="reason"
                    /> */}
                  </div>
                </div>

                <div className="w-full mt-4">
                  <label className="block mb-2 text-sm font-medium text-gray-800 dark:text-gray-800">
                    Message
                  </label>

                  <textarea
                    onChange={(e) => setmailBody(e.target.value)}
                    value={mailBody}
                    name="mailBody"
                    id="mailBody"
                    className="block w-full h-40 px-4 py-2 text-black bg-white border border-gray-700 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                  ></textarea>
                </div>

                <div className="flex justify-center mt-6">
                  <button
                    type="submit"
                    className="px-4 py-2 font-bold text-white transition-colors duration-200 transform bg-black rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Contact;
