import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProjectCard = ({ id, title, description, tags, image, large = false, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, type: "spring", delay: index * 0.08 }}
      whileHover={{
        y: -8,
        rotate: index % 2 === 0 ? -0.5 : 0.5,
        scale: 1.015,
      }}
      className={`${large ? 'md:col-span-2 h-[520px]' : 'h-[420px]'} group relative overflow-hidden rounded-2xl bg-surface border border-outline-variant/10 cursor-pointer`}
    >
      <Link to={`/project/${id}`} className="absolute inset-0 z-20" aria-label={`View ${title}`}></Link>

      {/* Image with inner zoom on hover */}
      <motion.div
        className="absolute inset-0 z-0"
        whileHover={{ scale: 1.06 }}
        transition={{ duration: 0.6 }}
      >
        <img
          alt={title}
          className="w-full h-full object-cover brightness-50 group-hover:brightness-60 transition-all duration-700"
          src={image}
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop';
          }}
        />
      </motion.div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-[#0e0e0e]/30 to-transparent z-10"></div>

      {/* Content */}
      <div className={`absolute bottom-0 left-0 right-0 p-6 ${large ? 'md:p-10' : ''} z-10`}>
        {/* Tags */}
        <div className="flex gap-2 mb-3">
          {tags.map(tag => (
            <span key={tag} className="px-2 py-0.5 rounded-full bg-white/10 border border-white/10 font-label text-[10px] uppercase tracking-wider text-white/60">
              {tag}
            </span>
          ))}
        </div>

        <motion.h3
          className={`font-headline font-black ${large ? 'text-3xl md:text-5xl' : 'text-2xl md:text-3xl'} text-white uppercase tracking-tight leading-none mb-3`}
          whileHover={{ x: 4 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          {title}
        </motion.h3>

        <p className="text-on-surface-variant font-body text-sm leading-relaxed max-w-lg opacity-0 group-hover:opacity-100 transition-opacity duration-400 translate-y-2 group-hover:translate-y-0">
          {description}
        </p>

        {/* Arrow */}
        <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          <span className="font-label text-[10px] uppercase tracking-widest text-primary flex items-center gap-1">
            View project <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      id: "fraud-sar",
      title: "Fraud Detection & SAR Engine",
      description: "One system detects fraud. The other explains it for compliance — reducing manual investigation effort significantly.",
      tags: ["FinTech", "Machine Learning"],
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop",
      large: true
    },
    {
      id: "ambulance-triage",
      title: "Ambulance Triage System",
      description: "Optimizes emergency routing and patient prioritization using real-time operational constraints.",
      tags: ["Healthcare", "Machine Learning"],
      image: "https://images.unsplash.com/photo-1587745416684-47953f16f02f?q=80&w=2070&auto=format&fit=crop",
      large: false
    },
    {
      id: "wafer-defect",
      title: "Wafer Defect Detection",
      description: "Computer vision system that identifies microscopic manufacturing defects in semiconductor wafers.",
      tags: ["Industrial", "Computer Vision"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
      large: false
    },
    {
      id: "sme-content",
      title: "SME Content Generation Engine",
      description: "Automates structured content creation for small businesses using reusable context and AI workflows.",
      tags: ["Business Tools", "Generative AI"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
      large: false
    },
    {
      id: "depression-nlp",
      title: "Depression Detection via NLP",
      description: "Analyzes linguistic patterns in text to surface potential indicators related to mental health.",
      tags: ["Research", "NLP"],
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2062&auto=format&fit=crop",
      large: false
    },
    {
      id: "ai-agents-review",
      title: "AI Agents Systematic Review",
      description: "Industry-sponsored analysis of AI agent systems, architectures, and real-world applications.",
      tags: ["Research", "Generative AI"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
      large: true
    }
  ];

  return (
    <section id="projects" className="py-24 md:py-36 px-6 md:px-12 bg-surface relative">
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <div className="flex items-end justify-between mb-12 md:mb-16">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-label text-[10px] uppercase tracking-[0.5em] text-primary mb-3"
            >
              Things I've built
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-headline font-bold text-4xl md:text-5xl text-white tracking-tight"
            >
              Selected Systems
            </motion.h2>
          </div>
          <div className="hidden md:block font-label text-[10px] text-outline-variant/60 text-right leading-loose">
            06 projects<br />Status: active
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} index={idx} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
