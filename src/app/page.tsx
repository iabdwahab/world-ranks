import Header from '@/components/header/Header';
import SearchContainer from '@/components/search/SearchContainer';

export default function Home() {
  return (
    <div>
      <Header />
      <div className="container">
        <main className="border rounded-md my-4 p-3">
          <SearchContainer />
        </main>
      </div>
    </div>
  );
}
