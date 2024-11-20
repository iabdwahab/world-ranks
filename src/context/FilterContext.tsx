'use client';
import React, { createContext, useState } from 'react';

export const FilterContext = createContext<{
  sortType: string;
  setSortType: Function;
}>({
  sortType: '',
  setSortType: () => {},
});

const FilterProvider = ({ children }: { children: React.ReactNode }) => {
  const [sortType, setSortType] = useState('');

  return (
    <FilterContext.Provider
      value={{
        sortType,
        setSortType,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;
