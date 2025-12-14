import { useState } from "react";
import { 
  Brain, Code2, Settings, Database, LayoutTemplate, 
  Layers, Zap, Users, X, ArrowUpRight, Target
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

// --- Visuals ---
const StrategyVisual = () => (
  <div className="w-full h-full flex items-center justify-center bg-gradient-to-b from-purple-500/5 to-transparent">
    <div className="p-3 rounded-full bg-purple-500/10 shadow-[0_0_30px_rgba(168,85,247,0.2)] border border-purple-500/20">
      <Brain className="w-8 h-8 text-purple-200" />
    </div>
  </div>
);
const TechVisual = () => (
  <div className="w-full h-full flex items-center justify-center bg-gradient-to-b from-blue-500/5 to-transparent">
    <div className="p-3 rounded-full bg-blue-500/10 shadow-[0_0_30px_rgba(59,130,246,0.2)] border border-blue-500/20">
      <Code2 className="w-8 h-8 text-blue-200" />
    </div>
  </div>
);
const OpsVisual = () => (
  <div className="w-full h-full flex items-center justify-center bg-gradient-to-b from-orange-500/5 to-transparent">
    <div className="p-3 rounded-full bg-orange-500/10 shadow-[0_0_30px_rgba(249,115,22,0.2)] border border-orange-500/20">
      <Settings className="w-8 h-8 text-orange-200" />
    </div>
  </div>
);
const DataVisual = () => (
  <div className="w-full h-full flex items-center justify-center bg-gradient-to-b from-green-500/5 to-transparent">
    <div className="p-3 rounded-full bg-green-500/10 shadow-[0_0_30px_rgba(34,197,94,0.2)] border border-green-500/20">
      <Database className="w-8 h-8 text-green-200" />
    </div>
  </div>
);
const DesignVisual = () => (
  <div className="w-full h-full flex items-center justify-center bg-gradient-to-b from-pink-500/5 to-transparent">
    <div className="p-3 rounded-full bg-pink-500/10 shadow-[0_0_30px_rgba(236,72,153,0.2)] border border-pink-500/20">
      <LayoutTemplate className="w-8 h-8 text-pink-200" />
    </div>
  </div>
);

// --- Data ---
const skillCategories = [
  {
    id: "strategy",
    title: "Product Strategy",
    role: "The Brain",
    description: "Turning ambiguity into clear roadmaps.",
    tags: ["Discovery", "Roadmapping"],
    visual: <StrategyVisual />,
    className: "md:col-span-1",
    details: {
      philosophy: "Strategy without execution is hallucination.",
      frameworks: [{ name: "Opportunity Tree", desc: "Outcomes > Features" }, { name: "RICE Scoring", desc: "Prioritization" }],
      insight: "I use these frameworks to defend 'No' as much as to justify 'Yes'.",
      masteryLevel: 95,
      tools: ["Productboard", "Miro"]
    }
  },
  {
    id: "tech",
    title: "Tech Literacy",
    role: "The Hands",
    description: "Prototyping to validate feasibility.",
    tags: ["React", "AI Engineering"],
    visual: <TechVisual />,
    className: "md:col-span-1",
    details: {
      philosophy: "Know enough to challenge estimates.",
      frameworks: [{ name: "Rapid Prototyping", desc: "Throwaway MVPs" }, { name: "Prompt Eng.", desc: "LLM Context" }],
      insight: "My ability to read code means I don't need a translator for dev teams.",
      masteryLevel: 75,
      tools: ["VS Code", "Lovable"]
    }
  },
  {
    id: "ops",
    title: "Ops Excellence",
    role: "The Backbone",
    description: "Optimizing the build machine.",
    tags: ["Process Design", "Agile"],
    visual: <OpsVisual />,
    className: "md:col-span-1",
    details: {
      philosophy: "Good ops makes the right thing easy.",
      frameworks: [{ name: "Six Sigma", desc: "Removing waste" }, { name: "SLA Definition", desc: "Clear expectations" }],
      insight: "Process should be a guardrail, not a gate.",
      masteryLevel: 90,
      tools: ["Linear", "Excel"]
    }
  },
  {
    id: "data",
    title: "Data & Analytics",
    description: "Measuring Impact.",
    tags: ["SQL Basics", "KPIs"],
    visual: <DataVisual />,
    className: "md:col-span-1",
    role: "The Compass",
    details: {
      philosophy: "Data aims the gun; intuition pulls the trigger.",
      frameworks: [{ name: "North Star", desc: "Single value metric" }, { name: "Funnel Ops", desc: "Fixing drop-offs" }],
      insight: "Focus on leading indicators (usage) over lagging ones (revenue).",
      masteryLevel: 80,
      tools: ["Mixpanel", "Tableau"]
    }
  },
  {
    id: "design",
    title: "Design & UX",
    description: "User Centricity.",
    tags: ["Figma", "User Journey"],
    visual: <DesignVisual />,
    role: "The Empathy",
    className: "md:col-span-2",
    details: {
      philosophy: "I fight for the user's perspective.",
      frameworks: [{ name: "Jobs to be Done", desc: "Intent focus" }, { name: "Heuristic Eval", desc: "Usability audit" }],
      insight: "A pretty UI that solves the wrong problem is still a failure.",
      masteryLevel: 85,
      tools: ["Figma", "Maze"]
    }
  }
];

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState<typeof skillCategories[0] | null>(null);

  return (
    <section id="skills" className="py-20 md:py-32 px-4 md:px-6 bg-[#030303] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-
