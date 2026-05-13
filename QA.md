# QA Checklist — Minimalist Husky Site

## Page Load & Layout
- [ ] Page loads without errors (no white screen, no JS errors)
- [ ] Header renders with "🐾 Huskies" title and "A photo collection" subtitle
- [ ] Hero section displays background image correctly (no broken image)
- [ ] Hero text "Beauty in the cold" + "A photo collection of Siberian Huskies" visible
- [ ] Footer renders with "🐾 husky photos — made with love"

## Image Gallery
- [ ] All 6 gallery images load (no broken/placeholder images)
- [ ] **VISUAL:** Every image in the gallery is actually a Siberian Husky (not a different breed, fox, wolf, or random dog). Take screenshots at desktop viewport and visually confirm each image shows a husky.
- [ ] **VISUAL:** Hero background image is a husky. Screenshot and confirm.
- [ ] Masonry layout renders correctly on mobile (single column)
- [ ] Masonry layout renders correctly on tablet (2 columns)
- [ ] Masonry layout renders correctly on desktop (3 columns)
- [ ] Image hover animation works (scale 1.02 on hover)
- [ ] Images have correct alt text for accessibility

## Responsive Behavior
- [ ] **Mobile (375px)**: hero height ~50vh, single column gallery, readable text
- [ ] **Tablet (768px)**: hero height ~60vh, 2-column gallery
- [ ] **Desktop (1280px+)**: hero height ~75vh, 3-column gallery, full layout

## Interactive Elements
- [ ] Hover effect on gallery items triggers smooth transform
- [ ] No horizontal scroll on any viewport
- [ ] Page scrolls smoothly on mobile

## Performance
- [ ] Page loads in under 3 seconds on simulated 3G
- [ ] Images use lazy loading (loading="lazy" attribute)

## Visual Verification (MANDATORY — Screenshot Required)
These checks require actually LOOKING at screenshots, not just checking HTTP status codes.

### Desktop Viewport (1280px)
- [ ] Screenshot the hero section — confirm the background image shows a husky
- [ ] Screenshot the full gallery — confirm every single image is a Siberian Husky
- [ ] Visually inspect: are any images actually a different dog breed, fox, wolf, or unrelated animal?

### Mobile Viewport (375px)
- [ ] Screenshot the mobile hero — confirm image is a husky and text is readable
- [ ] Screenshot the gallery in single-column mode — verify images display correctly
- [ ] Verify tap targets are appropriately sized

### Content Quality
- [ ] All images are high quality, not pixelated or stretched
- [ ] Image captions match what the image shows
- [ ] No placeholder images or generic stock-photo-feeling photos

## Visual Verification Protocol
When validating images:
1. Take a screenshot of the page at the target viewport
2. Look at each image — is it actually a husky?
3. If an image is NOT a husky: FAIL the check, fix it before pushing
4. Do NOT skip this step — HTTP 200 does not mean the image is correct
