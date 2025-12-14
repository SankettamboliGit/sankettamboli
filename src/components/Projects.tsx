// ... (Imports & Projects Data) ...

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <section id="projects" className="py-20 md:py-32 px-4 md:px-6 bg-[#030303] relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12 animate-fade-up">
          <Badge variant="outline" className="mb-3 border-white/20 text-white/70 backdrop-blur-md px-3 py-0.5 text-[10px] uppercase tracking-widest">
            Projects
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white">
            Projects
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-base md:text-lg">
            Real-world examples of scalable solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <article
              key={project.title}
              onClick={() => setSelectedProject(project)}
              className={`
                group relative overflow-hidden rounded-3xl 
                bg-white/5 backdrop-blur-xl 
                border border-white/10 hover:border-white/20
                transition-all duration-300 cursor-pointer 
                active:scale-95
                animate-fade-up stagger-${Math.min(index + 1, 5)}
              `}
            >
              {/* Aspect Ratio: 16/9 on mobile (shorter), 4/3 on desktop */}
              <div className="aspect-video md:aspect-[4/3] w-full overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent opacity-80" />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="backdrop-blur-xl bg-black/50 text-white border-white/10">
                    {project.category}
                  </Badge>
                </div>
              </div>

              <div className="p-6 md:p-8 relative -mt-12">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg md:text-xl font-bold text-white leading-tight">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-white/30" />
                </div>
                <p className="text-white/60 text-xs md:text-sm line-clamp-2 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="text-[10px] font-bold px-2 py-1 rounded bg-white/5 text-white/50 border border-white/5">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl w-[95vw] p-0 border-white/10 bg-black/90 backdrop-blur-3xl rounded-2xl text-white [&>button]:hidden">
           {/* ... Content ... */}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
