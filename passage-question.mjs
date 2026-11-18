import { line } from './dialogue-data.mjs';

export function passageQuestion(id, title, lines, prompt, choices, answer, evidence, explanation) {
  return { id, title, passage: lines.map(line), prompt, choices, answer, evidence, explanation };
}
