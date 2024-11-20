'use client';
import { regions } from '@/data/localData';

export function selectRegion(region: string, selectedRegions: string[], setSelectedRegions: (value: string[]) => void) {
  if (selectedRegions.includes(region)) {
    const clickedIndex = selectedRegions.indexOf(region);
    const splicedArr = selectedRegions.toSpliced(clickedIndex, 1);

    // If Deleted Region is the last in the array.
    if (splicedArr.length) {
      setSelectedRegions(splicedArr);
    } else {
      setSelectedRegions(regions);
    }

    //
  } else {
    setSelectedRegions([...selectedRegions, region]);
  }
}
