# Holiday Plan

An interactive Iceland 2026 road-trip planner with a weather-first itinerary, representative attraction photography, and a searchable hiking catalog.

## Live site

- [Holiday Plan on GitHub Pages](https://jwehrmann.github.io/holiday-plan/)
- [Iceland itinerary](https://jwehrmann.github.io/holiday-plan/iceland/)
- [Hiking catalog](https://jwehrmann.github.io/holiday-plan/iceland/hikes.html)

## Project structure

| Path | Purpose |
| --- | --- |
| `index.html` | GitHub Pages landing page |
| `iceland/index.html` | Interactive Iceland itinerary |
| `iceland/hikes.html` | Searchable and filterable hike catalog |
| `iceland/hikes-data.js` | Structured hike data used by the catalog |
| `iceland/itinerary.md` | Plain-text itinerary reference |
| `iceland/assets/images/` | Local attraction and route images |
| `iceland/IMAGE_CREDITS.md` | Image sources, authors, and licenses |

## Preview locally

The site uses relative URLs, so preview it through a local web server rather than opening individual HTML files directly:

```bash
git clone https://github.com/jwehrmann/holiday-plan.git
cd holiday-plan
python3 -m http.server 8000
```

Then open [http://localhost:8000/](http://localhost:8000/).

No install or build step is required for normal content changes or GitHub Pages publishing. `npm run build` creates a separate packaged static artifact; GitHub Pages serves the source files directly.

## Updating the itinerary

1. Edit `iceland/index.html` for itinerary cards, distances, summaries, and attraction details.
2. Keep route distances and hike statistics consistent with `iceland/hikes-data.js`.
3. Use local images from `iceland/assets/images/` so the deployed site does not depend on third-party image hosts.
4. Give every attraction a meaningful image and descriptive `alt` text.
5. Record the source, author, and license for every added image in `iceland/IMAGE_CREDITS.md`.
6. Preview the landing page, itinerary, attraction details, and hikes page before publishing.

## Updating the hike catalog

Hikes are maintained in `iceland/hikes-data.js`. Each entry should include:

- hike name and source URL
- estimated trip date and recommended time block (early start, morning, afternoon, blue hour, half day, or all day)
- distance and elevation gain
- grade or difficulty
- region and trip base
- rating and rating count when available
- trail references with provider and route-match confidence (`high`, `medium`, or `low`)
- driving distance from the base
- status: `confirmed`, `planned`, or `alternative`

Prefer the official trail page or AllTrails route that matches the actual trail, not merely a similarly named nearby attraction. Use Wikiloc for clearly labelled community GPS variants when no authoritative track exists. Confidence describes how closely the reference matches the planned route: `high` for the named route, `medium` for a matching variant or community track, and `low` for a nearby area reference. It never guarantees safety, legality, access, or current conditions. Recheck every external reference before the trip.

## Publish with GitHub Pages

This repository is configured in GitHub under **Settings → Pages** to deploy from the `main` branch and the repository root (`/`). Publishing is therefore a normal Git push:

```bash
git status
git add -p
git add path/to/any-new-file
git diff --cached
git commit -m "Update Iceland holiday plan"
git push origin main
```

Stage only the files that belong to the update. After pushing, GitHub Pages rebuilds automatically. Check the deployment under **Actions** or **Settings → Pages**, then verify:

- <https://jwehrmann.github.io/holiday-plan/>
- <https://jwehrmann.github.io/holiday-plan/iceland/>
- <https://jwehrmann.github.io/holiday-plan/iceland/hikes.html>

The Pages deployment should report the same commit SHA that was pushed to `main`. Use a cache-busting query such as `?v=<commit-sha>` if a browser temporarily shows an older cached copy.

## Pre-publish checklist

- All internal links work from the GitHub Pages project path `/holiday-plan/`.
- Every attraction and hike card has the intended image and useful alternative text.
- No image displays a missing-image fallback.
- Hike links, distances, elevation, status, and summary totals agree.
- Desktop and narrow/mobile layouts remain readable.
- Image credits are complete.
- GitHub Pages finishes building the pushed `main` commit successfully.

Always check [SafeTravel Iceland](https://safetravel.is/), [road.is](https://umferdin.is/en), and the [Icelandic Met Office](https://en.vedur.is/) before driving or hiking. This project is a planning aid, not a substitute for current official safety information.
