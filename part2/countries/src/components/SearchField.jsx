import React from "react";

function SearchField({ search, setSearch }) {
  const handleSearchChange = (event) => {
    console.log(event);
    console.log(event.target);
    console.log(event.target.value);
    setSearch(event.target.value);
  };

  return (
    <div>
      <p>Search for a country:</p>
      <br />
      <input value={search} onChange={handleSearchChange} />
    </div>
  );
}

export default SearchField;
