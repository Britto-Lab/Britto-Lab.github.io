# Britto Lab Website

A content-driven lab website built with Astro. Edit markdown files to update
content — no coding required for routine updates.

## Getting started

```
npm install
npm run dev
```

Open http://localhost:4321 in your browser. Any file you save under `src/`
updates the preview automatically.

To build the final files for hosting on the college server:

```
npm run build
```

This creates a `dist/` folder — upload its contents to the server. It's plain
HTML/CSS/JS, no special server software needed.

## Pages & where their content lives

| Page | Content source |
|---|---|
| Home | `src/pages/index.astro` (hero tagline + welcome text directly in the file) |
| PI | `src/content/pi/britto.md` — one file, structured fields (education, employment, awards, invited presentations, service activities, international meetings, scientific consultant) plus a Research Interests paragraph in the body |
| Teaching | `src/content/teaching/teaching.md` — its own page, bullet-point body content |
| Research | Nav "Research" hovers to reveal the 4 sub-pages. Main `/research` page: `src/content/research/*.md` (3 theme cards — first two have Current Work / Past Work sections, third is Future Directions), plus link cards to the 4 sub-pages. Each sub-page: `src/content/research-highlights/*.md` (Publications/Patents, Translational Research, Academia-Industry Partnerships, Academic Entrepreneurship) — bullet/numbered body content, each its own full page |
| Publications | `src/content/publications/*.md` — one file per paper |
| Team | `src/content/team/*.md` — current members, tagged with `category:` (PhD Student / Project Assistant / Semester Project Intern) for the tabs; `src/content/alumni/*.md` — past members, tagged with `category:` (Postdoc / PhD / Masters / Undergraduate / Research Associate) |
| Collaborations & Funding | `src/content/collaborations/*.md` (type: academic or industry) + `src/content/funding/*.md` (status: Current or Past) |
| Gallery | `src/content/gallery/*.md` (photos) + `src/content/media-coverage/*.md` (press links) |
| News | `src/content/news/*.md` |
| Join Us | `src/content/join/*.md` |

## Editing a list field (education, awards, bullet points, etc.)

Some fields in the PI file are lists. Add or remove lines like this,
keeping the `-` and indentation exactly as shown:

```yaml
awards:
  - "Award name, 2024"
  - "Another award, 2022"
```

## Adding a new item (e.g. a new publication, team member, news post)

1. Go to the matching folder in `src/content/`.
2. Copy an existing `.md` file in that folder, rename it, and edit the
   fields between the `---` marks at the top, plus the body text below.
3. Save. It will appear on the site automatically — no other file needs
   touching.

## Photos

Drop image files into the matching subfolder of `public/images/` (e.g.
`public/images/team/`), then point the `photo:` or `image:` field in the
matching `.md` file at that filename, e.g. `/images/team/yourfile.jpg`.

## Deploying to GitHub Pages (going live)

This site is set up to deploy automatically to GitHub Pages every time you
push a change to the `main` branch, via the workflow in
`.github/workflows/deploy.yml`.

**One-time setup:**

1. Create a repository inside the **Britto-Lab** GitHub organization named
   exactly `Britto-Lab.github.io`. This special name makes GitHub publish
   it at the root of `https://britto-lab.github.io`, so every link and
   image path in this project works without changes.
2. The `astro.config.mjs` `site` value is already set to
   `https://britto-lab.github.io` — no edit needed unless the org handle
   changes later.
3. Push this whole project to that repository (see the full walkthrough in
   chat for exact steps).
4. In the repository on GitHub: **Settings → Pages → Source**, select
   **"GitHub Actions"**.
5. Push once more (or re-run the workflow from the **Actions** tab) — the
   site builds and goes live at `https://britto-lab.github.io`
   within a minute or two.

From then on, every future push to `main` automatically rebuilds and
redeploys the live site — no manual steps needed.

## Notes

- All placeholder text is marked `[Placeholder]` — search for it to find
  everything still needing real content.
- The research "Publications/Patents", "Translational Research", etc.
  dropdown sections and the PI page's accordion sections use plain bullet
  lists (`- item`) in the markdown body — add or remove bullets freely.
