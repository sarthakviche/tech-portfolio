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
      { label: "GitHub Repository", url: "https://github.com/sarthakviche" },
      { label: "Demo Video", url: "#" }
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
      { label: "Hackathon Demo", url: "#" },
      { label: "GitHub", url: "https://github.com/sarthakviche" }
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
      { label: "GitHub", url: "https://github.com/sarthakviche" },
      { label: "Sample Outputs", url: "#" }
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
      { label: "GitHub Repository", url: "https://github.com/sarthakviche" }
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
      { label: "Research GitHub", url: "https://github.com/sarthakviche" }
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
      { label: "Technical Whitepaper", url: "#" }
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

  return (
    <main className="relative bg-background min-h-screen">
      {/* Dynamic Hero Section */}
      <section className="relative min-h-[80vh] flex flex-col justify-end pt-32 px-6 pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            alt={project.title} 
            className="w-full h-full object-cover opacity-30 mix-blend-luminosity" 
            src={project.image}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
          <div className="absolute inset-0 architect-grid opacity-20 pointer-events-none"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block py-1 px-3 border border-primary/30 rounded-full bg-primary/5 backdrop-blur-md mb-8"
          >
            <span className="font-label text-[10px] uppercase tracking-[0.3em] text-primary">Deployed System_v.1</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="font-headline font-extrabold text-5xl md:text-8xl tracking-tighter leading-none mb-6 uppercase max-w-4xl"
          >
            {project.title.split(' ').map((word, i) => (
              <span key={i} className={i % 2 !== 0 ? "text-primary" : "text-white"}>{word} </span>
            ))}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="font-headline text-lg md:text-2xl text-gray-400 max-w-2xl leading-tight uppercase tracking-tight italic"
          >
            {project.tagline}
          </motion.p>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-24 md:py-32 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
          <div className="space-y-8">
            <h2 className="font-label text-[10px] uppercase tracking-[0.5em] text-primary underline underline-offset-8">Problem_Context</h2>
            <p className="text-white leading-relaxed text-xl font-light">
              {project.problem}
            </p>
          </div>
          <div className="space-y-8">
            <h2 className="font-label text-[10px] uppercase tracking-[0.5em] text-primary underline underline-offset-8">Engineered_Solution</h2>
            <p className="text-on-surface-variant leading-relaxed text-lg italic opacity-80">
              {project.solution}
            </p>
          </div>
        </div>
      </section>

      {/* Architecture Visualizer */}
      <section className="py-24 px-6 bg-surface-container-low architect-grid relative border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-label text-[10px] uppercase tracking-[0.5em] text-primary mb-4">Pipeline_Flow</h2>
            <h3 className="font-headline font-bold text-4xl tracking-tight uppercase">System Architecture</h3>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 overflow-x-auto pb-4">
            {project.architecture.map((item, idx) => (
              <React.Fragment key={idx}>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  className="w-full md:w-64 bg-surface p-6 rounded-xl border border-outline-variant/10 text-center relative z-10"
                >
                  <span className="font-label text-[10px] uppercase text-primary block mb-2">{item.step}</span>
                  <h4 className="font-headline font-bold text-sm tracking-widest text-white">{item.desc}</h4>
                </motion.div>
                {idx < project.architecture.length - 1 && (
                  <div className="hidden md:block text-primary/40">
                    <span className="material-symbols-outlined rotate-0">arrow_forward</span>
                  </div>
                )}
                {idx < project.architecture.length - 1 && (
                  <div className="md:hidden text-primary/40 py-2">
                    <span className="material-symbols-outlined rotate-90">arrow_forward</span>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Details Grid: Features, Stack, Challenges, Impact */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* Features */}
            <div className="space-y-6">
              <h4 className="font-label text-[10px] uppercase tracking-[0.4em] text-primary">Core_Features</h4>
              <ul className="space-y-4">
                {project.features.map((f, i) => (
                  <li key={i} className="flex gap-3 text-sm text-gray-300 items-start">
                    <span className="text-primary-dim">•</span> {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="space-y-6">
              <h4 className="font-label text-[10px] uppercase tracking-[0.4em] text-primary">Technical_Stack</h4>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((s, i) => (
                  <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded text-[10px] font-label text-white uppercase tracking-wider">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Challenges */}
            <div className="space-y-6">
              <h4 className="font-label text-[10px] uppercase tracking-[0.4em] text-primary">Complexity_Resolved</h4>
              <ul className="space-y-4">
                {project.challenges.map((c, i) => (
                  <li key={i} className="text-sm text-gray-400 italic">
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            {/* Impact */}
            <div className="space-y-6">
              <h4 className="font-label text-[10px] uppercase tracking-[0.4em] text-primary">Operational_Impact</h4>
              <ul className="space-y-4">
                {project.impact.map((imp, i) => (
                  <li key={i} className="flex gap-3 text-sm text-white font-headline font-bold uppercase tracking-tight">
                    <span className="text-green-400">»</span> {imp}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Final Action / Links */}
      <section className="py-24 px-6 bg-surface-container-low border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center space-y-12">
          <h3 className="font-headline font-black text-4xl uppercase tracking-tighter">System_Deployment_Access</h3>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            {project.links.map((link, i) => (
              <a 
                key={i} 
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-10 py-5 rounded-full font-headline font-bold uppercase text-sm transition-all text-center
                  ${i === 0 ? "bg-primary text-on-primary-fixed cinematic-glow" : "border border-white/20 text-white hover:bg-white/5"}
                `}
              >
                {link.label}
              </a>
            ))}
          </div>
          <Link to="/" className="block pt-8 font-label text-[10px] uppercase tracking-[.5em] text-outline hover:text-primary transition-colors">
            « Return_to_Main_Grid
          </Link>
        </div>
      </section>

    </main>
  );
};

export default ProjectDetail;
