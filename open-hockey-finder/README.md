# 🏒 Twin Cities Open Hockey Finder

A free web app for finding **open hockey / stick & puck** ice in the Minneapolis–St. Paul metro — public sessions where sticks and pucks are allowed (not just open skate).

## Features

- 💰 **Price ranking** — sort all rinks from cheapest to priciest drop-in
- ⭐ **Quality ranking** — sort by community star ratings of each facility
- 🕐 **Dates & times** — every rink's weekly schedule plus a computed "next session" time and day-of-week filters
- 🗺️ **Map view** — Leaflet map (OpenStreetMap) with markers color-coded by price tier
- 🔍 Search, session-type filter, and your filters persist between visits

## Run it on Windows

No install needed — just double-click `index.html`. It opens in your default browser.

For a proper local dev server (optional):

```powershell
cd "C:\Users\omcag\OneDrive\Documents\Default Project\open-hockey-finder"
python -m http.server 8080
```

Then open `http://localhost:8080`.

> The Map view needs internet access (it loads map tiles + Leaflet from a CDN). The list view works offline except fonts/icons.

---

## Step-by-step: publish to GitHub

### 1. Install prerequisites (once)

1. **Git for Windows** — download from <https://git-scm.com/download/win>, run installer, accept defaults.
2. A **GitHub account** at <https://github.com>.
3. Verify Git installed:

```powershell
git --version
```

### 2. Set up your identity (once)

```powershell
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

### 3. Initialize the repository

From the project folder:

```powershell
cd "C:\Users\omcag\OneDrive\Documents\Default Project\open-hockey-finder"
git init
git add .
git commit -m "Initial commit: Twin Cities Open Hockey Finder"
git branch -M main
```

### 4. Create the GitHub repo and push

1. Go to <https://github.com/new>
2. Repository name: `twin-cities-open-hockey`
3. Keep it Public, do **not** add README/gitignore/license (we already have files)
4. Click **Create repository**
5. Back in PowerShell, replace `YOURUSERNAME` and run:

```powershell
git remote add origin https://github.com/YOURUSERNAME/twin-cities-open-hockey.git
git push -u origin main
```

(You'll be prompted to sign in — use "Sign in with browser".)

### 5. Turn on GitHub Pages (makes it live)

1. On your repo page → **Settings** → **Pages** (left sidebar)
2. Under "Build and deployment": Source = **Deploy from a branch**
3. Branch = **main**, folder = **/ (root)** → **Save**
4. Wait ~1–2 minutes. Your app is now live at:

```
https://YOURUSERNAME.github.io/twin-cities-open-hockey/
```

Anyone on any Windows PC can bookmark or pin that URL — it behaves like an app.

### 6. Update schedules/prices later

All rink data lives in one file: `data.js`. Each entry looks like:

```js
{
  id: "braemar",
  name: "Braemar Arena",
  city: "Edina",
  address: "7511 Ikola Way",
  sheets: 3,
  lat: 44.8836, lng: -93.3414,
  types: ["Open Hockey", "Stick & Puck"],
  price: 7,
  priceNote: "typical adult drop-in",
  quality: 4.5,
  qualityNotes: "Three sheets, well-run...",
  schedule: [
    { days: ["Mon", "Wed", "Fri"], start: "11:00", end: "13:00", label: "Open Hockey (18+)" }
  ],
  website: "https://www.braemararena.com"
}
```

Edit prices (`price`), ratings (`quality`), or `schedule` entries, then publish changes:

```powershell
git add data.js
git commit -m "Update fall schedule"
git push
```

GitHub Pages redeploys automatically in about a minute.

---

## Important disclaimer

Schedules and prices in `data.js` are a **starting point seeded from typical published programs** as of August 2026. Arena calendars change every season (and mid-season). Always confirm times on the arena's official site before driving out. If you find a correction, update `data.js` and push — that's how this stays useful.

## Ideas for v2

- Scrape arena calendar pages automatically (GitHub Actions cron job) instead of hand-editing
- "Notify me" via GitHub Pages + a Telegram/Discord bot when new sessions appear
- User-submitted check-ins to crowdsource live ice conditions
