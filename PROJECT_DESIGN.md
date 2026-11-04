# Educourse — Clean Blue

## Product and scope
Educourse is a demo learning discovery site for Indonesian learners. The primary task is finding a relevant class and reading its detail. Revise the homepage using HTML, CSS, and vanilla JavaScript. Keep existing data and routes; retain exactly five navigation links, the popular classes directly after the hero, programs, mentors, closing CTA, and footer.

## Confirmed direction
User selected **Clean Blue** and requested immediate implementation. Deliver directly in the existing site. White surfaces, charcoal text, clear blue actions, natural learning photography. Use the supplied logo, enlarged and horizontal beside `Educourse`, without the `Kursus Online` subtitle. Modernity comes from precise composition and interaction rather than decoration.

## Existing UI and reference
Preserve the local course data, serif/sans pairing, photography, and learning paths. Fix competing global CSS that stacks the logo, oversized hero line wrapping, low-contrast accent buttons, and redundant card links. Webflow reference informs blue action hierarchy and whitespace only; do not copy its branding, multicolor palette, or animation-heavy marketing.

## Visual specification
- White #FFFFFF; cool surface #F5F8FC; pale-blue panel #EDF4FF.
- Text #202B3A; secondary #566477; blue action #175CD3; hover #124AAF; divider #DAE4F0.
- Plus Jakarta Sans for controls, body and wordmark; DM Serif Display for hero and section headings.
- Hero 40–64px; section headings 32–44px; body 16–18px; metadata 13–14px.
- Max content width 1200px; gutters 40px desktop / 20px mobile; section spacing 64–88px; grids 24px.
- Hero: pale-blue inset panel, text left, rounded learning photograph right. No curved decorative overlay.
- Cards: white, thin border, 16px radius, inset image, consistent footer and one full-card link; blue-tint hover border and subtle elevation.
- Buttons: 12px radius, 48–52px high, strong blue primary and white outlined secondary, consistent SVG arrows, 180ms interaction states.
- Programs: pale-blue editorial two-column panel and numbered list. Mentors: image-led profile grid. Closing CTA: solid blue, white heading, contrasting white button.
- Header: white, horizontal logo/wordmark; five links; mobile menu at 900px with Escape and focus restoration.
- Footer: light background, readable text, explicit demo disclosure.

## Implementation
`index.html` loads dedicated `assets/css/home.css` after global styles and `assets/js/home.js` after shared scripts. Homepage styles override shared rules without changing the other pages. `educourse-mark.png` trims only transparent padding from the supplied logo, retaining the original file.

## Verification
Compare before/after browser screenshots. Check 1440, 1024, 768, 375, 360px and mobile landscape, overflow, logo alignment, five links, image loading, working class/program links, mobile Escape, focus, and reduced motion. Check JS syntax and keep all content clearly demo. External image/font availability remains a deployment dependency.

## Verification result
- Browser screenshots reviewed before/after on desktop and 360px mobile.
- No horizontal overflow at 1440 / 1024 / 768 / 375 / 360px, plus 812×375 landscape.
- Five primary links; horizontal brand; no brand subtitle; four class cards.
- Mobile menu opens, Escape closes it and restores focus; reduced-motion transition duration is 0s.
- All page images decoded successfully. All homepage destination URLs returned HTTP 200; clicking the first course opened its matching detail heading.
- `node --check assets/js/home.js` passed; no page runtime errors observed during final reload/navigation.
- Contrast: charcoal/white 14.30:1; muted/pale blue 5.45:1; blue/white 5.99:1; blue/pale blue 5.41:1.
- Fixed a mobile text issue exposed by screenshots: retained whitespace around desktop-only line breaks.
- Better than original: recognizable enlarged logo, stronger primary action hierarchy, quieter photo framing, varied course categories, and single-link cards. Existing demonstration portrait photography is retained; externally hosted photos/fonts remain network-dependent.
- Mode: taste-first redesign, followed by implementation of the user-selected Clean Blue direction.
