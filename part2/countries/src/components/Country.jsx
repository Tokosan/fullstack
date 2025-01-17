import React, { useState } from "react";

function Country({ country, show: _show = false }) {
  const [show, setShow] = useState(_show);

  const toggleShow = () => {
    setShow(!show);
  };

  if (!show) {
    return (
      <li key={country.caa3}>
        {country.name.common}
        <button onClick={toggleShow}>{show ? "hide" : "show"}</button>
      </li>
    );
  }

  console.log(Object.values(country.languages));
  return (
    <div>
      <h2>
        Country: {country.flag} {country.name.common}
      </h2>
      <button onClick={toggleShow}>{show ? "hide" : "show"}</button>
      <img
        style={{
          border: "2px solid black",
        }}
        src={country.flags.svg}
      />
      <p>Capital: {country.capital[0]}</p>
      <p>Languages:</p>
      <ul>
        {Object.values(country.languages).map((language) => {
          return <li key={language}>{language}</li>;
        })}
      </ul>
    </div>
  );
}

export default Country;
