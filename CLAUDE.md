# CLAUDE.md

Guidance for working in this repository.

## Project

Personal portfolio site for Ean Seng Chang. A single-page React app (Create React
App) — one scrolling page composed of section components. No backend, no routing
beyond a `BrowserRouter` wrapper; navigation is in-page scroll via `react-scroll`.

## Commands

```bash
npm start            # dev server at http://localhost:3000
npm run build        # production build into build/
CI=true npm run build  # build with warnings treated as errors — use this to verify
npm test             # react-scripts test runner (no tests written yet)
```

Always sanity-check changes with `CI=true npm run build`: lint warnings (unused
vars, unnecessary escapes, etc.) fail the build, so this catches more than a plain
build.

## Structure & conventions

- **One folder per section** under `src/components/<Section>/`:
  - `index.js` — the component (default export).
  - `<Section>Elements.js` — all `styled-components` for that section (named exports).
  - `<Section>List.js` — for data-driven sections, an array of plain objects that
    `index.js` maps over (`projects`, `experiences`, `creativeProjects`). To add a
    project/experience/creative project, edit the relevant list file — don't touch JSX.
    Each item's `skills` array renders as pill tags (empty array = no tags). An experience
    item may set `incoming: true` to show an "Incoming" badge next to its title.
- `src/components/GlobalElements.js` / `ButtonElements.js` — shared styled-components.
- `src/colorScheme.js` — the `darkTheme` / `lightTheme` objects.
- `src/pages/index.js` — assembles all sections in order and provides the theme.
- Images live in `src/images/...` and are pulled in with `require(...)`. A `require`
  of a missing file fails the build, so don't reference an asset before it exists.

## Theming

- Theme is provided via `styled-components` `ThemeProvider` in `src/pages/index.js`,
  driven by `UserContext` (`src/contexts/User/`, a `useReducer` store with one action,
  `toggle_dark_theme`).
- Styled-components read theme values through props: `${({ theme }) => theme.fontColor}`.
- Both themes expose the same token set — prefer these over hard-coded colors so dark/light
  stay in sync: `fontColor`, `background`, `navColor` (semi-transparent; the Navbar adds
  `backdrop-filter` blur, so full-screen surfaces like the Sidebar use solid `background`),
  `colorOne`/`colorTwo`, `cardBg`, `muted` (secondary text), `border`, `accent`/`accentHover`
  (the green call-to-action color), and `shadow`.
- Both themes carry an `isDark` boolean — use `theme.isDark` for dark/light-conditional
  styles. **Do not** call hooks (`useContext`) inside styled-component interpolations.
- `ThemeToggle` (`src/components/ThemeToggle/`) is the single shared toggle used by both
  Navbar and Sidebar — don't re-implement the toggle markup.

## Patterns to follow

- Custom (non-DOM) styled-component props use the transient `$` prefix (e.g. `$primary`,
  `$dark`) so they aren't forwarded to the DOM.
- Repeated UI (nav links, social buttons) is rendered by mapping over a config array
  rather than copy-pasting blocks.
- Give `<img>` and `<Img>` elements meaningful `alt` text.
- Section components return a single root element — no unnecessary `<>...</>` wrappers.
- In-page scroll links (`react-scroll`) must match the shared params so navigation
  feels consistent: `offset={-80}` (cancels the 80px sticky navbar), `smooth={'easeOutQuad'}`,
  `duration={200}`. These appear in `Navbar`, `Sidebar`, and the Hero "About me" button —
  reuse the same values for any new link.

## Deployment & SEO

- Deployed as a static build, live at `https://eansengchang.com`.
- SEO and social-share metadata live in `public/index.html`: the `description`, the
  Open Graph (`og:*`) and Twitter card tags use **absolute** `https://eansengchang.com`
  URLs (required for link previews to render). If the domain or `og:image` changes,
  update every absolute URL in that file together.

## Stack

React 18, styled-components v5, react-icons, react-scroll, react-router-dom v6,
Create React App (react-scripts 5). Deployed as a static build.
