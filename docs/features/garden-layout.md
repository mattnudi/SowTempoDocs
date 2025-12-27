---
sidebar_position: 2
---

# Garden Layout

The Garden Layout is SowTempo's visual garden designer — a canvas where you can draw beds, place plants, and plan your garden's physical arrangement.

![Garden Layout Overview](/img/screenshots/layout-overview.png)

## Canvas Basics

### Navigating the Canvas

- **Zoom:** Scroll up/down or use the zoom controls
- **Pan:** Click and drag on empty space
- **Fit to View:** Click the fit button or press **F** to see all beds

### Canvas Tools

The toolbar on the left provides drawing and selection tools:

| Tool      | Shortcut | Description                   |
| --------- | -------- | ----------------------------- |
| Select    | **V**    | Select, move, and resize beds |
| Rectangle | **B**    | Draw rectangular beds         |
| Circle    | **C**    | Draw circular beds            |
| Polygon   | **P**    | Draw custom polygon beds      |
| Plant     | **A**    | Add plant placements to beds  |

![Canvas Toolbar](/img/screenshots/layout-toolbar.png)

### Grid and Rulers

- **Grid Toggle:** Show/hide alignment grid
- **Rulers:** Measurement rulers along canvas edges
- **Snap to Grid:** Beds align to grid when enabled

## Drawing Beds

### Rectangle Beds

1. Select the **Rectangle** tool (**B**)
2. Click where you want a corner
3. Drag to set the size
4. Release to create the bed

![Draw Rectangle](/img/screenshots/layout-draw-rectangle.png)

### Circle Beds

1. Select the **Circle** tool (**C**)
2. Click where you want the center
3. Drag to set the radius
4. Release to create the bed

### Polygon Beds

For irregularly shaped beds:

1. Select the **Polygon** tool (**P**)
2. Click to place each vertex
3. Continue clicking to add more points
4. Press **Enter** or double-click to close the shape

![Draw Polygon](/img/screenshots/layout-draw-polygon.png)

:::tip
Polygon beds are great for curved garden edges, raised beds built around obstacles, or any non-rectangular shape.
:::

## Selecting and Editing Beds

### Selecting Beds

- **Click** a bed to select it
- **Cmd/Ctrl + Click** to add to selection (multi-select)
- **Click empty space** to deselect all

### Moving Beds

1. Select the bed with the **Select** tool (**V**)
2. Drag to move it
3. Release to place

### Resizing Beds

1. Select the bed
2. Drag the corner or edge handles
3. Release when sized correctly

### Rotating Beds

1. Select the bed
2. Drag the rotation handle (above the bed)
3. Or enter a specific angle in the Inspector

### Deleting Beds

1. Select the bed(s)
2. Press **Delete** or **Backspace**
3. Confirm deletion

## Bed Inspector

When you select a bed, the Inspector panel appears on the right:

![Bed Inspector](/img/screenshots/layout-bed-inspector.png)

### Properties

| Property       | Description                                       |
| -------------- | ------------------------------------------------- |
| **Name**       | Descriptive name for the bed                      |
| **Dimensions** | Length and width (rectangles) or radius (circles) |
| **Position**   | X and Y coordinates on canvas                     |
| **Rotation**   | Angle in degrees                                  |
| **Color**      | Bed fill color for visual distinction             |

### Bed Actions

- **Duplicate** — Create a copy of the bed
- **Delete** — Remove the bed
- **View Timeline** — See planting history for this bed

## Plant Placements

Plant placements represent where specific vegetables are planted within a bed.

### Adding a Placement

1. Select a bed
2. Choose the **Plant** tool (**A**)
3. Click in the bed where you want the placement
4. Select a vegetable from the picker
5. Configure plant count and pattern

![Add Placement](/img/screenshots/layout-add-placement.png)

### Placement Properties

| Property           | Description                 |
| ------------------ | --------------------------- |
| **Vegetable**      | The plant type              |
| **Plant Count**    | Number of individual plants |
| **Layout Pattern** | How plants are arranged     |
| **Spacing**        | Distance between plants     |
| **Size**           | Placement area dimensions   |

### Layout Patterns

- **Grid** — Plants in rows and columns
- **Hexagonal** — Offset rows for tighter spacing
- **Row** — Single line of plants
- **Block** — Dense cluster planting

![Layout Patterns](/img/screenshots/layout-patterns.png)

### Placement Visualization

Placements show:

- Plant icons based on vegetable type
- Plant count indicator
- Proper spacing between plants
- Color coding by plant family

## Merge Operations

Combine or modify beds using merge operations:

### Union

Combines two or more overlapping beds into one:

1. Select multiple beds (Cmd/Ctrl + Click)
2. Click **Union** in the toolbar
3. Beds merge into a single shape

### Difference

Subtracts one bed from another:

1. Select two overlapping beds
2. Click **Difference**
3. The second bed is "cut out" of the first

### Intersection

Keeps only the overlapping area:

1. Select two overlapping beds
2. Click **Intersection**
3. Only the shared area remains

![Merge Operations](/img/screenshots/layout-merge-operations.png)

## Timeline Navigation

The timeline scrubber at the bottom lets you view your garden at different points in the season:

![Timeline Scrubber](/img/screenshots/layout-timeline.png)

- Drag the slider to move through time
- See how plantings change throughout the season
- View what was planted when
- Plan succession planting visually

### Bed Timeline Modal

Click **View Timeline** in the Bed Inspector to see:

- All placements in this bed over time
- When each was planted and harvested
- Historical usage of the bed

## Exporting Your Layout

### PDF Export

Generate a printable garden map:

1. Click **Export > PDF**
2. Configure options:
   - **Include beds** — Show bed outlines
   - **Include placements** — Show plant positions
   - **Include labels** — Add text labels
   - **Page size** — Letter, A4, or custom
   - **Orientation** — Portrait or landscape
3. Click **Export**

![PDF Export](/img/screenshots/layout-export-pdf.png)

## Bed List Sidebar

The left sidebar shows all beds in the current season:

- Click a bed to select and center on it
- See bed names and quick stats
- Collapse/expand for more canvas space

## Keyboard Shortcuts

| Shortcut                 | Action                          |
| ------------------------ | ------------------------------- |
| **V**                    | Select tool                     |
| **B**                    | Rectangle bed tool              |
| **C**                    | Circle bed tool                 |
| **P**                    | Polygon bed tool                |
| **A**                    | Plant placement tool            |
| **F**                    | Fit all beds in view            |
| **Delete**               | Delete selected                 |
| **Cmd/Ctrl + Z**         | Undo                            |
| **Cmd/Ctrl + Shift + Z** | Redo                            |
| **Cmd/Ctrl + A**         | Select all beds                 |
| **Escape**               | Deselect all / Cancel operation |

## Tips for Garden Layout

1. **Start with beds** — Draw your physical bed locations first
2. **Use real measurements** — Enter actual dimensions for accurate planning
3. **Color code** — Use different colors to distinguish bed types
4. **Plan rotations** — Use the timeline to plan crop rotation
5. **Export before planting** — Print a map to take to the garden

---

Next: [Planting Schedule →](/docs/features/planting-schedule)
