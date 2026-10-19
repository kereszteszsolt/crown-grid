# CrownGrid testing and verification

## Current automated checks

Release 0.2 adds a focused Vitest suite for empty state initialization and optimizer finite-result behavior. The required repository checks are:

```bash
npm ci
npm test
npm run build
```

The GitHub Actions workflow runs the tests before the production build on pushes and pull requests. This is focused coverage, not a broad application or browser test suite; the repository still has no lint script.

## Development smoke check

```bash
npm run dev
```

Open `http://localhost:5173/crown-grid/` and complete the checks below.

## Manual smoke matrix

### Navigation and identity

- Home, Queens, and About routes load without a full-page error.
- The navigation and Home hero display `CrownGrid`.
- The browser title and favicon use CrownGrid identity.
- Unknown application routes redirect to Home under the configured base path.
- GitHub links point to `kereszteszsolt/crown-grid`.

### Generation

- Generate at least one small board, such as `4×4` with a target of `10` solutions.
- Generate at least one medium board, such as `8×8` with a target of `5` solutions.
- Confirm progress values are readable and the generated board reports a finite solution count.
- Confirm generation success shows **Start Game** and keeps the board non-interactive until selected.
- Confirm generation failure leaves the timer stopped and exposes **New Game** so the selector can be reopened for retry.

### Player interaction

- Single click/tap adds and removes `X` marks.
- Double click/tap places a queen and creates automatic marks.
- Removing that queen removes only marks associated with its placement.
- Dragging paints or erases marks without creating duplicate history entries for every traversed cell.
- Undo, Clear Board, Reset Game, and Shuffle Colors behave as labelled. Check both Replay entry points separately; each must clear the board, reset the timer, and restart play.
- Input is blocked before Start Game.

### Rule feedback

- Two queens in one row highlight a conflict.
- Two queens in one column highlight a conflict.
- Two queens in one color region highlight a conflict.
- Corner-adjacent queens highlight a conflict.
- A valid completed placement stops the timer and opens the win modal.

### Responsive and contact behavior

- Test desktop and a mobile viewport near `390px` width.
- Navigation remains usable and the board does not create page-level horizontal overflow.
- About contact cards retain their correct GitHub, email, and website targets.
- The email target is assembled at runtime from fragments; no full email address is added to README, the user guide, or other Markdown documentation.

## Algorithm-focused evidence for future changes

Future focused suites should continue expanding pure-utility coverage:

- generated queen placement has one queen per row and column and no corner adjacency;
- region fill produces `N` valid connected colors;
- solution counting respects an early-stop limit;
- optimizer improvements, time-limit paths, and invalid input beyond the existing initial-target, zero-iteration, and finite-progress cases;
- invalid typed-array lengths and invalid regions fail clearly.

## CG-005 verification record — 2026-08-24

- Vitest `4.1.11`: 2 files, 5 tests passed with `npm test`.
- Production build: Vite `7.3.6`, 92 modules transformed with `npm run build`.
- Chromium `1.62.1` desktop and `390×844` scripted smoke completed the navigation, responsive, pointer/touch, timer, replay, win, error/retry, and contact paths above.
- An `8×8` listener-instrumented run observed one board `touchmove` registration and one matching unmount removal; a `390×844` real touch sequence painted two traversed cells.
- The browser harness was temporary and is not a checked-in end-to-end suite. This manual matrix remains the repeatable repository procedure.

## 2026-10-19 — About, attribution and functional consumer names

The maintainer approved this change for ClearField, CrownGrid, PointFlip and TypeNudge. The repository-root `brand/` remains the editable JSON/artwork input. Consumers use app-info, About, link-icon and author-attribution names; configuration guides use `app-configuration.md`. Source catalogs, artwork, legal licenses and stable storage/package IDs were compared with the task-start SHA-256 snapshot and preserved. Pre-existing unrelated pending work remains intact. No commit or push was requested.

The native About dialog displays configured identity/description, local poster when configured, author/project links, coffee/support actions and the voluntary-support notice. Tooltips expose the full destination and ordered `hu | en | ro | de` language list, fit narrow screens and keep a stable accessible name. Copyright uses the current year and configured author; the application determines its legal license independently. Footer attribution keeps the website on a separate line. Support actions remain in About. Existing detailed About routes remain accessible in CrownGrid/PointFlip. Current game/editor/room state is preserved when opening the modal.

There is no application Docker stack in these four repositories. PointFlip's existing one-shot validation containers publish no host ports and now explicitly use `--restart=no`. The policy in each `AGENTS.md` requires future published host ports to bind only to `127.0.0.1`, above 33000, with the next available multiple-of-ten allocation, and manual-only restart behavior. Temporary browser previews used only loopback 33110/33120/33130 with restart policy `no`; they were stopped after verification. Existing AI-app services were not redeployed.

`npm run build` passed and `npm test` passed all 5 existing tests. Three real Chromium contexts (1440px, 390px dark preference and 320px) verified the navbar popup from Queens, original poster/icon, Apache-2.0 footer, complete website language/URL tooltip, native keyboard/close/backdrop dismissal, focus restoration, and viewport bounds. The original detailed privacy/contact/credits screen, including fragmented email assembly, is retained. No algorithm, timer or pointer-handling change was made. Source catalogs/artwork and existing PNG captures were preserved. New About captures, build/test logs and the final source audit are local to `/tmp/four-app-about/`; public deployment and other browser engines were not tested.
