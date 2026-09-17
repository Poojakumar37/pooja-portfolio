import { profile } from "../data.js";
import Reveal from "./Reveal.jsx";

export default function Contact() {
  return (
    <>
      <section id="contact" className="contact">
        <div className="wrap">
          <Reveal as="h2" className="section-title">
            Get in touch
          </Reveal>
          <Reveal as="p" className="lede" delay={60}>
            Open to full stack and React Native roles. The fastest way to reach me is email or
            LinkedIn — happy to walk through any of the projects above in more detail.
          </Reveal>
          <Reveal as="div" className="contact-grid" delay={120}>
            <a className="btn btn-primary" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <a className="btn btn-ghost" href={`tel:${profile.phone.replace(/\s/g, "")}`}>
              {profile.phone}
            </a>
            <a className="btn btn-ghost" href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn profile
            </a>
          </Reveal>
        </div>
      </section>
      <footer>
        <div className="wrap" style={{ display: "flex", justifyContent: "space-between", width: "100%", flexWrap: "wrap", gap: 8 }}>
          <span>{profile.name} — {profile.location}</span>
          <span>Built with React &amp; Vite</span>
        </div>
      </footer>
    </>
  );
}