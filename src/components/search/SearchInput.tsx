import SearchIcon from '../icons/SearchIcon';

const SearchInput = () => {
  return (
    <div className="flex items-center border rounded-md overflow-hidden outline-2 focus-within:outline">
      <div className="bg-white p-2">
        <SearchIcon />
      </div>
      <input type="text" className="p-2 w-[400px] font-medium focus:outline-none" placeholder="Search by Name, Region, Subregion." />
      <button className="bg-black text-white py-2 px-6 font-medium">Search</button>
    </div>
  );
};

export default SearchInput;
