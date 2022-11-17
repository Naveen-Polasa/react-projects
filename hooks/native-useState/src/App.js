import React from "react";
import { useState } from "react";
import "./App.css";

function Counter() {
  const [count, setCount] = useState(1);
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <button className="button" onClick={handleClick}>
        count = {count}
      </button>
    </>
  );
}

function NameList() {
  const [list, setList] = useState([
    "Naveen",
    "perman",
    "doraemon",
    "power rangers",
  ]);
  const [name, setName] = useState("");

  const onAddName = () => {
    setList([...list, name]);
    setName("");
  };

  return (
    <>
      {list.map((name) => {
        return <p key={name}>{name}</p>;
      })}
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onAddName}>Add Name</button>
    </>
  );
}

function App() {
  return (
    <div className="container">
      <Counter />
      <NameList />
    </div>
  );
}

export default App;
