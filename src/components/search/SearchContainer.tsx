import FoundedCount from './FoundedCount';
import SearchInput from './SearchInput';

const SearchContainer = () => {
  return (
    <div className="flex flex-col gap-2 md:items-center md:flex-row justify-between">
      <FoundedCount countriesCount={20} />
      <SearchInput />
    </div>
  );
};

export default SearchContainer;
