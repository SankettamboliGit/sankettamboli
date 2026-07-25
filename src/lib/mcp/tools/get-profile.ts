import { defineTool } from "@lovable.dev/mcp-js";
import { profile } from "../portfolio";

export default defineTool({
  name: "get_profile",
  title: "Get profile",
  description:
    "Get Sanket Tamboli's professional profile: current role, positioning, summary, certifications, and resume link.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(profile, null, 2) }],
    structuredContent: { profile },
  }),
});
