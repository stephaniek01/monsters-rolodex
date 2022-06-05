import { useState, useEffect } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//     console.log("constructor");
//   }

//   async componentDidMount() {
//     console.log("componentDidMount");
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const monsters = await response.json();

//     this.setState({ monsters });
//   }

//   onSearchChange = (e) => {
//     const searchField = e.target.value.toLocaleLowerCase();
//     this.setState({ searchField });
//   };

//   render() {
//     console.log("App render");
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter((monster) =>
//       monster.name.toLocaleLowerCase().includes(searchField)
//     );

// return (
//   <div className="App">

//   <h1 className="app-title">Monsters Inc.</h1>
//     <SearchBox
//       className="search-box"
//       placeholder="Enter a name"
//       onChangeHandler={onSearchChange}
//     />
//     <CardList monsters={filteredMonsters} />
//   </div>
// );
//   }
// }

const App = () => {
  console.log("render");

  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState([]);
  
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newMonsters = monsters.filter((monster) =>
      monster.name.toLocaleLowerCase().includes(searchField)
    );

    setFilteredMonsters(newMonsters);
    console.log("filtered the monsters");
  }, [monsters, searchField]);

  console.log("monsters", monsters);

  const onSearchChange = (e) => {
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
