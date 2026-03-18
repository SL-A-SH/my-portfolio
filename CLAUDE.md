# CLAUDE.md

## Design Context

### Users
Recruiters, hiring managers, and potential clients in the mobile/tech industry. They arrive with intent — scanning for signal on whether Aqeeb is the real deal. Secondary audience: collaborators and the broader developer community. They typically browse on desktop but need mobile to hold up. They're assessing competence, taste, and character within the first few seconds of landing.

### Brand Personality
**Three words: Bold. Crafted. Confident.**

Aqeeb is a senior mobile engineer who ships production apps. The portfolio should feel like it was built with the same care as the products he builds — nothing generic, nothing careless. Voice is direct and self-assured, not boastful. The work speaks; the design amplifies.

**Emotional goals (in priority order):**
1. **Impressed / Wow** — the design itself is a proof of quality
2. **Confident / Trust** — signals someone who ships real things and handles complexity
3. **Curious / Engaged** — invites deeper exploration without demanding it
4. **Excited to reach out** — closes the loop; contact feels natural, not formal

### Aesthetic Direction
**Reference: Apple / Linear** — ultra-refined, precise spacing, restrained color palette, premium product feel. Every pixel earns its place. Motion is purposeful, not decorative.

**Current foundation (preserve and elevate):**
- Dark navy base: `#0a0d14` → `#0f1419` → `#1e2635` (layered depth)
- Blue-to-purple gradient accents (`from-blue-600 to-purple-600`) — use sparingly as signal, not wallpaper
- White primary text on dark backgrounds — high contrast, readable
- Rounded cards with subtle borders (`border-gray-700/50`) and backdrop blur on nav

**Anti-references (what to avoid):**
- Generic Bootstrap/template layouts — no cookie-cutter hero + 3-column grids without intention
- Overly flashy or loud — no aggressive animations, no neon overload, no gradient soup
- Corporate stiffness — this is a human's portfolio, not a company website
- Visual clutter — every section needs breathing room; information hierarchy must be clear

**Theme:** Dark mode exclusively. Light mode is not part of this brand.

### Design Principles

1. **Precision over decoration** — Every visual element should serve communication. Remove anything that doesn't earn its place. Spacing, alignment, and proportion are the real design tools here.

2. **Restraint amplifies boldness** — Use the blue-purple gradient accent as a highlight, not a background. A single bold typographic choice or one strong color hit lands harder when surrounded by calm.

3. **Depth through layers, not noise** — The dark palette creates depth via subtle tonal shifts (`brand-base` → `brand-card` → `brand-surface`). Shadows, borders, and backdrop blur should feel architectural, not decorative.

4. **Motion is communication** — Animate to guide attention or confirm interaction, never to entertain. Transitions should feel inevitable, not surprising. Prefer duration 300–400ms with ease-out curves.

5. **The work is the hero** — Project cards, screenshots, and outcomes should dominate visual weight. UI chrome (nav, footers, section labels) should recede and support, never compete.
