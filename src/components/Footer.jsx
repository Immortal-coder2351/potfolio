import { siteData } from '../data/siteData';

const Footer = () => {
  return (
    <footer className="portfolio-backdrop text-cream py-16 px-6 md:px-12 border-t border-cream/15 select-none relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col space-y-12">
        
        {/* Top Section: Brand & Quick Links */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-12 border-b border-cream/10">
          <div className="space-y-2">
            <div className="text-2xl font-black text-brown-600 tracking-tighter flex items-center gap-2 drop-shadow-[0_2px_15px_rgba(166,122,88,0.9)]">
              {siteData.name.split(' ')[0]}<span className="w-1.5 h-1.5 rounded-full bg-cream inline-block"></span>
            </div>
            <p className="text-xs font-mono text-cream/50 tracking-widest uppercase">
              // {siteData.shortTitle} &bull; {siteData.tagline}
            </p>
          </div>

          {/* Quick Navigation Links */}
          <nav className="flex flex-wrap gap-6 md:gap-8 text-xs font-mono uppercase tracking-widest text-cream/70">
            <a href="#home" className="hover:text-brown-500 transition-colors">Home</a>
            <a href="#about" className="hover:text-brown-500 transition-colors">About</a>
            <a href="#expertise" className="hover:text-brown-500 transition-colors">Expertise</a>
            <a href="#skills" className="hover:text-brown-500 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-brown-500 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-brown-500 transition-colors">Contact</a>
          </nav>
        </div>

        {/* Middle Section: Socials & External Profiles */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-xs font-mono text-cream/60">
          <div className="flex items-center gap-6">
            {siteData.socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brown-500 transition-colors uppercase tracking-wider"
              >
                {link.label} //
              </a>
            ))}
          </div>

          <div className="text-cream/40 tracking-widest uppercase">
            LOCATION: {siteData.location.toUpperCase()}
          </div>
        </div>

        {/* Bottom Copyright & Cinematic Tagline */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 border-t border-cream/5 text-[11px] font-mono text-cream/40 uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} {siteData.name}. All Rights Reserved.</p>
          <p className="text-brown-500/80">STREAMING WORLDWIDE &bull; BUILT WITH REACT & GSAP</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;