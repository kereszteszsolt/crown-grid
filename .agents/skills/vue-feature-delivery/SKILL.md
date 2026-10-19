---
name: vue-feature-delivery
description: Use for CrownGrid Vue 3 screens, reactive composables, typed component events, Vue Router, Vite base paths or frontend build changes.
---

# Vue / Vite feature delivery

1. Read only the active task, the involved component or composable, and tests; load `docs/architecture.md` only if data flow changes.
2. Keep Vue components focused on rendering and typed events; composables own timers, interaction state and cleanup; solver/generator utilities remain UI-independent.
3. Keep route history, links and assets compatible with `import.meta.env.BASE_URL` and the configured Vite deployment base.
4. Register listeners and timers once; dispose exactly those resources; cover loading, aborted, failed and replayed states.
5. Prefer existing Vue primitives and TypeScript types over a new state library or helper layer.
6. Run `npm test` for impacted logic and `npm run build` for app changes; add targeted browser checks from `docs/testing.md` when UI behavior changes. Report results and limitations, not assumed passes.
