import SearchIcon from '../icons/SearchIcon';

const SearchInput = () => {
  return (
    <div className="flex items-center md:w-[500px] border rounded-md overflow-hidden outline-2 focus-within:outline">
      <div className="bg-white p-2">
        <SearchIcon />
      </div>
      <input type="text" className="p-2 font-medium focus:outline-none w-full" placeholder="Search by Name, Region, Subregion." />
      <button className="bg-black text-white py-2 px-6 font-medium">Search</button>
    </div>
  );
};

export default SearchInput;
