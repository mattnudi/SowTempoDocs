---
sidebar_position: 1
---

# Dashboard

The Dashboard is your garden's command center — a single view that shows what's happening now and what needs attention.

![Dashboard Overview](/img/screenshots/dashboard-full.png)

## Quick Stats

The top row shows four key metrics at a glance:

| Stat                 | Description                                 |
| -------------------- | ------------------------------------------- |
| **Active Plantings** | Number of plants currently growing          |
| **GDD Progress**     | Growing Degree Days accumulated this season |
| **Tasks Due**        | Tasks scheduled for today                   |
| **Temperature**      | Current temperature at your location        |

These update automatically or when you click **Refresh**.

## Dashboard Cards

The main dashboard area displays information cards organized in a responsive grid.

### Seasonal Context

Shows your current growing season status:

- **Season name and year**
- **Last frost date** — When spring frost risk ends
- **First frost date** — When fall frost risk begins
- **Days remaining** — Until end of growing season

![Seasonal Context Card](/img/screenshots/dashboard-seasonal-context.png)

### Weather Summary

Current conditions and short-term forecast from Open-Meteo:

- Current temperature and conditions
- High/low for the day
- Precipitation chance
- Wind speed and direction
- 3-day forecast preview

Click the card to see more detailed weather information.

### Today's Tasks

Tasks scheduled for today, organized by priority:

- **Overdue tasks** appear first (highlighted in red)
- Click a task to view details
- Check the box to mark complete
- See linked planting for context

![Today's Tasks Card](/img/screenshots/dashboard-todays-tasks.png)

### Upcoming Plantings

Shows plantings with upcoming activity:

- Seeds to start in the next 2 weeks
- Transplants scheduled soon
- Direct sow dates approaching

Click any planting to open it in the Planting Schedule.

### Harvest Ready

Plants approaching or in their harvest window:

- Days until expected harvest
- Current status (Harvesting, Ready soon)
- Click to log a harvest

### Frost Alert

When frost is in the forecast, this card appears with:

- Expected low temperature
- Date of frost risk
- Affected plantings (frost-sensitive plants)
- Recommended actions

![Frost Alert Card](/img/screenshots/dashboard-frost-alert.png)

:::tip
The frost alert only appears when there's actual frost risk. It automatically dismisses when the danger passes.
:::

### GDD Progress Chart

A visual line chart showing Growing Degree Days accumulation:

- Current GDD vs. target
- Progress toward plant maturity
- Historical comparison (if available)

Learn more in [GDD Tracking](/docs/guides/gdd-tracking).

### Daily Actions

AI-generated recommendations based on:

- Current weather conditions
- Your upcoming tasks
- Season phase (early spring, peak summer, fall prep)
- Plant needs

These suggestions help you prioritize what to do today.

### Active Plantings

List of all currently growing plants:

- Vegetable and variety name
- Current status (Seedlings, Growing, Harvesting)
- Days since last activity
- Quick-action buttons

### Quick Actions

Fast access to common operations:

- **Add Planting** — Create a new planting
- **Log Harvest** — Record a harvest
- **Add Task** — Create a custom task

## Refreshing Data

Click the **Refresh** button in the top right to:

- Update weather data
- Recalculate task counts
- Refresh recommendations

Weather data caches for 15 minutes to minimize API requests.

## Customizing the Dashboard

The dashboard layout is responsive and adapts to your window size:

- **Large screens:** 3-column layout
- **Medium screens:** 2-column layout
- **Small screens:** Single column, stacked cards

Cards that have no relevant data are hidden automatically. For example:

- No frost alert if no frost is forecasted
- No harvest ready if no plants are near maturity
- No upcoming plantings if schedule is empty

## Tips for Using the Dashboard

1. **Check it daily** — The dashboard is designed for quick morning reviews
2. **Use Quick Actions** — Log harvests and complete tasks without leaving the page
3. **Watch the weather** — Weather-aware features help you plan around conditions
4. **Review recommendations** — Daily actions adapt to your specific situation

---

Next: [Garden Layout →](/docs/features/garden-layout)
