import { useEffect } from 'react';
import { Link, Route, Routes, useLocation, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import Lenis from 'lenis';
import { person, projects } from './content/site.js';
import Visual from './Visual.jsx';

const ease = [0.22, 1, 0.36, 1];

function Reveal({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      className={`rv ${className}`}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-8% 0px' }}
      transition={{ duration: 0.9, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

// Entrance animations are CSS so the name and titles never depend on JS timing.
function Rise({ text, delay = 0 }) {
  return (
    <span className="rise-mask">
      <span className="rise" style={{ animationDelay: `${delay}s` }}>{text}</span>
    </span>
  );
}

function LoadIn({ children, delay = 0, className = '' }) {
  return <div className={`load-in ${className}`} style={{ animationDelay: `${delay}s` }}>{children}</div>;
}

function Nav() {
  return (
    <header className="nav">
      <Link to="/" className="brand" aria-label="Sarthak Viche, home">
        Sarthak Viche
      </Link>
      <nav aria-label="Main">
        <Link to="/#work">Work</Link>
        <Link to="/#about">About</Link>
        <a href={person.resume} target="_blank" rel="noreferrer">Resume</a>
        <Link to="/#contact" className="pill">Get in touch</Link>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero">
      <img className="hero-photo" src="/photos/reading.webp" alt="Sarthak Viche reading a travel magazine in an armchair beside a brass lamp" width="840" height="1050" />
      <h1 className="hero-name">
        <Rise text="Sarthak" delay={0.1} />
        <Rise text="Viche" delay={0.22} />
      </h1>
      <div className="hero-foot">
        <LoadIn delay={0.6}>
          <p className="hero-intro">{person.intro}</p>
        </LoadIn>
        <LoadIn delay={0.72} className="hero-meta">
          <p className="mono">{person.role}<br />VIT Pune, India</p>
          <Link to="/#work" className="btn">View work ↓</Link>
        </LoadIn>
      </div>
    </section>
  );
}

function Statement() {
  return (
    <section className="statement">
      <p>{person.statement.split(' ').map((w, i) => <span className="word" key={i}>{w} </span>)}</p>
    </section>
  );
}

const clamp = (v) => Math.min(1, Math.max(0, v));

// One scroll handler for the homepage. Everything is measured fresh on each frame,
// and content is never hidden by it: it only moves, scales and dims what is already visible.
function useHomeScroll() {
  useEffect(() => {
    const words = [...document.querySelectorAll('.word')];
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      words.forEach((w) => { w.style.opacity = 1; });
      return undefined;
    }
    const stages = [...document.querySelectorAll('.stage')];
    const statement = document.querySelector('.statement');
    let queued = false;
    const run = () => {
      queued = false;
      const vh = window.innerHeight;
      const r = statement.getBoundingClientRect();
      const p = clamp((vh * 0.8 - r.top) / (r.height + vh * 0.2)) * words.length;
      words.forEach((w, i) => { w.style.opacity = 0.14 + 0.86 * clamp(p - i); });
      stages.forEach((s, i) => {
        const top = s.getBoundingClientRect().top;
        const fill = s.querySelector('.stage-fill');
        if (s.dataset.circle !== undefined) {
          // Grows from the centre, finishes while pinned, then the clip is removed entirely.
          const t = clamp((0.25 * vh - top) / (1.05 * vh));
          const eased = t * t * (3 - 2 * t);
          const radius = eased * Math.hypot(window.innerWidth, vh) * 0.52;
          fill.style.clipPath = t >= 1 ? 'none' : `circle(${radius}px at 50% 50%)`;
          s.style.setProperty('--enter', 1);
        } else {
          s.style.setProperty('--enter', clamp(1 - top / vh));
        }
        // Stays pinned for its extra height, then recedes as the next panel arrives.
        const hold = s.offsetHeight - 2 * vh;
        s.style.setProperty('--exit', i < stages.length - 1 ? clamp((-top - hold) / vh) : 0);
      });
    };
    const queue = () => {
      if (!queued) { queued = true; requestAnimationFrame(run); }
    };
    run();
    window.addEventListener('scroll', queue, { passive: true });
    window.addEventListener('resize', queue);
    return () => {
      window.removeEventListener('scroll', queue);
      window.removeEventListener('resize', queue);
    };
  }, []);
}

function Overview({ project: p }) {
  return (
    <div className="overview">
      {p.logo && (
        <p className="overview-logo">
          <img src={p.logo.mark} alt="" /><img src={p.logo.word} alt={p.logo.alt} />
        </p>
      )}
      <dl>
        <div><dt>Space</dt><dd>{p.space}</dd></div>
        <div><dt>Built for</dt><dd>{p.audience}</dd></div>
        <div><dt>The problem</dt><dd>{p.solves}</dd></div>
        <div><dt>What it does</dt><dd>{p.does}</dd></div>
      </dl>
    </div>
  );
}

function Stage({ project, index }) {
  return (
    <section className="stage" style={{ zIndex: index + 1 }} data-circle={project.slug === 'munim' ? '' : undefined}>
      <div className="stage-pin">
        <div className="stage-fill" style={{ background: project.color, color: project.ink }}>
          <Link to={`/work/${project.slug}`} className="stage-inner">
            <div className="stage-copy">
              <p className="mono">Project {project.frame}</p>
              <h3 className={project.logoFull ? 'has-logo' : ''}>
                {project.logoFull ? <img src={project.logoFull.src} alt={project.logoFull.alt} /> : project.name}
              </h3>
              <p className="stage-line">{project.line}</p>
              <span className="stage-cta">View project →</span>
            </div>
            <div className="stage-visual">
              <Overview project={project} />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

function Home() {
  useHomeScroll();
  return (
    <>
      <Hero />
      <Statement />
      <section id="work" className="work-head">
        <Reveal>
          <h2>Selected work<i className="period" aria-hidden="true" /></h2>
          <p>Three projects where AI does the reading and something more accountable does the deciding.</p>
        </Reveal>
      </section>
      {projects.map((p, i) => <Stage key={p.slug} project={p} index={i} />)}
      <section id="about" className="about">
        <div>
          <Reveal><h2>About</h2></Reveal>
          <Reveal delay={0.1}>
            <figure className="about-photo">
              <img src="/photos/presenting.webp" alt="Sarthak Viche presenting a slide on KPI strategy at VIT Pune" width="960" height="1280" loading="lazy" />
              <figcaption className="mono">Presenting at VIT Pune</figcaption>
            </figure>
          </Reveal>
        </div>
        <div>
          {person.about.map((t, i) => <Reveal key={i} delay={i * 0.08}><p>{t}</p></Reveal>)}
        </div>
      </section>
      <div className="marquee" aria-label={`Tools: ${person.stack.join(', ')}`}>
        <div>
          {[0, 1].map((k) => (
            <span key={k} aria-hidden={k === 1}>{person.stack.map((s) => <span key={s}>{s}<b> / </b></span>)}</span>
          ))}
        </div>
      </div>
    </>
  );
}

function Missing() {
  return (
    <section className="missing">
      <h1>Page not found.</h1>
      <Link to="/" className="btn">Back home</Link>
    </section>
  );
}

function Case() {
  const { slug } = useParams();
  const i = projects.findIndex((p) => p.slug === slug);
  const p = projects[i];
  if (!p) return <Missing />;
  const next = projects[(i + 1) % projects.length];
  return (
    <article>
      <header className="case-hero" style={{ background: p.color, color: p.ink }}>
        {p.logo && <p className="case-logo"><img src={p.logo.mark} alt="" /><img src={p.logo.word} alt={p.logo.alt} /></p>}
        <p className="mono">Project {p.frame} · {p.space}</p>
        <h1><Rise text={p.name} delay={0.05} /></h1>
        <LoadIn delay={0.25}><p className="case-line">{p.line}</p></LoadIn>
      </header>
      <div className="case-visual" style={{ background: p.color }}><LoadIn delay={0.35}><Visual slug={p.slug} /></LoadIn></div>
      <section className="case-body">
        <Reveal><p className="case-summary">{p.summary}</p></Reveal>
        <dl className="facts">
          <div><dt>Role</dt><dd>{p.role}</dd></div>
          <div><dt>Status</dt><dd>{p.status}</dd></div>
          <div><dt>Stack</dt><dd>{p.stack.join(', ')}</dd></div>
          {p.links.map((l) => (
            <div key={l.url}><dt>Link</dt><dd><a href={l.url} target="_blank" rel="noreferrer">{l.label} ↗</a></dd></div>
          ))}
        </dl>
        <Reveal><h2>The problem</h2><p className="case-text">{p.problem}</p></Reveal>
        <h2>How it’s built</h2>
        <ol className="decisions">
          {p.approach.map((a, n) => (
            <li key={a.title}>
              <Reveal>
                <span className="mono">{String(n + 1).padStart(2, '0')}</span>
                <h3>{a.title}</h3>
                <p>{a.body}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>
      <Link to={`/work/${next.slug}`} className="next" style={{ background: next.color, color: next.ink }}>
        <span className="mono">Next project</span>
        <strong>{next.name} →</strong>
      </Link>
    </article>
  );
}

function Footer() {
  return (
    <footer id="contact" className="contact">
      <Reveal><h2>Got a system that can’t afford to be wrong?</h2></Reveal>
      <Reveal delay={0.1}>
        <motion.a href={`mailto:${person.email}`} className="circle" whileHover={{ scale: 1.08 }} transition={{ type: 'spring', stiffness: 260, damping: 20 }}>
          Get in touch
        </motion.a>
      </Reveal>
      <p className="contact-mail"><a href={`mailto:${person.email}`}>{person.email}</a></p>
      <p className="contact-links">
        <a href={person.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
        <a href={person.github} target="_blank" rel="noreferrer">GitHub ↗</a>
        <a href={person.instagram} target="_blank" rel="noreferrer">Instagram ↗</a>
        <a href={person.resume} target="_blank" rel="noreferrer">Resume ↗</a>
      </p>
      <div className="base mono">
        <span>© 2026 {person.name} · {person.location}</span>
        <a href="/llms.txt">AI agents: start at /llms.txt</a>
      </div>
    </footer>
  );
}

const lenisRef = { current: null };

function useSmoothScroll() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
    lenisRef.current = lenis;
    let id = requestAnimationFrame(function raf(t) {
      lenis.raf(t);
      id = requestAnimationFrame(raf);
    });
    return () => {
      cancelAnimationFrame(id);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);
  useEffect(() => {
    const target = hash ? document.querySelector(hash) : null;
    if (lenisRef.current) {
      if (target) lenisRef.current.scrollTo(target, { offset: -60 });
      else lenisRef.current.scrollTo(0, { immediate: true });
    } else if (target) target.scrollIntoView();
    else window.scrollTo(0, 0);
    const p = projects.find((x) => pathname === `/work/${x.slug}`);
    document.title = p ? `${p.name}: ${p.line} | ${person.name}` : `${person.name} | ${person.role}`;
  }, [pathname, hash]);
}

export default function App() {
  useSmoothScroll();
  return (
    <>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work/:slug" element={<Case />} />
          <Route path="*" element={<Missing />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
