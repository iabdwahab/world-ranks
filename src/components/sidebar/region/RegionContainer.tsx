'use client';

import { regions } from '@/data/localData';
import React, { useContext } from 'react';
import { selectRegion } from './RegionSelector';
import { FilterContext } from '@/context/FilterContext';

const RegionContainer = () => {
  const { selectedRegions, setSelectedRegions } = useContext(FilterContext);

  return (
    <div className="grid gap-2">
      <h3 className="font-medium">Region</h3>
      <div className="grid grid-cols-2 gap-2">
        {regions.map((region) => {
          return (
            <button key={region} onClick={() => selectRegion(region, selectedRegions, setSelectedRegions)} className={`text-white p-2 rounded-md capitalize ${selectedRegions.includes(region) ? 'bg-black' : 'bg-accent-color'}`}>
              {region}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default RegionContainer;
