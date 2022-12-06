import React, { useState, useRef } from "react";
import { ValidationError, useForm } from "@formspree/react";
import axios from "axios";
import resume from "../assets/ritika_jaiswal.pdf";
import logo2 from "../assets/logo2.png";

const handleEmailValidation = (email) => {
  return email.includes("@") && email.includes(".");
};
const Portfolio = ({ setIsAlertOpen, setAlertMessage, setAlertType }) => {
  const about = useRef(null);
  const skills = useRef(null);
  const projects = useRef(null);
  const contact = useRef(null);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isSendButtonHovered, setIsSendButtonHovered] = useState(false);
  const [isSendingMessage, setIsSendingMessage] = useState(false);

  return (
    <div className="bg-white h-auto">
      <div className="bg-blue-900 h-screen md:h-screen  ">
        <div className="flex h-40 w-auto md:h-48 md:justify-around items-center justify-between px-2">
          <div
            className="flex justify-center items-center text-[0.6rem] md:text-sm border-2 md:w-24 w-10 border-white text-white rounded-lg py-1 md:px-2 px-0 hover:bg-white hover:text-black " style={{cursor:"pointer"}}
            onClick={() => window.location.reload()}
          >
            Home
          </div>
          <div
            className="flex justify-center items-center text-[0.6rem] md:text-sm border-2 md:w-24 w-10 border-white text-white rounded-lg py-1 md:px-2 px-0 hover:bg-white hover:text-black" style={{cursor:"pointer"}}
            onClick={() => about.current.scrollIntoView()}
          >
            About
          </div>
          <div
            className="flex justify-center items-center text-[0.6rem] md:text-sm border-2 md:w-24 w-12 border-white text-white rounded-lg py-1 md:px-2 px-0 hover:bg-white hover:text-black" style={{cursor:"pointer"}}
            onClick={() => skills.current.scrollIntoView()}
          >
            Skills
          </div>
          <div
            className="flex justify-center items-center text-[0.6rem] md:text-sm border-2 md:w-24 w-16 border-white text-white rounded-lg py-1 md:px-2 px-0 hover:bg-white hover:text-black" style={{cursor:"pointer"}}
            onClick={() => projects.current.scrollIntoView()}
          >
            My Work
          </div>
          <div
            className="flex justify-center items-center text-[0.6rem] md:text-sm border-2 md:w-24 w-12 border-white text-white rounded-lg py-1 md:px-2 px-0 hover:bg-white hover:text-black" style={{cursor:"pointer"}}
            onClick={() => contact.current.scrollIntoView()}
          >
            Say Hi
          </div>
          {/* <div className="flex justify-center items-center text-xs md:text-sm border-2 md:w-24 w-12 border-white text-white rounded-lg py-1 md:px-2 px-0 hover:bg-white hover:text-black"> */}
          <a
            href={resume}
            target={"_blank"}
            className={"text-white hover:underline text-[0.6rem] md:text-lg"}
          >
            Resume!
          </a>
          {/* </div> */}
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="flex justify-center items-center flex-col md:flex-row md:w-96 w-full md:mt-20 ">
            {/* <div className="flex flex-col md:flex-row md:ml-28 justify-center items-center mt-10 md:mt-0 text-white font-semibold md:text-6xl text-lg"> */}
            <div className="flex h-20 w-20 sm:h-20 sm:w-[200px] md:justify-start md:mt-10 md:ml-28 justify-center items-center mt-0">
              <img src={logo2} alt={"Ritika Jaiswal"}/>
              {/* </div> */}
            </div>
          </div>
          <div className="flex flex-col md:ml-11 justify-center items-centerx w-full md:mt-28 mt-10">
            <div className="flex md:justify-end md:mr-52 justify-center items-center md:mt-2 mt-0 text-white font-semibold md:text-6xl text-lg">
              {" "}
              Hello I am Ritika Jaiswal
            </div>
            <div className="flex md:justify-end md:mr-60 justify-center items-center md:mt-2 mt-0 text-white font-semibold md:text-6xl text-lg">
              {" "}
              A Software Engineer
            </div>
            <div className="flex justify-end md:mr-60 md:mt-4 mt-2 text-white font-semibold md:text-lg text-sm px-10 mx-4 py-3 md:py-0">
              {" "}
              I design and code beautifully simple things, and I love what I do.
            </div>
          </div>
        </div>
      </div>
      <div
        ref={about}
        className=" h-screen md:h-screen w-full bg-white flex flex-col justify-center items-center"
      >
        <div className="rounded-2xl shadow-xl mt-20 mb-20 flex flex-col bg-blue-900 text-blue-900 md:w-2/3 w-72 p-4 justify-center items-center md:space-y-10 text-xl md:p-10 ">
          <div className="flex justify-center items-center text-white font-semibold md:text-3xl text-lg ">
            Hi , I'm Ritika, Nice to meet you.
          </div>
          <div className="flex justify-center items-center text-white md:text-xl text-sm mb-8">
            Hardworking and result oriented developer. Strong interest in front
            end technologies. Always looking for improvements and seeking
            challenging problems to solve. I would like to explore how thing
            will work in Industry to generate value, explore the various
            business domain and translate business requirement to tech
            requirement.
          </div>
        </div>
      </div>

      <div className=" flex flex-col md:h-screen h-3/4 bg-blue-900 ">
        <div
          ref={skills}
          className=" flex flex-col font-semibold text-2xl justify-center text-white items-center md:mt32 mt-16"
        >
          Things I can work with!
        </div>
        <div className="flex flex-col md:flex-row md:mt-20 mt-10 justify-center items-center ml-18">
          <div className="flex flex-col shadow-xl h-96 w-56 md:ml-8  rounded-xl bg-white">
            <div className=" flex flex-col mt-2 font-bold h-10 w-full text-blue-900 justify-center items-center">
              Programming
            </div>
            <hr className={"bg-blue-900 my-1 h-0.5"} />
            <div className="ml-8 mt-4">
              <div>C</div>
              <div>C++</div>
              <div>java</div>
              <div>javascript</div>
              <div>SQL</div>
            </div>
          </div>

          <div className="flex flex-col shadow-lg h-96 w-56 md:ml-56 ml-0 mt-4 md:mt-0 rounded-xl bg-white">
            <div className=" flex flex-col mt-2 md:font-bold h-10 w-full  text-blue-900 justify-center items-center">
              Others
            </div>
            <hr className={"bg-blue-900 my-1 h-0.5"} />
            <div className="ml-8 mt-4">
              <div>MySql</div>
              <div>Linux</div>
              <div>Postgresql</div>
              <div>firebase</div>
              <div>Github</div>
              <div>Docker</div>
            </div>
          </div>

          <div className="flex flex-col shadow-lg h-96 w-56 md:ml-56 ml-0 mt-4 md:mt-0 mb-6 md:mb-0 rounded-xl bg-white">
            <div className=" flex flex-col mt-2 font-bold h-10 w-full text-blue-900 justify-center items-center">
              Technologies
            </div>
            <hr className={"bg-blue-900 my-1 h-0.5"} />
            <div className="ml-8 mt-4">
              <div>React js</div>
              <div>Material UI</div>
              <div>Tailwind CSS</div>
              <div>Context API</div>
              <div>Git</div>
            </div>
          </div>
        </div>
      </div>

      <div ref={projects} className=" flex flex-col md:h-screen h-3/4">
        <div className=" flex flex-col font-semibold text-2xl justify-center items-center text-blue-900 md:mt-32 mt-16">
          Work I have done..!
        </div>
        <div className="flex flex-col md:flex-row md:mt-20 mt-10 justify-center items-center md:justify-center items-center">
          <div className="flex flex-col shadow-lg bg-white h-80 w-56 md:ml-4  rounded-lg">
            <div className=" flex flex-row font-medium h-10 w-full rounded-lg bg-blue-900 text-white justify-center items-center">
              Portfolio Website
            </div>
            <div className="flex justify-center ml-2 mr-2 mt-5">
              Made a portfolio website to showcase my skills and strengths .
              Yeah , you just guessed it right it's the one you looking at (
              just taught should also mention it ).
            </div>
          </div>

          <div className="flex flex-col bg-white shadow-lg h-80 w-56 md:ml-60 mt-4 md:mt-0 rounded-lg mb-4 md:m">
            <div className=" flex flex-col font-medium h-10 w-full rounded-lg bg-blue-900 text-white justify-center items-center">
              E-commerce Website
            </div>
            <div className="flex justify-centerm ml-2 mr-2 mt-5">
              Designed and Developed data model of E-Commerce Website and made
              Scalable Service and KPI's for a E-Commerce business . Deployed my
              project to Cloud using Docker.
            </div>
          </div>

          {/* <div className="flex flex-col bg-white shadow-lg h-80 w-56 md:ml-60 ml-6 mt-4 md:mt-0 rounded-lg mb-6 md:mb-0x">
            <div className=" flex flex-col font-medium h-10 w-full rounded-lg bg-blue-900 text-white justify-center items-center">
              Other
            </div>
            <div className="flex justify-centerm ml-2 mr-2 mt-5">
              I don't know
            </div>
          </div> */}
        </div>
      </div>
      <div className={"flex justify-center"}>
        <hr className={"bg-blue-900 w-5/6 h-0.5"} />
      </div>
      <div
        ref={contact}
        className={
          "md:h-screen h-3/4 flex flex-col justify-center align-center"
        }
      >
        <div className={"h-26 mb-4 md:mb-0 flex justify-center items-center"}>
          <h2 className={"text-blue-900 font-semibold text-2xl mt-10"}>
            Contact me
          </h2>
        </div>
        <div className={"h-full flex flex-col md:flex-row"}>
          <div
            className={
              "w-full h-3/6 flex flex-col justify-center px-16 md:h-auto md:w-3/6"
            }
          >
            <div className="relative flex flex-col w-full flex-wrap items-stretch mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="z-10 h-full leading-snug font-normal text-center text-blueGray-300 absolute bg-transparent rounded text-base text-blue-900 items-center justify-center w-8 pl-2 py-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <input
                type="email"
                placeholder="Your Email"
                className="px-3 py-2 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border border-blue-900 outline-none focus:outline-none focus:ring-2 focus-within:ring-blue-900 w-full pl-10"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="relative flex w-full flex-wrap items-stretch mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className=" z-10 h-full leading-snug font-normal text-center text-blueGray-300 absolute bg-transparent rounded text-base text-blue-900 items-center justify-center w-8 pl-2 py-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Your Name"
                className="px-3 py-2 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border border-blue-900 outline-none focus:outline-none focus:ring-2 focus-within:ring-blue-900 w-full pl-10"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="relative flex w-full flex-wrap items-stretch mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className=" z-10 h-full leading-snug font-normal text-center text-blueGray-300 absolute bg-transparent rounded text-base text-blue-900 items-center justify-center w-8 pl-2 py-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                />
              </svg>
              <textarea
                placeholder={"Message"}
                cols={20}
                rows={10}
                className="px-3 py-2 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border border-blue-900 outline-none focus:outline-none focus:ring-2 focus-within:ring-blue-900 w-full pl-10"
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <button
              className="text-blue-900 bg-transparent border border-solid border-blue-900 hover:bg-blue-900 hover:text-white active:bg-blue-900 font-bold uppercase text-xs px-4 py-2 rounded outline-none focus:outline-none ease-linear transition-all duration-200"
              type="button"
              onMouseEnter={() => setIsSendButtonHovered(true)}
              onMouseLeave={() => setIsSendButtonHovered(false)}
              onClick={() => {
                setIsSendingMessage(true);
                if (!handleEmailValidation(email)) {
                  setAlertMessage("Oops! Looks like you entered invalid Email");
                  setAlertType("error");
                  setIsAlertOpen(true);
                  setIsSendingMessage(false);
                } else if (message === "") {
                  setAlertMessage("Oops ! your message is empty");
                  setAlertType("error");
                  setIsAlertOpen(true);
                  setIsSendingMessage(false);
                } else if (name === "") {
                  setAlertMessage(
                    "Hey Alien ! Looks Like you dont have a name"
                  );
                  setAlertType("error");
                  setIsAlertOpen(true);
                  setIsSendingMessage(false);
                } else {
                  axios
                    .post("https://formspree.io/f/mbjbvvbk", {
                      Email: email,
                      Name: name,
                      Message: message,
                    })
                    .then((response) => {
                      setAlertMessage(
                        "Message sent , i'll get in touch with you soon , Happy hacking!"
                      );
                      setAlertType("success");
                      setIsAlertOpen(true);
                      setIsSendingMessage(false);
                    })
                    .catch((error) => {
                      setAlertMessage(
                        "Hmmm looks like something went wrong try again later"
                      );
                      setAlertType("error");
                      setIsAlertOpen(true);
                      setIsSendingMessage(false);
                    });
                }
              }}
            >
              {isSendingMessage ? (
                <div className={"w-full flex justify-center"}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-loader animate-spin h-4 w-6"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <line x1={12} y1={6} x2={12} y2={3} />
                    <line x1="16.25" y1="7.75" x2="18.4" y2="5.6" />
                    <line x1={18} y1={12} x2={21} y2={12} />
                    <line x1="16.25" y1="16.25" x2="18.4" y2="18.4" />
                    <line x1={12} y1={18} x2={12} y2={21} />
                    <line x1="7.75" y1="16.25" x2="5.6" y2="18.4" />
                    <line x1={6} y1={12} x2={3} y2={12} />
                    <line x1="7.75" y1="7.75" x2="5.6" y2="5.6" />
                  </svg>
                </div>
              ) : isSendButtonHovered ? (
                <div className={"w-full flex justify-center"}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-send h-4 w-10"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                    <path d="M21 3l-6.5 18a0.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a0.55 .55 0 0 1 0 -1l18 -6.5" />
                  </svg>
                </div>
              ) : (
                "SEND"
              )}
            </button>
          </div>
          <div
            className={"flex h-3/6 w-full justify-center md:w-3/6 md:h-auto"}
          >
            <div
              className={
                "flex w-full justify-between px-20 my-10 md:ml-20 md:my-72"
              }
            >
              <a
                href={"https://www.linkedin.com/in/ritika-jaiswal-8227b9201/"}
                target={"_black"}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-brand-linkedin text-blue-900 h-10 w-8 transform transition duration-500 ease-in-out hover:scale-125"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <rect x={4} y={4} width={16} height={16} rx={2} />
                  <line x1={8} y1={11} x2={8} y2={16} />
                  <line x1={8} y1={8} x2={8} y2="8.01" />
                  <line x1={12} y1={16} x2={12} y2={11} />
                  <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                </svg>
              </a>
            </div>
            <div
              className={"flex  w-full justify-between my-10 md:ml-2 md:my-72"}
            >
              <a href={"https://github.com/ritika-jaiswal"} target={"_black"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-brand-github text-blue-900 h-10 w-8 transform transition duration-500 ease-in-out hover:scale-125"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className={"flex justify-center mb-4"}>
          <p className={"flex"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-5 mx-1.5 text-blue-900"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>
            <span>with</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-5 mx-1.5 text-blue-900"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            <span>by Ritika</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
