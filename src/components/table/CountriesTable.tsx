'use client';
import { FilterContext } from '@/context/FilterContext';
import { countryInterface } from '@/types_interfaces/types_interfaces';
import { sortCountries } from '@/utils/apiDataUtils';
import { useContext } from 'react';

const CountriesTable = ({ data }: { data: countryInterface[] }) => {
  const { sortType } = useContext(FilterContext);
  sortCountries(data, sortType);

  return (
    <table className="border h-fit w-full">
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
      <tbody>
        {data.map((country, index) => {
          return (
            <tr key={country.name.common} className="font-medium border-b">
              <td className="text-center">{index + 1}</td>
              <td>
                <img src={country.flags.svg} alt={country.flags.alt} className="w-full min-w-[70px] h-[40px] object-cover rounded" />
              </td>
              <td>{country.name.common}</td>
              <td>{country.population.toLocaleString()}</td>
              <td>{country.area.toLocaleString()}</td>
              <td>{country.region}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default CountriesTable;
