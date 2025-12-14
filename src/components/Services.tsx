// ... (Keep existing imports and Visual Components - DiscoveryVisual, RoadmapVisual, etc.) ...
// If you need the full file with Visuals again, let me know. Assuming visuals are present.

import { useState } from "react";
import {
  Compass, Map, Users, BarChart3, Layers, Lightbulb, 
  ArrowRight, CheckCircle2, Cpu, X,
  StickyNote, Calendar, MessageSquare, FileText, Network,
  FileCheck, TrendingUp
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

// Paste Visual Components Here (DiscoveryVisual, etc.) if not already in file.

// --- Data ---
const services = [
  // ... (Keep existing services data) ...
  // Same data as before
];

// RE-ADD DATA HERE IF NEEDED. Using placeholder for brevity as data didn't change.
// Use the data from the previous correct response.

const Services = () => {
  const [selectedService, setSelectedService] = useState<any>(null);

  return (
    <section id="services" className="py-20 md:py-32 px-4 md:px-6 bg-[#030303] relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-1/4 left-0 w-[300px] h-[300px] bg-blue-900/10 rounded-full blur-[80px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12 animate-fade-up">
          <Badge variant="outline" className="mb-3 border-white/20 text-white/70 backdrop-blur-md px-3 py-0.5 text-[10px] uppercase tracking-widest">
            Process
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white">
            Product Strategy
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-base md:text-lg px-2">
            How I turn ambiguous problems into shipped solutions.
          </p>
        </div>

        {/* Responsive Grid: 1 col on mobile, 2 on tablet, 3 on laptop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              onClick={() => setSelectedService(service)}
              className={`
                group relative overflow-hidden rounded-2xl md:rounded-3xl 
                bg-white/5 backdrop-blur-xl 
                border border-white/10 hover:border-white/20
                transition-all duration-300 cursor-pointer 
                active:scale-95
                animate-fade-up stagger-${Math.min(index + 1, 5)}
              `}
            >
              <div className="h-32 md:h-40 w-full relative overflow-hidden border-b border-white/5">
                 {service.visual}
                 <div className="absolute bottom-3 left-4 md:bottom-4 md:left-6">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-black/40 backdrop-blur-md flex items-center justify-center shadow-lg border border-white/10 text-white">
                        <service.icon className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                 </div>
              </div>

              <div className="p-5 md:p-8 pt-3 md:pt-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                      {service.title}
                  </h3>
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-white/30" />
                </div>
                <p className="text-white/60 text-xs md:text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal - Full width on mobile */}
      <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="max-w-xl w-[95vw] rounded-2xl p-0 border-white/10 bg-black/90 backdrop-blur-3xl text-white [&>button]:hidden">
          <div className="relative h-32 md:h-40 w-full shrink-0 bg-gradient-to-b from-white/5 to-transparent">
            {selectedService?.visual}
            <div className="absolute bottom-4 left-6 flex items-center gap-3">
                <div className="p-2 bg-black/50 rounded-lg border border-white/10 text-white">
                    {selectedService && <selectedService.icon className="w-5 h-5" />}
                </div>
                <DialogTitle className="text-lg md:text-2xl font-bold text-white">
                    {selectedService?.title}
                </DialogTitle>
            </div>
            <DialogClose className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-white">
              <X className="w-4 h-4" />
            </DialogClose>
          </div>
          
          <div className="p-6 space-y-6 overflow-y-auto max-h-[60vh]">
             {/* ... Modal content ... */}
             {/* Keeping content logic same, just structure optimized */}
             {/* Re-paste the content logic from previous turn if needed, or use existing */}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Services;
