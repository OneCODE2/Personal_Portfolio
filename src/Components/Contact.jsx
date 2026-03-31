import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { AiOutlineFilePdf } from "react-icons/ai";
import { portfolioData } from "../data/portfolioData";

const Contact = () => {
  const { contact, social } = portfolioData;

  return (
    <div className="p-8 rounded-lg flex flex-col gap-6" style={{ background: "var(--surface-elevated)" }}>
      <h1 className="text-3xl font-bold" style={{ color: "var(--color-text)" }}>Contact</h1>

      <div className="p-5 rounded-lg" style={{ background: "var(--surface-muted)", border: "1px solid var(--border-subtle)", boxShadow: "var(--outline-glow)" }}>
        <p style={{ color: "var(--color-text)" }}><span className="font-semibold">Email:</span> {contact.email}</p>
        <p className="mt-2" style={{ color: "var(--color-text)" }}><span className="font-semibold">Phone:</span> {contact.phone}</p>
      </div>

      <div className="flex gap-3 flex-wrap">
        <a href={social.github} target="_blank" rel="noopener noreferrer" className="wave-btn px-4 py-2 rounded-lg" style={{ background: "var(--surface-muted)", color: "var(--color-text)" }}><FaGithub className="inline mr-2" />GitHub</a>
        <a href={social.linkedin} target="_blank" rel="noopener noreferrer" className="wave-btn px-4 py-2 rounded-lg" style={{ background: "var(--surface-muted)", color: "var(--color-text)" }}><FaLinkedin className="inline mr-2" />LinkedIn</a>
        <a href={social.instagram} target="_blank" rel="noopener noreferrer" className="wave-btn px-4 py-2 rounded-lg" style={{ background: "var(--surface-muted)", color: "var(--color-text)" }}><FaInstagram className="inline mr-2" />Instagram</a>
        <a href={social.resume} target="_blank" rel="noopener noreferrer" className="wave-btn px-4 py-2 rounded-lg" style={{ background: "var(--surface-muted)", color: "var(--color-text)" }}><AiOutlineFilePdf className="inline mr-2" />Resume</a>
      </div>
    </div>
  );
};

export default Contact;


