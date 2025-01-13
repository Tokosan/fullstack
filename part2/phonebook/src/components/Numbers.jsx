import React from "react";
import personService from "../services/persons";

function Numbers({ search, persons, setPersons }) {
  let personsToShow = [...persons];
  if (search !== "") {
    personsToShow = persons.filter(({ name }) =>
      name.toLowerCase().includes(search.toLowerCase())
    );
  }

  const handleDelete = (id) => {
    console.log(`Removing person with id: ${id}`);
    personService
      .remove(id)
      .then((response) => console.log("<handleDelete>", response))
      .catch((error) => {})
      .then(setPersons(persons.filter((person) => person.id !== id)));
  };

  return (
    <div>
      <h2>Numbers</h2>
      <ul>
        {personsToShow.map((person) => (
          <li key={person.name}>
            {person.name} {person.number}{" "}
            <button
              onClick={() => {
                handleDelete(person.id);
              }}
            >
              delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Numbers;
