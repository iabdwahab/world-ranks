import { countryInterface } from '@/types_interfaces/types_interfaces';

export function sortCountries(countries: countryInterface[], sortType: string) {
  return countries.sort((a, b) => {
    switch (sortType) {
      case 'area':
        return b.area - a.area;
      default:
        return b.population - a.population;
    }
  });
}
