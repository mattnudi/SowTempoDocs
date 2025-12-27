---
sidebar_position: 1
---

# Installation

SowTempo is a desktop application available for macOS, Windows, and Linux. Download the version for your operating system and follow the installation instructions below.

## System Requirements

| Platform | Minimum Version            | Notes                             |
| -------- | -------------------------- | --------------------------------- |
| macOS    | 10.15 (Catalina) or later  | Intel and Apple Silicon supported |
| Windows  | Windows 10 or later        | 64-bit only                       |
| Linux    | Ubuntu 20.04 or equivalent | Most distributions supported      |

**Additional requirements:**

- 200 MB disk space
- Internet connection (for weather data only)

## Download

Download the latest version from the [SowTempo releases page](https://github.com/mattnudi/SowTempoDocs/releases).

Choose the appropriate file for your system:

- **macOS:** `SowTempo-x.x.x.dmg` (Universal) or `SowTempo-x.x.x-arm64.dmg` (Apple Silicon)
- **Windows:** `SowTempo-Setup-x.x.x.exe`
- **Linux:** `SowTempo-x.x.x.AppImage` or `.deb` package

## macOS Installation

1. Download the `.dmg` file
2. Double-click to open the disk image
3. Drag SowTempo to your Applications folder

![macOS Installation](/img/screenshots/install-macos.png)

### First Launch on macOS

When you first open SowTempo, macOS may show a security warning because the app is from an "unidentified developer." To open it:

1. Right-click (or Control-click) on SowTempo in Applications
2. Select **Open** from the context menu
3. Click **Open** in the dialog that appears

You only need to do this once. Subsequent launches will work normally.

## Windows Installation

1. Download the `.exe` installer
2. Double-click to run the installer
3. Follow the installation wizard prompts
4. Choose installation location (default is recommended)
5. Click **Install**

![Windows Installation](/img/screenshots/install-windows.png)

### Windows SmartScreen

Windows may show a SmartScreen warning. Click **More info** and then **Run anyway** to proceed with installation.

## Linux Installation

### AppImage (Recommended)

1. Download the `.AppImage` file
2. Make it executable:
   ```bash
   chmod +x SowTempo-x.x.x.AppImage
   ```
3. Run the AppImage:
   ```bash
   ./SowTempo-x.x.x.AppImage
   ```

### Debian/Ubuntu (.deb)

1. Download the `.deb` package
2. Install with:
   ```bash
   sudo dpkg -i sowtempo_x.x.x_amd64.deb
   ```
3. Launch from your applications menu

## Verifying Installation

After installation, launch SowTempo. You should see the welcome screen prompting you to set up your garden location.

![Welcome Screen](/img/screenshots/welcome-screen.png)

## Data Location

SowTempo stores your data locally in these locations:

| Platform | Data Location                             |
| -------- | ----------------------------------------- |
| macOS    | `~/Library/Application Support/SowTempo/` |
| Windows  | `%APPDATA%\SowTempo\`                     |
| Linux    | `~/.config/SowTempo/`                     |

Your database file is named `sowtempo.db`. See [Data Management](/docs/reference/data-management) for backup instructions.

## Uninstalling

### macOS

Drag SowTempo from Applications to Trash. To remove data, also delete `~/Library/Application Support/SowTempo/`.

### Windows

Use **Settings > Apps > SowTempo > Uninstall** or the Control Panel.

### Linux

Remove the AppImage file, or uninstall the package:

```bash
sudo apt remove sowtempo
```

## Troubleshooting Installation

### App won't open on macOS

See [First Launch on macOS](#first-launch-on-macos) above for security settings.

### Installer blocked on Windows

Right-click the installer and select **Properties**. Check the **Unblock** checkbox and click **Apply**.

### Missing dependencies on Linux

Some distributions may need additional libraries:

```bash
sudo apt install libgtk-3-0 libnotify4 libnss3 libxss1
```

For other issues, see [Troubleshooting](/docs/reference/troubleshooting) or [report an issue](https://github.com/mattnudi/SowTempoDocs/issues).

---

Next: [Set Up Your First Garden →](/docs/getting-started/first-garden)
