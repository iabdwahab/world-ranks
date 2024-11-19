import Header from '@/components/header/Header';
import SearchContainer from '@/components/search/SearchContainer';
import Sidebar from '@/components/sidebar/Sidebar';
import CountriesTable from '@/components/table/CountriesTable';
import { getCountries } from '@/data/apiData';

export default async function Home() {
  const countries = await getCountries();

  return (
    <div>
      <Header />
      <div className="container">
        <main className="border rounded-md my-4 p-3">
          <SearchContainer countriesCount={countries.length} />
          <div className="grid lg:grid-cols-main-grid gap-6 my-4">
            <aside>
              <Sidebar />
            </aside>
            <div className="overflow-x-scroll">
              <CountriesTable data={countries} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
