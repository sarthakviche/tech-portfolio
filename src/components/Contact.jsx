import React from 'react';
import { motion } from 'framer-motion';

const socials = [
  {
    label: "LinkedIn",
    sub: "Let's connect professionally",
    href: "https://www.linkedin.com/in/sarthakviche/",
    icon: "person"
  },
  {
    label: "GitHub",
    sub: "See the code",
    href: "https://github.com/sarthakviche",
    icon: "code"
  },
  {
    label: "Instagram",
    sub: "@sarthak.viche · 980 followers",
    href: "https://www.instagram.com/sarthak.viche/",
    icon: "photo_camera"
  },
  {
    label: "Twitter / X",
    sub: "@sarthakviche",
    href: "https://x.com/sarthakviche",
    icon: "alternate_email"
  },
  {
    label: "YouTube",
    sub: "Video work",
    href: "https://www.youtube.com/@SarthakViche/videos",
    icon: "play_circle"
  },
];

const Contact = () => {
  return (
    <section id="connect" className="py-24 md:py-36 px-6 md:px-12 bg-surface-container-low">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">

          {/* Left */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-label text-[10px] uppercase tracking-[0.5em] text-primary mb-6"
            >
              Contact
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-headline font-black text-4xl md:text-6xl text-white uppercase tracking-tighter leading-none mb-8"
            >
              Start a<br />
              <span className="text-primary italic font-extrabold">conversation</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="font-body text-on-surface-variant text-base leading-relaxed mb-12 max-w-md"
            >
              I care about working on things that actually matter. If you're building something interesting — or just want to swap ideas — reach out. I'm open to internships, research collaborations, and good conversations.
            </motion.p>

            {/* Email CTA */}
            <motion.a
              href="mailto:sarthakviche@gmail.com"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white font-headline font-bold rounded-full shadow-[0_0_30px_rgba(148,170,255,0.2)] uppercase text-sm no-underline"
            >
              <span className="material-symbols-outlined text-base">mail</span>
              Send an email
            </motion.a>

            {/* Values */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
              className="mt-16 space-y-6 border-l border-outline-variant/20 pl-6"
            >
              {[
                { n: "01", v: "Build for real-world impact" },
                { n: "02", v: "Keep systems simple and effective" },
                { n: "03", v: "Learn fast, iterate faster" },
              ].map(({ n, v }) => (
                <div key={n} className="group">
                  <span className="font-label text-[10px] uppercase tracking-widest text-outline-variant block mb-1">Value_{n}</span>
                  <h4 className="font-headline font-semibold text-lg text-white uppercase group-hover:text-primary transition-colors">{v}</h4>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Connect Panel */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-surface border border-outline-variant/10 rounded-3xl p-8 md:p-10"
            >
              <h3 className="font-headline font-bold text-xl text-white uppercase tracking-widest mb-8 pb-4 border-b border-outline-variant/15">
                Find me on
              </h3>

              <div className="space-y-2">
                {socials.map(({ label, sub, href, icon }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-2xl hover:bg-white/5 group transition-all duration-200 no-underline"
                    whileHover={{ x: 4 }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <span className="material-symbols-outlined text-primary text-base">{icon}</span>
                      </div>
                      <div>
                        <span className="block font-headline font-bold text-white text-sm uppercase tracking-wide">{label}</span>
                        <span className="block font-label text-[11px] text-outline-variant mt-0.5">{sub}</span>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors text-xl">navigate_next</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
