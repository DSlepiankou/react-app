import React from 'react';

const SearchPanel = () => {
  const searchText = 'Type here to search';
  return  (
  <input className="form-control-sm" aria-label="Search" placeholder={searchText}/>
  );
};

export default SearchPanel;