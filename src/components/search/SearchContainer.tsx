import FoundedCount from './FoundedCount';
import SearchInput from './SearchInput';

const SearchContainer = () => {
  return (
    <div className="flex items-center justify-between">
      <FoundedCount countriesCount={20} />
      <SearchInput />
    </div>
  );
};

export default SearchContainer;
