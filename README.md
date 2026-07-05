# Riles Magazine — Astro site

This is the Astro rewrite of the Riles Magazine site (previously plain HTML/CSS/JS).

## Project structure

```
public/                  Static assets, copied as-is (images, favicon, CNAME)
src/
  components/
    Header.astro         Site header + nav
    Footer.astro
  layouts/
    BaseLayout.astro      <head>, header, footer, mobile menu script
    ArticleLayout.astro   Shared article page shell
  content/
    articles/*.md         One Markdown file per article
  content.config.ts       Schema for the "articles" collection
  pages/
    index.astro           Homepage
    about.astro
    articles.astro         Article listing with filter + search
    articles/[slug].astro Dynamic article route (reads content/articles)
  styles/
    global.css            Original site-wide styles
    articles.css          Styles specific to the articles listing page
```

## Adding a new article

Add a new Markdown file to `src/content/articles/`, e.g. `src/content/articles/my-new-post.md`:

```markdown
---
title: "My New Post"
category: "Culture"
author: "Your Name"
date: "July 5, 2026"
sortDate: 2026-07-05
image: "/IMAGES/CULTURE/my-image.png"
imageAlt: "Description of the image"
excerpt: "One-line summary shown on cards."
intro: "The bold intro line shown at the top of the article."
tags: ["Tag1", "Tag2"]
---

## A heading

Body copy goes here as normal Markdown — paragraphs, `> blockquotes`,
`![alt](/IMAGES/...)` images, links, etc.
```

It will automatically show up on the homepage category grid (if the category matches), the articles listing page, and get its own page at `/articles/my-new-post`.

Drop any images the article needs into `public/IMAGES/...` first, then reference them with a leading `/`.

## Local development

```bash
npm install
npm run dev
```

Visit the local URL it prints (usually `http://localhost:4321`).

## Building

```bash
npm run build
```

Output goes to `dist/`. `npm run preview` will serve that build locally.

## Deployment (GitHub Pages + custom domain)

This repo already includes `.github/workflows/deploy.yml`, which builds the
Astro site and deploys it to GitHub Pages automatically on every push to `main`.

One-time setup on GitHub:

1. Push this project to your GitHub repo (see below).
2. In the repo, go to **Settings → Pages** and set **Source** to **GitHub Actions** (not "Deploy from a branch").
3. Still in **Settings → Pages**, under **Custom domain**, enter `rilesmag.com` and save.
   (The `public/CNAME` file already contains `rilesmag.com`, so GitHub Pages
   will keep recognizing your domain on every future deploy — you don't need
   to re-enter it after each push.)
4. Make sure your domain's DNS is pointed at GitHub Pages (A records to
   GitHub's IPs, or a CNAME record to `<username>.github.io` if using a
   subdomain). GitHub's docs: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site
5. Push to `main` — the Actions tab will show the build + deploy running.

### Pushing this project to your existing repo

If this is replacing your current plain-HTML repo:

```bash
cd riles-astro
git init
git add .
git commit -m "Migrate site to Astro"
git remote add origin <your-existing-repo-url>
git branch -M main
git push -f origin main
```

`-f` overwrites the old HTML site's history on `main` with this project. If
you'd rather keep the old history, push to a new branch first and merge/PR it
instead of force-pushing.

Also delete the old `.github/workflows/static.yml` if it's still present in
your repo — it's replaced by `deploy.yml` here.
