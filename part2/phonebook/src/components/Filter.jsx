import React from "react";

function Filter({ setter }) {
  const handleInputChange = (event) => {
    setter(event.target.value);
  };

  return (
    <p>
      Search for: <input onChange={handleInputChange} />
    </p>
  );
}

export default Filter;
