# Design system

## Surface

The portfolio uses the experience mode: visitors enter a small illustrated world and follow its landmarks to Reina's work and background. Recruiters are the primary audience.

## Visual direction

An editorial field guide floating in a soft sky. Subtle cloud banks carry the background; the detailed storybook island remains the focal object while the interface gives its landmarks clear names. Avoid generic dashboard cards and loud gradients.

## Colors

- Sky: `#c5e3f0`
- Cloud: translucent white
- Paper: `#f7f6ef`
- Ink: `#203d3a`
- Leaf: `#42685a`
- Muted copy: `#596f69`
- Gold accent: `#c29a5e`
- Line: pale sage gray, `#cfdacf`

## Type

- Literata for display headings and short editorial statements.
- Alegreya Sans for navigation, body copy, filters, and labels.
- Keep labels compact and letter-spaced; body text stays readable and calm.

## Layout and behavior

- Persistent desktop header; compact two-row header on narrow screens.
- Hero pairs the introduction with the interactive island, then presents the island path and About content.
- The star links to filtered projects, the tree to the experience timeline, the house to categorized skills, and the bridge to contact.
- Keep the island still until the visitor drags it. Allow drag rotation and wheel or pinch zoom.
- Let category controls wrap or scroll horizontally on small screens. Preserve visible keyboard focus and reduced-motion preferences.
- Unprovided biography, project, experience, skill, and contact details remain explicit placeholders.

## Current typography adjustment
The saved original interface and colors are restored. src/typography.css retains the editorial revision’s fonts, responsive text sizes, line heights, and lettering styles. All layout, imagery, cards, and navigation use the original UI.
