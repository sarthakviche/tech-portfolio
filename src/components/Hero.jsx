import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import simpleAvatar from '../assets/simple.png';
import funkyAvatar from '../assets/funky.png';

// Scrolling ticker items
const TICKER_ITEMS = [
  'ML ENGINEER', '✦', 'FRAUD DETECTION', '✦', 'HEALTHCARE AI',
  '✦', 'COMPUTER VISION', '✦', 'NLP', '✦', 'BUILDER', '✦',
  'PUNE · INDIA', '✦', 'OPEN TO WORK', '✦',
];

const Ticker = () => (
  <div className="overflow-hidden w-full border-y border-white/10 py-3 bg-[#0a0a0a]/80 backdrop-blur-sm">
    <motion.div
      className="flex gap-8 whitespace-nowrap"
      animate={{ x: ['0%', '-50%'] }}
      transition={{ duration: 18, ease: 'linear', repeat: Infinity }}
    >
      {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
        <span key={i} className="font-label text-[11px] uppercase tracking-[0.3em] text-white/40">{item}</span>
      ))}
    </motion.div>
  </div>
);

// Scanline overlay — sweeps down on hover
const ScanLine = ({ active }) => (
  <AnimatePresence>
    {active && (
      <motion.div
        className="absolute inset-0 pointer-events-none z-30 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Animated scan sweep */}
        <motion.div
          className="absolute left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-primary/80 to-transparent blur-[1px]"
          initial={{ top: '-5%' }}
          animate={{ top: '110%' }}
          transition={{ duration: 1.2, ease: 'linear', repeat: Infinity }}
        />
        {/* Fine scanline texture */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(148,170,255,0.5) 2px, rgba(148,170,255,0.5) 3px)',
          }}
        />
      </motion.div>
    )}
  </AnimatePresence>
);

// Glitch flash — a single frame distortion flash on transition
const GlitchFlash = ({ trigger }) => {
  const [show, setShow] = useState(false);
  const prev = useRef(trigger);

  useEffect(() => {
    if (trigger !== prev.current) {
      prev.current = trigger;
      setShow(true);
      const t = setTimeout(() => setShow(false), 180);
      return () => clearTimeout(t);
    }
  }, [trigger]);

  return show ? (
    <div className="absolute inset-0 z-40 pointer-events-none overflow-hidden">
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, rgba(148,170,255,0.3) 0px, rgba(148,170,255,0.3) 1px, transparent 1px, transparent 4px)',
          animation: 'none',
        }}
      />
      {/* RGB split ghost */}
      <div className="absolute inset-0 opacity-30 mix-blend-screen" style={{ transform: 'translateX(4px)', filter: 'hue-rotate(120deg)' }}>
        <img src={funkyAvatar} alt="" className="w-full h-full object-contain object-bottom" />
      </div>
      <div className="absolute inset-0 opacity-30 mix-blend-screen" style={{ transform: 'translateX(-4px)', filter: 'hue-rotate(240deg)' }}>
        <img src={funkyAvatar} alt="" className="w-full h-full object-contain object-bottom" />
      </div>
    </div>
  ) : null;
};

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Cursor-following tooltip
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [cursorVisible, setCursorVisible] = useState(false);
  const imageRef = useRef(null);

  const handleImageMouseMove = (e) => {
    setCursor({ x: e.clientX, y: e.clientY });
  };

  const handleImageEnter = (e) => {
    setIsHovered(true);
    setCursorVisible(true);
    setCursor({ x: e.clientX, y: e.clientY });
  };

  const handleImageLeave = () => {
    setIsHovered(false);
    setCursorVisible(false);
  };

  // Spring-smoothed cursor for tooltip
  const tooltipX = useMotionValue(0);
  const tooltipY = useMotionValue(0);
  const smoothX = useSpring(tooltipX, { stiffness: 300, damping: 28 });
  const smoothY = useSpring(tooltipY, { stiffness: 300, damping: 28 });

  useEffect(() => {
    tooltipX.set(cursor.x);
    tooltipY.set(cursor.y);
  }, [cursor]);

  return (
    <section className="relative min-h-screen bg-[#0e0e0e] overflow-hidden flex flex-col">

      {/* ── UNIFORM RADIAL GLOW — behind the character, dead center ── */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        {/* Outer soft glow */}
        <div
          className="absolute rounded-full"
          style={{
            width: '70vw',
            height: '70vw',
            background: 'radial-gradient(circle, rgba(41,98,255,0.12) 0%, rgba(148,170,255,0.06) 35%, transparent 70%)',
            bottom: '-10%',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        />
        {/* Inner tight glow — more concentrated */}
        <div
          className="absolute rounded-full"
          style={{
            width: '40vw',
            height: '40vw',
            background: 'radial-gradient(circle, rgba(148,170,255,0.10) 0%, rgba(41,98,255,0.05) 50%, transparent 75%)',
            bottom: '-5%',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        />
        {/* Hover glow — intensifies on hover */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: '50vw',
            height: '50vw',
            bottom: '-8%',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
          animate={{
            background: isHovered
              ? 'radial-gradient(circle, rgba(148,170,255,0.22) 0%, rgba(41,98,255,0.10) 45%, transparent 72%)'
              : 'radial-gradient(circle, rgba(148,170,255,0.00) 0%, transparent 70%)',
          }}
          transition={{ duration: 0.5 }}
        />
      </div>

      {/* Fine grid overlay */}
      <div className="absolute inset-0 architect-grid opacity-20 pointer-events-none"></div>

      {/* Large faded name watermark */}
      <div className="absolute inset-0 flex items-end justify-center pointer-events-none select-none overflow-hidden pb-20">
        <span
          className="font-headline font-black uppercase text-white leading-none"
          style={{ fontSize: 'clamp(8rem, 25vw, 28rem)', opacity: 0.025, letterSpacing: '-0.05em' }}
        >
          VICHE
        </span>
      </div>

      {/* Vertical side labels */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4 z-10">
        <div className="font-label text-[9px] uppercase tracking-[0.4em] text-white/15 [writing-mode:vertical-rl] rotate-180">
          Portfolio 2026
        </div>
        <div className="w-px h-24 bg-white/8"></div>
      </div>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4 z-10">
        <div className="w-px h-24 bg-white/8"></div>
        <div className="font-label text-[9px] uppercase tracking-[0.4em] text-white/15 [writing-mode:vertical-rl]">
          ML · Finance · Healthcare
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="relative z-10 flex flex-col flex-1 pt-24">

        {/* Top text block */}
        <div className="px-6 md:px-16 mb-0 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.8)]"></div>
              <span className="font-label text-[11px] uppercase tracking-[0.4em] text-white/40">Available · Pune, India</span>
            </div>

            <h1 className="font-headline font-black text-white leading-[0.85] tracking-tighter">
              <motion.span
                className="block"
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)' }}
              >
                Hi, I'm
              </motion.span>
              <motion.span
                className="block"
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{ fontSize: 'clamp(3rem, 9vw, 8rem)' }}
              >
                <span className="text-white">Sarthak </span>
                <span className="text-primary">Viche</span>
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="font-label text-[11px] uppercase tracking-[0.5em] text-primary mt-4 font-bold"
            >
              AI & Agentic Experience · ML Engineer · Builder
            </motion.p>
          </motion.div>
        </div>

        {/* ── CHARACTER IMAGE — large, centered, hover reveal ── */}
        <div className="relative flex-1 flex items-end justify-center">
          <motion.div
            ref={imageRef}
            className="relative flex-shrink-0"
            style={{
              width: 'clamp(400px, 80vw, 950px)',
              height: 'clamp(550px, 95vh, 1150px)',
              cursor: 'none', // hide native cursor over image
            }}
            onMouseEnter={handleImageEnter}
            onMouseLeave={handleImageLeave}
            onMouseMove={handleImageMouseMove}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, type: 'spring' }}
          >
            {/* Simple image — always visible at rest */}
            <img
              src={simpleAvatar}
              alt="Sarthak Viche"
              className="absolute inset-0 w-full h-full object-contain object-bottom select-none"
              style={{ zIndex: 1 }}
              draggable={false}
            />

            {/* Funky / cyberpunk image — cross-fades on hover */}
            <motion.img
              src={funkyAvatar}
              alt="Sarthak Viche — alter ego"
              className="absolute inset-0 w-full h-full object-contain object-bottom select-none"
              style={{ zIndex: 2 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              draggable={false}
            />

            {/* Scanline sweep effect on hover */}
            <ScanLine active={isHovered} />

            {/* Glitch flash on transition */}
            <GlitchFlash trigger={isHovered} />

            {/* Edge glow rim on hover */}
            <motion.div
              className="absolute inset-0 pointer-events-none z-20"
              animate={{
                boxShadow: isHovered
                  ? 'inset 0 0 60px rgba(148,170,255,0.1), 0 0 80px rgba(148,170,255,0.15)'
                  : 'inset 0 0 0px rgba(148,170,255,0), 0 0 0px rgba(148,170,255,0)',
              }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>
        </div>
      </div>

      {/* ── CURSOR-FOLLOWING TOOLTIP ── */}
      <AnimatePresence>
        {cursorVisible && (
          <motion.div
            className="fixed pointer-events-none z-[9999]"
            style={{
              x: smoothX,
              y: smoothY,
              translateX: '-50%',
              translateY: '-130%',
            }}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.2 }}
          >
            <div className="bg-[#0e0e0e]/90 border border-primary/40 rounded px-4 py-2 backdrop-blur-sm shadow-[0_0_20px_rgba(148,170,255,0.2)]">
              <span className="font-label text-[10px] uppercase tracking-widest text-primary whitespace-nowrap">
                {isHovered ? '⚡ Alter Ego' : 'Hover to reveal'}
              </span>
            </div>
            {/* Small arrow/pointer */}
            <div className="mx-auto w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-primary/40 mt-0"></div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── TICKER ── */}
      <Ticker />

      {/* ── CTA ROW ── */}
      <div className="relative z-10 flex items-center justify-between px-6 md:px-16 py-4 border-t border-white/5">
        <div className="flex gap-6">
          <a
            href="#projects"
            className="text-white font-headline font-bold text-sm uppercase tracking-wider no-underline border border-white/20 px-6 py-2.5 rounded-full hover:bg-white hover:text-black transition-all duration-300"
          >
            See work
          </a>
          <a
            href="#connect"
            className="text-primary font-headline font-bold text-sm uppercase tracking-wider no-underline hover:text-white transition-colors"
          >
            Contact ↗
          </a>
        </div>
        <div className="hidden md:flex items-center gap-6 font-label text-[10px] uppercase tracking-widest text-white/30">
          <span>Scroll to explore</span>
          <motion.span
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.6 }}
            className="material-symbols-outlined text-sm"
          >
            keyboard_arrow_down
          </motion.span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
