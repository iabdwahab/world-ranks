import { countryInterface } from '@/types_interfaces/types_interfaces';
import { sortCountries } from '@/utils/apiDataUtils';

const useTableData = (countries: countryInterface[], sortType: string, selectedRegions: string[], unMembersOnly: boolean, independentOnly: boolean) => {
  // This [sort] function modify countries array.
  sortCountries(countries, sortType);

  // Filter Regions:
  if (selectedRegions.length) {
    countries = countries.filter((country) => {
      return selectedRegions.includes(country.region.toLowerCase());
    });
  }

  // Filter UnitedNations Members Only:
  if (unMembersOnly) {
    countries = countries.filter((country) => {
      return country.unMember === true;
    });
  }

  // Filter Independent Countries Only:
  if (independentOnly) {
    countries = countries.filter((country) => {
      return country.independent === true;
    });
  }

  return countries;
};

export default useTableData;
