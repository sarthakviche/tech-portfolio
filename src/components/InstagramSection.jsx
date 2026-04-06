import React from 'react';
import { motion } from 'framer-motion';

const InstagramSection = () => {
  return (
    <section id="about" className="relative min-h-screen py-32 overflow-hidden flex items-center justify-center bg-surface">
      <div className="absolute inset-0 architect-grid pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <h2 className="font-headline font-extrabold text-5xl md:text-7xl text-white tracking-tighter mb-4">Connect in the Void</h2>
          <p className="font-label text-on-surface-variant uppercase tracking-[0.2em] text-xs">Curating visual chaos through the lens of @SARTHAKVICHE</p>
        </div>

        {/* Floating Card Grid */}
        <div className="relative h-[600px] max-w-5xl mx-auto">
          {/* Photo Card 1 */}
          <motion.div 
            drag
            dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
            whileHover={{ scale: 1.1, rotate: 0, zIndex: 50 }}
            className="absolute top-[10%] left-[5%] w-64 h-80 rounded-xl overflow-hidden border border-outline-variant/30 shadow-2xl rotate-[-3deg] cursor-grab active:cursor-grabbing transition-all duration-300"
          >
            <img 
              alt="Insta 1" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcdg_-Yu4C_Q7V5-f3cmtQWtvcY4IiqejVfgQfsOZHcXeFfwLeKjXpFXmcVTgY5_h_pZsYER9CbW3VkE6Rtc2-wAKKfy7teNQiKI1kXI38PtG2hlm0M2E0gQjraimok4EYX7GSU8-39VwRmXvNagXBiCX-JJDIxVgR2bi5FMiVQW71-fVjLTFAp3I1zkeuxztB3_tQ34fcZquht1g-WOwhvQWJFHLw8Y3J5VWPcEuAqO3ezjJlP55ZtQqS5BmMzy8G7z_DA_KyYps"
            />
          </motion.div>

          {/* Music Player 1 */}
          <motion.div 
            initial={{ rotate: 5 }}
            whileHover={{ rotate: 0, scale: 1.05 }}
            className="absolute top-[20%] right-[10%] w-72 p-4 bg-surface-container-high rounded-2xl border border-primary/20 shadow-[0_0_30px_rgba(144,147,255,0.1)] transition-all duration-500"
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-lg bg-primary/20 flex items-center justify-center overflow-hidden">
                <img 
                  alt="Album Art" 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKeORSubu73Hcvz-gBFJkfDgLId_M0rRjLU4E3mFB24mKMELU6mYdgJvBap_BiMwM__wxAMOt26A2xTAuWldhAqI3POPRVehxEePmASyTShRP_gcwW4jsY4vbAVtZ2GqoWssbduhx3ScKl0LmvpLO0t00JWs2j-IjMnMkfUJiYnx05WF_Usp33dp8iG0uC3w1THOLlSM0YSR8b401jvit8BbPxaBBk7o5qmdiFOSiuGaGqz2evlx0xniELCklzVpPco554ZnyQiHg"
                />
              </div>
              <div>
                <h4 className="font-headline font-bold text-sm text-white">Midnight Drive</h4>
                <p className="font-label text-[10px] text-primary uppercase">Current Obsession</p>
              </div>
            </div>
            <div className="mt-4 h-1 bg-surface-variant rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '65%' }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                className="h-full bg-primary shadow-[0_0_10px_#94aaff]"
              ></motion.div>
            </div>
          </motion.div>

          {/* Photo Card 2 */}
          <motion.div 
            drag
            dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
            whileHover={{ scale: 1.1, rotate: 0, zIndex: 50 }}
            className="absolute bottom-[10%] left-[20%] w-72 h-48 rounded-xl overflow-hidden border border-outline-variant/30 shadow-2xl rotate-[2deg] cursor-grab active:cursor-grabbing transition-all duration-300"
          >
            <img 
              alt="Insta 2" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBl9HDvTotvuG6MnnjqNqD30yGe5CEPZKwPuBDSxcZN1m8dBpqPux-oUOFQ0bu9HqlrrQsIgSrCdm-8SFUzRAVbUWFq8f8Xz5caQHp-Jz-BmzF_Vo6sKQg_4RDP96StmzrApSazsMZhIsG4pfhQeOQv0fZaaWb4r9wtnaSf7Dr3RF6IebzRVWXYV_OB6oeNDvDbYW5iyp_-pfTPH_BEV8niTnhlvYZEsEN_H6LGRylpEQGoSNK5oBClh_qcAs1h5xtot1VFH2iTQUo"
            />
          </motion.div>

          {/* Instagram CTA */}
          <div className="absolute bottom-[20%] right-[15%] flex flex-col items-center">
            <a 
              className="group relative px-8 py-4 bg-white text-black font-headline font-black rounded-full overflow-hidden transition-all duration-300 active:scale-95 no-underline" 
              href="#"
            >
              <span className="relative z-10 flex items-center gap-2">
                FOLLOW ON IG <span className="material-symbols-outlined">open_in_new</span>
              </span>
              <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </a>
            <p className="font-label text-sm text-outline-variant max-w-md uppercase tracking-wider leading-relaxed mt-4">
              Not everything I build is structured. Some ideas evolve, break, and grow on Instagram.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
