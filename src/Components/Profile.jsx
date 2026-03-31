import React, { useState } from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { AiOutlineFilePdf, AiOutlineMail } from "react-icons/ai";
import { CiMobile4 } from "react-icons/ci";
import project from "./SocialLinks/PassProfile.jpg";
import { portfolioData } from "../data/portfolioData";

const socialButtonStyle = { background: "var(--surface-muted)" };

const Profile = ({ mode = "desktop" }) => {
  const { identity, social, contact } = portfolioData;
  const [showContacts, setShowContacts] = useState(false);

  if (mode === "mobile") {
    return (
      <div className="rounded-2xl p-4" style={{ background: "var(--surface-elevated)", border: "1px solid var(--border-subtle)", boxShadow: "var(--outline-glow)" }}>
        <div className="flex justify-end pt-1 pb-3">
          <button
            type="button"
            className="wave-btn px-3 py-2 rounded-lg text-xs font-medium"
            style={{ background: "var(--surface-muted)", color: "var(--color-accent)", border: "1px solid var(--border-subtle)" }}
            onClick={() => setShowContacts((value) => !value)}
          >
            {showContacts ? "Hide Contacts" : "Show Contacts"}
          </button>
        </div>

        <div className="flex items-start gap-3 min-w-0">
          <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
            <img src={project} alt="Profile" className="w-full h-full object-cover" />
          </div>

          <div className="min-w-0  justify-center text-center ml-auto">
            <p className="text-sm glow-text" style={{ color: "var(--color-accent)" }}>{identity.greeting}</p>
            <h1 className="text-lg font-semibold leading-tight" style={{ color: "var(--color-text)" }}>{identity.name}</h1>
            <p className="text-xs mt-1" style={{ color: "var(--color-text)" }}>Software Developer</p>
          </div>
        </div>

        {showContacts && (
          <>
            <div className="w-full p-3 rounded-xl space-y-2 mt-4" style={{ background: "var(--surface-muted)" }}>
              <p className="text-sm flex items-center gap-2" style={{ color: "var(--color-text)" }}><AiOutlineMail /> {contact.email}</p>
              <p className="text-sm flex items-center gap-2" style={{ color: "var(--color-text)" }}><CiMobile4 /> {contact.phone}</p>
            </div>

            <div className="w-full pt-3 flex gap-2 justify-start">
              <a href={social.linkedin} target="_blank" rel="noopener noreferrer" className="wave-btn rounded-lg p-2" style={socialButtonStyle}><FaLinkedin className="text-xl" style={{ color: "#0a66c2" }} /></a>
              <a href={social.github} target="_blank" rel="noopener noreferrer" className="wave-btn rounded-lg p-2" style={socialButtonStyle}><BsGithub className="text-xl" style={{ color: "var(--color-text)" }} /></a>
              <a href={social.instagram} target="_blank" rel="noopener noreferrer" className="wave-btn rounded-lg p-2" style={socialButtonStyle}><FaInstagram className="text-xl" style={{ color: "#e4405f" }} /></a>
              <a href={social.resume} target="_blank" rel="noopener noreferrer" className="wave-btn rounded-lg p-2" style={socialButtonStyle}><AiOutlineFilePdf className="text-xl" style={{ color: "#e11d48" }} /></a>
            </div>
          </>
        )}
      </div>
    );
  }

  return (
    <div className="w-full rounded-2xl p-5 md:p-6" style={{ background: "var(--surface-elevated)", border: "1px solid var(--border-subtle)", boxShadow: "var(--outline-glow)" }}>
      <div className="w-44 h-44 rounded-2xl overflow-hidden mx-auto">
        <img src={project} alt="Profile" className="w-full h-full object-cover" />
      </div>

      <div className="text-center mt-5">
        <p className="text-sm glow-text" style={{ color: "var(--color-accent)" }}>{identity.greeting}</p>
        <h1 className="text-3xl font-semibold" style={{ color: "var(--color-text)" }}>{identity.heroName}</h1>
        <p className="text-sm mt-1" style={{ color: "var(--color-text)" }}>{identity.headline}</p>

        <div className="flex gap-2 flex-wrap justify-center mt-3">
          {identity.roles.map((role) => (
            <span key={role} className="px-3 py-1 text-xs rounded-full" style={{ background: "var(--surface-muted)", color: "var(--color-text)" }}>
              {role}
            </span>
          ))}
        </div>
      </div>

      <div className="w-full p-4 rounded-xl space-y-3 mt-5" style={{ background: "var(--surface-muted)" }}>
        <p className="text-sm flex items-center gap-2" style={{ color: "var(--color-text)" }}><AiOutlineMail /> {contact.email}</p>
        <p className="text-sm flex items-center gap-2" style={{ color: "var(--color-text)" }}><CiMobile4 /> {contact.phone}</p>
      </div>

      <div className="w-full pt-4 flex gap-2 justify-center">
        <a href={social.linkedin} target="_blank" rel="noopener noreferrer" className="wave-btn rounded-lg p-2" style={socialButtonStyle}><FaLinkedin className="text-2xl" style={{ color: "#0a66c2" }} /></a>
        <a href={social.github} target="_blank" rel="noopener noreferrer" className="wave-btn rounded-lg p-2" style={socialButtonStyle}><BsGithub className="text-2xl" style={{ color: "var(--color-text)" }} /></a>
        <a href={social.instagram} target="_blank" rel="noopener noreferrer" className="wave-btn rounded-lg p-2" style={socialButtonStyle}><FaInstagram className="text-2xl" style={{ color: "#e4405f" }} /></a>
        <a href={social.resume} target="_blank" rel="noopener noreferrer" className="wave-btn rounded-lg p-2" style={socialButtonStyle}><AiOutlineFilePdf className="text-2xl" style={{ color: "#e11d48" }} /></a>
      </div>
    </div>
  );
};

export default Profile;


