import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { skills } from "../portfolio";

export default defineTool({
  name: "list_skills",
  title: "List skills and expertise",
  description:
    "List competency clusters (product & delivery, operations, data, tools) with frameworks and tooling.",
  inputSchema: {
    category: z
      .string()
      .optional()
      .describe("Optional cluster id or title fragment to filter by, e.g. 'data'."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ category }) => {
    const needle = category?.trim().toLowerCase();
    const clusters = needle
      ? skills.filter(
          (s) => s.id.includes(needle) || s.title.toLowerCase().includes(needle),
        )
      : skills;
    return {
      content: [{ type: "text", text: JSON.stringify(clusters, null, 2) }],
      structuredContent: { clusters },
    };
  },
});
