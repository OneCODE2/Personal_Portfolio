import React from "react";
import { FaInstagram, FaLinkedin, FaLaptopCode, FaRegUser } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { CiMobile4 } from "react-icons/ci";
import { IoLocationSharp } from "react-icons/io5";
import { AiTwotoneMail, AiOutlineSafetyCertificate } from "react-icons/ai";
import { TiContacts } from "react-icons/ti";
import { NavLink } from "react-router-dom";
import "../Components/Global.css";
import project from "./SocialLinks/PassProfile.jpg";


const Profile = ({ show, setShow, darkmode, bgcolor, setCross }) => {
  const handleCross = () => {
    setCross(false);
    setShow(false);
  };

  return (
    <>
      {/* Sidebar Section */}
      {show && (
        <div
          className={`${
            darkmode === "dark" ? `bg-${bgcolor}` : `bg-white`
          } lg:w-11/12 md:w-8/12 sm:w-11/12 absolute sm:top-50 z-20`}
        >
          {/* About Section */}
          <NavLink to="/">
            <div
              onClick={handleCross}
              className={`bg-slate-200 rounded-lg flex items-center p-2 gap-1`}
              style={{
                background: `${bgcolor === "white" ? "#f3f6f6" : "#1D1D1D"}`,
              }}
            >
              <FaRegUser className="text-xl" />
              <h1
                className={`text-sm my-1 ${
                  bgcolor === "white" ? "text-black" : "text-white"
                }`}
              >
                About
              </h1>
            </div>
          </NavLink>

          {/* Projects Section */}
          <NavLink to="/Projects">
            <div
              onClick={handleCross}
              className="rounded-lg flex items-center p-2"
              style={{
                background: `${bgcolor === "white" ? "#f3f6f6" : "#1D1D1D"}`,
              }}
            >
              <FaLaptopCode
                className={`text-xl my-1 ${
                  bgcolor === "white" ? "text-black" : "text-white"
                }`}
              />
              <h1
                className={`text-sm my-1 ${
                  bgcolor === "white" ? "text-black" : "text-white"
                }`}
              >
                Projects
              </h1>
            </div>
          </NavLink>

          {/* Skills Section */}
          <NavLink to="/Certify">
            <div
              onClick={handleCross}
              className="rounded-lg flex items-center p-2"
              style={{
                background: `${bgcolor === "white" ? "#f3f6f6" : "#1D1D1D"}`,
              }}
            >
              <AiOutlineSafetyCertificate
                className={`text-xl my-1 ${
                  bgcolor === "white" ? "text-black" : "text-white"
                }`}
              />
              <h1
                className={`text-sm my-1 ${
                  bgcolor === "white" ? "text-black" : "text-white"
                }`}
              >
                Skills
              </h1>
            </div>
          </NavLink>

          {/* Contact Section */}
          <NavLink to="/Contact">
            <div
              onClick={handleCross}
              className="rounded-lg flex items-center p-2"
              style={{
                background: `${bgcolor === "white" ? "#f3f6f6" : "#1D1D1D"}`,
              }}
            >
              <TiContacts
                className={`text-xl my-1 ${
                  bgcolor === "white" ? "text-black" : "text-white"
                }`}
              />
              <h1
                className={`text-sm my-1 ${
                  bgcolor === "white" ? "text-black" : "text-white"
                }`}
              >
                Contact
              </h1>
            </div>
          </NavLink>
        </div>
      )}

      {/* Profile Card Section */}
      <div className="w-full flex justify-around">
        <div
          className={`lg:w-80 sm:w-96 h-12/12 rounded-lg p-10 flex flex-col items-center relative gap-7 ${
            darkmode === "dark" ? "bg-black" : "bg-white"
          }`}
        >
          {/* Profile Image */}
          <div className="w-40 h-40 rounded-full">
            <img
              src={project}
              alt="Profile"
              className="rounded-full object-cover"
            />
          </div>

          {/* Name */}
          <h1
            className={`text-2xl font-bold ${
              bgcolor === "white" ? "text-black" : "text-white"
            }`}
          >
            <span className="font-bold">ADITYA GAJBHIYE</span>
            
          </h1>

          {/* Title */}
          <div
            className="w-6/12 h-8 p-2"
            style={{
              background: `${bgcolor === "white" ? "#f3f6f6" : "#1D1D1D"}`,
            }}
          >
            <h1
              className="text-center text-sm"
              style={{
                color: `${bgcolor === "white" ? "#000000" : "#A6A6A6"}`,
              }}
            >
              <span className="font-bold">SOFTWARE DEVELOPER</span>
              
            </h1>
          </div>

          {/* Social Links */}
          <div className="w-96 p-2 flex gap-2 justify-center">
            <a
              href="https://www.linkedin.com/in/aditya-gajbhiye-9b6048230/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg hover:bg-blue-500 p-2"
            >
              <FaLinkedin className="text-2xl text-blue-600" />
            </a>
            <a
              href="https://github.com/OneCODE2"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg hover:bg-blue-500 p-2"
            >
              <BsGithub
                className="text-2xl"
                style={{
                  color: `${bgcolor === "white" ? "black" : "white"}`,
                }}
              />
            </a>
          </div>

          {/* Contact Details */}
          <div
            className="w-68 p-4 flex flex-col gap-2 rounded-lg"
            style={{
              background: `${bgcolor === "white" ? "#f3f6f6" : "#1D1D1D"}`,
            }}
          >
            {/* Phone */}
            <div className="flex items-center gap-2 border-b p-1">
              <div className="w-10 h-10 p-2 rounded-lg hover:bg-blue-500 flex items-center justify-center">
                <CiMobile4 className="text-2xl text-pink-500 hover:text-white" />
              </div>
              <h1 className={`${bgcolor === "white" ? "text-black" : "text-white"}`}>
                
                <span className="font-bold">+918698720931</span>
              </h1>
            </div>

            {/* Email */}
            <div className="flex items-center gap-2 border-b p-1">
              <div className="w-10 h-10 p-2 rounded-lg hover:bg-blue-500 flex items-center justify-center">
                <AiTwotoneMail className="text-2xl text-sky-600 hover:text-white" />
              </div>
              <h1 className={`${bgcolor === "white" ? "text-black" : "text-white"}`}>
              <span className="font-bold">adityagajbhiye125@gmail.com</span>
                
              </h1>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 p-2 rounded-lg hover:bg-blue-500 flex items-center justify-center">
                <IoLocationSharp className="text-2xl text-pink-600 hover:text-white" />
              </div>
              <h1 className={`${bgcolor === "white" ? "text-black" : "text-white"}`}>
              <span className="font-bold">Nagpur, Maharashtra </span>
               
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
