---
sidebar_position: 10
---

# Settings

Configure SowTempo to match your preferences and local growing conditions.

![Settings Overview](/img/screenshots/settings-overview.png)

## Settings Sections

### General

Basic application preferences:

| Setting      | Options               | Description  |
| ------------ | --------------------- | ------------ |
| **Theme**    | Light / Dark / System | Color scheme |
| **Language** | English (more coming) | UI language  |

### Location & Climate

Configure your growing location:

![Location Settings](/img/screenshots/settings-location.png)

#### Setting Location

**Option 1: ZIP Code (US)**

1. Enter your 5-digit ZIP code
2. Click **Look Up**
3. Location and frost dates auto-fill

**Option 2: City Search**

1. Type your city name
2. Select from suggestions
3. Coordinates auto-fill

**Option 3: Manual Coordinates**

1. Enter latitude and longitude
2. Frost dates looked up or entered manually

#### Hardiness Zone

Your USDA Hardiness Zone determines:

- Which plants survive winter
- Perennial recommendations
- Zone-compatible variety filtering

Auto-detected from location or manually override.

#### Frost Dates

| Field                 | Description                        |
| --------------------- | ---------------------------------- |
| **Last Spring Frost** | Date after which frost is unlikely |
| **First Fall Frost**  | Date when frost becomes likely     |

These dates drive all planting calculations. Options:

- **Auto from NOAA** — Historical averages for your location
- **Manual override** — Set specific dates

:::tip
If your garden has a microclimate (urban heat island, cold pocket, etc.), override the frost dates to match your experience.
:::

### Units & Display

Set measurement preferences:

| Setting          | Options                                       |
| ---------------- | --------------------------------------------- |
| **Measurements** | Imperial (feet, inches) / Metric (meters, cm) |
| **Temperature**  | Fahrenheit / Celsius                          |
| **Weight**       | Pounds / Kilograms                            |
| **Volume**       | Gallons / Liters                              |
| **Date Format**  | MM/DD/YYYY / DD/MM/YYYY                       |

All data is stored in canonical units (metric) and converted for display based on your preference.

### Notifications

Configure alerts and reminders:

#### In-App Notifications

| Notification         | Description                       |
| -------------------- | --------------------------------- |
| **Task Reminders**   | Alerts for upcoming tasks         |
| **Frost Alerts**     | Warnings when frost is forecasted |
| **Harvest Ready**    | When plants reach maturity        |
| **Weather Warnings** | Extreme weather alerts            |

#### Notification Timing

Choose when to see reminders:

- Same day
- 1 day before
- 3 days before
- 1 week before

### Database

Manage the vegetable database:

![Database Settings](/img/screenshots/settings-database.png)

#### Built-in Database

| Field            | Description                      |
| ---------------- | -------------------------------- |
| **Version**      | Current database version         |
| **Last Updated** | When database was last refreshed |
| **Varieties**    | Number of varieties included     |

Click **Check for Updates** to see if a newer database version is available.

#### Import Database

Refresh the built-in vegetable database:

1. Click **Import Built-in Database**
2. Confirm the import
3. Database updates with latest varieties

This doesn't affect your custom plants.

#### Custom Plants

- View count of custom plants
- **Manage** — Opens custom plant editor
- Custom plants are never overwritten by imports

### Data Management

Control your data:

#### Backup

Create a backup of all your data:

1. Click **Create Backup**
2. Choose save location
3. Save the `.sowtempo-backup` file

Backups include:

- All plantings and schedules
- Harvests and records
- Journal entries
- Settings and preferences
- Custom plants

#### Restore

Restore from a backup:

1. Click **Restore Backup**
2. Select a backup file
3. Confirm restoration

:::warning
Restoring a backup replaces all current data. Create a new backup first if you want to preserve current data.
:::

#### Export Data

Export data as CSV files:

- Plantings
- Harvests
- Journal entries
- Inventory
- All records

#### Database Location

Shows where your data is stored:

- **macOS:** `~/Library/Application Support/SowTempo/`
- **Windows:** `%APPDATA%\SowTempo\`
- **Linux:** `~/.config/SowTempo/`

### About

Application information:

| Field       | Description           |
| ----------- | --------------------- |
| **Version** | Current app version   |
| **Build**   | Build number and date |
| **License** | Software license type |

#### Links

- **Documentation** — Opens this documentation
- **Privacy Policy** — Privacy information
- **Report an Issue** — GitHub issue tracker
- **Check for Updates** — Manual update check

#### Automatic Updates

Toggle automatic update checking:

- **Enabled** — Checks for updates on launch
- **Disabled** — Only manual checks

## Resetting Settings

To reset all settings to defaults:

1. Go to **Settings > General**
2. Click **Reset to Defaults**
3. Confirm the reset

This resets preferences only, not your data.

## Tips for Settings

1. **Set location first** — Accurate frost dates are essential
2. **Choose your units** — Set once and forget
3. **Backup regularly** — Protect your data
4. **Check for updates** — Keep the app current
5. **Adjust frost dates** — Fine-tune based on experience

---

Next: Explore the [Guides](/docs/category/guides) for step-by-step workflows.
