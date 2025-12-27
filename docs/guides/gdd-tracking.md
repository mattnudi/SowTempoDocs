---
sidebar_position: 3
---

# Growing Degree Days (GDD) Tracking

Growing Degree Days provide a more accurate way to predict plant maturity than simply counting calendar days. This guide explains how GDD works and how to use it in SowTempo.

## What Are Growing Degree Days?

**Growing Degree Days (GDD)** measure heat accumulation over time. Plants need a certain amount of heat energy to mature, and GDD tracks that energy.

Unlike calendar days, GDD accounts for temperature variation:

- A warm week contributes more GDD
- A cool week contributes less GDD
- The plant matures when it receives enough total heat

## Why GDD Matters

Calendar days can mislead you:

| Scenario            | Calendar Days | Reality                        |
| ------------------- | ------------- | ------------------------------ |
| Cool spring         | Says 75 days  | Plant not ready — too cold     |
| Heat wave           | Says 75 days  | Plant ready early — extra heat |
| Mild steady weather | Says 75 days  | Fairly accurate                |

GDD gives consistent predictions regardless of weather variations.

## How GDD Is Calculated

The basic formula:

```
Daily GDD = ((High Temp + Low Temp) / 2) - Base Temp
```

Where:

- **High Temp** — Day's maximum temperature
- **Low Temp** — Day's minimum temperature
- **Base Temp** — Minimum temperature for growth (usually 50°F / 10°C)

If the calculation results in a negative number, that day contributes 0 GDD (plants don't grow below base temperature).

### Example Calculation

For a day with High = 80°F, Low = 60°F, Base = 50°F:

```
GDD = ((80 + 60) / 2) - 50
GDD = 70 - 50
GDD = 20 GDD for that day
```

### Seasonal Accumulation

GDD accumulates from planting:

| Day | High | Low | Daily GDD | Cumulative GDD |
| --- | ---- | --- | --------- | -------------- |
| 1   | 70   | 50  | 10        | 10             |
| 2   | 75   | 55  | 15        | 25             |
| 3   | 80   | 60  | 20        | 45             |
| 4   | 65   | 45  | 5         | 50             |
| ... | ...  | ... | ...       | ...            |

When cumulative GDD reaches the plant's requirement, it's ready.

## Base Temperatures

Different plants use different base temperatures:

| Crop Type         | Base Temp (°F) | Base Temp (°C) |
| ----------------- | -------------- | -------------- |
| Cool-season crops | 40°F           | 4.4°C          |
| Most vegetables   | 50°F           | 10°C           |
| Warm-season crops | 55°F           | 12.8°C         |
| Very tender crops | 60°F           | 15.5°C         |

SowTempo uses appropriate base temperatures for each vegetable automatically.

## GDD in SowTempo

### Viewing GDD Progress

On the Dashboard, the GDD card shows:

- Current accumulated GDD for the season
- Progress toward plant maturity targets
- Visual chart of accumulation

![GDD Dashboard](/img/screenshots/guide-gdd-dashboard.png)

### GDD in Planting Details

Each planting shows:

- GDD required for maturity
- Current GDD accumulated since planting
- Estimated harvest based on GDD forecast

### GDD Analytics

In Analytics, view:

- GDD accumulation chart over time
- Comparison with previous seasons
- Historical patterns

## Interpreting GDD Data

### Ahead of Schedule

If GDD is accumulating faster than average:

- Plants may mature early
- Prepare for earlier harvest
- Consider succession planting adjustments

### Behind Schedule

If GDD is accumulating slowly:

- Plants will mature later
- Extend harvest expectations
- Frost protection may be needed

### Comparing Seasons

Use GDD to compare years:

- A "warm" year has high GDD accumulation
- A "cool" year has low GDD accumulation
- Explains harvest timing differences

## GDD Requirements by Crop

Approximate GDD requirements (base 50°F):

| Crop          | GDD to Maturity |
| ------------- | --------------- |
| Radishes      | 300-500         |
| Lettuce       | 500-700         |
| Peas          | 800-1000        |
| Beans         | 1000-1200       |
| Tomatoes      | 1200-1400       |
| Peppers       | 1400-1600       |
| Sweet Corn    | 1800-2500       |
| Winter Squash | 2000-2500       |

SowTempo uses variety-specific values where available.

## Practical Applications

### Predicting Harvest Date

SowTempo forecasts harvest by:

1. Tracking GDD accumulated since planting
2. Comparing to the plant's GDD requirement
3. Projecting future GDD from weather forecasts
4. Estimating when the target will be reached

### Comparing Varieties

Use GDD to compare varieties:

- Lower GDD = faster maturity
- Higher GDD = longer season needed
- Choose based on your typical GDD accumulation

### Planning Successions

Schedule succession plantings by GDD:

- Instead of "plant every 2 weeks"
- Plant when previous planting reaches X GDD
- Accounts for weather variations

## Weather Data Integration

SowTempo gets GDD data from:

### Historical Data

- Past temperatures from Open-Meteo archive
- Accurate to your location
- Used for accumulated GDD

### Forecast Data

- Future temperatures from Open-Meteo forecast
- 7-14 day projections
- Used for harvest predictions

### Updating

Click **Refresh** on Dashboard to:

- Update current weather
- Recalculate GDD totals
- Refresh predictions

## Tips for GDD Success

1. **Trust GDD over days** — Especially in variable weather
2. **Note your observations** — Record when harvests actually occur
3. **Compare years** — Understand your climate patterns
4. **Watch forecasts** — Heat waves accelerate GDD
5. **Adjust for microclimates** — Your garden may be warmer/cooler

## Limitations of GDD

GDD isn't perfect:

- **Doesn't account for extremes** — Very high temps can stress plants
- **Ignores other factors** — Water, nutrients, pests matter too
- **Base temp matters** — Wrong base temp = wrong predictions
- **Variety-specific** — Same vegetable, different varieties = different GDD

Use GDD as a guide, not gospel. Combine with observation.

---

Next: [Succession Planting →](/docs/guides/succession-planting)
