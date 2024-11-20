import Header from '@/components/header/Header';
import SearchContainer from '@/components/search/SearchContainer';
import Sidebar from '@/components/sidebar/Sidebar';
import CountriesTable from '@/components/table/CountriesTable';
import FilterProvider from '@/context/FilterContext';
import { getCountries } from '@/data/apiData';

export default async function Home() {
  const countries = await getCountries();

  return (
    <div>
      <Header />
      <div className="container">
        <main className="border rounded-md my-4 p-3">
          <SearchContainer countriesCount={countries.length} />
          <FilterProvider>
            <div className="grid lg:grid-cols-main-grid gap-4 my-4">
              <aside className="pr-3 md:border-r">
                <Sidebar />
              </aside>

              <div className="overflow-x-scroll">
                <CountriesTable data={countries} />
              </div>
            </div>
          </FilterProvider>
        </main>
      </div>
    </div>
  );
}
