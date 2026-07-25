# docs — how to use the system

The design system is one idea applied without exception: **Zoo is loud — a bold
six-color palette (yellow, magenta, cyan, green, red, blue), each an equal voice
against a near-black ground.** Color is the point, not a signal held in reserve.
Everything else is machinery in service of that idea.

If you remember one thing: **import one file, then reach for a token instead of a
literal.** Do that and your surface is already 90% on-brand.

```css
@import "@zooai/design/styles.css";
```

## The map

| You want | Go to |
|----------|-------|
| To wire the tokens into an app | [`integrate.md`](integrate.md) |
| The raw values (color, type, space, radius, motion, z, elevation) | [`../tokens/`](../tokens/) |
| A component and how to use it | [`../components/`](../components/) + its `*.prompt.md` |
| To *see* a rule rendered | [`../guidelines/`](../guidelines/) specimen cards |
| An AI to generate an on-brand screen | [`../prompts/`](../prompts/) |
| The words — voice, taglines | [`../content/`](../content/) |
| The mark, wordmark, logos | [`../assets/`](../assets/) |

## Why it is built this way

- **One import.** A single `styles.css` pulls the whole token layer in a fixed
  order. There is no partial setup to get wrong.
- **Tokens, not literals.** Every value is a CSS custom property whose name
  matches zoo.ngo's own variables. Code copies between the app and this system
  1:1, because they speak the same names.
- **Dark by construction.** Surfaces mount dark. Light is a `.light` override for
  the few brand and docs pages that need it.
- **Opacity is the palette.** One neutral ladder plus an opacity ladder is the
  entire non-semantic color system. Rank reads as opacity. This is why Zoo
  looks like Zoo and not like a theme.
- **The parts are self-contained.** Components carry their own inline styles, so
  one drops into Next, Vite, Tamagui, or nothing and renders identically.

## The one rule that overrides the rest

When a decision is unclear, return to the atom. Monochrome, true black, white
type. If the work reinforces it, keep the work. If it doesn't, change the work.
