# Privacy Policy

**Last updated:** December 2024

SowTempo is designed with privacy as a core principle. We believe your gardening data belongs to you and you alone.

## Our Privacy Philosophy

SowTempo is a **local-first application**. This means:

- **All your data stays on your device** - Your garden plans, planting schedules, harvest records, and notes are stored locally on your computer.
- **No account required** - You don't need to create an account or sign in to use SowTempo.
- **No data collection** - We don't collect, transmit, or store any of your personal information or usage data.
- **No analytics or tracking** - We don't use any third-party analytics services.

## External Services

SowTempo uses minimal external services, all of which are privacy-respecting:

### Weather Data (Open-Meteo)

SowTempo retrieves weather data from [Open-Meteo](https://open-meteo.com/), a free and open-source weather API. When you request weather information:

- Your approximate location (latitude/longitude) is sent to retrieve local weather data
- Open-Meteo does not require an API key or account
- Open-Meteo's data is licensed under CC BY 4.0
- See [Open-Meteo's privacy policy](https://open-meteo.com/en/terms) for more details

### Frost Date Data (NOAA)

Historical frost date information is based on NOAA's 1991-2020 climate normals. This data is bundled with the application - no external requests are made for frost date lookups.

### ZIP Code Lookups

ZIP code to coordinate mapping is performed entirely locally using bundled data. No external requests are made.

## Data Storage

All your data is stored locally in a SQLite database on your computer:

- **macOS:** `~/Library/Application Support/SowTempo/`
- **Windows:** `%APPDATA%/SowTempo/`
- **Linux:** `~/.config/SowTempo/`

You can backup, move, or delete this data at any time. See [Data Management](/docs/reference/data-management) for more information.

## Updates

When checking for application updates, SowTempo may contact our update server. This check:

- Does not transmit any personal information
- Does not transmit any usage data
- Only checks if a newer version is available

You can disable automatic update checks in Settings.

## Changes to This Policy

If we make changes to this privacy policy, we will update this page and the "Last updated" date above.

## Questions?

If you have questions about our privacy practices, please [open an issue on GitHub](https://github.com/mattnudi/SowTempoDocs/issues).

---

**tl;dr:** Your data stays on your device. We don't track you. We don't want your data.
