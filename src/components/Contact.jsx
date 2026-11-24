import { profile } from "../data.js";
import Reveal from "./Reveal.jsx";

export default function Contact() {
  return (
    <>
      <section id="contact" className="contact">
        <div className="wrap contact-grid">
          <Reveal as="div">
            <h2 className="big">
              Let's work
              <br />
              together.
            </h2>
            <p className="contact-text">
              I'm open to full stack and React Native roles. Email is quickest, and I'm happy to walk
              you through any of the projects above.
            </p>
          </Reveal>
          <Reveal as="div" className="contact-list" delay={120}>
            <a href={`mailto:${profile.email}`}>
              <span>Email</span>
              {profile.email}
            </a>
            <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>
              <span>Phone</span>
              {profile.phone}
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              <span>LinkedIn</span>
              pooja-m-s
            </a>
            <p>
              <span>Based in</span>
              {profile.location}
            </p>
          </Reveal>
        </div>
      </section>
      <footer>
        <div className="wrap foot">
          <span>© {new Date().getFullYear()} Pooja</span>
          <span>Built with React &amp; Vite</span>
        </div>
      </footer>
    </>
  );
}
