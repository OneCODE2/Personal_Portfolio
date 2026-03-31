import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";

const cardVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.06,
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const Projects = () => {
  return (
    <div className="p-4 md:p-6 rounded-xl">
      <h1 className="text-3xl font-bold" style={{ color: "var(--color-text)" }}>My Work</h1>

      <div className="grid md:grid-cols-2 gap-4 my-5">
        {portfolioData.projects.map((project, index) => (
          <motion.article
            key={project.title}
            className="rounded-xl overflow-hidden flex flex-col h-[500px]"
            style={{ background: "var(--surface-muted)", border: "1px solid var(--border-subtle)", boxShadow: "var(--outline-glow)" }}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.18 }}
            custom={index}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
          >
            <motion.img
              src={project.image || "/images/placeholder.webp"}
              alt={`${project.title} preview`}
              className="w-full h-[60%] object-cover"
              loading="lazy"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            />

            <div className="p-4 flex flex-col gap-2 h-[40%] overflow-auto">
              <p className="text-xs" style={{ color: "var(--color-accent)" }}>{index + 1}. {project.category}</p>
              <h2 className="text-base font-bold" style={{ color: "var(--color-text)" }}>{project.title}</h2>
              <p className="text-sm font-semibold" style={{ color: "var(--color-text)" }}>Tools and features</p>
              <p className="text-sm" style={{ color: "var(--color-text)" }}>{project.tools}</p>
              <p className="text-sm" style={{ color: "var(--color-text)" }}>{project.description}</p>
              {project.link ? (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold mt-1" style={{ color: "var(--color-accent)" }}>
                  Open project
                </a>
              ) : null}
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
};

export default Projects;
