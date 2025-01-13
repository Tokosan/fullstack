import React from "react";
import personService from "../services/persons";

function PersonForm({
  setNewName,
  setNewNumber,
  setPersons,
  setNotification,
  setError,
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
        // This gets executed if the user decided to change the person number
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
            setNotification(`The info about ${person.name} has been updated`);
            setError(false);
            setTimeout(() => {
              setNotification("");
            }, 1000);
          });
      }
      return;
    }
    personService
      .create({ name: newName, number: newNumber })
      .then((response) => {
        console.log("<create>", response);
        let person = response.data;
        setPersons(persons.concat(person));
        setNewName("");
        setNewNumber("");
        setNotification(`${person.name} has been added to the PhoneBook`);
        setError(false);
        setTimeout(() => {
          setNotification("");
        }, 1000);
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
