const CountriesTable = () => {
  return (
    <table className="border h-fit">
      <thead>
        <tr className="bg-black">
          <th>Flag</th>
          <th>Name</th>
          <th>Population</th>
          <th>
            Area (km<sup>2</sup>)
          </th>
          <th>Region</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Flag</td>
          <td>Name</td>
          <td>Population</td>
          <td>Area</td>
          <td>Region</td>
        </tr>
        <tr>
          <td>Flag</td>
          <td>Name</td>
          <td>Population</td>
          <td>Area</td>
          <td>Region</td>
        </tr>

        <tr>
          <td>Flag</td>
          <td>Name</td>
          <td>Population</td>
          <td>Area</td>
          <td>Region</td>
        </tr>
      </tbody>
    </table>
  );
};

export default CountriesTable;
