import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { projects } from "../portfolio";

export default defineTool({
  name: "list_projects",
  title: "List projects and case studies",
  description:
    "List portfolio projects with their case studies (problem, solution, outcome). Optionally filter by title or category.",
  inputSchema: {
    query: z
      .string()
      .optional()
      .describe("Optional text to match against project title, category, or tags."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ query }) => {
    const needle = query?.trim().toLowerCase();
    const items = needle
      ? projects.filter((p) =>
          [p.title, p.category, ...p.tags]
            .join(" ")
            .toLowerCase()
            .includes(needle),
        )
      : projects;
    return {
      content: [{ type: "text", text: JSON.stringify(items, null, 2) }],
      structuredContent: { projects: items },
    };
  },
});
