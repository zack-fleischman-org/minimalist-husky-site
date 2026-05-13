# QA Checklist — Minimalist Husky Site

## Page Load & Layout
- [ ] Page loads without errors (no white screen, no JS errors)
- [ ] Header renders with "🐾 Huskies" title and "A photo collection" subtitle
- [ ] Hero section displays background image correctly (no broken image)
- [ ] Hero text "Beauty in the cold" + "A photo collection of Siberian Huskies" visible
- [ ] Footer renders with "🐾 husky photos — made with love"

## Image Gallery
- [ ] All 6 gallery images load (no broken/placeholder images)
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
