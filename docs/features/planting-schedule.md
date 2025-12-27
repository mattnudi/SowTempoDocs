---
sidebar_position: 3
---

# Planting Schedule

The Planting Schedule is where you plan, track, and manage all your plantings throughout the growing season. It provides a full-year calendar view with automatic date calculations based on your frost dates.

![Planting Schedule Overview](/img/screenshots/schedule-overview.png)

## Interface Overview

The Planting Schedule has two main areas:

1. **Planting Sidebar (left)** — Hierarchical list of all plantings
2. **Calendar View (right)** — 12-month visual calendar

## Planting Sidebar

The sidebar organizes your plantings by vegetable category:

![Planting Sidebar](/img/screenshots/schedule-sidebar.png)

### Categories

Plantings are grouped by plant family:

- Tomatoes
- Peppers
- Leafy Greens
- Brassicas
- Legumes
- Cucurbits
- Herbs
- And more...

Click a category to expand and see individual plantings.

### Planting Information

Each planting shows:

- **Variety name** — e.g., "Cherokee Purple Tomato"
- **Days to maturity** — Expected time to harvest
- **Status badge** — Current growth phase
- **Edit button** — Quick access to edit

### Search and Filter

Use the search box to find specific plantings by name or variety.

## Calendar View

The calendar displays all 12 months with visual indicators for planting activities:

![Calendar View](/img/screenshots/schedule-calendar.png)

### Date Markers

Colored blocks indicate key dates:

| Color  | Activity             |
| ------ | -------------------- |
| Purple | Seed start (indoors) |
| Green  | Transplant date      |
| Orange | Direct sow date      |
| Red    | Harvest window       |

Each block spans approximately 7 days to show the activity window.

### Interacting with the Calendar

- **Click a block** — Opens the planting editor
- **Hover over a block** — Shows planting details
- **Click a date** — Create a new planting starting that date

### Status Filtering

Filter visible plantings by status using the buttons above the calendar:

- **Planned** — Not yet started
- **Seeds Started** — Seeds germinating
- **Transplanted** — Moved to garden
- **Direct Sown** — Planted directly outside
- **Growing** — Active growth
- **Harvesting** — Currently harvesting
- **Completed** — Season finished
- **Failed** — Did not survive

Click multiple buttons to show several statuses at once.

## Creating a Planting

### Add Planting Button

Click **+ Add Planting** to open the planting editor:

![Add Planting Modal](/img/screenshots/schedule-add-planting.png)

### Step 1: Select Vegetable

1. Search for a vegetable by name
2. Browse categories if you're not sure what to grow
3. Click to select the vegetable

### Step 2: Choose Variety (Optional)

If the vegetable has multiple varieties:

1. Browse available varieties
2. Compare days to maturity and characteristics
3. Select your preferred variety

Or click **Use generic** to skip variety selection.

### Step 3: Planting Method

Choose how you'll plant:

| Method           | Description                              |
| ---------------- | ---------------------------------------- |
| **Seed Indoors** | Start seeds inside, transplant later     |
| **Direct Sow**   | Plant seeds directly in the garden       |
| **Transplant**   | Plant purchased or pre-started seedlings |

This affects which dates are calculated and tracked.

### Step 4: Review Dates

SowTempo calculates recommended dates based on:

- Your last/first frost dates
- The plant's frost tolerance
- Days to maturity
- Indoor seed starting lead time

You'll see:

| Date                 | Description                    |
| -------------------- | ------------------------------ |
| **Seed Start Date**  | When to plant seeds indoors    |
| **Transplant Date**  | When to move seedlings outside |
| **Direct Sow Date**  | When to plant seeds outside    |
| **Expected Harvest** | Estimated harvest window       |

![Calculated Dates](/img/screenshots/schedule-dates.png)

:::tip
Dates are estimates. Adjust them based on your experience, microclimate, or specific variety requirements.
:::

### Step 5: Additional Options

- **Plant Count** — Number of plants
- **Garden Bed** — Assign to a bed from Garden Layout
- **Notes** — Growing notes or reminders

### Step 6: Save

Click **Save** to add the planting to your schedule. It appears in the sidebar and on the calendar.

## Editing Plantings

### Opening the Editor

- Click a planting in the sidebar
- Click a date block on the calendar
- Use the **Edit** button in the planting row

### Updating Dates

As your season progresses, update dates from "estimated" to "actual":

1. Open the planting editor
2. Click a date field
3. Toggle from "Estimated" to "Actual"
4. Select the actual date

![Actual vs Estimated](/img/screenshots/schedule-actual-date.png)

### Changing Status

Update the status as your plant progresses:

1. Open the planting editor
2. Select the new status from the dropdown
3. Save changes

Status progression typically follows:
**Planned → Seeds Started → Transplanted → Growing → Harvesting → Completed**

### Deleting Plantings

1. Open the planting editor
2. Click **Delete Planting**
3. Confirm deletion

:::warning
Deleting a planting removes all associated tasks and harvest records. This cannot be undone.
:::

## Duplicate Plantings

Create succession plantings by duplicating:

1. Open a planting
2. Click **Duplicate**
3. Adjust dates for the next succession
4. Save

This is useful for:

- Staggered lettuce sowings
- Multiple tomato transplant dates
- Successive bean plantings

## Linking to Garden Layout

Connect plantings to physical beds:

1. Open the planting editor
2. In the **Garden Bed** dropdown, select a bed
3. Save

This links the planting to a specific location, enabling:

- Spatial tracking in Garden Layout
- Bed timeline views
- Crop rotation planning

## Exporting the Schedule

### PDF Export

Generate a printable planting calendar:

1. Click **Export > PDF**
2. Select date range (season, year, or custom)
3. Choose which plantings to include
4. Configure layout options
5. Click **Export**

The PDF includes:

- Month-by-month calendar
- Planting dates and activities
- Variety information

## Automatic Task Generation

When you create a planting, SowTempo automatically generates tasks:

- **Start seeds** — Reminder to sow indoors
- **Transplant seedlings** — When to move outside
- **Direct sow** — When to plant seeds outside
- **Begin harvest** — When harvest should begin

Tasks appear in the Tasks section and on your [Dashboard](/docs/features/dashboard).

## Tips for Planting Schedule

1. **Plan early** — Enter plantings before the season starts
2. **Use succession** — Duplicate plantings for continuous harvest
3. **Track actual dates** — Update from estimated to actual as you go
4. **Link to beds** — Connect plantings to layout for complete tracking
5. **Review regularly** — Check the schedule weekly to stay on track

---

Next: [Vegetables Database →](/docs/features/vegetables-database)
