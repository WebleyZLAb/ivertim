# 10 — Photo Prompts (Draft Tool)

**Status: working tool, not a locked spec.** This file exists so the owner can generate placeholder photos (GPT Image / Imagen) to test real photo *sizes and proportions* on the actual site before commissioning or shooting real photography. It is **not** a source of strategic truth like the other numbered `docs/` files, and nothing here should ever be treated as final content.

**Why this exists at all — read before generating anything:**
`docs/05-visual-experience.md` and this project's locked photography rule say **real process/material/measurement shots only — no generic stock, no over-retouched or AI-perfect scenes.** That rule stays exactly as it is. AI-generated images were originally scoped as explicitly **not** going on the live site — a private sizing/proportion aid only. **Superseded 2026-09-07:** once all 15 images were generated against the revised industrial/no-faces brief and wired into their real containers, the owner reviewed them and explicitly decided to ship them as *temporary real content* on the live site until real photography replaces them — an explicit new owner decision that supersedes the original "never on the live site" scoping (not the underlying `docs/05-visual-experience.md` photography rule itself, which still governs what real photography must eventually look like). See CLAUDE.md, 2026-09-05 and 2026-09-07 session notes, for the full history. Every wired-in file carries a `⚠️ DRAFT` code comment noting it's an AI placeholder pending replacement — leave those comments in place until each one is actually swapped for a real photo.

**Not covered here, on purpose:** Projekti (`/projekti`). That page needs photos of *specific real completed projects* — there's no generic "stand-in" version of a real case study, so generating a fake one would cross into fabricating a real event, which is a different (and firmer) line than a generic process photo. It stays empty until real case studies exist, per CLAUDE.md.

**Revised 2026-09-07 — owner reset the brief, read before generating anything (supersedes the original §1 below the line):** the production hall has since been fitted out more seriously — not a small workshop anymore but a proper industrial-grade facility, matching the drvni centar (board-cutting service center) positioning. New rules for every photo on the site from here on:

- **Industrial, not artisanal-workshop.** Read as a real production plant — exposed steel structure, a wide open hall, large-format machinery, organised racking — not a small carpenter's shop. This is the single biggest change from the original brief.
- **No visible faces, ever.** Frame people from the side/back, or cropped above the jaw/shoulder line. This isn't a stylistic choice only — it also means a face never needs re-checking for likeness or age later.
- **Working-age adults only** — no elderly-looking individuals.
- **Real Ivertim workwear**: a plain grey t-shirt with the Ivertim name printed on it, plain work trousers. No other logos/branding.
- **Emotion *and* professionalism together** — quiet focus/care/satisfaction in how someone works, never a posed or staged look.
- **Tighter, close-up framing (krupni plan)** as the default across the whole set — hands, tools, material, machine detail — rather than wide establishing/real-estate-style room shots. This applies even to the RoomCategory furniture panels (§4), not just the process shots.

---

## 1. Shared style anchor

Paste this block (or a short version of it) into every prompt below, so the generated set feels like one consistent world rather than N random images.

> Documentary-style, editorial photography of a real Balkan board-cutting service center ("drvni centar") — an industrial-grade production facility, not a small workshop: exposed steel structure, a wide open production hall, large-format panel saws and CNC/edge-banding machinery, organised stacks of board material on steel racking, painted concrete floor, workshop-industrial lighting (daylight through high windows mixed with overhead fixtures). Warm neutral tones (walnut/wood browns, soft cream whites, muted industrial greys — echoing a brand palette built on warm walnut brown `#805A3C` / `#6E4D33` / `#5C402A`), real material texture (wood grain, board edges, sawdust, machined edges, tool wear). Tight, close-focused framing (krupni plan) on hands, tools, material and machine detail rather than wide establishing shots — immersive and precise, not a real-estate-style room photo. Calm, precise, quietly confident mood, with genuine emotion — quiet focus, care, satisfaction — balanced with professionalism; never staged, never glossy/over-retouched, never a sterile catalogue look.
>
> People, when present: never show a visible face — frame from the side, back, or cropped above the jaw/shoulder line. Working-age adults only, no elderly-looking individuals. Dressed in Ivertim's real workwear — a plain grey t-shirt with the Ivertim name printed on it, plain work trousers — no other logos or branding. Hands and posture read as skilled and genuinely engaged with the material, not posed for camera.
>
> Shot on a full-frame camera, natural shallow-to-medium depth of field, no on-image text/logo overlays beyond what's naturally printed on the workwear, no illustration or 3D-render look — must read as a real photograph.

**Avoid, in every prompt:** visible faces, elderly-looking workers, generic/unbranded corporate uniforms (must be Ivertim's own plain grey tee), small hobbyist-workshop look (must read as an industrial-scale facility), wide sterile establishing shots, stock-photo gloss, plastic/CGI-looking surfaces, exaggerated lens flare or bokeh, staged smiling-at-camera poses, generic IKEA-showroom furniture, any visible text/logo/watermark besides the workwear print, illustration or 3D-render look (must read as a photograph).

---

## 2. Quick reference — every current image slot

| # | Location | File | Ratio | Recommended master size |
|---|---|---|---|---|
| 1–4 | Home hero visual, 4 crossfading slides | [src/pages/index.astro](../src/pages/index.astro) `.hero-carousel` | fluid: ~1.07:1 (mobile) → ~1.74:1 (desktop) — see §3 | **1600×900 px (16:9)**, centre-weighted subject |
| 5–10 | "Namještaj po mjeri" room categories ×6 | [src/content/usluge/izrada-namjestaja-po-mjeri.mdx](../src/content/usluge/izrada-namjestaja-po-mjeri.mdx) via [RoomCategory.astro](../src/components/RoomCategory.astro) | fixed 4:3 at every breakpoint | **1600×1200 px (4:3)** |
| 11–13 | Blog article hero image (3 live articles) | `src/content/blog/*.md`, rendered by [blog/\[slug\].astro](../src/pages/blog/[slug].astro) | fixed 16:9 (capped at 720px display width) | **1200×675 px (16:9)** |
| 14–15 | Usluge service-page hero (both pages) | `heroImage` field exists in `content.config.ts` but **still needs wiring into `usluge/[slug].astro`** — see §6 | n/a yet, recommend 16:9 | **1600×900 px (16:9)** |

Owner confirmed 2026-09-07: items 14–15 are now in scope alongside the rest — 15 image slots total, not 13. The template wiring itself (§6) still isn't built; say the word whenever and I'll add it the same way `blog/[slug].astro` already renders `heroImage`.

---

## 3. Home hero visual — `.hero-carousel` (4 slides)

**Where:** first thing a visitor sees, top of `/`. Currently 4 gradient panels auto-crossfading every 24s, each labelled with a process phase.

**Measured container size** ([src/pages/index.astro](../src/pages/index.astro), `.hero-carousel` — height is fixed, width is fluid):

| Viewport | Rendered size | Ratio |
|---|---|---|
| 375px (mobile) | 343 × 320 | 1.07:1 |
| 768–912px (tablet) | 381–400 × 320 | ~1.2:1 |
| 1024px | 435 × 320 | 1.36:1 |
| 1440px+ | 556 × 320 (caps around here) | 1.74:1 |

**Generate at 1600×900 (16:9)** — wide enough to cover the widest real crop (1.74:1) with room to spare, and compose so the main subject sits centred with headroom above/below, so it still reads correctly when a page crops it down toward the near-square 1.07:1 mobile version. `object-fit: cover` (or an equivalent background-size treatment) will do the actual per-breakpoint cropping once these are wired in — don't pre-crop per breakpoint yourself.

**⚠️ Flag before you generate these:** at 320px fixed height, this is the smallest "hero" moment in the whole site relative to how prominent it is (first section, first impression) — my recommendation is to raise it to roughly **440–480px** once real photos are in, so the images actually land with the emotional weight you're after. That's a one-line CSS change on my end whenever you say go; I did not make it yet since it wasn't asked for this round. If you want it now, say so and I'll bump the container before you spend a generation on it — the aspect ratios above would shift slightly wider (less square on mobile) but the same 1600×900 master still covers it.

### Slide 1 — "Uslužno rezanje" — ✅ revised 2026-09-07, ready to use
[Paste the §1 shared style anchor first, then:]

Extreme close-up (krupni plan) on a large-format panel saw actively cutting through a big sheet of board material (chipboard/MDF) — the blade at the exact moment it meets the material, fine sawdust spraying and settling on the saw bed and blade guard, razor-sharp focus on the blade-to-board contact point. At the frame's edge, a pair of hands and forearms guide the panel — sleeve of a plain grey Ivertim t-shirt visible, no face, no other body part in frame. The wider industrial hall — steel racking stacked with board material, other large machinery — is softly out of focus in the background, present but not competing with the cutting action. Landscape orientation, the blade/board contact point placed slightly off-centre with a little negative space around it. 1600×900px, 16:9.

### Slide 2 — "Kantovanje i bušenje" — ⚠️ not yet revised, still reflects the old workshop-scale brief below
Close-up on an edge-banding machine applying banding tape to the raw edge of a cut panel, roller pressure visible, curls of trimmed banding on the machine bed — or alternatively a CNC drill head boring a precise line of holes into a panel, wood shavings around each hole. Landscape, subject centred, tight enough to show real tool/material detail.

### Slide 3 — "Mjerenje i dogovor" — ⚠️ not yet revised, still reflects the old workshop-scale brief below
A craftsman in a modest home or workshop office, measuring a space with a tape measure or laser measure, a notepad or tablet with a rough sketch nearby, a calm unhurried conversation moment (not a sales pitch pose) — matches the brand's "listen → ask → understand → measure → propose" principle. Landscape, mid-shot, natural indoor light.

### Slide 4 — "Namještaj po mjeri" — ⚠️ not yet revised, still reflects the old workshop-scale brief below
A finished, recently-installed piece of made-to-measure panel furniture — a kitchen run or a wardrobe wall — photographed straight-on or at a gentle angle, warm natural daylight through a nearby window, lived-in but tidy, no people. Landscape, subject filling most of the frame with a little breathing room at the edges.

---

## 4. "Namještaj po mjeri" room categories (6 panels) — ⚠️ not yet revised, still reflects the old workshop-scale brief below

**Where:** `/usluge/izrada-namjestaja-po-mjeri`, zigzag section "Vrste prostora". Each panel is a fixed **4:3** box at every breakpoint (measured 400×300 at 912px, 584×438 at 1440px, 343×257 at 375px — always exactly 4:3), so **generate each at 1600×1200 (4:3) and no cropping guidance is needed** — the ratio already matches everywhere. These are finished-room shots rather than production-hall shots, so the "industrial facility" rule applies less directly here — but the no-visible-faces / no-elderly / tighter-framing rules from the 2026-09-07 reset still apply if any person appears. Needs a proper rewrite pass before use.

### 5. Kuhinje
A custom-built kitchen, real cabinetry (not a catalogue kitchen), morning light, a lived-in warmth — matches the copy "mjesto gdje dan počinje i završava" (where the day begins and ends). Landscape, kitchen run as the main subject, no people.

### 6. Plakari i garderoberi
An open built-in wardrobe/closet system showing organised interior — shelves, hanging rails, drawers — mid-shot, doors open, real folded clothes/neutral textiles (not empty display shelving). Landscape.

### 7. Dnevne sobe
A living room with custom-built shelving or a TV/media wall unit, warm gathering-space feel, soft daylight, a little lived-in clutter (a book, a blanket) rather than a sterile showroom. Landscape.

### 8. Poslovni prostori
A small professional office interior with custom-built reception desk or wall shelving, clean and organised, natural or warm office lighting, no people. Landscape.

### 9. Hoteli i apartmani
A hotel room or short-stay apartment with custom-built furniture (wardrobe, headboard unit, or kitchenette cabinetry), welcoming hospitality feel, warm lighting, tidy and inviting. Landscape.

### 10. Ostalo po mjeri
A bespoke built-in solution for an awkward/non-standard space — e.g. furniture built into a sloped attic ceiling, an under-stairs nook, or an oddly-shaped alcove — showing custom problem-solving rather than a generic room type. Landscape.

---

## 5. Blog article hero images (3 live articles) — ⚠️ not yet revised, still reflects the old workshop-scale brief below

**Where:** top of each article, `blog/[slug].astro`, `.hero-image` — `width: 100%` of the article column (capped at 720px display width), fixed **16:9** via explicit `width={1200} height={675}`. **Generate each at 1200×675 (16:9).**

### 11. `kako-planirati-kuhinju.md`
A kitchen floor plan sketch or tape measure laid across a kitchen counter mid-planning, a pencil and notepad nearby — instructional, "before it's built" feel rather than a finished kitchen. Landscape.

### 12. `priprema-za-uslusno-rezanje.md`
A technical cutting-list drawing or panel diagram on a desk in a workshop, a stack of raw board material visible in the background, someone reviewing the drawing before it goes to the saw. Landscape.

### 13. `namjestaj-po-mjeri-ili-gotova-rjesenja.md`
A visual contrast within one frame: a custom-fit built-in piece (following a wall's exact angle or an alcove) next to or against a generic flat-pack/ready-made piece with a visible gap or mismatch — the comparison the article itself makes. Landscape.

---

## 6. Usluge service-page hero (2 images) — confirmed in scope 2026-09-07, template wiring still needed

`content.config.ts` already defines a `heroImage` field on the `usluge` collection (same field blog uses), but neither service page template renders it yet — it's a prepared-but-unused schema field, not a bug. Owner confirmed 2026-09-07 these two images are part of the real plan now (no longer "optional") — say the word and I'll wire `heroImage` into `usluge/[slug].astro` the same way `blog/[slug].astro` already does it (§5's pattern), any time before or after the images themselves are ready. Draft prompts below — ⚠️ not yet revised to the 2026-09-07 industrial/no-faces brief:

- **Uslužno rezanje (service page):** a wide shot of the actual cutting-service floor — panel saw, stacked board stock, organised workshop — conveying capacity and precision. Landscape, 16:9.
- **Namještaj po mjeri (service page):** a finished multi-room installation shot (kitchen visible through to a living room, or similar), conveying "we take responsibility for the whole space." Landscape, 16:9.

---

## 7. When real photos are ready

Astro's content-collection `image()` field resolves a path **relative to the content file itself**. Practical convention to use once you have real files:

- Blog: drop the file next to the post, e.g. `src/content/blog/photos/kako-planirati-kuhinju.jpg`, then in that post's frontmatter: `heroImage: ./photos/kako-planirati-kuhinju.jpg`.
- Usluge (once wired, §6): same pattern, e.g. `src/content/usluge/photos/uslozno-rezanje.jpg`.
- Home hero (4 slides) and RoomCategory (6 panels) aren't content-collection entries — they're hardcoded in `index.astro` / the MDX file as components, so those photos would live under `src/assets/` (e.g. `src/assets/hero/uslozno-rezanje.jpg`) and get imported directly rather than referenced by string path. I'll wire that import when the real files exist — just hand them to me with a note on which slide/room each one is for.

Bring me whatever GPT Image / Imagen generates at these ratios and I'll fit them into the actual containers, adjust crops/positioning, and flag anything that reads oddly at a given breakpoint — before you invest in the real shoot.
