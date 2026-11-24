import { useEffect, useRef } from "react";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Projects from "./components/Projects.jsx";
import Experience from "./components/Experience.jsx";
import Education from "./components/Education.jsx";
import Contact from "./components/Contact.jsx";

export default function App() {
  const bar = useRef(null);
  const glow = useRef(null);
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      bar.current?.style.setProperty("--p", max > 0 ? window.scrollY / max : 0);
    };
    const onMove = (e) => {
      glow.current?.style.setProperty("--cx", e.clientX + "px");
      glow.current?.style.setProperty("--cy", e.clientY + "px");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pointermove", onMove);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <>
      <div className="progress" ref={bar} />
      <div className="cursor-glow" ref={glow} aria-hidden="true" />
      <div className="bg-canvas" />
      <Nav />
      <Hero />
      <Projects />
      <Experience />
      <Education />
      <Contact />
    </>
  );
}
