import { regions } from '@/data/localData';
import React from 'react';

const RegionContainer = () => {
  return (
    <div className="grid gap-2">
      <h3 className="font-medium">Region</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {regions.map((region) => {
          return (
            <button key={region} className="bg-black text-white p-2 rounded-md capitalize">
              {region}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default RegionContainer;
