import React from 'react';
import { motion } from 'framer-motion';

// TODO: Replace these with your own photos — place them in src/assets/
// Instagram CDN blocks hotlinking. Using varied placeholders until your own images are added.
const INSTAGRAM_POST_1 = "https://images.unsplash.com/photo-1542296332-2e4473faf563?q=80&w=800&auto=format&fit=crop";
const INSTAGRAM_POST_2 = "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=800&auto=format&fit=crop";
const INSTAGRAM_POST_3 = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=800&auto=format&fit=crop";

const AboutMe = () => {
  const highlights = [
    { label: "Domain", value: "ML & AI Systems" },
    { label: "Focus", value: "Finance, Healthcare, Industrial" },
    { label: "Stack", value: "Python, PyTorch, FastAPI" },
    { label: "Status", value: "Open to opportunities" },
  ];

  const images = [
    { src: INSTAGRAM_POST_1, alt: "Sarthak — a moment captured", caption: "@sarthak.dng" },
    { src: INSTAGRAM_POST_2, alt: "Life outside the terminal", caption: "@sarthak.viche" },
    { src: INSTAGRAM_POST_3, alt: "Another frame", caption: "@sarthak.dng" },
  ];

  return (
    <section id="about" className="py-24 md:py-36 px-6 md:px-12 bg-surface-container-low overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-label text-[10px] uppercase tracking-[0.5em] text-primary mb-16"
        >
          About
        </motion.p>

        <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-start">

          {/* Left: Main text */}
          <div className="md:w-1/2 space-y-8">
            <motion.h2
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="font-headline font-bold text-3xl md:text-4xl text-white leading-snug"
            >
              Engineering student building ML systems that operate under real constraints, not just in notebooks.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-5 text-on-surface-variant font-body text-base leading-relaxed"
            >
              <p>
                I work at the intersection of machine learning and practical deployment. My focus is on domains where errors have real consequences — fraud in financial systems, routing failures in emergency response, defects in semiconductor manufacturing.
              </p>
              <p>
                I prefer working fast: ship something, test it against real data, break it, fix it. I'm less interested in polished theory and more interested in systems that actually run.
              </p>
              <p>
                Outside of ML, I shoot film, edit video, and occasionally lose track of time in a darkroom. Makes the debugging sessions feel shorter.
              </p>
            </motion.div>

            {/* Quick stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-2 gap-4 pt-4 border-t border-outline-variant/20"
            >
              {highlights.map((item) => (
                <div key={item.label}>
                  <span className="font-label text-[10px] uppercase tracking-widest text-outline-variant block mb-1">{item.label}</span>
                  <span className="font-headline font-bold text-white text-sm">{item.value}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Real Instagram photos sliding in */}
          <div className="md:w-1/2 flex flex-row md:flex-col gap-4 items-start overflow-x-auto md:overflow-visible pb-2 md:pb-0">
            {images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.15, type: "spring", stiffness: 80 }}
                className={`relative flex-shrink-0 rounded-2xl overflow-hidden border border-outline-variant/20 shadow-xl group
                  ${i === 0 ? 'w-52 h-72 md:w-full md:h-64 md:self-end' : 'w-44 h-56 md:w-4/5 md:h-52'}
                  ${i === 2 ? 'md:self-center' : ''}
                `}
                style={{ rotate: i % 2 === 0 ? -1 : 1 }}
                whileHover={{ rotate: 0, scale: 1.02 }}
              >
                <img
                  alt={img.alt}
                  src={img.src}
                  className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-500"
                  onError={(e) => {
                    // Fallback to a clean unsplash image if Instagram CDN link expires
                    e.target.src = `https://images.unsplash.com/photo-1542296332-2e4473faf563?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&crop=entropy&sig=${i}`;
                  }}
                />
                <div className="absolute bottom-2 left-2">
                  <span className="font-label text-[10px] text-white/60 uppercase tracking-widest">{img.caption}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
