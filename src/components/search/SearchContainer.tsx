import FoundedCount from './FoundedCount';
import SearchInput from './SearchInput';

const SearchContainer = ({ countriesCount }: { countriesCount: number }) => {
  return (
    <div className="flex flex-col gap-2 md:items-center md:flex-row justify-between">
      <FoundedCount countriesCount={countriesCount} />
      <SearchInput />
    </div>
  );
};

export default SearchContainer;
