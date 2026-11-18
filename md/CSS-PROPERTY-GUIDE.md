# CSS Property Order Guide

Group properties and leave **one blank line between groups**.

Rule of thumb: **where it sits > how big it is > what it looks like > how it behaves.**

## The six groups, in order

| # | Group | Properties |
|---|---|---|
| 1 | **Position** (where it sits) | `position`, `top`, `right`, `bottom`, `left`, `inset`, `z-index` |
| 2 | **Display and layout** (how children are arranged) | `display`, `flex-direction`, `flex-wrap`, `justify-content`, `align-items`, `gap`, `grid-template-columns`, `grid-template-rows`, `flex`, `order`, `align-self`, `overflow` |
| 3 | **Box model** (size, spacing, border) | `width`, `min-width`, `max-width`, `height`, `min-height`, `max-height`, `aspect-ratio`, `margin`, `padding`, `box-sizing`, `border`, `border-radius` |
| 4 | **Colors and visuals** (how it looks) | `color`, `background`, `background-color`, `background-image`, `background-size`, `background-position`, `box-shadow`, `opacity`, `filter`, `object-fit` |
| 5 | **Typography** (text) | `font-family`, `font-size`, `font-weight`, `font-style`, `line-height`, `letter-spacing`, `text-align`, `text-transform`, `text-decoration`, `white-space` |
| 6 | **Effects and motion** (how it behaves) | `cursor`, `transition`, `transform`, `animation`, `pointer-events` |

## Example

```css
.card {
    position: relative;

    display: flex;
    gap: 1rem;

    width: 100%;
    padding: 1.5rem;
    border-radius: 12px;

    color: #fff;
    background-color: #000;

    font-size: 1rem;
    line-height: 1.6;

    transition: transform .2s;
}
```

## Order of rules in a file

1. Base selector (`.card`)
2. `:hover`
3. `:focus-visible`
4. Child selectors (`.card__title`)
5. Media queries last

## Reminders

- Colors need a `#`: `color: #fff;`, not `color: fff;`.
- Some properties fit two groups (for example `border` and `border-color`). Pick one place and stay consistent.
- Group order goes from the outside in: layout first, then size, then looks, then text, then motion.