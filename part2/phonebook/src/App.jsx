import { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Numbers from "./components/Numbers";
import personService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    personService.getAll().then((dbPersons) =>
      setPersons(
        dbPersons.concat({
          id: "1234123",
          name: "GHOST",
          number: "123141231",
        })
      )
    );
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter setter={setSearch} />
      <PersonForm
        setPersons={setPersons}
        persons={persons}
        newName={newName}
        newNumber={newNumber}
        setNewName={setNewName}
        setNewNumber={setNewNumber}
      />
      <Numbers search={search} persons={persons} setPersons={setPersons} />
    </div>
  );
};

export default App;
