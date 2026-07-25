import { defineTool } from "@lovable.dev/mcp-js";
import { contact } from "../portfolio";

export default defineTool({
  name: "get_contact",
  title: "Get contact details",
  description:
    "Get contact details for Sanket Tamboli: email, phone, LinkedIn, and location.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(contact, null, 2) }],
    structuredContent: { contact },
  }),
});
