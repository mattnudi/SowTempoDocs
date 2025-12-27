---
sidebar_position: 4
---

# Frequently Asked Questions

Common questions about SowTempo.

## General

### Is SowTempo free?

SowTempo is open-source software available free of charge.

### What platforms does SowTempo support?

SowTempo runs on:

- macOS 10.15 (Catalina) and later
- Windows 10 and later
- Most Linux distributions (Ubuntu 20.04+)

### Is there a mobile version?

Currently, SowTempo is desktop-only. A mobile version is not currently planned, but the app is designed to work well on various screen sizes.

### Does SowTempo require an internet connection?

Only for:

- Weather data updates
- Checking for app updates

All other features work completely offline.

## Privacy & Data

### Where is my data stored?

All data is stored locally on your computer. See [Data Management](/docs/reference/data-management) for exact locations.

### Does SowTempo collect my data?

No. SowTempo:

- Doesn't create or require accounts
- Doesn't send data to any servers
- Doesn't include analytics or tracking
- Doesn't share your information with anyone

### Can I export my data?

Yes. You can:

- Create full backups (restorable)
- Export to CSV files
- Copy the database file directly

### Is my data backed up automatically?

No. You need to create backups manually. We recommend regular backups — see [Data Management](/docs/reference/data-management).

## Features

### How many plants are in the database?

Nearly 4,000 vegetable varieties across 10+ categories.

### Can I add my own plants?

Yes. Use the **Custom Plants** feature to add any vegetable variety not in the database.

### How does SowTempo calculate planting dates?

Planting dates are calculated based on:

- Your location's frost dates
- Each plant's frost tolerance
- Days to maturity
- Recommended lead times for indoor seeding

### Where does the weather data come from?

Weather data comes from [Open-Meteo](https://open-meteo.com/), a free, open-source weather API that doesn't require an account or API key.

### Where do frost dates come from?

Frost dates are from NOAA's 1991-2020 Climate Normals, based on 6,948 weather stations across the US.

### Can I use SowTempo outside the US?

Yes, with some limitations:

- Automatic frost date lookup is US-only
- You can enter frost dates manually for any location
- Weather data works worldwide
- Hardiness zones are based on USDA system

## Garden Layout

### What file format is the garden layout?

Garden layouts are stored in the SQLite database, not as separate files. You can export to PDF for sharing.

### Can I import garden layouts?

Currently, layouts cannot be imported from other applications. You need to recreate beds in SowTempo.

### How accurate are the measurements?

Beds are stored in metric units (meters) with high precision. Display accuracy depends on your zoom level and measurement settings.

### Can multiple people work on the same garden?

SowTempo is single-user. For collaboration:

- Share PDF exports
- Share backup files (one person at a time)
- Use screen sharing for planning sessions

## Seasons

### How many seasons can I create?

Unlimited seasons. You can track as many years as you want.

### Can I have multiple active seasons?

Only one season is active at a time. The active season is what you see throughout the app.

### What happens to old seasons?

Old seasons remain in the app until you delete them. You can archive them to hide from the main view while preserving data.

## Troubleshooting

### Why aren't my frost dates accurate?

NOAA frost dates are historical averages. Your specific location may differ due to:

- Microclimates
- Urban heat islands
- Elevation differences
- Recent climate changes

Override with manual dates based on your experience.

### Why is weather loading slowly?

Weather data requires an internet connection and depends on Open-Meteo's servers. Delays can be caused by:

- Slow internet connection
- Open-Meteo server load
- Large number of weather requests

Data is cached for 15 minutes to reduce requests.

### Can I use SowTempo with a touchscreen?

Basic functionality works with touchscreens, but the canvas is optimized for mouse/trackpad input. Some gestures may not work as expected.

## Updates & Support

### How do I update SowTempo?

SowTempo checks for updates automatically. When available:

1. A notification appears
2. Click to download
3. Restart to install

Or check manually in **Settings > About > Check for Updates**.

### How do I report bugs?

Report bugs on [GitHub Issues](https://github.com/mattnudi/SowTempo/issues):

1. Search existing issues first
2. Create new issue with details
3. Include version, OS, and steps to reproduce

### How do I request features?

Feature requests are welcome on [GitHub Issues](https://github.com/mattnudi/SowTempo/issues). Tag with "enhancement" or "feature request."

### Is there a user community?

Currently, the best place to connect is through GitHub Issues and Discussions.

## Comparisons

### How is SowTempo different from other garden planners?

SowTempo focuses on:

- **Privacy** — Local-only data, no accounts
- **Desktop-first** — Full-featured desktop app
- **Data ownership** — Export everything
- **Open source** — Transparent development

### Can I migrate from another garden app?

Manual migration is required:

1. Export data from your current app
2. Recreate plantings and beds in SowTempo
3. Use CSV exports for reference

---

Still have questions? [Open an issue on GitHub](https://github.com/mattnudi/SowTempo/issues).
