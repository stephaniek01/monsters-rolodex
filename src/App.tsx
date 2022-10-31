import { useState, useEffect, ChangeEvent } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import { getData } from "./utils/data.util";

export type Monster = {
  name: string;
  id: string;
  email: string;
};

const App = () => {
  const [searchField, setSearchField] = useState<string>("");
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters, setFilteredMonsters] = useState<Monster[]>([]);

  useEffect(() => {
    const fetchMonsters = async () => {
      const data = await getData<Monster[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setMonsters(data);
    };

    fetchMonsters();
  }, []);

  useEffect(() => {
    const newMonsters = monsters.filter((monster) =>
      monster.name.toLocaleLowerCase().includes(searchField)
    );

    setFilteredMonsters(newMonsters);
    console.log("filtered the monsters");
  }, [monsters, searchField]);

  console.log("monsters", monsters);

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newSearchField = e.target.value.toLocaleLowerCase();
    setSearchField(newSearchField);
  };

  return (
    <div className="App">
      <h1 className="app-title">Monsters Inc.</h1>
      <SearchBox
        className="search-box"
        placeholder="Enter a name"
        onChangeHandler={onSearchChange}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
