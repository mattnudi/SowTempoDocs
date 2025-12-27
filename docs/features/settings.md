---
sidebar_position: 10
---

# Settings

Configure SowTempo to match your preferences and local growing conditions.

![Settings Overview](/img/screenshots/settings-overview.png)

## Settings Sections

### General

Basic application preferences:

#### Appearance

| Setting   | Options               | Description                      |
| --------- | --------------------- | -------------------------------- |
| **Theme** | Light / Dark / System | Color scheme for the application |

#### Layout

| Setting                         | Description                                |
| ------------------------------- | ------------------------------------------ |
| **Collapse Sidebar by Default** | Start with the sidebar minimized on launch |

### Your Location

Configure your growing location to get accurate frost dates and weather data.

![Location Settings](/img/screenshots/settings-location.png)

#### Setting Location

**Option 1: ZIP Code (US)**

1. Enter your 5-digit ZIP code
2. Click **Look Up**
3. Location, hardiness zone, and region auto-fill

**Option 2: Manual Coordinates**

1. Click "Enter manually" to expand the coordinate entry
2. Enter latitude and longitude
3. Click **Set Location**

#### Climate Information

When a location is set, SowTempo automatically displays:

- **USDA Hardiness Zone** — Determines which plants survive winter in your area
- **Growing Region** — Used for regional planting recommendations

#### Historical Weather Data

After setting your location, you can download 10 years of historical weather data for accurate Growing Degree Day (GDD) calculations. Click **Refresh Historical Data** to download or update this data.

### Units & Display

Set measurement preferences:

| Setting          | Options                                       |
| ---------------- | --------------------------------------------- |
| **Measurements** | Imperial (feet, inches) / Metric (meters, cm) |
| **Temperature**  | Fahrenheit / Celsius                          |

All data is stored in canonical units (metric) and converted for display based on your preference.

### Frost Dates

Configure frost dates for your growing seasons. These dates drive all planting calculations.

| Field                 | Description                        |
| --------------------- | ---------------------------------- |
| **Last Spring Frost** | Date after which frost is unlikely |
| **First Fall Frost**  | Date when frost becomes likely     |

Options for setting frost dates:

- **Use location-based frost dates** — Toggle to auto-fill from NOAA historical data based on your location
- **Manual date pickers** — Set specific dates using the calendar inputs

:::tip
If your garden has a microclimate (urban heat island, cold pocket, etc.), use manual dates to match your experience.
:::

### Database

Manage the vegetable database:

![Database Settings](/img/screenshots/settings-database.png)

#### Built-in Database

| Field            | Description                      |
| ---------------- | -------------------------------- |
| **Version**      | Current database version         |
| **Last Updated** | When database was last refreshed |
| **Varieties**    | Number of varieties included     |

#### Import Database

Refresh the built-in vegetable database:

1. Click **Import Built-in Database**
2. Confirm the import
3. Database updates with latest varieties

This doesn't affect your custom plants.

#### Custom Plants

- View count of custom plants you've created
- Custom plants are never overwritten by imports

### Data Management

Control your data with backup and restore functionality.

#### Backup

Create a backup of all your garden data:

1. Click **Create Backup**
2. Choose a save location
3. Save the `.json` backup file

Backups include:

- All plantings and schedules
- Harvests and records
- Journal entries
- Settings and preferences
- Custom plants

**Quick Backup** creates an auto-backup stored in the application data folder.

#### Restore

Restore from a backup:

1. Click **Select Backup File...**
2. Select a `.json` backup file
3. Choose restore options:
   - **Preserve custom plants** — Keep custom plants created after the backup
   - **Keep current preferences** — Retain your current location, units, etc.
4. Confirm restoration

:::warning
Restoring a backup replaces your current data. Create a new backup first if you want to preserve current data.
:::

#### Recent Auto-Backups

View and access recent auto-backups stored by the application.

#### Database Location

Your data is stored locally:

- **macOS:** `~/Library/Application Support/SowTempo/`
- **Windows:** `%APPDATA%\SowTempo\`
- **Linux:** `~/.config/SowTempo/`

### About

Application information and resources:

| Field                | Description                            |
| -------------------- | -------------------------------------- |
| **Version**          | Current app version                    |
| **Platform**         | Your operating system                  |
| **Architecture**     | System architecture (x64, arm64, etc.) |
| **Electron/Node.js** | Runtime versions                       |

#### Privacy First

SowTempo is designed with privacy in mind:

- All data stored locally on your computer
- No account or sign-up required
- No tracking or analytics
- No data sent to external servers (except weather from Open-Meteo)

#### Resources

- **Source Code** — View the project on GitHub
- **Report an Issue** — Submit bugs or feature requests

## Tips for Settings

1. **Set location first** — Accurate frost dates are essential for planting schedules
2. **Choose your units** — Set once and forget
3. **Backup regularly** — Protect your garden data
4. **Adjust frost dates** — Fine-tune based on your local experience

---

Next: Explore the [Guides](/docs/category/guides) for step-by-step workflows.
