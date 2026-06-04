export function yearsToTarget(
  initialPopulation: number,
  naturalIncrease: number,
  immigration: number,
  targetPopulation: number,
): number {
  let currentPopulation = initialPopulation;
  let years = 0;

  while (currentPopulation <= targetPopulation) {
    currentPopulation +=
      immigration + Math.floor((currentPopulation * naturalIncrease) / 100);
    years++;
  }

  return years;
}
