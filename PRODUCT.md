# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Recruiters evaluating Reina's work and professional background.

## Product Purpose

Reina Chen's personal portfolio introduces her, presents her projects, skills, and experience, and gives visitors a way to make contact.

## Positioning

The portfolio uses a floating storybook island as its central navigation metaphor. The star represents projects, the tree represents experience, the house represents skills, and the bridge represents contact.

## Operating Context

Visitors arrive in a desktop or mobile browser, orient themselves from the home view, and navigate the portfolio through the header and the island's story elements.

## Capabilities and Constraints

- React and Three.js render an optimized GLB island in the hero.
- Visitors can rotate and zoom the model by interacting with it; it does not rotate on its own.
- The requested experience view is a vertical timeline.
- Projects need selectable categories such as web development, mobile development, AI, data, and vibe coding.
- Skills and technology stacks need selectable categories as well.
- Detailed biography, project records, experience entries, and skills have not yet been provided. Do not invent credentials, outcomes, employers, project claims, or proficiency levels.
- Preserve responsive behavior, reduced-motion support, and accessible keyboard interaction.

## Brand Commitments

- The central world is a whimsical, crafted floating island inspired by the supplied fantasy village model.
- Keep the island's navigation meanings: star = projects, tree = experience, house = skills, bridge = contact.

## Evidence on Hand

- `public/models/fantasy-island.glb`: optimized floating-village model.
- `public/models/island-preview.webp`: lightweight preview asset; its current orientation does not match the requested starting view, so do not show it as a loading stand-in until replaced or aligned.
- User-provided visual references show a vertical career timeline and a project archive with category filters.
- No verified project, experience, or skill content is present yet.

## Product Principles

- Let the island establish the portfolio's identity immediately.
- Make the island's section metaphor useful for navigation, not decorative only.
- Make growing collections of projects and skills easy to browse.
- Keep the experience legible and quick on desktop and mobile.
- Present only accurate personal and professional information.

## Open Decisions

- Provide real project, experience, and skill details before replacing the clearly marked content slots.
