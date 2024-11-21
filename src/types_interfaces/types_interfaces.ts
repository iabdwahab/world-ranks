export interface countryInterface {
  flags: {
    svg: string;
    alt: string;
  };
  name: {
    common: string;
    official: string;
  };
  population: number;
  area: number;
  region: string;
  independent: boolean;
  unMember: boolean;
  cca2: string;
  capital: string;
  continents: string[];
}
