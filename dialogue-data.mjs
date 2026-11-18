// 대사 순서: 일본어 | 로마자 | 한국어
export const line = text => text.split('|');
export const turn = (prompt, hint, ...options) => ({ prompt: line(prompt), hint, options });
export const reply = (id, text, next, ...aliases) => ({ id, line: line(text), next, aliases });
export const finish = (id, text, ending, ...aliases) => ({ id, line: line(text), ending, aliases });
export const mismatch = (id, text, feedback) => ({ id, line: line(text), feedback });
