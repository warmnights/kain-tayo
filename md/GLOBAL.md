# GLOBAL.md: Global CSS Reference

This is my global CSS (`css/style.css`). It applies to every page. When cleaning up a page's stylesheet, treat everything below as **already set** and as the **source of truth**.

## How to use this file

- A declaration in a page stylesheet is a **duplicate** if it sets the same property to the same value that is already set here (directly or through inheritance) on that element.
- A hard-coded value (hex, rgb, rgba, repeated shadow, a border radius that matches a `--radius-*` variable) that matches a variable in `:root` should use the variable instead.
- A page stylesheet may **override** a global value with a different one. That is not a duplicate, so keep it.

## Page structure (every page)

- Every page wraps **all** its content in one `<div class="container">`: the skip link, the site header, `<main>` and the footer. The container sets the global max width. Page sections should not set their own `max-width` or `margin: 0 auto` for the page width. A narrower reading width inside a section (for example `max-width: 700px; margin: 0 auto` on centered text) is fine.
- Pages live in the `pages/` folder, so they use `../` to reach the root: `../css/style.css`, `../js/nav.js`, `../assets/...`, `../index.html`. Links to other pages need no prefix (`near-me.html`).
- The site header is the same on every page (copy it from `top-foods.html` and move `aria-current="page"` to the current link). It is `<header class="site-header">`, a direct child of `.container`, and it holds `<nav class="site-nav full-bleed">`. When the current page is in the More menu, the More button highlights by itself (CSS `:has()`), so no extra class is needed. The footer is `<footer class="footer full-bleed">`.
- A section whose background must span the full screen gets the class `full-bleed` in the HTML (for example `<section class="near-spots full-bleed">`). In the page stylesheet, do **not** repeat `width: 100vw`, `margin-left: calc(50% - 50vw)` or the side padding. Set the side gutter with `--gutter-x` and the top and bottom spacing with `padding-block`. The gutter defaults to `4%`.
- Add `class="list-reset"` to every `<ul>` that should have no bullets and no left padding (site nav links, the More menu, footer lists, link lists). `.list-reset` does **not** reset margin; set `margin: 0` on the list if you need it.

## What is already set globally

- `box-sizing: border-box` on everything.
- `body`: text color `var(--color-text)`, background `var(--color-background)`, `font-family: var(--font-body)`, `font-size: 1rem`, `line-height: 1.7`, `margin: 0`, `overflow-x: clip`.
- `h1` to `h4`: `margin: 0 0 0.5rem`, color `var(--color-heading)`, `font-family: var(--font-heading)`, `font-weight: 700`, `line-height: 1.1`.
- `h2`: `font-size: clamp(1.75rem, 4vw, 2.5rem)`. `h3`: `font-size: 1.25rem`.
- `a`: `color: inherit`, `text-decoration: none`.
- `img, svg`: `display: block`, `max-width: 100%`, `height: auto`.
- `input, button`: `font-family: inherit`.
- `:focus-visible`: 3px solid `var(--color-primary)` outline with 3px offset.
- `.container`, `.full-bleed`, `.list-reset`, `.section-eyebrow`, `.skip-link`.
- `html`: smooth scrolling, and `scroll-padding-top: var(--site-nav-height)`.
- Border radius variables: `--radius-sm` (8px: buttons, menus), `--radius-md` (12px: cards), `--radius-lg` (16px: large cards and images), `--radius-pill` (999px: tags and pills). Use them instead of pixel values.
- Site header and nav (`.site-header`, `.site-nav`, `.site-nav-logo`, `.site-nav-toggle`, `.site-nav-links`, `.site-nav-dropdown`, `.site-nav-dropdown-menu`, `.site-nav-actions`, `.site-nav-cta`): fully styled in `style.css`, including the hamburger menu below 1080px (`nav.js` adds and removes `.is-open`). Page stylesheets do not restyle it. `.site-header` is sticky with `z-index: 10`, and the More menu is `z-index: 11`. The bar is 88px tall, or 69px up to 1080px.
- Footer (`.footer`, `.footer-main`, `.footer-logo`, `.footer-brand`, `.footer-brand-tagline`, `.footer-links`, `.footer-about`, `.footer-explore-link`, `.footer-bottom`, `.footer-legal`): fully styled in `style.css`. `.footer-container` has no styles.
- `.restaurant-preview-notice` and its `p` are styled in `style.css` (used on the home page and on Near Me).

## Font faces

```css
@font-face {
    font-family: 'Fraunces';
    src: url('../assets/fonts/Fraunces_72pt-Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Fraunces';
    src: url('../assets/fonts/Fraunces_72pt-SemiBold.ttf') format('truetype');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Fraunces';
    src: url('../assets/fonts/Fraunces_72pt-Bold.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Poppins';
    src: url('../assets/fonts/Poppins-Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Poppins';
    src: url('../assets/fonts/Poppins-Italic.ttf') format('truetype');
    font-weight: 400;
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: 'Poppins';
    src: url('../assets/fonts/Poppins-SemiBold.ttf') format('truetype');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Poppins';
    src: url('../assets/fonts/Poppins-Bold.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
}
```

## Variables

```css
/*


    VARIABLES


*/


:root {
    --font-heading: 'Fraunces', Georgia, serif;
    --font-body: 'Poppins', system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;

    --color-background: #3D0A0F;
    --color-background-secondary: #5E0B15;
    --color-surface: #4A0D14;

    --color-text: #F7EFE0;
    --color-text-muted: #F7EFE09E;
    --color-heading: #EDBB62;

    --color-primary: #EDBB62;
    --color-secondary: #C98A5A;
    --color-accent: #B85C38;

    --color-border: rgba(237, 187, 98, 0.25);

    --color-white: #FFFFFF;
    --color-black: #000000;

    --shadow-card: 0 8px 24px rgba(0, 0, 0, 0.35);

    --radius-sm: 8px;
    --radius-md: 12px;
    --radius-lg: 16px;
    --radius-pill: 999px;

    --container-width: 1400px;
    --site-nav-height: 88px;
    --gutter: clamp(16px, 4vw, 32px);
}
```

## Global styles and utilities

```css
/*


    GLOBAL


*/


*,
*::before,
*::after {
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
    scroll-padding-top: var(--site-nav-height);

    -webkit-text-size-adjust: 100%;
}

body {
    overflow-x: clip;

    min-height: 100vh;
    margin: 0;

    color: var(--color-text);
    background-color: var(--color-background);

    font-family: var(--font-body);
    font-size: 1rem;
    line-height: 1.7;
    -webkit-font-smoothing: antialiased;
}

img,
svg {
    display: block;

    max-width: 100%;
    height: auto;
}

a {
    color: inherit;

    text-decoration: none;
}

input,
button {
    font-family: inherit;
}

h1,
h2,
h3,
h4 {
    margin: 0 0 0.5rem;

    color: var(--color-heading);

    font-family: var(--font-heading);
    font-weight: 700;
    line-height: 1.1;
}

h2 {
    font-size: clamp(1.75rem, 4vw, 2.5rem);
}

h3 {
    font-size: 1.25rem;
}

:focus-visible {
    outline: 3px solid var(--color-primary);
    outline-offset: 3px;
}

.container {
    max-width: var(--container-width);
    margin: 0 auto;
}

/*

    Set the side gutter with --gutter-x and use padding-block for top/bottom.

*/

.full-bleed {
    --gutter-x: 4%;

    width: 100vw;
    margin-left: calc(50% - 50vw);
    padding-inline: calc((100vw - 100%) / 2 + var(--gutter-x));
}

.list-reset {
    list-style: none;

    padding: 0;
}
```

## Shared section styles

```css
.section-eyebrow {
    display: block;

    margin-bottom: 0.75rem;

    color: var(--color-accent);

    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 2px;
}
```

## Skip link

```css
/*


    SKIP LINK


*/


.skip-link {
    position: fixed;
    top: 0.75rem;
    left: 0.75rem;
    z-index: 9999;

    padding: 0.75rem 1.25rem;
    border-radius: var(--radius-sm);

    color: var(--color-primary);
    background-color: var(--color-background);

    font-size: 0.9rem;
    font-weight: 600;

    transform: translateY(-200%);
}

.skip-link:focus {
    transform: translateY(0.25rem);
}
```

## Using `.full-bleed`

Add the class to the element in the HTML, then set only the gutter and the vertical spacing in the page stylesheet. The gutter defaults to `4%`, so leave `--gutter-x` out when `4%` is what you want.

```css
.hero {
    --gutter-x: 1.5rem;

    padding-block: 3rem 5rem;
}

@media (max-width: 480px) {
    .hero {
        --gutter-x: 1.25rem;
    }
}
```