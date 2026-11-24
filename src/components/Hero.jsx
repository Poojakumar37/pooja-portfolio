import { useEffect, useRef, useState } from "react";
import { profile } from "../data.js";
import { heroCopy, stats, marquee } from "../extra.js";

function CountUp({ to, suffix }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    let raf;
    const start = performance.now() + 900;
    const tick = (t) => {
      const p = Math.min(Math.max((t - start) / 1400, 0), 1);
      setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to]);
  return (
    <>
      {n}
      {suffix}
    </>
  );
}

export default function Hero() {
  const [photoOk, setPhotoOk] = useState(true);
  const root = useRef(null);

  // subtle pointer parallax on the portrait + big word
  useEffect(() => {
    const el = root.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const move = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      el.style.setProperty("--px", x.toFixed(3));
      el.style.setProperty("--py", y.toFixed(3));
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, []);

  return (
    <section className="hero" id="top" ref={root}>
      <div className="hero-word" aria-hidden="true">
        <span>PORT</span>
        <span>FOLIO</span>
      </div>

      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="hello">Hello, I'm</p>
          <h1>
            <span>Pooja</span>
          </h1>
          <p className="hero-role">Full stack developer, React Native &amp; MERN</p>
          <p className="hero-text">
            {heroCopy.split(" ").map((w, i) => (
              <span className="w" style={{ "--n": i }} key={i}>
                {w}&nbsp;
              </span>
            ))}
          </p>
          <div className="hero-actions">
            <a className="btn btn-red" href="#projects">
              See my work
            </a>
            <a className="btn btn-line" href={`mailto:${profile.email}`}>
              Say hi
            </a>
          </div>
        </div>

        <div className="portrait">
          {photoOk ? (
            <img src="/pooja.png" alt="Pooja" onError={() => setPhotoOk(false)} />
          ) : (
            <div className="portrait-fallback" aria-label="Portrait placeholder">
              <span>P</span>
              <small>Drop your photo at public/pooja.png</small>
            </div>
          )}
        </div>

        <dl className="stats">
          {stats.map((s) => (
            <div key={s.label}>
              <dt>
                <CountUp to={s.to} suffix={s.suffix} />
              </dt>
              <dd>{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[...marquee, ...marquee].map((m, i) => (
            <span key={i}>{m}</span>
          ))}
        </div>
        <div className="marquee-track rev">
          {[...marquee].reverse().concat([...marquee].reverse()).map((m, i) => (
            <span key={i}>{m}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
