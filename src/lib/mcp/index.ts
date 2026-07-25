import { auth, defineMcp } from "@lovable.dev/mcp-js";
import getProfileTool from "./tools/get-profile";
import listExperienceTool from "./tools/list-experience";
import listSkillsTool from "./tools/list-skills";
import listProjectsTool from "./tools/list-projects";
import getContactTool from "./tools/get-contact";

// The OAuth issuer must be the direct Supabase host, built from the project ref
// (Vite inlines this as a literal at build time, so the module stays import-safe).
const projectRef = import.meta.env.VITE_SUPABASE_PROJECT_ID ?? "project-ref-unset";

export default defineMcp({
  name: "sanket-tamboli-portfolio",
  title: "Sanket Tamboli — Portfolio",
  version: "0.1.0",
  instructions:
    "Tools for Sanket Tamboli's product-management portfolio. Use `get_profile` for positioning and summary, `list_experience` for the work timeline, `list_skills` for competency clusters, `list_projects` for case studies, and `get_contact` for reaching out.",
  auth: auth.oauth.issuer({
    issuer: `https://${projectRef}.supabase.co/auth/v1`,
    acceptedAudiences: "authenticated",
  }),
  tools: [
    getProfileTool,
    listExperienceTool,
    listSkillsTool,
    listProjectsTool,
    getContactTool,
  ],
});
