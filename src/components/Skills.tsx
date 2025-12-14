// ... (Imports & Visuals - keep same) ...

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState<any>(null);

  return (
    <section id="skills" className="py-20 md:py-32 px-4 md:px-6 bg-[#030303] relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12 animate-fade-up">
          <Badge variant="outline" className="mb-3 border-white/20 text-white/70 backdrop-blur-md px-3 py-0.5 text-[10px] uppercase tracking-widest">
            Competency Matrix
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white">
            The T-Shaped Skillset
          </h2>
          <p className="text-white/50 max-w-xl mx-auto text-base md:text-lg">
            Deep operational expertise combined with broad technical strategy.
          </p>
        </div>

        {/* 1 Col Mobile, 3 Col Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              onClick={() => setSelectedSkill(category)}
              className={`
                group relative overflow-hidden rounded-2xl 
                bg-white/5 backdrop-blur-xl 
                border border-white/10 hover:border-white/20
                transition-all duration-300 cursor-pointer 
                active:scale-95
                ${category.className}
              `}
            >
              <div className="h-24 md:h-28 w-full relative overflow-hidden border-b border-white/5">
                 {category.visual}
              </div>

              <div className="p-5">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                    {category.title}
                  </h3>
                  <ArrowUpRight className="w-4 h-4 text-white/30" />
                </div>
                <p className="text-xs font-medium text-white/60 leading-relaxed mb-4 line-clamp-2">
                   {category.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {category.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider bg-white/5 border border-white/10 rounded-md text-white/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Modal - Same mobile optimization as Services */}
      <Dialog open={!!selectedSkill} onOpenChange={() => setSelectedSkill(null)}>
         {/* ... Dialog Content ... */}
      </Dialog>
    </section>
  );
};

export default Skills;
