import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { siteData } from '../data/siteData';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // --- Cinematic Stagger Entrance on Scroll ---
    gsap.fromTo(
      cardRefs.current,
      { y: 80, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // --- Interactive Magnetic Mouse Spotlight per Bento Card ---
    const cards = cardRefs.current;
    const handleMouseMove = (e, card) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    };

    cards.forEach((card) => {
      if (!card) return;
      const listener = (e) => handleMouseMove(e, card);
      card.addEventListener('mousemove', listener);
      return () => card.removeEventListener('mousemove', listener);
    });

  }, []);

  const addToRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="portfolio-backdrop relative w-full min-h-screen text-cream py-32 px-6 md:px-12 flex flex-col justify-center select-none overflow-hidden"
    >
      {/* Background Cinematic Red Ambient Glows */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-brown-600/10 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-brown-900/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto w-full space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded bg-brown-950/80 backdrop-blur-2xl border border-brown-600/40 text-xs font-mono uppercase tracking-widest text-cream shadow-2xl">
            <span className="w-2 h-2 rounded-full bg-brown-600 animate-ping"></span>
            <span className="text-brown-500 font-bold">{siteData.about.episode}</span>
            <span className="text-cream/40">|</span>
            <span>{siteData.about.title}</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-cream">
            EPISODE SYNOPSIS <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brown-300 via-brown-500 to-brown-700 drop-shadow-[0_0_30px_rgba(166,122,88,0.4)]">
              ORIGIN & VISION.
            </span>
          </h2>
        </div>

        {/* Bento Grid Layout with Interactive Mouse Light Tracking */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Card 1: Bio & Academic Core (Span 7) */}
          <div
            ref={addToRefs}
            className="md:col-span-7 p-8 md:p-12 bg-[#493023]/95 backdrop-blur-2xl border border-cream/15 rounded-[2.5rem] shadow-2xl flex flex-col justify-between relative group hover:border-brown-600/60 transition-all duration-500 overflow-hidden"
          >
            {/* Real-time mouse hover spotlight highlight */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: 'radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(166,122,88,0.15), transparent 70%)'
              }}
            ></div>

            <div className="absolute top-0 right-0 p-8 text-cream/5 font-mono text-7xl font-black pointer-events-none">
              01
            </div>
            
            <div className="space-y-5 relative z-10">
              <h3 className="text-xs font-mono uppercase tracking-widest text-brown-500 font-bold">Profile & Background</h3>
              <p className="text-lg md:text-xl font-medium text-cream/90 leading-relaxed">
                I am <span className="text-cream font-bold drop-shadow">{siteData.name}</span>, a full-stack developer and AI engineer building thoughtful, scalable products with real-world impact.
              </p>
              <p className="text-sm md:text-base text-cream/60 font-light leading-relaxed">
                {siteData.about.detail}
              </p>
            </div>
            
            <div className="pt-8 flex flex-wrap gap-2 relative z-10">
              <span className="px-3.5 py-1.5 rounded bg-cream/5 border border-cream/10 text-xs font-mono text-cream/80">AI & ML</span>
              <span className="px-3.5 py-1.5 rounded bg-cream/5 border border-cream/10 text-xs font-mono text-cream/80">Full-Stack Development</span>
              <span className="px-3.5 py-1.5 rounded bg-cream/5 border border-cream/10 text-xs font-mono text-cream/80">System Architecture</span>
            </div>
          </div>

          {/* Card 2: Fellowships & Achievements (Span 5) */}
          <div
            ref={addToRefs}
            className="md:col-span-5 p-8 md:p-12 bg-[#493023]/95 backdrop-blur-2xl border border-cream/15 rounded-[2.5rem] shadow-2xl flex flex-col justify-between relative group hover:border-brown-600/60 transition-all duration-500 overflow-hidden"
          >
            {/* Real-time mouse hover spotlight highlight */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: 'radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(166,122,88,0.15), transparent 70%)'
              }}
            ></div>

            <div className="absolute top-0 right-0 p-8 text-cream/5 font-mono text-7xl font-black pointer-events-none">
              02
            </div>
            
            <div className="space-y-5 relative z-10">
              <h3 className="text-xs font-mono uppercase tracking-widest text-brown-500 font-bold">Milestones & Accolades</h3>
              <ul className="space-y-3.5 text-sm text-cream/80 font-light">
                <li className="flex items-start gap-2.5">
                  <span className="text-brown-500 font-bold">&#8250;</span>
                  <span>Member of the <strong className="text-cream">Coding Studio Club</strong>.</span>
                </li>
              </ul>
            </div>
            
            <div className="pt-6 font-mono text-xs text-cream/40 relative z-10">
              // SEASON_01 HIGHLIGHTS
            </div>
          </div>

          {/* Card 3: Technical Ecosystem (Span 12) */}
          <div
            ref={addToRefs}
            className="md:col-span-12 p-8 md:p-12 bg-[#493023]/95 backdrop-blur-2xl border border-cream/15 rounded-[2.5rem] shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 hover:border-brown-600/60 transition-all duration-500 overflow-hidden relative group"
          >
            {/* Real-time mouse hover spotlight highlight */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: 'radial-gradient(500px circle at var(--mouse-x) var(--mouse-y), rgba(166,122,88,0.15), transparent 70%)'
              }}
            ></div>

            <div className="space-y-2 text-left relative z-10">
              <h3 className="text-xs font-mono uppercase tracking-widest text-brown-500 font-bold">Production Tech Stack</h3>
              <p className="text-base md:text-lg font-semibold text-cream">Equipped with industry-grade instruments for robust scaling.</p>
            </div>
            
            <div className="flex flex-wrap items-center gap-3 relative z-10">
              {['React', 'Node.js', 'Express', 'MySQL', 'MongoDB', 'Docker', 'JavaScript'].map((tech, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 rounded bg-cream/[0.04] border border-cream/10 text-xs font-mono uppercase tracking-wider text-cream shadow-inner hover:bg-brown-600/20 hover:border-brown-600/40 hover:scale-105 transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;