---
sidebar_position: 2
---

# Data Management

SowTempo stores all your data locally on your computer. This guide explains where your data lives and how to manage it.

## Data Storage Location

Your data is stored in a SQLite database at:

| Platform    | Location                                             |
| ----------- | ---------------------------------------------------- |
| **macOS**   | `~/Library/Application Support/SowTempo/sowtempo.db` |
| **Windows** | `%APPDATA%\SowTempo\sowtempo.db`                     |
| **Linux**   | `~/.config/SowTempo/sowtempo.db`                     |

### Accessing the Folder

**macOS:**

1. Open Finder
2. Press **Cmd + Shift + G**
3. Enter `~/Library/Application Support/SowTempo/`

**Windows:**

1. Press **Win + R**
2. Enter `%APPDATA%\SowTempo`
3. Press Enter

**Linux:**

1. Open file manager
2. Press **Ctrl + L**
3. Enter `~/.config/SowTempo/`

## What's Stored

Your data folder contains:

| File            | Contents                               |
| --------------- | -------------------------------------- |
| `sowtempo.db`   | All your garden data (SQLite database) |
| `settings.json` | Application preferences                |
| `images/`       | Photos from journal entries (if any)   |

## Creating Backups

### In-App Backup

The recommended method:

1. Go to **Settings > Data Management**
2. Click **Create Backup**
3. Choose a save location
4. A `.sowtempo-backup` file is created

This backup includes:

- Complete database
- All settings
- All images

### Manual Backup

You can also copy the data folder directly:

1. Close SowTempo completely
2. Navigate to the data location
3. Copy the entire folder to your backup location

### Backup Schedule

Recommended backup frequency:

| Situation            | Backup Frequency |
| -------------------- | ---------------- |
| Active season        | Weekly           |
| Off-season           | Monthly          |
| Before major changes | Always           |
| Before updates       | Recommended      |

### Backup Destinations

Good backup locations:

- External hard drive
- Cloud storage (Dropbox, Google Drive, iCloud)
- USB drive
- NAS or network storage

## Restoring from Backup

### In-App Restore

1. Go to **Settings > Data Management**
2. Click **Restore Backup**
3. Select your `.sowtempo-backup` file
4. Confirm restoration

:::warning
Restoring replaces all current data. Consider backing up current data first.
:::

### Manual Restore

1. Close SowTempo completely
2. Navigate to the data location
3. Replace the existing folder with your backup
4. Reopen SowTempo

## Exporting Data

Export your data in portable formats:

### CSV Export

Export individual data types as CSV:

1. Go to **Settings > Data Management**
2. Click **Export Data**
3. Select what to export:
   - Plantings
   - Harvests
   - Journal entries
   - Inventory
   - All data
4. Choose save location
5. CSV files are created

### What's Included

CSV exports contain:

- All fields for each data type
- Dates in ISO format
- IDs for linking records
- Human-readable values

### Using Exported Data

CSV files can be:

- Opened in Excel or Google Sheets
- Imported into other applications
- Used for data analysis
- Archived for long-term storage

## Importing Data

### Restoring CSV Exports

Currently, CSV files cannot be re-imported directly. Use the backup/restore feature for full data restoration.

### Migrating from Other Apps

If you're migrating from another garden app:

1. Export your data from the old app
2. Manually recreate plantings in SowTempo
3. Use the vegetable database to match plants

Future versions may include import tools for common formats.

## Data Retention

### What's Kept Forever

Unless you delete it:

- All plantings
- All harvests
- All journal entries
- All records
- Custom plants

### Automatic Cleanup

SowTempo may automatically clean up:

- Cached weather data (after 30 days)
- Temporary files
- Logs (after 7 days)

Your garden data is never automatically deleted.

## Database Information

### Viewing Database Stats

In **Settings > Database**, see:

- Database version
- Total records
- Database size
- Last modified date

### Database Schema

SowTempo uses a SQLite database with relational tables:

- Seasons
- Plantings
- Vegetables
- Varieties
- Garden beds
- Harvests
- Journal entries
- And more...

## Troubleshooting Data Issues

### Database Corruption

Signs of corruption:

- App crashes on startup
- Missing data
- Error messages about database

Solutions:

1. Restore from backup (best option)
2. Contact support with the database file

### Missing Data

If data appears missing:

1. Check the active season
2. Verify filters aren't hiding data
3. Check if data was archived

### Large Database

If the database becomes very large:

1. Archive old seasons
2. Delete unnecessary photos
3. Clear old journal entries

Typically, even years of data stay under 100MB.

## Privacy & Security

### Local Storage

- All data stays on your device
- No cloud sync or upload
- No account or login
- Complete privacy

### Encryption

Currently, the database is not encrypted. If you need encryption:

- Use full-disk encryption (FileVault, BitLocker)
- Store backups in encrypted locations
- Keep your device secure

### Sharing Data

To share your data:

1. Export to CSV
2. Share specific files
3. Or share backup files

Do not share your database file if it contains personal information.

## Tips

1. **Backup regularly** — Data loss is preventable
2. **Use multiple backup locations** — Don't rely on one
3. **Export before updates** — Extra safety
4. **Keep old backups** — Don't just overwrite
5. **Test restores** — Verify backups work

---

See also: [Troubleshooting →](/docs/reference/troubleshooting)
