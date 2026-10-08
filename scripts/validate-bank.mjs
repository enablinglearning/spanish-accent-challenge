// Validates services/wordBank.ts against the game's click logic (components/SentenceDisplay.tsx).
// Runs before every build; a failure blocks the deploy.
// It cannot judge Spanish: a word that needs a tilde but is missing from wordsToAccent
// still needs a human (or expert) review.
import { readFileSync } from 'node:fs';
import vm from 'node:vm';

const EXPECTED_ROUNDS = 60; // 6 levels x 10 sentences (App.tsx)
const ACCENTED = { a: 'á', e: 'é', i: 'í', o: 'ó', u: 'ú', A: 'Á', E: 'É', I: 'Í', O: 'Ó', U: 'Ú' };
const VOWELS = 'aeiouAEIOU';
const TOKEN = /^([¿¡]*)(.*?)([.,;?!]*)$/; // same regex as SentenceDisplay.tsx
const LETTERS = /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü]+$/;
const strip = s => s.normalize('NFD').replace(/́/g, '').normalize('NFC');

const src = readFileSync(new URL('../services/wordBank.ts', import.meta.url), 'utf8')
  .replace(/^import .*$/m, '')
  .replace(/export const wordBank\s*:\s*GameRound\[\]\s*=/, 'globalThis.wordBank =');
const ctx = {};
vm.runInNewContext(src, ctx);
const bank = ctx.wordBank;

const errors = [];
if (bank.length !== EXPECTED_ROUNDS) errors.push(`bank has ${bank.length} rounds, expected ${EXPECTED_ROUNDS} (max score depends on it)`);
const seen = new Set();
bank.forEach((r, i) => {
  const where = `#${i} "${r.sentence}"`;
  if (seen.has(r.sentence)) errors.push(`${where}: duplicate sentence`);
  seen.add(r.sentence);
  if (!r.explanation?.trim()) errors.push(`${where}: empty explanation`);
  if (!r.wordsToAccent?.length) errors.push(`${where}: no target words`);
  const tokens = r.sentence.split(' ').map(w => w.match(TOKEN)[2]);
  tokens.forEach(t => { if (!LETTERS.test(t)) errors.push(`${where}: token "${t}" has punctuation or spacing the game cannot handle`); });
  const targets = r.wordsToAccent.map(w => w.withoutAccent.toLowerCase());
  if (new Set(targets).size !== targets.length) errors.push(`${where}: duplicate target words (round can never be completed)`);
  r.wordsToAccent.forEach(({ withAccent, withoutAccent }) => {
    if (strip(withAccent) !== withoutAccent) errors.push(`${where}: "${withAccent}" without its tilde is not "${withoutAccent}"`);
    if ([...withAccent].filter(c => 'áéíóúÁÉÍÓÚ'.includes(c)).length !== 1) errors.push(`${where}: "${withAccent}" must have exactly one tilde`);
    const hits = tokens.filter(t => t.toLowerCase() === withoutAccent.toLowerCase());
    if (hits.length !== 1) errors.push(`${where}: "${withoutAccent}" appears ${hits.length} times in the sentence (must be exactly 1)`);
    hits.forEach(t => {
      if (t !== withoutAccent) errors.push(`${where}: sentence has "${t}" but key says "${withoutAccent}" (capitalization must match)`);
      const reachable = [...t].some((c, ci) => VOWELS.includes(c) &&
        [...t].map((x, k) => (k === ci ? ACCENTED[x] : x)).join('').toLowerCase() === withAccent.toLowerCase());
      if (!reachable) errors.push(`${where}: clicking a vowel in "${t}" can never produce "${withAccent}"`);
    });
    if (/[áéíóúÁÉÍÓÚ]/.test(withoutAccent)) errors.push(`${where}: withoutAccent "${withoutAccent}" still has a tilde`);
  });
});

if (errors.length) {
  console.error(`Word bank validation FAILED (${errors.length}):\n- ` + errors.join('\n- '));
  process.exit(1);
}
console.log(`Word bank OK: ${bank.length} rounds, every target word is clickable and every correct answer is accepted.`);
