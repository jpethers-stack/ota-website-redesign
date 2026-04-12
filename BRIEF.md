# Old Town Academy Website Rebuild — Project Brief

## Context

I'm James, a middle school STEM teacher at Old Town Academy (OTA), a K–8 public charter school in San Diego. I'm building a redesign of our school website (https://www.oldtownacademy.org) as an unsolicited proposal for our principal, Devon Phillips. The current site runs on Edlio's CMS and feels dated and generic. I want to deliver a polished, deployable static site that demonstrates what a modern OTA web presence could look like. If Devon doesn't use it, that's fine — the goal is a credible artifact, not a production migration.

A homepage concept already exists (`reference/homepage-v2.html` in this folder if I've copied it in, otherwise I'll paste it when you ask). Use it as the source of truth for the design system. Do not redesign — extend.

## Deliverable

A deployable static site in this folder, structured so I can drop it on Netlify, Cloudflare Pages, or GitHub Pages with zero build step. Plain HTML/CSS/JS, no framework, no bundler, no npm. Must work on student Chromebooks (the audience that visits the real site).

## Design System (locked — do not change)

Pulled from the homepage concept. Put these in `css/site.css` as variables and reuse everywhere.

- **Colors:** Royal Purple `#4B2E83` primary, deep purple `#2E1B57`, soft lavender `#F3EEFB`, gold accent `#F5B82E`, ink `#1A1326`, paper background `#FAF8FF`, line `#E6DEF4`
- **Typography:** Fraunces (serif, headlines, italic for emphasis) + Inter (sans, UI and body), both from Google Fonts
- **Components already designed:** sticky glass nav with logo + Apply CTA, eyebrow pills with gold dot, pillar cards (image + uppercase tag + serif headline), hero collage with floating stat badge, purple banner CTA with gold ring decoration, news cards (16:10 image + date + serif headline), commit-style two-column section
- **Rules:** generous whitespace, real photos over icons (no emoji, ever), purple as a real system not just a header color, Fraunces italic on key phrases for warmth
- **No em-dashes anywhere in copy.** I flag them as AI tells. Use periods, commas, or parentheses.

## Site Map

Mirror the existing OTA navigation. Don't invent pages, don't drop pages.

```
/                           Home (already designed — port from reference)
/about/                     About OTA
/about/charter/             Charter School overview
/about/commitments/         OTA Commitments
/about/private-like/        Private-Like Education
/about/leaders/             Tomorrow's Leaders
/about/uniform/             Uniform Policy Benefits
/about/purple-star/         Purple Star School
/about/staff/               Staff Directory (placeholder grid, real names from current site)
/about/contact/             Contact + hours + map
/curriculum/                Curriculum hub
/curriculum/core-knowledge/ Core Knowledge Sequence
/curriculum/core-virtues/   Core Virtues
/curriculum/pbl/            Project-Based Learning
/curriculum/music/          Instrumental Music
/curriculum/digital/        Digital Literacy / STEM
/curriculum/robotics/       Robotics Program
/curriculum/enrichment/     Enrichment + After School
/admissions/                Admissions hub
/admissions/2026-27/        2026-27 Enrollment
/family/                    Family Resources hub
/family/calendar/           School Calendar
/family/handbook/           Student/Parent Handbook landing
/news/                      News index (3-column card grid)
/news/[slug]/               One news article template, populated with the 3 real recent stories (Gala, Barnes & Noble, Purple Star)
/governance/                Governance hub (Board, Foundation)
/give/                      Give Back / donate
/legal/ada/                 ADA Accessibility statement
/legal/title-ix/            Title IX
/legal/ucp/                 UCP Complaint Policy
```

Each page gets the same nav, footer, and CSS. Use HTML includes via a tiny build script (`build.sh` running `sed` or a 20-line Node script) OR just keep the nav/footer in every file and write a shell command I can run to update all of them at once. Your call — pick whichever is simpler to maintain by hand.

## Content Strategy

**Source the real text from the current OTA site.** Fetch each corresponding page from oldtownacademy.org, extract the actual prose, and port it in. Don't write generic filler. If a page on the live site is thin or empty, write 2–3 short paragraphs in OTA's voice (warm, rigorous, community-focused, not corporate).

**Photos:** Download all photos from the current site (the `files.edl.io` URLs in the homepage reference) into `/img/` and reference them locally. Do not hot-link. Add `alt` text to every image. We need maybe 15–20 unique images total — reuse strategically across pages.

**Real data to include verbatim:**
- 2120 San Diego Ave, San Diego, CA 92110
- (619) 574-6225
- info@oldtownacademy.org
- 211 students, 15:1 ratio, K–8
- Founded as a parent-led charter, Core Knowledge + STEM + Robotics + Music + PE
- Serves 92110 and 92103 priority zip codes

## Functional Requirements (what makes it as useful as the current site)

1. **Working internal navigation.** Every nav link goes somewhere real. No `href="#"`.
2. **Mobile responsive.** Test at 375px, 768px, 1280px. The current site is barely mobile-friendly — this should be exemplary.
3. **Accessible.** Semantic HTML, alt text, proper heading hierarchy, focus states, color contrast WCAG AA on all text. The ADA statement page exists for a reason.
4. **News article template** that renders a single story with title, date, hero image, body, and a "back to news" link. Populated with the three real recent stories.
5. **Calendar page** that shows the upcoming events I scraped from the current site (Apr 14 Staff Luncheon, Apr 14 Evening with Principal, Apr 14 Parent Foundation Meeting, Apr 15 Military Child Appreciation, Apr 15 Drill Sergeant Demo). Static is fine — this is a mockup, not a live integration.
6. **Apply CTA in the nav on every page**, always pointing to `/admissions/2026-27/`.
7. **Footer** with full address, phone, fax (619-683-2096), social links (Facebook, Instagram, TikTok), and the legal links.
8. **No JavaScript dependencies.** A tiny vanilla JS file for mobile nav toggle is fine. No React, no Vue, no jQuery.

## Workflow I Want

1. Start by reading the homepage reference file and confirming you understand the design system back to me in 5 bullet points before writing any code.
2. Scaffold the folder structure and `css/site.css` first. Show me the CSS, let me approve.
3. Build the nav and footer partials (or the canonical copy I'll paste into each page). Approve.
4. Build pages in this order so I can review in batches: Home → Admissions hub + 2026-27 → About + Charter + Commitments → All Curriculum pages → News index + one article → Family + Calendar → Governance + Give → Legal pages.
5. After each batch, tell me what you built, what assumptions you made, and what's unresolved. I'll review in a browser before you move on.
6. When the site is done, write a `README.md` with deploy instructions for Netlify drag-and-drop and Cloudflare Pages.

## Things to Ask Me About, Don't Guess

- Whether to download the real photos or use placeholders (I'll say download)
- Whether any page should be cut for scope
- If you find broken links or contradictory info on the current site, flag and ask
- If you want to add a feature not in this brief (search, dark mode, animations beyond simple hover), ask first

## Things to Just Do, Don't Ask

- Fix typos in the current site's copy when you port it
- Improve heading hierarchy and reading order
- Add proper meta tags, Open Graph, favicon
- Optimize images (resize to reasonable max widths, compress)
- Write decent alt text from context

## Out of Scope

- CMS, admin panel, content authoring UI
- PowerSchool, Canvas, Clever, or any login integration
- Real form submissions (the contact form can be a `mailto:` link)
- E-commerce (uniform store stays as an external link)
- Multi-language

## Definition of Done

I can open `index.html` in a browser, click through every nav link, see a real page on the other side, and feel like I'm on a school website that respects both the institution and the family visiting it. I can drag the folder onto Netlify and have a live URL in 60 seconds. Devon could look at it without me apologizing for anything.

## First Thing to Do

Confirm you've read this brief, summarize the design system back in 5 bullets, and tell me what you need from me before you start (specifically: ask me to paste the homepage v2 HTML if I haven't already put it in `reference/`).
