import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { experience } from "../portfolio";

export default defineTool({
  name: "list_experience",
  title: "List work experience",
  description:
    "List the work history timeline (role, company, period, description, focus areas). Optionally return only the current role.",
  inputSchema: {
    currentOnly: z
      .boolean()
      .optional()
      .describe("When true, return only the current role."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ currentOnly }) => {
    const roles = currentOnly ? experience.filter((e) => e.current) : experience;
    return {
      content: [{ type: "text", text: JSON.stringify(roles, null, 2) }],
      structuredContent: { roles },
    };
  },
});
