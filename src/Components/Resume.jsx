import React from "react";
import { IoBookOutline } from "react-icons/io5";
import { AiOutlineFileDone } from "react-icons/ai";
import "../Components/Global.css";

const Resume = ({ bgcolor, darkmode }) => {
  return (
    <>
      <div
        className={`resume-container ${
          darkmode === "dark" ? "dark-mode-background" : "light-mode-background"
        }`}
      >
        <h1
          className={`resume-title ${
            bgcolor === "white" ? "text-black" : "text-white"
          }`}
        >
          Resume
        </h1>

        <div className="resume-content">
          <div className="resume-section">
            <IoBookOutline className="resume-icon text-4xl text-blue-500" />
            <div>
              <h2
                className={`resume-subtitle ${
                  bgcolor === "white" ? "text-black" : "text-white"
                }`}
              >
                Education
              </h2>
              <p className="resume-description text-gray-700">
                Completed <span className="font-bold">B.Tech</span> in Computer
                Science and Engineering from{" "}
                <span className="font-bold">NIT Manipur</span>.
              </p>
            </div>
          </div>

          <div className="resume-section">
            <AiOutlineFileDone className="resume-icon text-4xl text-green-500" />
            <div>
              <h2
                className={`resume-subtitle ${
                  bgcolor === "white" ? "text-black" : "text-white"
                }`}
              >
                Projects
              </h2>
              <p className="resume-description text-gray-700">
                Built multiple full-stack applications, including e-commerce
                platforms and AI-powered solutions, focusing on scalable and
                maintainable codebases.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
