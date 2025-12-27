---
sidebar_position: 3
---

# Troubleshooting

This guide helps resolve common issues with SowTempo.

## Installation Issues

### App Won't Open on macOS

**Symptom:** Double-clicking SowTempo shows a warning or nothing happens.

**Solution:**

1. Right-click (or Control-click) on SowTempo in Applications
2. Select **Open** from the context menu
3. Click **Open** in the dialog
4. The app should launch and won't need this again

If still blocked:

1. Go to **System Preferences > Security & Privacy > General**
2. Click **Open Anyway** next to the SowTempo message

### Windows SmartScreen Warning

**Symptom:** Windows blocks the installer with a SmartScreen warning.

**Solution:**

1. Click **More info**
2. Click **Run anyway**
3. Continue with installation

### Missing Dependencies on Linux

**Symptom:** App fails to start with library errors.

**Solution:**
Install required libraries:

```bash
sudo apt install libgtk-3-0 libnotify4 libnss3 libxss1
```

## Startup Issues

### App Shows Blank Screen

**Symptom:** SowTempo opens but shows a white or blank screen.

**Solutions:**

1. Wait 10-15 seconds — first load can be slow
2. Close and reopen the app
3. Check if your display scaling is unusual
4. Try resizing the window

### App Crashes Immediately

**Symptom:** App opens then closes right away.

**Solutions:**

1. Check if another instance is running (force quit all)
2. Delete preferences file and restart:
   - macOS: `~/Library/Application Support/SowTempo/settings.json`
   - Windows: `%APPDATA%\SowTempo\settings.json`
3. Reinstall the application

### Database Error on Startup

**Symptom:** Error message about database corruption or migration.

**Solutions:**

1. Restore from a recent backup
2. If no backup, try removing and reinstalling
3. Contact support with the error message

## Weather Data Issues

### Weather Not Loading

**Symptom:** Dashboard shows no weather data or loading forever.

**Solutions:**

1. Check your internet connection
2. Click **Refresh** on the Dashboard
3. Verify your location is set correctly in Settings
4. Wait and try again — Open-Meteo may be temporarily unavailable

### Wrong Weather Location

**Symptom:** Weather data doesn't match your location.

**Solution:**

1. Go to **Settings > Location & Climate**
2. Re-enter your ZIP code or coordinates
3. Verify the location looks correct
4. Save and refresh

### Frost Dates Not Found

**Symptom:** Frost dates show as empty or unavailable.

**Solutions:**

1. Check your ZIP code is valid (US only for auto-lookup)
2. Enter frost dates manually if outside the US
3. Use the frost date finder tools online to research your dates

## Canvas and Layout Issues

### Canvas Won't Draw

**Symptom:** Clicking and dragging doesn't create beds.

**Solutions:**

1. Ensure a drawing tool is selected (B, C, or P key)
2. The Select tool (V) doesn't create beds
3. Try a different browser renderer (if available in settings)

### Beds Not Visible

**Symptom:** Beds exist but aren't showing on canvas.

**Solutions:**

1. Press **F** to fit all beds in view
2. Zoom out with scroll or - key
3. Check if you're viewing the correct season
4. Check if beds are filtered out

### Slow Canvas Performance

**Symptom:** Garden Layout lags or is sluggish.

**Solutions:**

1. Reduce the number of visible beds
2. Simplify complex polygon beds
3. Close other applications
4. Ensure you have sufficient RAM

### Export Creates Blank PDF

**Symptom:** Exported PDF is empty or missing content.

**Solutions:**

1. Ensure beds exist in the current view
2. Check export options include beds/placements
3. Try a different page size or orientation
4. Check for beds outside the visible area

## Data Issues

### Plantings Not Showing

**Symptom:** Added plantings don't appear in schedule.

**Solutions:**

1. Check the active season (plantings are season-specific)
2. Check status filters aren't hiding them
3. Look in the correct category
4. Try searching by name

### Lost Data After Update

**Symptom:** Data missing after updating SowTempo.

**Solutions:**

1. Check if you're in the correct season
2. Look for data in archived seasons
3. Restore from backup if available
4. Contact support — data should not be lost in updates

### Can't Delete Items

**Symptom:** Delete button doesn't work or gives error.

**Solutions:**

1. Ensure the item is selected
2. Check if there are dependent records
3. Try from a different view
4. Refresh and try again

## Performance Issues

### App Running Slowly

**Symptom:** General sluggishness throughout the app.

**Solutions:**

1. Close and reopen the application
2. Check available system memory
3. Close other heavy applications
4. Consider archiving old seasons

### High Memory Usage

**Symptom:** SowTempo using excessive RAM.

**Solutions:**

1. Reduce number of visible records
2. Archive old seasons
3. Restart the application periodically
4. This is expected with large data sets

## Sync and Backup Issues

### Backup Failed

**Symptom:** Error when creating backup.

**Solutions:**

1. Check disk space at destination
2. Try a different save location
3. Ensure you have write permissions
4. Close and retry

### Restore Failed

**Symptom:** Error when restoring from backup.

**Solutions:**

1. Verify the backup file isn't corrupted
2. Ensure backup version is compatible
3. Check disk space
4. Try a different backup if available

## Getting More Help

### Check for Updates

Many issues are fixed in newer versions:

1. Go to **Settings > About**
2. Click **Check for Updates**
3. Install any available updates

### Report an Issue

If you can't resolve the problem:

1. Go to [GitHub Issues](https://github.com/mattnudi/SowTempoDocs/issues)
2. Search for existing reports
3. If not found, create a new issue with:
   - SowTempo version
   - Operating system and version
   - Steps to reproduce
   - Error messages (if any)
   - Screenshots (if helpful)

### Collect Debug Information

For bug reports, helpful information includes:

1. Go to **Settings > About**
2. Note the version and build number
3. Check for error messages in the console:
   - macOS: Open Console.app, filter by "SowTempo"
   - Windows: Check Event Viewer
   - Linux: Check terminal output

---

See also: [FAQ →](/docs/reference/faq)
