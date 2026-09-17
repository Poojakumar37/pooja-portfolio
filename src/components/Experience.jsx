import { experience } from "../data.js";
import Reveal from "./Reveal.jsx";

export default function Experience() {
  return (
    <section id="work">
      <div className="wrap">
        <Reveal as="h2" className="section-title">
          Experience
        </Reveal>
        {experience.map((job, i) => (
          <Reveal as="div" className="job" key={job.company} delay={i * 90}>
            <div className="job-head">
              <span className="job-role">{job.role}</span>
              <span className="job-period">{job.period}</span>
            </div>
            <p className="job-company">
              {job.company} — {job.location}
            </p>
            <ul>
              {job.points.map((point, j) => (
                <li key={j}>{point}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
