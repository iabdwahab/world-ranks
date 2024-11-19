import Header from '@/components/header/Header';
import SearchContainer from '@/components/search/SearchContainer';
import Sidebar from '@/components/sidebar/Sidebar';

export default function Home() {
  return (
    <div>
      <Header />
      <div className="container">
        <main className="border rounded-md my-4 p-3">
          <SearchContainer />
          <div className="grid lg:grid-cols-main-grid gap-6 my-4">
            <aside className="bg-blue-800">
              <Sidebar />
            </aside>
            <div className="bg-stone-600">Table Content</div>
          </div>
        </main>
      </div>
    </div>
  );
}
