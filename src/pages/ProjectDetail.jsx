import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const projectData = {
  "fraud-sar": {
    title: "Fraud Detection & SAR Engine",
    tagline: "Detects suspicious financial activity and automatically generates compliance-ready reports.",
    problem: "Financial institutions deal with massive volumes of transactions daily, making it difficult to identify fraudulent patterns in real time. Even when fraud is detected, generating Suspicious Activity Reports (SARs) is a manual, time-consuming process that requires domain expertise and slows down compliance workflows.",
    solution: "I built a two-part system: 1) A fraud detection engine that flags suspicious transactions using machine learning, and 2) A SAR generation module that converts flagged activity into structured, compliance-ready reports. The goal was to reduce manual investigation effort while improving consistency in reporting.",
    architecture: [
      { step: "Data Ingest", desc: "Transaction Data Stream" },
      { step: "Processing", desc: "Feature Engineering & ML Model" },
      { step: "Intelligence", desc: "Fraud Score & Flagging" },
      { step: "Output", desc: "LLM-based SAR Generator" }
    ],
    features: [
      "Real-time fraud scoring",
      "Automated SAR generation from flagged cases",
      "Structured output aligned with compliance requirements",
      "Modular pipeline allowing independent scaling"
    ],
    stack: ["Python", "Scikit-learn", "NLP / LLM APIs", "Data preprocessing pipelines"],
    challenges: [
      "Handling highly imbalanced datasets in fraud detection",
      "Ensuring explainability in flagged transactions",
      "Structuring LLM outputs into consistent compliance formats",
      "Balancing detection sensitivity vs false positives"
    ],
    impact: [
      "Reduced manual effort in report generation",
      "Improved consistency in compliance documentation",
      "Demonstrated end-to-end automation of fraud analysis workflow"
    ],
    links: [
      { label: "GitHub Repository", url: "https://github.com/sarthakviche", type: "github" },
      { label: "Demo Video", url: "#", type: "youtube" },
      { label: "Technical PPT", url: "https://drive.google.com/file/d/14EWUHBiWsLLX_f_7YWbi4A7jnq15x8uH/view?usp=drive_link", type: "ppt" }
    ],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop"
  },
  "ambulance-triage": {
    title: "Smart Ambulance Triage & Routing System",
    tagline: "Optimizes emergency response by prioritizing and routing ambulances in real time.",
    problem: "Emergency response systems often suffer from inefficient routing, lack of prioritization, and delayed decision-making, leading to critical delays in life-threatening situations.",
    solution: "A system that dynamically prioritizes patients based on severity, assigns ambulances intelligently, and adapts to real-time constraints like traffic and roadblocks. Built during a hackathon to simulate real-world emergency scenarios.",
    architecture: [
      { step: "Event", desc: "Emergency Input" },
      { step: "Logic", desc: "Priority Scoring" },
      { step: "Navigation", desc: "Routing Engine & Constraints" },
      { step: "Response", desc: "Ambulance Allocation" }
    ],
    features: [
      "Dynamic prioritization logic",
      "Real-time route optimization",
      "Constraint-aware system (roadblocks, delays)",
      "Simulation of emergency scenarios"
    ],
    stack: ["Python", "Graph Algorithms", "Machine Learning"],
    challenges: [
      "Designing a fair and efficient prioritization system",
      "Handling sudden disruptions (road closures)",
      "Balancing speed vs accuracy in routing"
    ],
    impact: [
      "Improved simulated response efficiency",
      "Demonstrated scalable triage logic",
      "Strong real-world applicability in smart healthcare systems"
    ],
    links: [
      { label: "GitHub Repository", url: "https://github.com/sarthakviche", type: "github" },
      { label: "Project Demo", url: "#", type: "youtube" },
      { label: "Presentation", url: "#", type: "ppt" }
    ],
    image: "https://images.unsplash.com/photo-1587745416684-47953f16f02f?q=80&w=2070&auto=format&fit=crop"
  },
  "wafer-defect": {
    title: "Semiconductor Wafer Defect Detection",
    tagline: "Uses computer vision to detect microscopic defects during manufacturing.",
    problem: "Semiconductor manufacturing requires extremely high precision. Even microscopic defects can lead to product failures, reduced yield, and high financial losses. Manual inspection is slow and error-prone.",
    solution: "A computer vision system that analyzes wafer images, detects defects in real time, and flags anomalies during manufacturing to improve quality control.",
    architecture: [
      { step: "Vision", desc: "Microscopic Camera Capture" },
      { step: "Preprocessing", desc: "Image Normalization" },
      { step: "AI", desc: "CV Model Inference" },
      { step: "Decision", desc: "Output Classification" }
    ],
    features: [
      "Automated defect detection",
      "Image-based classification",
      "Scalable inspection pipeline"
    ],
    stack: ["Python", "OpenCV", "CNN / Deep Learning Models"],
    challenges: [
      "Working with high-resolution microscopic data",
      "Data scarcity and labeling challenges",
      "Improving detection accuracy for subtle defects"
    ],
    impact: [
      "Reduced need for manual inspection",
      "Improved quality control pipeline",
      "Demonstrated real-world industrial AI use case"
    ],
    links: [
      { label: "GitHub Repository", url: "https://github.com/sarthakviche", type: "github" },
      { label: "Demo Video", url: "#", type: "youtube" },
      { label: "Technical PPT", url: "https://canva.link/42y0f1lgvcs1ldk", type: "ppt" }
    ],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
  },
  "sme-content": {
    title: "AI Content Generation Engine for SMEs",
    tagline: "Automates structured, consistent content creation across platforms.",
    problem: "Small businesses struggle with consistent content creation, maintaining brand voice, and scaling across platforms.",
    solution: "A system that generates structured content, maintains context across outputs, and supports multi-platform publishing using advanced LLM workflows.",
    architecture: [
      { step: "Input", desc: "User Requirements" },
      { step: "Context", desc: "Context Builder & Brand Voice" },
      { step: "Gen", desc: "Prompt Engine & LLM" },
      { step: "Format", desc: "Multi-platform Structured Output" }
    ],
    features: [
      "Context-aware generation",
      "Reusable brand templates",
      "Multi-platform adaptability"
    ],
    stack: ["LLM APIs", "Prompt Engineering", "Workflow Automation"],
    challenges: [
      "Maintaining consistency across outputs",
      "Avoiding generic LLM responses",
      "Designing reusable content pipelines"
    ],
    impact: [
      "Faster content creation",
      "Improved brand consistency",
      "Scalable marketing workflow"
    ],
    links: [
      { label: "GitHub Repository", url: "https://github.com/sarthakviche", type: "github" },
      { label: "Workflow Demo", url: "#", type: "youtube" },
      { label: "Strategy Slides", url: "https://drive.google.com/file/d/1cXmPfYFy1JfvXvftmI-Adbnq_LFD660J/view?usp=drive_link", type: "ppt" }
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
  },
  "depression-nlp": {
    title: "Depression Detection using NLP",
    tagline: "Explores linguistic signals to identify potential mental health indicators.",
    problem: "Mental health issues often go unnoticed due to lack of early detection methods.",
    solution: "An NLP-based system that analyzes text data, identifies linguistic patterns, and explores correlations with mental health indicators for research purposes.",
    architecture: [
      { step: "Text", desc: "Raw Data Ingest" },
      { step: "Prep", desc: "Linguistic Preprocessing" },
      { step: "Analysis", desc: "Feature Extraction" },
      { step: "Insight", desc: "Pattern Correlation" }
    ],
    features: [
      "Text preprocessing",
      "Feature extraction",
      "Pattern analysis"
    ],
    stack: ["NLP libraries", "Python", "Data Analysis"],
    challenges: [
      "Ethical considerations",
      "Avoiding overclaiming results",
      "Handling sensitive data responsibly"
    ],
    impact: [
      "Research-focused insights",
      "Understanding limitations of AI in mental health"
    ],
    links: [
      { label: "GitHub Repository", url: "https://github.com/sarthakviche", type: "github" },
      { label: "Research Overview", url: "#", type: "youtube" },
      { label: "Findings PPT", url: "#", type: "ppt" }
    ],
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2062&auto=format&fit=crop"
  },
  "ai-agents-review": {
    title: "Systematic Review of AI Agents",
    tagline: "Industry-sponsored research on agent architectures and applications.",
    problem: "Rapidly evolving field of AI Agents lacks structured reviews for multi-agent system orchestration.",
    solution: "Conducted an industry-sponsored systematic review studying agent frameworks, architectures, and practical application trade-offs.",
    architecture: [
      { step: "Frameworks", desc: "Study of Agentic Systems" },
      { step: "Architecture", desc: "Analysis of Workflows" },
      { step: "Comparison", desc: "Real-world App Evaluation" },
      { step: "Review", desc: "Synthesis of Insights" }
    ],
    features: [
      "Framework analysis",
      "Multi-agent system orchestration",
      "Autonomy vs Control trade-offs"
    ],
    stack: ["Research", "AI Frameworks", "Case Studies"],
    challenges: [
      "Synthesizing fragmented research paths",
      "Evaluating autonomy reliability",
      "Mapping research to industry applications"
    ],
    impact: [
      "Industry-backed research exposure",
      "Strong conceptual understanding of AI systems",
      "Strategic insight into agent orchestration"
    ],
    links: [
      { label: "GitHub Repository", url: "https://github.com/sarthakviche", type: "github" },
      { label: "Research Video", url: "#", type: "youtube" },
      { label: "Whitepaper PPT", url: "#", type: "ppt" }
    ],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop"
  }
};

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectData[id];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h2 className="text-4xl font-headline font-bold text-white mb-6">404: System_Not_Found</h2>
          <Link to="/" className="text-primary hover:underline font-label uppercase tracking-widest">Back to terminal</Link>
        </div>
      </div>
    );
  }

  const getLinkIcon = (type) => {
    switch (type) {
      case 'github': return 'code';
      case 'youtube': return 'play_circle';
      case 'ppt': return 'presentation_chart_line';
      default: return 'link';
    }
  };

  return (
    <main className="relative bg-[#0e0e0e] min-h-screen">
      {/* Dynamic Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col justify-end pt-32 px-6 pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            alt={project.title}
            className="w-full h-full object-cover opacity-20 mix-blend-luminosity brightness-75 scale-110"
            src={project.image}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-[#0e0e0e]/70 to-transparent"></div>
          <div className="absolute inset-0 architect-grid opacity-30 pointer-events-none"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block py-1.5 px-4 border border-primary/40 rounded-full bg-primary/5 backdrop-blur-md mb-8"
          >
            <span className="font-label text-[10px] uppercase tracking-[0.4em] text-primary font-black">Archive_Index :: {id.toUpperCase()}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="font-headline font-black text-6xl md:text-9xl tracking-[ -0.05em] leading-[0.8] mb-10 uppercase max-w-5xl"
          >
            {project.title.split(' ').map((word, i) => (
              <span key={i} className={i % 2 !== 0 ? "text-primary" : "text-white"}>{word}<br className="hidden md:block" /></span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="font-headline text-xl md:text-3xl text-gray-500 max-w-3xl leading-tight uppercase tracking-tighter italic border-l-4 border-primary/30 pl-6"
          >
            {project.tagline}
          </motion.p>
        </div>
      </section>

      {/* Problem & Solution - Refined Typography & Balance */}
      <section className="py-24 md:py-36 px-6 border-t border-white/5 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-32">
          <div className="space-y-8 group">
            <h2 className="font-label text-[10px] uppercase tracking-[0.6em] text-primary/60 flex items-center gap-4">
              <span className="w-8 h-px bg-primary/30"></span>
              The Problem Statement
            </h2>
            <p className="text-white leading-[1.3] text-2xl md:text-3xl font-body font-medium tracking-[-0.03em] group-hover:text-primary transition-colors duration-500">
              {project.problem}
            </p>
          </div>
          <div className="space-y-8">
            <h2 className="font-label text-[10px] uppercase tracking-[0.6em] text-primary/60 flex items-center gap-4">
              <span className="w-8 h-px bg-primary/30"></span>
              Engineered Solution
            </h2>
            <p className="text-gray-400 leading-relaxed text-lg md:text-xl font-light italic border-l border-white/10 pl-10">
              {project.solution}
            </p>
          </div>
        </div>
      </section>

      {/* Architecture Visualizer - High Visibility Fix */}
      <section className="py-32 px-6 bg-[#0e0e0e] relative border-y border-white/5 overflow-hidden">
        {/* Decorative architectural elements for depth */}
        <div className="absolute top-0 right-0 w-1/3 h-full architect-grid opacity-20 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-full architect-grid opacity-20 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10 text-center mb-24">
          <h2 className="font-label text-[10px] uppercase tracking-[0.6em] text-primary mb-6">Pipeline_Intelligence</h2>
          <h3 className="font-headline font-black text-5xl md:text-7xl tracking-tighter uppercase text-white outline-text">System Architecture</h3>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-6 relative z-10">
          {project.architecture.map((item, idx) => (
            <React.Fragment key={idx}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="w-full md:w-72 bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] p-8 rounded-2xl border border-white/10 shadow-2xl relative group overflow-hidden"
              >
                {/* Glow effect for card */}
                <div className="absolute -top-12 -right-12 w-24 h-24 bg-primary/20 blur-[40px] rounded-full group-hover:bg-primary/40 transition-all duration-500"></div>

                <div className="flex items-center justify-between mb-6">
                  <div className="w-8 h-8 border border-primary/40 flex items-center justify-center rounded text-[10px] font-label text-primary">{idx + 1}</div>
                  <span className="font-label text-[9px] uppercase tracking-[0.3em] text-primary/40">{item.step}</span>
                </div>

                <h4 className="font-headline font-bold text-lg tracking-tight text-white uppercase leading-tight min-h-[3rem]">{item.desc}</h4>

                <div className="mt-6 flex items-center gap-2">
                  <div className="h-px flex-1 bg-white/10"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/40"></div>
                </div>
              </motion.div>
              {idx < project.architecture.length - 1 && (
                <div className="text-primary/20 flex items-center justify-center py-4">
                  <span className="material-symbols-outlined text-4xl md:rotate-0 rotate-90 scale-x-125">trending_flat</span>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* Details Grid */}
      <section className="py-32 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">

            {/* Features */}
            <div className="space-y-8">
              <h4 className="font-label text-[11px] uppercase tracking-[0.5em] text-primary font-black">Core_Features</h4>
              <ul className="space-y-6">
                {project.features.map((f, i) => (
                  <li key={i} className="flex gap-4 text-base text-gray-300 items-start font-label tracking-tight">
                    <span className="text-primary mt-1">✦</span> {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="space-y-8">
              <h4 className="font-label text-[11px] uppercase tracking-[0.5em] text-primary font-black">Technical_Stack</h4>
              <div className="flex flex-wrap gap-3">
                {project.stack.map((s, i) => (
                  <span key={i} className="px-4 py-2 bg-primary/5 border border-primary/20 rounded-lg text-[11px] font-label text-white uppercase tracking-[0.2em] hover:bg-primary/20 transition-colors">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Challenges */}
            <div className="space-y-8">
              <h4 className="font-label text-[11px] uppercase tracking-[0.5em] text-primary font-black">Complexity_Resolved</h4>
              <ul className="space-y-6">
                {project.challenges.map((c, i) => (
                  <li key={i} className="text-base text-gray-500 italic font-body border-l-2 border-white/5 pl-6 py-1">
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            {/* Impact */}
            <div className="space-y-8">
              <h4 className="font-label text-[11px] uppercase tracking-[0.5em] text-primary font-black">Operational_Impact</h4>
              <ul className="space-y-6">
                {project.impact.map((imp, i) => (
                  <li key={i} className="p-4 bg-white/5 border-l-4 border-green-500/50 text-sm text-white font-headline font-bold uppercase tracking-tight leading-tight">
                    {imp}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Enhanced Links Section with Creativity */}
      <section className="py-48 px-6 bg-[#0e0e0e] border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-headline font-black text-5xl md:text-8xl uppercase tracking-tighter mb-20 text-white"
          >
            Access_The_System
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {project.links.map((link, i) => (
              <motion.a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -10 }}
                whileTap={{ scale: 0.95 }}
                className="group relative flex flex-col items-center justify-center p-12 bg-[#151515] border border-white/10 rounded-3xl hover:border-primary transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="material-symbols-outlined text-5xl text-primary mb-6 group-hover:scale-125 transition-transform duration-500">
                  {getLinkIcon(link.type)}
                </span>
                <span className="font-headline font-black text-lg md:text-xl uppercase tracking-tight text-white mb-2">{link.label}</span>
                <span className="font-label text-[10px] uppercase tracking-[0.4em] text-gray-500 group-hover:text-primary transition-colors">
                  Open_Resource &raquo;
                </span>

                {/* Creative light sweep effect on hover */}
                <div className="absolute -inset-full h-full w-1/2 z-0 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-40 group-hover:animate-sweep"></div>
              </motion.a>
            ))}
          </div>

          <Link
            to="/"
            className="inline-flex items-center gap-4 mt-24 py-4 px-10 border border-white/10 rounded-full font-label text-[11px] uppercase tracking-[.6em] text-gray-500 hover:text-primary hover:border-primary/50 transition-all"
          >
            <span className="material-symbols-outlined text-sm">west</span>
            Return_to_Main_Grid
          </Link>
        </div>
      </section>

    </main>
  );
};

export default ProjectDetail;
