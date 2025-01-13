import React from "react";
import personService from "../services/persons";

function Numbers({ search, persons, setPersons, setNotification, setError }) {
  let personsToShow = [...persons];
  if (search !== "") {
    personsToShow = persons.filter(({ name }) =>
      name.toLowerCase().includes(search.toLowerCase())
    );
  }

  const handleDelete = (person) => {
    let id = person.id;
    console.log(`Removing person with id: ${id}`);
    personService
      .remove(id)
      .then((response) => {
        console.log("<handleDelete>", response);
        setNotification(`${person.name} deleted`);
        setError(false);
        setTimeout(() => {
          setNotification("");
        }, 1000);
      })
      .catch((error) => {
        setNotification(`${person.name} was already deleted`);
        setError(true);
        setTimeout(() => {
          setNotification("");
        }, 1000);
      })
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
                handleDelete(person);
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
