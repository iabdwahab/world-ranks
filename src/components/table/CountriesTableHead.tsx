import React from 'react';

const CountriesTableHead = () => {
  return (
    <thead>
      <tr className="bg-black">
        <th className="text-center">#</th>
        <th className="w-[70px] text-center">Flag</th>
        <th>Name</th>
        <th>Population</th>
        <th>
          Area (km<sup>2</sup>)
        </th>
        <th>Region</th>
      </tr>
    </thead>
  );
};

export default CountriesTableHead;
