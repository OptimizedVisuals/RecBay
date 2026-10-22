# RecBay - Specific Asset / Shot List

Last updated: 2026-10-22

Use the site's real folders: videos go in `assets/videos/`, stills go in `assets/images/`. Each item below says what the shot should actually show, so you can brief a photographer, videographer, or stock search directly.

All five portfolio projects are currently **concept / self-initiated**. Use test shoots or licensed stock; do not present client work unless you have written permission.

---

## Global assets (every page)

1. **`assets/images/recbay-mark.svg`**
   Final RecBay symbol used as the favicon. This should be the real brand mark, not the current placeholder "R". Export SVG + `favicon.ico` (32/48px) + `apple-touch-icon.png` (180x180) + `icon-192.png` + `icon-512.png`.

2. **`assets/images/og/recbay-og.jpg`**
   Default social-share image used when a page is linked. 1200x630. Use a strong production still or studio image with the RecBay wordmark and a short line such as "Independent creative production" in the safe centre area.

3. **`assets/images/brand/recbay-logo.svg`** *(optional)*
   Final vector wordmark. The header currently uses HTML/CSS text, so this is only needed if you want to replace the text logo with an image logo.

---

## Home page

The homepage now opens with a five-card project lineup: a fan on desktop, a stack on mobile. There is no Home hero video or headline. The lineup cards are decorative, so keep the subjects centred and free of baked-in text; the project numbers and captions are HTML. The clickable grid below the lineup reuses the standard project-card images from the Work page.

1. **`assets/images/projects/lineup/object-of-desire-lineup.webp`** *(centre card, replaces `product-film.svg` in the lineup)*
   **Shot:** a single unbranded object — ceramic vessel, glass bottle, or sculptural product — on a dark plinth. Hard side light, deep shadow, macro texture. Crop vertically around the object and leave breathing room above and below for the caption bar.
   **Why it fits:** project 01, Object of Desire; this is the card that repeats as project 01 below the lineup.

2. **`assets/images/projects/lineup/in-their-element-lineup.webp`** *(inner-left card, replaces `editorial.svg` in the lineup)*
   **Shot:** a vertical environmental portrait of a creative in their workspace — seated by a window, natural light, tools or materials visible, direct or candid gaze. Not a corporate headshot.
   **Why it fits:** project 02, In Their Element.

3. **`assets/images/projects/lineup/after-hours-lineup.webp`** *(inner-right card, replaces `short-film.svg` in the lineup)*
   **Shot:** a vertical night still — a lone figure under a streetlight or neon sign, wet pavement, deep shadows, shallow depth of field, teal/amber grade. Keep the figure and light source inside the central 70%.
   **Why it fits:** project 03, After Hours.

4. **`assets/images/projects/lineup/color-reconsidered-lineup.webp`** *(outer-left card, replaces `color-study.svg` in the lineup)*
   **Shot:** a vertical graded still with strong colour contrast, or a stacked before/after of the same frame. Avoid baked-in BEFORE/AFTER labels; the card caption is HTML.
   **Why it fits:** project 04, Color, Reconsidered.

5. **`assets/images/projects/lineup/form-in-flux-lineup.webp`** *(outer-right card, replaces `motion-ident.svg` in the lineup)*
   **Shot:** a vertical motion-design styleframe with kinetic type, geometric shapes, grid lines, a lime accent, and a sense of movement. One frame that suggests a title sequence.
   **Why it fits:** project 05, Form in Flux.

**Spec for all five lineup crops:** 3:4 portrait, 1200x1600 or 1500x2000, WebP or AVIF, under 300 KB each, sRGB. No baked-in text, borders, or logos. The desktop fan crops the sides slightly; the mobile stack crops more aggressively, so keep the subject in the centre.

**Grid below the lineup:** reuse the five standard project-card images listed under Work items 2–6. No separate Home grid assets are needed.

**Retired:** `assets/videos/hero-16x9.mp4`, `hero-16x9.webm`, and `assets/images/home/hero-poster.webp` are no longer referenced after the Home lineup pass.

---

## Work page

1. **`assets/images/work/work-hero.webp`** *(currently `projects/product-film.svg`)*
   **Shot:** a wide behind-the-scenes still of a product-film set: camera rig, C-stand, softbox, monitor, object on a plinth. Or a wide night-film still with a strong central subject. It needs to survive a 2.8:1 desktop crop and a 2:1 mobile crop, so keep the subject in the centre.
   **Why it fits:** introduces the work as real production craft, not just a dark abstract frame.

2. **`assets/images/projects/object-of-desire-card.webp`**
   **Shot:** the product-film master, cropped for the large 2.1:1 card.

3. **`assets/images/projects/in-their-element-card.webp`**
   **Shot:** the environmental-portrait master, cropped for the 5:4 card.

4. **`assets/images/projects/after-hours-card.webp`**
   **Shot:** the night-film master, cropped for the 5:4 card.

5. **`assets/images/projects/color-reconsidered-card.webp`** *(replace `color-study.svg`)*
   **Shot:** a rich graded still with strong color contrast, or a split before/after of the same frame — flat/log image on one side, warm or teal graded version on the other. Avoid baked-in BEFORE/AFTER labels if possible.
   **Why it fits:** the Color, Reconsidered grading concept.

6. **`assets/images/projects/form-in-flux-card.webp`** *(replace `motion-ident.svg`)*
   **Shot:** a motion-design styleframe with bold kinetic typography, geometric shapes, grid lines, a lime accent, and a sense of movement. One frame that suggests a title sequence or motion identity.
   **Why it fits:** the Form in Flux motion-design concept.

7. **`assets/videos/showreel-poster.webp`**
   **Shot:** a strong frame from the final reel, or a five-panel contact-sheet arrangement of the five concept projects. No text; the "Concept Reel" and "In production" labels are HTML overlays.
   **Spec:** 16:9, 1920x1080, WebP, under 250 KB.

8. **`assets/videos/showreel.mp4` + `.webm`** *(the current 12-second file is a draft and is not wired into the page)*
   **Edit:** a 30-60 second concept reel. Use 5-8 seconds each: product macro/turntable, environmental portrait, night street, before/after grade, and motion graphics. Cut to licensed music or sound design, and end on a clean RecBay frame.
   **Spec:** 16:9, 1920x1080 or 2560x1440, MP4 H.264 + WebM VP9/AV1, mixed audio around -14 LUFS.

9. **`assets/videos/showreel.en.vtt` + transcript**
   **Content:** captions for any dialogue or meaningful sound, plus a plain-text transcript. The Work page currently says "0:36" and "In production"; update that copy to the real duration when the final reel is ready.

---

## Services page

The current Services page is CSS/text only, so **no photo or video is required**. If you want to add images to the six services, these are the specific shots:

1. **Visual production:** wide set with camera rig, lights, and crew preparing a shot.
2. **Photography:** photographer directing a portrait, with a softbox or strobe visible.
3. **Video editing:** edit suite with a timeline on the monitor and hands on the keyboard.
4. **Motion graphics / VFX:** screen showing kinetic type or 3D shapes, ideally with the software timeline visible.
5. **Color grading:** grading suite with a monitor, scopes, and color wheels.
6. **Commercials / brand films:** director and client watching a monitor on set.

Suggested spec if added: 3:2 or 16:9, 1600-2000px wide, consistent grade.

---

## About page

1. **`assets/images/about/about-hero.webp`** *(replace `room-still.svg`)*
   **Shot:** a wide studio or team-at-work scene: camera and light stands, a set being built, monitor glow, people working. It should work in black and white and be dark enough for white text over it. Keep faces and key details in the centre and above the bottom caption.
   **Why it fits:** "We build films frame by frame" and the production-team story.

2. **`assets/images/about/about-body.webp`** *(replace `portrait-still.svg`)*
   **Shot:** the founder or team at work — hands adjusting a lens, two people reviewing a shot on a monitor, or a portrait in the studio. Environmental and candid, not a corporate headshot. Square or 3:2 works best because the panel crops to roughly square.
   **Why it fits:** the "Why RecBay" section about deliberate, hands-on production.

3. **Optional team portraits** *(not currently displayed)*
   Three images for the team section: founder/director on set; editor/colorist at a grading desk; director of photography with a camera or lighting setup. Use 4:5 or 1:1 portraits, 1200x1500. These require a layout change to appear.

4. **Optional behind-the-scenes stills** *(not currently displayed)*
   4-12 frames: set build, lighting setup, camera prep, monitor, crew at work, detail shots. Only source these if you want a gallery or film-strip section.

---

## Contact page

No media is required for the current layout. If you want a visual aside, use:

1. **Optional:** a studio/team portrait or a quiet shot of the workspace — 3:2 or 4:5, warm and human, not a stock handshake. It would need a layout addition.

---

## Privacy and 404 pages

No photos or videos are required. The only shared asset is the favicon/brand mark.

---

## Project detail pages

Each project page currently shows one lead still. The same master can also be used for the project cards.

### Object of Desire - `project-product-film.html`

1. **`assets/images/projects/object-of-desire-detail.webp`**
   **Lead shot:** a product macro — ceramic vessel, glass bottle, or sculptural object on a dark plinth, hard side light, deep shadow, visible texture. Keep the object centred for a 2.1:1 desktop crop and 1.2:1 mobile crop.
2. **Optional extras:** 3-5 detail stills (surface texture, label, shadow, hand, packaging) and a 15-30 second product film.

### In Their Element - `project-editorial.html`

1. **`assets/images/projects/in-their-element-detail.webp`**
   **Lead shot:** an environmental portrait of a creative in their workspace — natural window light, tools/materials around them, direct or candid gaze.
2. **Optional extras:** a 6-10 image editorial series: wide environment, medium portrait, close-up, hands, detail, and workspace. Mix portrait and landscape.

### After Hours - `project-short-film.html`

1. **`assets/images/projects/after-hours-detail.webp`**
   **Lead shot:** a night film still — lone figure under a streetlight or neon sign, wet pavement, deep shadows, shallow depth of field, cinematic teal/amber grade.
2. **Optional extras:** 4-6 frames (wide street, car interior, silhouette, neon sign, close-up) and a short film with captions.

### Color, Reconsidered - `project-color-study.html`

1. **`assets/images/projects/color-reconsidered-detail.webp`**
   **Lead shot:** a rich graded still with strong color contrast, or a before/after split of the same frame.
2. **Optional extras:** 2-4 comparison frames showing the grade progression or different looks.

### Form in Flux - `project-motion-ident.html`

1. **`assets/images/projects/form-in-flux-detail.webp`**
   **Lead shot:** a motion-design styleframe with kinetic typography, geometric shapes, grid lines, a lime accent, and motion blur.
2. **Optional extras:** 3-5 styleframes or a 3-5 second loop.

### Social images for project pages

Each project currently uses the generic RecBay mark as its share image. For launch, add a **1200x630** image per project using the lead still, with the project title in the safe centre area.

---

## Format and crop cheat sheet

### Stills

- Supply the highest-resolution master you have, preferably 3000px or more on the long edge.
- Export WebP or AVIF for the site; keep a JPG fallback if needed.
- Use sRGB color.
- Keep the subject inside the central 70% of the frame — the site crops differently on desktop and mobile.
- Do not bake text, borders, or labels into the image.

### Video

- **Showreel:** MP4 + WebM, 1080p or 1440p, mixed audio, poster frame, captions, transcript.
- Use `faststart` for MP4 and test playback on a phone.
- **Home lineup:** stills only. Supply five 3:4 portrait crops at 1200x1600 or 1500x2000, WebP/AVIF. Keep the subject in the centre; the desktop fan and mobile stack crop differently. Do not bake in titles, borders, or logos.

### Social

- 1200x630, JPG or WebP, under 300 KB.
- Keep the title/text inside the centre safe area.

---

## Minimum set to launch the current layout

- 5 project master stills, reused across Work and the five project pages.
- 5 portrait 3:4 Home lineup crops, derived from those masters.
- 2 About images: hero and body.
- 1 Work hero still.
- 1 showreel poster; add the final reel and captions when ready.
- 1 final brand mark/favicon set.
- 1 default social-share image.

That is roughly 14 project/About/Work stills plus the brand and social graphics. No Home hero video is required for the current layout.

---

## Rights checklist

For every asset, record the creator, source URL, licence scope, territory, expiry, required credit, model release, location/property release, client permission, music/sound licence, and any product/trademark permission. Keep this in a `SOURCES.md` register.
