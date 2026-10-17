---
name: accessibility-responsive-ui
description: Use for CrownGrid Vue keyboard/pointer/touch interactions, focus, ARIA, modals, responsive layouts and status feedback.
---

# Accessible and responsive Vue UI

1. Inspect the affected Vue template, event ownership and current focus behavior; do not redesign unrelated screens.
2. Use semantic buttons/links, meaningful labels, visible focus and disabled states; do not communicate state only through color.
3. Prevent duplicate pointer/touch listeners, unexpected long-press actions, focus leaks and timers left alive after reset/unmount.
4. Verify dialogs' keyboard handling and Escape/focus restoration when touched.
5. Check mobile widths (around 390px), browser zoom and the deployed Vite base for affected routes.
6. Use `npm run build` plus relevant manual browser verification; record what was and was not tested.
