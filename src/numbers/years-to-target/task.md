# Years to Target Population

## Problem

A city has an initial population that grows each year through natural increase (a percentage of the current population) and immigration (a fixed number of people). Given a target population, return how many years it takes for the population to **exceed** the target.

Each year the population changes as follows:

```
newPopulation = currentPopulation + immigration + floor(currentPopulation * naturalIncrease / 100)
```

## Examples

```ts
yearsToTarget(1000, 2, 50, 1200); // 3
// Year 1: 1000 + 50 + 20 = 1070
// Year 2: 1070 + 50 + 21 = 1141
// Year 3: 1141 + 50 + 22 = 1213 > 1200 ✓
```

```ts
yearsToTarget(1500, 5, 100, 5000); // 15
```

## Constraints

- `initialPopulation >= 0`
- `naturalIncrease >= 0` (percentage)
- `immigration >= 0`
- `targetPopulation >= 0`
- If `initialPopulation > targetPopulation`, return `0`

## Notes

- Use `Math.floor` for the natural increase portion each year
- Simulate year by year with a `while` loop — no closed-form solution due to flooring
