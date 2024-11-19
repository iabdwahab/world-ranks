import { countryInterface } from '@/types_interfaces/types_interfaces';

const CountriesTable = ({ data }: { data: countryInterface[] }) => {
  return (
    <table className="border h-fit w-full">
      <thead>
        <tr className="bg-black">
          <th className="w-[70px]">Flag</th>
          <th>Name</th>
          <th>Population</th>
          <th>
            Area (km<sup>2</sup>)
          </th>
          <th>Region</th>
        </tr>
      </thead>
      <tbody>
        {data.map((country) => {
          return (
            <tr key={country.name.common} className="font-medium border-b">
              <td>
                <img src={country.flags.svg} alt={country.flags.alt} className="w-full min-w-[70px] h-[40px] object-cover rounded" />
              </td>
              <td>{country.name.common}</td>
              <td>{country.population}</td>
              <td>{country.area}</td>
              <td>{country.region}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default CountriesTable;
