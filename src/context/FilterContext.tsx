'use client';
import { regions } from '@/data/localData';
import React, { createContext, useState } from 'react';

export const FilterContext = createContext<{
  sortType: string;
  setSortType: (value: string) => void;
  selectedRegions: string[];
  setSelectedRegions: (value: string[]) => void;
}>({
  sortType: '',
  setSortType: () => {},
  selectedRegions: [],
  setSelectedRegions: () => {},
});

export const RegionContext = createContext([]);

const FilterProvider = ({ children }: { children: React.ReactNode }) => {
  const [sortType, setSortType] = useState('');
  const [selectedRegions, setSelectedRegions] = useState<string[]>(regions);

  return (
    <FilterContext.Provider
      value={{
        sortType,
        setSortType,
        selectedRegions,
        setSelectedRegions,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;
