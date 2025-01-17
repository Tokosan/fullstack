import React, { useEffect } from "react";
import Country from "./Country";

function Countries({ search, countries }) {
  const countriesToShow = countries.filter((country) =>
    country.name.common.toLowerCase().includes(search.toLowerCase())
  );

  console.log(countriesToShow);
  console.log(countriesToShow.length);

  if (countriesToShow.length > 100) {
    return <p>There are too many results, use a more specific filter</p>;
  }

  if (countriesToShow.length > 1) {
    return (
      <ul>
        {countriesToShow.map((country) => (
          <Country country={country} />
        ))}
      </ul>
    );
  }

  if (countriesToShow.length === 1) {
    const country = countriesToShow[0];
    return <Country country={country} show={true} />;
  }

  return <p>Loading...</p>;
}

export default Countries;
