<!--
  PHOTO SERIES TEMPLATE
  ======================
  This file is a template, not a live page — it lives in /templates so
  Astro won't build it. To publish a real photo series:

    1. Copy this file into src/content/articles/
    2. Rename it to something like: my-photo-series-name.md
    3. Fill in the frontmatter and images below
    4. Delete this comment block
    5. Put your actual images in public/IMAGES/<CATEGORY>/...
    6. Commit + push — it goes live at /articles/my-photo-series-name

  HOW CAPTIONS WORK
  ------------------
  Right after an image, add a line with ONLY italic text (wrap it in
  single asterisks) and it will automatically be styled as a caption:

    ![Alt text for the photo](/IMAGES/CATEGORY/photo.jpg)
    *This becomes a small centered caption under the photo.*

  If you skip the italic line, the image just runs with no caption.

  FEATURED / HERO
  -----------------
  Set `featured: true` below to make THIS post the homepage hero as soon
  as you publish it. Only one article should be featured at a time — if
  you mark a new one true, remember to remove it from the old one (or
  just leave both — the most recently dated one wins as a tiebreaker,
  but it's cleaner to only have one `featured: true` at a time).
-->
---
title: "Photo Series Title Goes Here"
category: "Culture"
subcategory: "Lines"
author: "Your Name"
date: "July 6, 2026"
sortDate: 2026-07-06
image: "/IMAGES/CATEGORY/cover-photo.jpg"
imageAlt: "Description of the cover photo"
excerpt: "One sentence shown on homepage/listing cards."
intro: "A short line introducing the series — what it's about, where it was shot, why it matters."
tags: ["Photography", "Tag2"]
format: "photo-series"
featured: true
---

![Alt text for photo 1](/IMAGES/CATEGORY/photo-1.jpg)
*Caption for photo 1.*

![Alt text for photo 2](/IMAGES/CATEGORY/photo-2.jpg)
*Caption for photo 2.*

Optional short paragraph of regular text here if you want to break up
the series with a bit of context partway through — this will render as
normal centered body copy, not full-bleed like the photos.

![Alt text for photo 3](/IMAGES/CATEGORY/photo-3.jpg)
*Caption for photo 3.*
