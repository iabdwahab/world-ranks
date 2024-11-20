'use client';
import { regions } from '@/data/localData';
import { createContext, useState } from 'react';

export const FilterContext = createContext<{
  sortType: string;
  setSortType: (value: string) => void;
  selectedRegions: string[];
  setSelectedRegions: (value: string[]) => void;
  unMembersOnly: boolean;
  setUnMembersOnly: (value: boolean) => void;
  independentOnly: boolean;
  setIndependentOnly: (value: boolean) => void;
}>({
  sortType: '',
  setSortType: () => {},
  selectedRegions: [],
  setSelectedRegions: () => {},
  unMembersOnly: false,
  setUnMembersOnly: () => {},
  independentOnly: false,
  setIndependentOnly: () => {},
});

export const RegionContext = createContext([]);

const FilterProvider = ({ children }: { children: React.ReactNode }) => {
  const [sortType, setSortType] = useState('');
  const [selectedRegions, setSelectedRegions] = useState<string[]>(regions);
  const [unMembersOnly, setUnMembersOnly] = useState<boolean>(false);
  const [independentOnly, setIndependentOnly] = useState<boolean>(false);

  return (
    <FilterContext.Provider
      value={{
        sortType,
        setSortType,
        selectedRegions,
        setSelectedRegions,
        unMembersOnly,
        setUnMembersOnly,
        independentOnly,
        setIndependentOnly,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;
