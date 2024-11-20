'use client';
import { FilterContext } from '@/context/FilterContext';
import { useContext } from 'react';

const StatusContainer = () => {
  const { unMembersOnly, setUnMembersOnly, independentOnly, setIndependentOnly } = useContext(FilterContext);

  return (
    <div>
      <h3 className="font-bold">Status</h3>
      <label className="flex items-center gap-2">
        <input type="checkbox" onChange={() => setUnMembersOnly(!unMembersOnly)} />
        <span className="capitalize">member of the united nations</span>
      </label>
      <label className="flex items-center gap-2">
        <input type="checkbox" onChange={() => setIndependentOnly(independentOnly)} />
        <span className="capitalize">Independent</span>
      </label>
    </div>
  );
};

export default StatusContainer;
