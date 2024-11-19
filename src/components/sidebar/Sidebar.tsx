import React from 'react';
import SortContainer from './sort/SortContainer';
import RegionContainer from './region/RegionContainer';

const Sidebar = () => {
  return (
    <div className="grid gap-3">
      <SortContainer />
      <RegionContainer />
    </div>
  );
};

export default Sidebar;
