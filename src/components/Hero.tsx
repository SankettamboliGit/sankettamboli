import { FileText, ChevronDown, Award, Briefcase } from "lucide-react";
import profileImage from "@/assets/profile.png";

const Hero = () => {
  // Orchestrated sequence: eyebrow → profile → headline → subhead → CTAs
  const t = {
    eyebrow: 0,
    profile: 120,
    headline: 260,
    subhead: 420,
    ctas: 560,
  };

  return (
    <section
      id="home"
      className="relative w-full flex flex-col items-center justify-center pt-28 pb-16 px-6 overflow-hidden min-h-[90vh]"
    >
      {/* Single calm ambient — one accent, low opacity */}
      <div
        className="ambient-accent top-[-12%] left-1/2 -translate-x-1/2 w-[640px] h-[640px]"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto text-center flex flex-col items-center gap-8 md:gap-12">
        {/* Status Pill */}
        <div
          className="animate-fade-up opacity-0"
          style={{ animationDelay: `${t.eyebrow}ms` }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full surface backdrop-blur-md cursor-default">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[hsl(var(--accent))] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[hsl(var(--accent))]"></span>
            </span>
            <span className="text-[10px] font-medium text-white/90 uppercase tracking-widest">
              Director of Delivery · Open to PM / PO Roles
            </span>
          </div>
        </div>

        {/* PROFILE ROW */}
        <div
          className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-20 animate-fade-up opacity-0"
          style={{ animationDelay: `${t.profile}ms` }}
        >
          {/* Left Badge: Certifications — monochrome */}
          <div className="hidden md:flex flex-col items-end">
            <div className="px-5 py-3 bg-[#0a0a0a]/80 backdrop-blur-xl surface rounded-2xl shadow-lg flex items-center gap-4 surface-hover cursor-default">
              <div className="text-right">
                <span className="block text-[10px] text-white/50 uppercase font-bold tracking-wider">
                  Certified
                </span>
                <span className="block text-sm font-bold text-white">
                  AI PM • Agile • Scrum
                </span>
              </div>
              <div className="p-2 rounded-xl bg-white/5 text-white/70 border border-white/10">
                <Award className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Center: Profile Image */}
          <div className="relative group">
            <div className="absolute inset-0 bg-[hsl(var(--accent)/0.12)] rounded-full blur-3xl transform group-hover:scale-105 transition-transform duration-700 opacity-70" />

            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-2 bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl z-10">
              <div className="w-full h-full rounded-full overflow-hidden bg-black/40 relative">
                <img
                  src={profileImage}
                  alt="Sanket Tamboli, Director of Delivery"
                  className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>
            </div>
          </div>

          {/* Right Badge: Experience — monochrome (accent reserved elsewhere) */}
          <div className="hidden md:flex flex-col items-start">
            <div className="px-5 py-3 bg-[#0a0a0a]/80 backdrop-blur-xl surface rounded-2xl shadow-lg flex items-center gap-4 surface-hover cursor-default">
              <div className="p-2 rounded-xl bg-white/5 text-white/70 border border-white/10">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-[10px] text-white/50 uppercase font-bold tracking-wider">
                  Currently
                </span>
                <span className="block text-sm font-bold text-white">
                  Director of Delivery
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Badges Row */}
        <div
          className="flex md:hidden gap-3 -mt-4 animate-fade-up opacity-0"
          style={{ animationDelay: `${t.profile + 60}ms` }}
        >
          <div className="px-4 py-2 surface rounded-xl flex items-center gap-2 backdrop-blur-md">
            <Award className="w-4 h-4 text-white/70" />
            <span className="text-xs font-bold text-white">AI PM • Agile</span>
          </div>
          <div className="px-4 py-2 surface rounded-xl flex items-center gap-2 backdrop-blur-md">
            <Briefcase className="w-4 h-4 text-white/70" />
            <span className="text-xs font-bold text-white">9+ Years</span>
          </div>
        </div>

        {/* Headline */}
        <div
          className="space-y-5 max-w-3xl animate-fade-up opacity-0"
          style={{ animationDelay: `${t.headline}ms` }}
        >
          <h1 className="font-display font-semibold text-display-xl text-white">
            Delivery Director with a Product Mindset
          </h1>
        </div>

        <div
          className="max-w-xl animate-fade-up opacity-0"
          style={{ animationDelay: `${t.subhead}ms` }}
        >
          <p className="text-base md:text-lg text-white/70 font-light mx-auto leading-relaxed">
            Director of Delivery at Technocore360. 9 years owning workflows,
            internal SaaS platforms, and cross-functional execution across US
            and India. Targeting PM / PO roles.
          </p>
        </div>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center gap-4 animate-fade-up opacity-0"
          style={{ animationDelay: `${t.ctas}ms` }}
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-all shadow-[0_0_20px_rgba(255,255,255,0.12)]"
          >
            View Work
          </a>
          <a
            href="https://drive.google.com/file/d/1zNr2cCp_NRRDGWJJ9yV-KMPQmqVUvrAV/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 border border-white/20 text-white/90 font-semibold rounded-full hover:bg-white/5 hover:border-white/30 transition-all"
          >
            <FileText className="w-4 h-4" /> Resume
          </a>
        </div>
      </div>

      {/* Scroll Cue */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-50 z-10"
        aria-hidden="true"
      >
        <ChevronDown className="w-5 h-5 text-white/40" />
      </div>
    </section>
  );
};

export default Hero;
