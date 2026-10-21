import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'Smart Public Grievance Escalation System',
    category: 'Civic Technology',
    description: 'A Java and MySQL grievance platform for complaint tracking, image uploads, and automatic escalation across officer levels.',
    tags: ['Java', 'MySQL', 'Grievance Management'],
    repositoryUrl: 'https://github.com/Immortal-coder2351/Smart_Public_Grievance_Escalation_System',
    liveUrl: 'https://smart-public-grievance-escalation-system.onrender.com'
  },
  {
    title: 'Immortal-coder2351.github.io',
    category: 'Portfolio Website',
    description: 'Personal portfolio website repository.',
    tags: ['Portfolio', 'GitHub Pages'],
    repositoryUrl: 'https://github.com/Immortal-coder2351/Immortal-coder2351.github.io'
  },
  {
    title: 'vote',
    category: 'GitHub Repository',
    description: 'Explore the source code and project details in this repository.',
    tags: ['GitHub'],
    repositoryUrl: 'https://github.com/Immortal-coder2351/vote'
  },
  {
    title: 'notes',
    category: 'GitHub Repository',
    description: 'Explore the source code and project details in this repository.',
    tags: ['GitHub'],
    repositoryUrl: 'https://github.com/Immortal-coder2351/notes'
  },
  {
    title: 'PULSE_PICK_AI',
    category: 'Artificial Intelligence',
    description: 'Explore the source code and project details in this repository.',
    tags: ['AI', 'GitHub'],
    repositoryUrl: 'https://github.com/Immortal-coder2351/PULSE_PICK_AI'
  },
  {
    title: 'ARGO_SCHEME_RECOMENDER',
    category: 'GitHub Repository',
    description: 'Explore the source code and project details in this repository.',
    tags: ['GitHub'],
    repositoryUrl: 'https://github.com/Immortal-coder2351/ARGO_SCHEME_RECOMENDER'
  },
  {
    title: 'mind-sprouts',
    category: 'GitHub Repository',
    description: 'Explore the source code and project details in this repository.',
    tags: ['GitHub'],
    repositoryUrl: 'https://github.com/Immortal-coder2351/mind-sprouts'
  },
  {
    title: 'AI-Based Career Recommendation System',
    category: 'Artificial Intelligence',
    description: 'A Streamlit app that recommends career paths from a user’s education, skills, interests, and profile score using a trained LightGBM model.',
    tags: ['Python', 'Streamlit', 'LightGBM'],
    repositoryUrl: 'https://github.com/Immortal-coder2351/AI-Based-Carrier-Recommendation-System'
  },
  {
    title: 'chatbot-002',
    category: 'GitHub Repository',
    description: 'Explore the source code and project details in this repository.',
    tags: ['GitHub'],
    repositoryUrl: 'https://github.com/Immortal-coder2351/chatbot-002'
  },
  {
    title: 'PASSWORD-GENERATOR',
    category: 'GitHub Repository',
    description: 'Explore the source code and project details in this repository.',
    tags: ['GitHub'],
    repositoryUrl: 'https://github.com/Immortal-coder2351/PASSWORD-GENERATOR'
  },
  {
    title: 'BMI-CALCULATOR',
    category: 'GitHub Repository',
    description: 'Explore the source code and project details in this repository.',
    tags: ['GitHub'],
    repositoryUrl: 'https://github.com/Immortal-coder2351/BMI-CALCULATOR'
  },
  {
    title: 'AI-ASSISSTANT',
    category: 'GitHub Repository',
    description: 'Explore the source code and project details in this repository.',
    tags: ['GitHub'],
    repositoryUrl: 'https://github.com/Immortal-coder2351/AI-ASSISSTANT'
  },
  {
    title: 'studymate',
    category: 'GitHub Repository',
    description: 'Explore the source code and project details in this repository.',
    tags: ['GitHub'],
    repositoryUrl: 'https://github.com/Immortal-coder2351/studymate'
  }
];

const ProjectCard = ({ project, index, cardRef, compact = false }) => (
  <article
    ref={cardRef}
    className={`group flex flex-col rounded-2xl border border-cream/15 bg-[#493023]/95 shadow-[0_20px_40px_rgba(0,0,0,0.3)] transition duration-300 hover:border-brown-400/60 hover:bg-[#493023] ${
      compact
        ? 'min-h-[280px] p-6'
        : 'absolute left-1/2 top-1/2 h-[190px] w-[min(36vw,190px)] -translate-x-1/2 -translate-y-1/2 p-4'
    }`}
  >
    <div className="mb-3 flex items-start justify-between gap-2">
      <span className="rounded border border-brown-500/30 bg-brown-600/10 px-2 py-1 font-mono text-[9px] font-bold uppercase tracking-widest text-brown-300">
        {project.category}
      </span>
      <span className="shrink-0 font-mono text-[10px] text-cream/45">
        {String(index + 1).padStart(2, '0')} / {projects.length}
      </span>
    </div>

    <h3 className={`mb-2 font-bold leading-snug text-cream transition-colors group-hover:text-brown-200 ${compact ? 'text-lg' : 'line-clamp-4 text-base'}`}>
      {project.title}
    </h3>
    {compact && (
      <p className="mb-3 line-clamp-3 text-xs leading-relaxed text-cream/70">
        {project.description}
      </p>
    )}

    {compact && (
      <div className="mb-3 flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded border border-cream/10 bg-cream/[0.04] px-2 py-1 font-mono text-[9px] text-cream/70"
          >
            {tag}
          </span>
        ))}
      </div>
    )}

    <div className="mt-auto flex flex-wrap items-center gap-2 border-t border-cream/10 pt-3">
      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
          className={`inline-flex min-h-9 items-center rounded bg-brown-600 py-1.5 font-bold uppercase tracking-wider text-cream transition-colors hover:bg-brown-500 ${compact ? 'px-3 text-[10px]' : 'px-2 text-[9px]'}`}
        >
          Live Demo
        </a>
      )}
      <a
        href={project.repositoryUrl}
        target="_blank"
        rel="noreferrer"
        className={`inline-flex min-h-9 items-center rounded border border-cream/25 py-1.5 font-bold uppercase tracking-wider text-cream/80 transition-colors hover:border-cream/60 hover:text-cream ${compact ? 'px-3 text-[10px]' : 'px-2 text-[9px]'}`}
      >
        GitHub
      </a>
    </div>
  </article>
);

const Projects = () => {
  const sectionRef = useRef(null);
  const wheelRef = useRef(null);
  const envelopeFlapRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const wheel = wheelRef.current;
    const flap = envelopeFlapRef.current;
    const cards = cardsRef.current.filter(Boolean);
    if (!section || !wheel || !flap || !cards.length) return undefined;

    const context = gsap.context(() => {
      const media = gsap.matchMedia();

      media.add('(min-width: 1280px)', () => {
        const radius = Math.min((window.innerWidth - 160) / 2, 560);
        const angleStep = (Math.PI * 2) / cards.length;
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        let orbit;

        gsap.set(flap, { transformOrigin: 'center bottom', rotationX: 0 });
        gsap.set(cards, {
          xPercent: -50,
          yPercent: -50,
          x: 0,
          y: 100,
          scale: 0.18,
          opacity: 0,
          rotation: 0
        });

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top 60%',
            toggleActions: 'play none none reverse',
            onLeaveBack: () => {
              if (orbit) orbit.kill();
              gsap.set(wheel, { rotation: 0 });
              gsap.set(cards, { rotation: 0 });
            }
          },
        });

        timeline
          .to(flap, { rotationX: -155, duration: 0.75, ease: 'power3.inOut' })
          .to(cards, {
            x: (index) => Math.sin(index * angleStep) * radius,
            y: (index) => Math.cos(index * angleStep) * radius,
            scale: 1,
            opacity: 1,
            duration: 1.1,
            stagger: { amount: 0.7, from: 'center' },
              ease: 'power3.out',
              onComplete: () => {
                if (reduceMotion) return;
                orbit = gsap.to(wheel, {
                  rotation: 360,
                  duration: 72,
                  repeat: -1,
                  ease: 'none',
                  onUpdate: () => {
                    gsap.set(cards, { rotation: -gsap.getProperty(wheel, 'rotation') });
                  }
                });
              }
          }, '-=0.15');

        if (reduceMotion) {
          gsap.set(flap, { rotationX: -155 });
          gsap.set(cards, {
              x: (index) => Math.sin(index * angleStep) * radius,
              y: (index) => Math.cos(index * angleStep) * radius,
              scale: 1,
              opacity: 1
          });
          timeline.progress(1).pause();
        }
      });

      media.add('(max-width: 1279px)', () => {
        gsap.set(flap, { transformOrigin: 'center bottom', rotationX: 0 });
        gsap.set(cards, { clearProps: 'all' });
        gsap.from(cards, {
          y: 24,
          opacity: 0,
          duration: 0.45,
          stagger: 0.06,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 75%'
          }
        });
      });

      return () => media.revert();
    }, section);

    return () => context.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="portfolio-backdrop-alt relative min-h-[100svh] overflow-hidden px-6 py-24 text-cream md:min-h-[1450px] md:px-12 md:py-32 xl:min-h-[1750px]"
    >
      <div className="pointer-events-none absolute inset-x-0 top-12 overflow-hidden text-center">
        <span className="whitespace-nowrap text-[16vw] font-black uppercase leading-none tracking-tighter text-cream/[0.03]">
          ARCHIVE
        </span>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <header className="relative z-20 mb-10 flex flex-col gap-3 border-b border-cream/15 pb-6 sm:flex-row sm:items-end sm:justify-between md:mb-0">
          <div>
            <p className="mb-2 font-mono text-xs font-bold uppercase tracking-[0.2em] text-brown-400">
              Project Archive
            </p>
            <h2 className="text-3xl font-black tracking-tight text-cream md:text-5xl">
              Archive Slots
            </h2>
          </div>
          <p className="font-mono text-xs uppercase tracking-widest text-cream/55">
            {projects.length} public repositories
          </p>
        </header>

        <div className="relative z-10 mx-auto hidden h-[1360px] w-full items-center justify-center xl:flex">
          <div className="absolute left-1/2 top-1/2 z-0 aspect-square w-[min(88vw,1120px)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-brown-400/30" />

          <div
            ref={wheelRef}
            className="absolute left-1/2 top-1/2 z-20 h-0 w-0"
          >
            {projects.map((project, index) => (
              <ProjectCard
                key={project.repositoryUrl}
                project={project}
                index={index}
                cardRef={(element) => { cardsRef.current[index] = element; }}
              />
            ))}
          </div>

          <div className="absolute left-1/2 top-1/2 z-10 h-[180px] w-[300px] -translate-x-1/2 -translate-y-1/2">
            <div className="absolute inset-0 rounded-b-[28px] rounded-t-lg border border-brown-300/30 bg-gradient-to-b from-[#62402E] to-[#302118] shadow-[0_25px_55px_rgba(0,0,0,0.55)]" />
            <div
              ref={envelopeFlapRef}
              className="absolute inset-x-0 top-0 h-[85px] origin-bottom rounded-t-lg border border-brown-300/30 bg-[#795038] [clip-path:polygon(0_0,100%_0,50%_100%)]"
            />
            <div className="absolute inset-x-0 bottom-5 z-20 text-center font-mono text-xs font-bold tracking-[0.2em] text-cream/70">
              OPEN ARCHIVE
            </div>
          </div>
        </div>

        <div className="relative z-10 grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:hidden">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.repositoryUrl}
              project={project}
              index={index}
              compact
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
