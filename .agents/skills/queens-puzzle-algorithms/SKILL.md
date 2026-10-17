---
name: queens-puzzle-algorithms
description: Use when changing CrownGrid pure TypeScript generation, connected regions, backtracking/counting, optimization, typed-array safety or performance.
---

# Puzzle algorithms and bounded search

- Read the affected utility, its focused tests, and `docs/puzzle-generation.md` for the authoritative rules.
- Keep generation and counting pure, independent of Vue and DOM; guard typed-array lengths, region indices, and board-size limits.
- Preserve one queen per row/column/region, no corner-adjacent queens, orthogonally connected regions and at least one valid solution.
- Use bounded solution counting when only an upper limit is needed; return finite best scores, truthful stop reasons, and copies rather than mutable aliases.
- Test seed/initial solution, no improvement, accepted improvement, timeout, invalid input, and small/large board cases as relevant.
- Keep performance changes from silently changing puzzle rules. Run focused Vitest (`npm test`) and report measured sizes/time only if actually observed.
