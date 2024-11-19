import { countryInterface } from '@/types_interfaces/types_interfaces';

export async function getCountries() {
  const apiResponse = await fetch('https://restcountries.com/v3.1/all?fields=flags,name,region,area,population');
  const apiResult: countryInterface[] = await apiResponse.json();

  const countries = apiResult.filter((country) => {
    // Free Palestine.
    return country.name.common !== 'Israel';
  });

  return countries;
}
