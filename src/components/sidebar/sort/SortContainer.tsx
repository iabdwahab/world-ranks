import { sortingOptions } from '@/data/localData';

const SortContainer = () => {
  return (
    <div className="grid gap-2">
      <h3 className="font-medium">Sort by</h3>
      <div className="border rounded">
        <select id="sort-select" className="capitalize w-full border-r-8 border-r-transparent rounded p-2">
          {sortingOptions.map((option) => {
            return (
              <option key={option} value={option} className="capitalize">
                {option}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default SortContainer;
