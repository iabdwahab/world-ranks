import Header from '@/components/header/Header';
import SearchContainer from '@/components/search/SearchContainer';
import Sidebar from '@/components/sidebar/Sidebar';
import CountriesTable from '@/components/table/CountriesTable';

export default function Home() {
  return (
    <div>
      <Header />
      <div className="container">
        <main className="border rounded-md my-4 p-3">
          <SearchContainer />
          <div className="grid lg:grid-cols-main-grid gap-6 my-4">
            <aside>
              <Sidebar />
            </aside>
            <div className="overflow-x-scroll">
              <CountriesTable />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
