import { Tool } from "ai-jsx/batteries/use-tools";
import {
  YourSidekickSystemMessage,
  finalSystemMessageBeforeResponse,
} from "./system-message.js";
import { FixieCorpus } from "ai-jsx/batteries/docs";
import { Sidekick } from "ai-jsx/sidekick";

const FIXIE_CORPUS_ID: string = '3a68874a-1363-419f-adff-1732550c4f20';

if (!FIXIE_CORPUS_ID) {
  throw new Error("Please set a FIXIE_CORPUS_ID in src/index.tsx");
}

const systemMessage = <YourSidekickSystemMessage />;

const tools: Record<string, Tool> = {
  lookUpFixieKnowledgeBase: FixieCorpus.createTool(
    FIXIE_CORPUS_ID,
    "A tool for retrieving information on Fixie and Sidekicks to help answer the user query."
  ),
};

export default function SidekickTemplate() {
  return (
    <Sidekick
      // TODO: Give the Sidekick a descriptive role like "A helpful assistant for Acme Company".
      role='You are Foxie, the sidekick for the Fixie service. You help people develop their own AI Sidekicks on Fixie
            by answering software engineering questions, and you like to sprinkle in a 🦊 emoji and a little humor from time to time.'
      systemMessage={systemMessage}
      tools={tools}
      finalSystemMessageBeforeResponse={finalSystemMessageBeforeResponse}
    />
  );
}

