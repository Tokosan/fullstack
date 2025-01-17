import { useEffect, useState } from "react";
import countryService from "./services/countries";
import SearchField from "./components/SearchField";
import Countries from "./components/Countries";

function App() {
  const [search, setSearch] = useState("");
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    countryService.getAll().then((data) => {
      setCountries(data);
    });
  }, []);

  return (
    <div>
      <SearchField search={search} setSearch={setSearch} />
      <Countries search={search} countries={countries} />
    </div>
  );
}

export default App;
