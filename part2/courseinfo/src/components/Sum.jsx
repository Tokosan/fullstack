import React from "react";

function Sum({ parts }) {
  let total = parts
    .map((part) => part.exercises)
    .reduce((acc, current) => acc + current, 0);
  return (
    <p>
      <b>total of {total} exercises</b>
    </p>
  );
}

export default Sum;
