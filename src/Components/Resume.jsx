import React from "react";
import { portfolioData } from "../data/portfolioData";

const Resume = () => {
  const skills = [...new Set(portfolioData.whatIDo.flatMap((item) => item.tools))];

  return (
    <div className="p-4 md:p-6 rounded-xl">
      <h1 className="text-3xl font-bold" style={{ color: "var(--color-text)" }}>Resume</h1>

      <section className="mt-6">
        <h2 className="text-2xl font-semibold" style={{ color: "var(--color-text)" }}>Experience</h2>
        <div className="mt-4 space-y-4">
          {portfolioData.experience.map((item) => (
            <article key={item.role} className="p-4 rounded-xl" style={{ background: "var(--surface-muted)", border: "1px solid var(--border-subtle)", boxShadow: "var(--outline-glow)" }}>
              <h3 className="text-lg font-bold" style={{ color: "var(--color-text)" }}>{item.role}</h3>
              <p className="text-sm" style={{ color: "var(--color-accent)" }}>{item.duration}</p>
              <ul className="list-disc pl-5 mt-3 space-y-2" style={{ color: "var(--color-text)" }}>
                {item.highlights.map((point) => <li key={point}>{point}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>



      <section className="mt-8">
        <h2 className="text-2xl font-semibold" style={{ color: "var(--color-text)" }}>Skills</h2>
        <div className="flex flex-wrap gap-2 mt-3">
          {skills.map((skill) => (
            <span key={skill} className="px-3 py-1 rounded-full text-sm" style={{ background: "var(--surface-muted)", color: "var(--color-text)", border: "1px solid var(--border-subtle)", boxShadow: "var(--outline-glow)" }}>
              {skill}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Resume;

