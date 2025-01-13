import React from "react";
import personService from "../services/persons";

function PersonForm({
  setNewName,
  setNewNumber,
  setPersons,
  persons,
  newName,
  newNumber,
}) {
  const handleNameInputChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberInputChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let person = persons.find((person) => person.name === newName);
    if (person) {
      let change = confirm(
        `${newName} already exists, do you want to change they number from\n${person.number}\nto\n${newNumber}\n?`
      );
      if (change) {
        personService
          .update(person.id, { ...person, number: newNumber })
          .then((response) => {
            console.log("<update>", response);
            let id = person.id;
            setPersons(
              persons.map((person) =>
                person.id === id ? { ...person, number: newNumber } : person
              )
            );
          });
      }
      return;
    }
    personService
      .create({ name: newName, number: newNumber })
      .then((response) => {
        console.log("<create>", response);
        setPersons(persons.concat(response.data));
        setNewName("");
        setNewNumber("");
      });
  };

  return (
    <>
      <h3>Add a new number</h3>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleNameInputChange} />
          phone: <input value={newNumber} onChange={handleNumberInputChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </>
  );
}

export default PersonForm;
