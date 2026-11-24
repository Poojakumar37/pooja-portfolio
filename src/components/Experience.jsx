import { useState } from "react";
import { experience } from "../data.js";
import Reveal from "./Reveal.jsx";

export default function Experience() {
  const [open, setOpen] = useState(null); // index of the job whose details are open

  return (
    <section id="work">
      <div className="wrap">
        <Reveal as="h2" className="section-title">
          Experience
        </Reveal>
        {experience.map((job, i) => {
          const isOpen = open === i;
          return (
            <Reveal
              as="div"
              className={`job ${isOpen ? "is-open" : ""}`}
              key={job.company}
              delay={i * 90}
            >
              <button
                type="button"
                className="job-toggle"
                aria-expanded={isOpen}
                aria-controls={`job-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
              >
                <span className="job-head">
                  <span className="job-role">{job.role}</span>
                  <span className="job-period">{job.period}</span>
                </span>
                <span className="job-company">
                  {job.company} — {job.location}
                </span>
                <span className="job-hint">
                  {isOpen ? "Hide details" : "Click to see details"}
                  <i aria-hidden="true" />
                </span>
              </button>
              <div className="job-panel" id={`job-${i}`}>
                <ul>
                  {job.points.map((point, j) => (
                    <li key={j} style={{ "--d": `${j * 70}ms` }}>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
