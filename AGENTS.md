# CrownGrid Codex engineering guide

CrownGrid is a static **Vue 3 / TypeScript / Vite** Queens puzzle application. There is no backend or database. Release 0.1 and narrowly scoped 0.2 hardening have been implemented; do not reopen them without a new request.

## Read progressively

1. Read this file and the active `CG-*` story if one exists; otherwise read the requested bug/task.
2. Inspect the affected Vue feature or pure algorithm utility and its tests. Read `docs/architecture.md`, `docs/puzzle-generation.md`, or `docs/testing.md` only if that topic is affected.
3. Load only the relevant skill; no automatic agent pipeline or full-repository context preload.

## Technical boundaries

- Vue Router owns navigation; `src/features/queens/screens/QueensScreen.vue` coordinates the game UI. Components accept props/emit events, composables own reactive state and timers, and pure TS utilities own generation/solver/optimizer code.
- Puzzle generation is browser-only; maintain typed-array safety, bounded search and finite progress. The precise puzzle-rule invariants live in `docs/puzzle-generation.md` and the algorithm skill, not copied into every story.
- Keep pointer/touch/keyboard listeners owned and disposed once; protect timer, replay and generation-error state transitions.
- Keep routing consistent with the Vite/GitHub Pages base; no backend, persistence system or state management package without a separately approved scope.
- Preserve the privacy-conscious fragmented contact-email assembly and do not expose the full address in public Markdown. See `docs/privacy-and-contact.md`.

## On-demand skills and roles

| Skill | Use for |
| --- | --- |
| `vue-feature-delivery` | Vue screens, composables, typed interactions, routing, Vite |
| `queens-puzzle-algorithms` | Pure puzzle generation, backtracking, bounded optimizer, performance |
| `accessibility-responsive-ui` | Focus, keyboard/touch/pointer, responsive layout and ARIA |
| `release-evidence` | Story evidence, verification, repo/README links and release claims |

**Default:** the main Codex session handles one approved change without delegation. The existing `architect` and `algorithm_reviewer` are optional read-only specialists for truly cross-boundary/algorithm-risk changes; `reviewer` optionally checks a risky diff; `implementation_worker` is the **only writer** if work is delegated. Do not spawn all roles or duplicate reviews. At most two active threads, only one writer.

## Delivery and verification

- State one task/story, affected paths, possible risks and focused checks; request implementation approval.
- Keep the change small; run `npm test` for algorithms and `npm run build` for app changes. Follow `docs/testing.md` for manual UI/browser verification; there is currently no broad automated E2E suite.
- Report exact commands and observations; keep planned work distinct from implemented release evidence. Propose the diff/commit separately; no unapproved commit, push or next story.

New handwritten source files use the existing two-line Apache-2.0 SPDX notice (`2026 Keresztes Zsolt <https://kereszteszsolt.hu>`). Do not add headers to Markdown, JSON, YAML, TOML, lock files or generated assets.
