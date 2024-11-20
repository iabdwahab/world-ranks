'use client';
import { FilterContext } from '@/context/FilterContext';
import { countryInterface } from '@/types_interfaces/types_interfaces';
import { useContext } from 'react';
import useTableData from './useTableData';
import CountriesTableTr from './CountriesTableTr';
import CountriesTableTdLink from './CountriesTableTdLink';
import CountriesTableHead from './CountriesTableHead';

const CountriesTable = ({ data }: { data: countryInterface[] }) => {
  const { sortType, selectedRegions, unMembersOnly, independentOnly } = useContext(FilterContext);

  const showedCountries = useTableData(data, sortType, selectedRegions, unMembersOnly, independentOnly);

  return (
    <table className="border h-fit w-full">
      <CountriesTableHead />
      <tbody>
        {showedCountries.map((country: countryInterface, index) => {
          const tdsContent: any[] = [index + 1, <img src={country.flags.svg} alt={country.flags.alt} className="w-full min-w-[70px] h-[40px] object-cover rounded" />, country.name.common, country.population.toLocaleString(), country.area.toLocaleString(), country.region];

          return (
            <CountriesTableTr key={index}>
              {tdsContent.map((tdContent, index) => {
                return (
                  <td key={index}>
                    <CountriesTableTdLink href={country.name.common.toLowerCase()}>{tdContent}</CountriesTableTdLink>
                  </td>
                );
              })}
            </CountriesTableTr>
          );
        })}
      </tbody>
    </table>
  );
};

export default CountriesTable;
