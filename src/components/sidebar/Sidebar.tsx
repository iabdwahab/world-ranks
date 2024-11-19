import React from 'react';
import SortContainer from './sort/SortContainer';
import RegionContainer from './region/RegionContainer';
import StatusContainer from './status/StatusContainer';

const Sidebar = () => {
  return (
    <div className="grid gap-3">
      <SortContainer />
      <RegionContainer />
      <StatusContainer />
    </div>
  );
};

export default Sidebar;
