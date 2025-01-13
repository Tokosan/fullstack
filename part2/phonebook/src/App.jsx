import { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Numbers from "./components/Numbers";
import personService from "./services/persons";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");
  const [notification, setNotification] = useState("");
  const [error, setError] = useState(false);

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
      <Notification notification={notification} error={error} />
      <PersonForm
        setPersons={setPersons}
        persons={persons}
        newName={newName}
        newNumber={newNumber}
        setNewName={setNewName}
        setNewNumber={setNewNumber}
        setError={setError}
        setNotification={setNotification}
      />
      <Numbers
        search={search}
        persons={persons}
        setPersons={setPersons}
        setNotification={setNotification}
        setError={setError}
      />
    </div>
  );
};

export default App;
