import React from 'react';
import { motion } from 'framer-motion';

const ProjectDetail = () => {
  return (
    <main className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-end architect-grid pt-32 px-6 pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            alt="Technical Infrastructure" 
            className="w-full h-full object-cover opacity-40 mix-blend-luminosity" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0WKmR4X1O29IdMTlZjWHCdu3JO5iDL7HcdznyeyrelSGMYQsOm8viIyiaYu_-aomujHxUbzy4OpXiuX2saZ_lVDtqZ_rd3NzQf0y4jO5ArYZ0lxqcAAMGdx-zzKgeX_YXII_qkKWgc5qJbVWR_4h7XJ3YG897nbRGusGIeN6DydykXMmLUcS4HPxa25wpoJXCyQ2Oq-0ewE8tTuM2zGF6jMcNPIup2BBxli-QdNRfSZ-fhiUzL26qsUj0WjNt7HJQzh1Lhs3QGTE"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block py-1 px-3 border border-outline-variant/30 rounded-full bg-surface-container-low/50 backdrop-blur-md mb-6"
          >
            <span className="font-label text-[10px] uppercase tracking-[0.3em] text-primary">Status: Deployed_v2.0.4</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="font-headline font-extrabold text-6xl md:text-9xl tracking-tighter leading-none mb-4"
          >
            SYNAPTIC_<br/><span className="text-primary-dim">OVERFLOW</span>
          </motion.h1>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mt-12">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="font-label text-sm md:text-base text-gray-400 max-w-xl leading-relaxed uppercase tracking-wider"
            >
              High-throughput distributed neural mesh for processing erratic data streams across multi-cloud environments. Zero-latency synchronization for enterprise-scale cognitive architecture.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="flex gap-4"
            >
              <button className="px-8 py-4 bg-gradient-to-tr from-primary to-primary-dim text-on-primary-fixed font-bold rounded-full hover:scale-105 transition-transform cinematic-glow uppercase font-headline text-sm">
                View on GitHub
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Challenge / Approach */}
      <section className="bg-surface-container-low py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24">
          <div className="space-y-8">
            <h2 className="font-label text-[10px] uppercase tracking-[0.5em] text-outline">Section_01 // The Challenge</h2>
            <h3 className="font-headline font-bold text-4xl tracking-tight">Managing chaotic telemetry at 10GB/s scale.</h3>
            <p className="text-on-surface-variant leading-relaxed text-lg font-light">
              Existing legacy systems failed to maintain state consistency during peak traffic bursts. The requirement was a system capable of 99.999% uptime while handling non-linear data spikes without horizontal scaling latency.
            </p>
          </div>
          <div className="space-y-8 border-l border-outline-variant/20 pl-8 md:pl-24">
            <h2 className="font-label text-[10px] uppercase tracking-[0.5em] text-outline">Section_02 // The Approach</h2>
            <h3 className="font-headline font-bold text-4xl tracking-tight">Decoupled execution via immutable state layers.</h3>
            <p className="text-on-surface-variant leading-relaxed text-lg font-light">
              By utilizing a custom-built distributed consensus algorithm and memory isolation, we architected a core that operates on a "True-Zero" trust model, ensuring that every byte is validated and synchronized before persistence.
            </p>
          </div>
        </div>
      </section>

      {/* Architecture Core */}
      <section className="py-32 px-6 bg-background architect-grid relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="font-label text-[10px] uppercase tracking-[0.5em] text-primary mb-4">Internal_Framework</h2>
            <h3 className="font-headline font-extrabold text-5xl tracking-tighter uppercase">Architecture_Core</h3>
          </div>
          <div className="relative glass-panel border border-outline-variant/10 rounded-xl p-12 overflow-hidden cinematic-glow">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="flex-1 space-y-4">
                <div className="bg-surface-container-highest p-6 rounded-lg border-l-4 border-primary">
                  <span className="font-label text-[10px] uppercase text-outline block mb-2">Ingress_Layer</span>
                  <h4 className="font-headline font-bold text-xl">Traffic Ingress</h4>
                  <p className="text-sm text-on-surface-variant mt-2 font-label">Edge-optimized proxy with automatic TLS termination and DDoS mitigation.</p>
                </div>
                <div className="bg-surface-container-highest p-6 rounded-lg border-l-4 border-primary">
                  <span className="font-label text-[10px] uppercase text-outline block mb-2">Logic_Layer</span>
                  <h4 className="font-headline font-bold text-xl">Load Balancer</h4>
                  <p className="text-sm text-on-surface-variant mt-2 font-label">Weight-based distribution algorithm with health-aware node detection.</p>
                </div>
              </div>
              <div className="flex-shrink-0">
                <div className="w-32 h-32 rounded-full border-4 border-dashed border-primary-dim flex items-center justify-center animate-pulse">
                  <span className="material-symbols-outlined text-4xl text-primary">hub</span>
                </div>
              </div>
              <div className="flex-1 space-y-4">
                <div className="bg-surface-container-highest p-6 rounded-lg border-r-4 border-primary-dim text-right">
                  <span className="font-label text-[10px] uppercase text-outline block mb-2">Data_Persistence</span>
                  <h4 className="font-headline font-bold text-xl">Cold Storage</h4>
                  <p className="text-sm text-on-surface-variant mt-2 font-label">Asynchronous archival layer for long-term audit compliance and recovery.</p>
                </div>
                <div className="bg-surface-container-highest p-6 rounded-lg border-r-4 border-primary-dim text-right">
                  <span className="font-label text-[10px] uppercase text-outline block mb-2">Compute_Cluster</span>
                  <h4 className="font-headline font-bold text-xl">Process Nodes</h4>
                  <p className="text-sm text-on-surface-variant mt-2 font-label">Isolated execution environments for heavy-duty neural computation.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Observability Interface */}
      <section className="bg-surface-container-low py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="font-label text-[10px] uppercase tracking-[0.5em] text-outline mb-4">Module_03 // Analytics</h2>
              <h3 className="font-headline font-extrabold text-5xl tracking-tighter uppercase">OBSERVABILITY_INTERFACE</h3>
            </div>
            <div className="font-label text-xs text-primary-dim bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
              LIVE_FEED_ACTIVE
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface p-8 rounded-xl border border-outline-variant/10">
              <div className="flex justify-between items-start mb-6">
                <span className="material-symbols-outlined text-primary text-3xl">speed</span>
                <span className="font-label text-[10px] text-on-surface-variant uppercase">CPU_UTILIZATION</span>
              </div>
              <div className="text-4xl font-headline font-black mb-2">24.8<span className="text-primary-dim">%</span></div>
              <div className="w-full h-1 bg-surface-container-highest rounded-full overflow-hidden">
                <motion.div initial={{ width: 0 }} whileInView={{ width: '24.8%' }} className="bg-primary h-full"></motion.div>
              </div>
            </div>
            <div className="bg-surface p-8 rounded-xl border border-outline-variant/10">
              <div className="flex justify-between items-start mb-6">
                <span className="material-symbols-outlined text-primary text-3xl">memory</span>
                <span className="font-label text-[10px] text-on-surface-variant uppercase">RAM_BUFFER</span>
              </div>
              <div className="text-4xl font-headline font-black mb-2">1.2<span className="text-primary-dim">TB</span></div>
              <div className="w-full h-1 bg-surface-container-highest rounded-full overflow-hidden">
                <motion.div initial={{ width: 0 }} whileInView={{ width: '80%' }} className="bg-primary h-full"></motion.div>
              </div>
            </div>
            <div className="bg-surface p-8 rounded-xl border border-outline-variant/10">
              <div className="flex justify-between items-start mb-6">
                <span className="material-symbols-outlined text-primary text-3xl">sync_alt</span>
                <span className="font-label text-[10px] text-on-surface-variant uppercase">NET_LATENCY</span>
              </div>
              <div className="text-4xl font-headline font-black mb-2">0.04<span className="text-primary-dim">MS</span></div>
              <div className="w-full h-1 bg-surface-container-highest rounded-full overflow-hidden">
                <motion.div initial={{ width: 0 }} whileInView={{ width: '10%' }} className="bg-primary h-full"></motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack & Links */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-24">
          <div className="flex-1 space-y-12">
            <h2 className="font-label text-[10px] uppercase tracking-[0.5em] text-outline">Module_04 // Foundation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">security</span>
                  <span className="font-headline font-bold text-lg uppercase">Memory Isolation</span>
                </div>
                <p className="text-sm text-on-surface-variant font-light leading-relaxed">Hardware-level secure enclaves ensuring processing logic is never exposed to the host kernel.</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">account_tree</span>
                  <span className="font-headline font-bold text-lg uppercase">Distributed Consensus</span>
                </div>
                <p className="text-sm text-on-surface-variant font-light leading-relaxed">Paxos-based agreement protocols tailored for sub-millisecond edge networking.</p>
              </div>
            </div>
          </div>
          <div className="md:w-96 space-y-6">
            <div className="bg-primary/5 p-12 rounded-xl border border-primary/10 cinematic-glow flex flex-col gap-6">
              <h3 className="font-headline font-bold text-2xl uppercase tracking-tight">Access Points</h3>
              <button className="w-full px-8 py-5 bg-gradient-to-tr from-primary to-primary-dim text-on-primary-fixed font-bold rounded-full hover:scale-[1.02] active:scale-95 transition-all uppercase font-headline text-sm shadow-lg shadow-primary/20">
                Live System Demo
              </button>
              <button className="w-full px-8 py-5 bg-transparent border-2 border-outline-variant/30 text-white font-bold rounded-full hover:border-primary/50 hover:bg-primary/5 transition-all uppercase font-headline text-sm">
                Technical Whitepaper
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProjectDetail;
