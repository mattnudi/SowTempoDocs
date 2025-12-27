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

- **Click a block** — Opens the planting detail page
- **Hover over a block** — Shows planting details tooltip
- **Drag a block** — Reschedule the planting to a new date

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

Click **+ Add Planting** to open the multi-step planting wizard:

![Add Planting Modal](/img/screenshots/schedule-add-planting.png)

### Step 1: Vegetable

Search for and select a vegetable by name. You can browse categories or use the search box to find specific plants.

### Step 2: Variety (Optional)

If the vegetable has multiple varieties:

1. Browse available varieties
2. Compare days to maturity and characteristics
3. Select your preferred variety

Or click **Skip** to use the generic vegetable without a specific variety.

### Step 3: Schedule

Choose how you'll plant and set your dates:

| Method           | Description                              |
| ---------------- | ---------------------------------------- |
| **Seed Indoors** | Start seeds inside, transplant later     |
| **Direct Sow**   | Plant seeds directly in the garden       |
| **Transplant**   | Plant purchased or pre-started seedlings |

SowTempo calculates recommended dates based on:

- Your frost dates from the active season
- The plant's frost tolerance
- Days to maturity
- Indoor seed starting lead time

You can use the calculated dates or toggle "Use custom dates" to set your own.

:::tip
Dates are estimates. Adjust them based on your experience, microclimate, or specific variety requirements.
:::

### Step 4: Tasks

Plan the tasks for this planting. SowTempo suggests default tasks based on the planting method, but you can:

- Add custom tasks
- Adjust task dates and durations
- Remove tasks you don't need

Tasks appear on the calendar as spanning badges and in the Tasks section.

### Step 5: Quantity & Seeds

Set how many plants you'll grow:

- **Quantity** — Number of plants
- **Notes** — Growing notes or reminders

If you have matching seeds in your Seed Inventory, you can optionally:

- Select seeds to deduct from inventory
- Specify how many seeds to use
- Skip seed deduction if preferred

### Step 6: Succession (Optional)

Create multiple staggered plantings at once:

- **Enable succession planting** — Toggle on to create multiple plantings
- **Interval** — Days between each planting (default 14)
- **Count** — Total number of succession plantings

This is useful for continuous harvest of lettuce, beans, or other quick-growing crops.

### Step 7: Review

Review all your selections before creating:

- Vegetable and variety
- Planting method and dates
- Number of tasks that will be created
- Quantity and notes
- Succession settings (if enabled)

Click **Create Planting** to add to your schedule.

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

## Succession Plantings

When you create a planting with succession enabled (Step 6 of the wizard), SowTempo automatically creates multiple plantings with staggered dates. Each succession planting is grouped together in the sidebar for easy management.

This is useful for:

- Staggered lettuce sowings for continuous harvest
- Multiple bean plantings throughout the season
- Extended harvest windows for quick-maturing crops

## Exporting the Schedule

### PDF Export

Generate a printable planting calendar:

1. Click the **Export** button in the page header
2. Choose a format:
   - **Monthly Calendar** — Visual calendar with spanning badges like the app
   - **Monthly Overview** — Month-by-month summary with task tables
   - **Weekly Calendar** — Week-by-week grid with daily tasks
3. Select date range (start and end dates)
4. Choose paper size (Letter, A4, Legal) and orientation
5. Configure include options:
   - Variety names
   - Bed location
   - Spacing info
   - Checkboxes for tracking
6. Click **Export PDF**

The PDF is generated and automatically downloaded.

## Task Integration

Tasks you create during the planting wizard (Step 4) appear:

- On the calendar as colored spanning badges
- In the Tasks section for the active season
- On the planting's detail page under the Tasks tab

Each task shows its timing relative to key dates (e.g., "2 weeks before transplant") and can be marked complete as you work through your season.

## Tips for Planting Schedule

1. **Plan early** — Enter plantings before the season starts
2. **Use succession** — Duplicate plantings for continuous harvest
3. **Track actual dates** — Update from estimated to actual as you go
4. **Link to beds** — Connect plantings to layout for complete tracking
5. **Review regularly** — Check the schedule weekly to stay on track

---

Next: [Vegetables Database →](/docs/features/vegetables-database)
