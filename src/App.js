import { useState } from "react";
import "./App.css";
import { Data } from "./data";
function App() {
  const [state, setstate] = useState(Data);
  const [team, setTeam] = useState(0);
  const [search, setSearch] = useState("");

  const filterData = (search, state) => {
    const filterData = state.filter((state) =>
      state.first_name.includes(search)
    );
    return filterData;
  };
  return (
    <div className="App">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search here"
      />
      <button
        onClick={() => {
          const data = filterData(search, state);
          setSearch(data);
        }}
      >
        Search
      </button>
      <br />
      <h3>Filter</h3>
      <button
        onClick={() => {
          const filteredList = state.filter((res) => res.available === true);
          setstate(filteredList);
        }}
      >
        Available
      </button>

      <button
        onClick={() => {
          const gender = state.filter((res) => res.gender === "Male");
          setstate(gender);
        }}
      >
        Male
      </button>
      <button
        onClick={() => {
          const gender = state.filter((res) => res.gender === "Female");
          setstate(gender);
        }}
      >
        Female
      </button>

      <h3>People in my team {team}</h3>

      <hr />
      {state.map((item) => {
        return (
          <div className="main-card" key={item.id}>
            <div className="card">
              <img src={item.avatar} alt="" />
              <h2>
                {item.first_name} {item.last_name}
              </h2>
              <p className="add" onClick={() => setTeam(team + 1)}>
                Add to team
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
