# CrownGrid app configuration

The canonical metadata and artwork catalog is [`brand/branding.json`](../brand/branding.json); see the [shared contract](../brand/README.md). Application styles remain in the existing design tokens. The UI imports the JSON at build time through its `app-info.ts` adapter; local artwork is bundled by Vite.

## Canonical identity

| Purpose | Value |
| --- | --- |
| Product name | `CrownGrid` |
| Product descriptor | `Queens Puzzle Generator & Game` |
| Tagline | `Generate. Place. Solve.` |
| Repository | `crown-grid` |
| npm package | `crown-grid` |
| GitHub Pages base | `/crown-grid/` |
| Story prefix | `CG-` |
| Maintainer | Keresztes Zsolt |
| Maintainer website | `kereszteszsolt.hu` |

Use `CrownGrid` as one word in display copy. Use `crown-grid` for repository, package, URL-path, and other kebab-case technical identifiers.

## Product mark

`brand/assets/favicon.svg` holds the shared compact mark, copied from the served `public/favicon.svg`: a light crown over a subtle grid on the existing coral accent. It is designed to remain recognizable at small browser-tab sizes without depending on an external font.

```mermaid
flowchart LR
    NAME[CrownGrid name] --> README[README and documentation]
    NAME --> UI[Navigation, Home and About]
    TECH[crown-grid identifier] --> PACKAGE[package and lock file]
    TECH --> VITE[Vite base path]
    MARK[SVG crown-grid mark] --> FAVICON[Browser favicon]
```

## Existing visual palette

Release 0.1 retains the application's current design tokens rather than introducing a redesign.

| Role | Value |
| --- | --- |
| Primary / favicon background | `#ff7f50` coral |
| Secondary | `#228b22` forest green |
| Tertiary | `#00bfff` deep sky blue |
| Neutral background | `#fffaf0` floral white |
| Error | `#ac1010` dark red |

Future palette changes must check board-color distinguishability, conflict patterns, contrast, and the favicon separately.

## Voice

- Prefer direct, factual language over claims such as unlimited or guaranteed instant generation.
- Describe the exact ruleset, especially corner adjacency rather than classic full-diagonal attacks.
- State performance limits honestly: large boards can require significant browser CPU time.
- Keep privacy language precise: state is ephemeral browser memory, not persistent local storage.

## Contact and support rule

README and the user guide publish the maintainer website and GitHub profile, but no email address. The About screen retains fragment-based runtime email construction. A future implementation may improve how the email card is targeted, but must not replace the fragments with a plain address in public documentation.

## Rename checklist

If the repository name changes:

1. update package and lock metadata;
2. update the Vite base and GitHub Pages URL;
3. update README, support, source, issue, and release links;
4. preserve `CG-` story history unless a deliberate migration is documented;
5. preserve puzzle behavior and runtime contact privacy independently from display branding;
6. verify navigation and deep links from the production build.


## About and attribution

The navbar opens a native modal dialog without navigating away from the current game or room. The existing `/about` details route remains available. About uses the configured poster, description, author/project destinations, two support actions and voluntary-support notice. Links show descriptions and full destinations on focus/hover, with natural wrapping at narrow widths. Footer attribution shows the current year, author, Apache-2.0 license and author website. Metadata and artwork remain in the repository-root catalog; consumers use functional filenames.
