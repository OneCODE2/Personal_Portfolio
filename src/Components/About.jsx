import React from "react";
import { portfolioData } from "../data/portfolioData";

const About = () => {
  const { about, whatIDo, experience, techStackSummary } = portfolioData;

  return (
    <div className="relative h-full p-8 rounded-lg flex flex-col gap-8" style={{ background: "var(--surface-elevated)" }}>
      <section>
        <h1 className="text-3xl font-bold" style={{ color: "var(--color-text)" }}>About Me</h1>
        <p className="mt-4 leading-7" style={{ color: "var(--color-text)" }}>{about}</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold" style={{ color: "var(--color-text)" }}>WHAT I DO</h2>
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          {whatIDo.map((item) => (
            <article key={item.title} className="p-4 rounded-lg" style={{ background: "var(--surface-muted)", border: "1px solid var(--border-subtle)", boxShadow: "var(--outline-glow)" }}>
              <h3 className="text-xl font-semibold" style={{ color: "var(--color-accent)" }}>{item.title}</h3>
              <p className="mt-2" style={{ color: "var(--color-text)" }}>{item.description}</p>
              <p className="mt-3 text-sm" style={{ color: "var(--color-text)" }}><span className="font-semibold">Skillset & tools:</span> {item.tools.join(", ")}</p>
            </article>
          ))}
        </div>
      </section>

   
      <section>
        <h2 className="text-2xl font-bold" style={{ color: "var(--color-text)" }}>{techStackSummary.title}</h2>
        <div className="p-4 mt-4 rounded-lg" style={{ background: "var(--surface-muted)", border: "1px solid var(--border-subtle)", boxShadow: "var(--outline-glow)" }}>
          {techStackSummary.lines.map((line) => <p className="mb-2 last:mb-0" key={line} style={{ color: "var(--color-text)" }}>{line}</p>)}
        </div>
      </section>
    </div>
  );
};

export default About;

