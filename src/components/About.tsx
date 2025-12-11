import { MapPin, GraduationCap, Award, BookOpen, Heart, Globe } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const About = () => {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden bg-background">
      {/* Abstract Background Element */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: The Manifesto (Product Philosophy) */}
          <div className="opacity-0 animate-fade-up space-y-8">
            <div>
                <span className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-4 block">
                About Me
                </span>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
                Building systems that work <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">for people</span>, not against them.
                </h2>
            </div>
            
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                I am an <strong>Operations & Product Professional</strong> with 9 years of experience. My career has been defined by one core obsession: <em>Efficiency.</em>
                </p>
                <p>
                Whether I was optimizing high-volume recruitment pipelines at Rang Technologies or configuring complex SaaS workflows at Akshar Staffing, I have always been the person bridging the gap between <strong>human needs</strong> and <strong>technical execution</strong>.
                </p>
                <p>
                Now, I leverage AI and Product Strategy to build scalable tools. I don't just manage products; I engineer the ecosystems around them to ensure they thrive.
                </p>
            </div>

            {/* Signature / Core Values */}
            <div className="flex gap-6 pt-6 border-t border-border/50">
                <div>
                    <h4 className="font-bold text-foreground mb-1">User First</h4>
                    <p className="text-sm text-muted-foreground">Empathy over logic.</p>
                </div>
                <div>
                    <h4 className="font-bold text-foreground mb-1">Data Driven</h4>
                    <p className="text-sm text-muted-foreground">Evidence over gut.</p>
                </div>
                <div>
                    <h4 className="font-bold text-foreground mb-1">Agile Native</h4>
                    <p className="text-sm text-muted-foreground">Iterate over perfect.</p>
                </div>
            </div>
          </div>

          {/* Right: The Profile Card (Visual) */}
          <div className="relative opacity-0 animate-fade-up stagger-2">
            <div className="relative z-10 bg-card border border-border rounded-2xl p-8 shadow-2xl">
                
                {/* Header Info */}
                <div className="flex items-start justify-between mb-8">
                    <div>
                        <h3 className="text-2xl font-bold">Sanket Tamboli</h3>
                        <p className="text-primary font-medium">Product Operations Manager</p>
                    </div>
                    <div className="p-3 bg-secondary rounded-full">
                        <Globe className="w-6 h-6 text-foreground" />
                    </div>
                </div>

                {/* Info Blocks */}
                <div className="space-y-6">
                    
                    {/* Location */}
                    <div className="flex items-center gap-4 group">
                        <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                            <MapPin className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                            <p className="text-xs text-muted-foreground uppercase font-bold">Based in</p>
                            <p className="font-medium">Vadodara, Gujarat (Open to Remote)</p>
                        </div>
                    </div>

                    {/* Education */}
                    <div className="flex items-center gap-4 group">
                        <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                            <GraduationCap className="w-5 h-5 text-purple-600" />
                        </div>
                        <div>
                            <p className="text-xs text-muted-foreground uppercase font-bold">Education</p>
                            <p className="font-medium">Postgraduate in HRM (2021)</p>
                            <p className="text-xs text-muted-foreground">B.E. Electronics & Comm. (2017)</p>
                        </div>
                    </div>

                    {/* Certs */}
                    <div className="flex items-start gap-4 group">
                        <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500/20 transition-colors shrink-0">
                            <Award className="w-5 h-5 text-orange-600" />
                        </div>
                        <div>
                            <p className="text-xs text-muted-foreground uppercase font-bold mb-2">Certifications</p>
                            <div className="flex flex-wrap gap-2">
                                {["AI Product Mgmt", "Lean Six Sigma", "Scrum Master"].map(c => (
                                    <Badge key={c} variant="secondary" className="text-[10px]">
                                        {c}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>

                {/* Decorative Bottom Bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 rounded-b-2xl" />
            </div>

            {/* Decorative background visual */}
            <div className="absolute -top-4 -right-4 w-full h-full border-2 border-dashed border-border rounded-2xl -z-10" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
