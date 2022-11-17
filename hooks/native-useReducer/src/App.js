import React from 'react';
import { useReducer } from 'react';
import "./App.css";

function App() {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "SET_NAME":
          return { ...state, name: action.payload };
        case "ADD_NAME":
          return { 
            ...state, 
            names: [...state.names, state.name],
            name: ""
          }
        default:
      }
    },
    {
      names: [],
      name: "",
    }
  );

  return (
    <div className="App">
      <input
        type="text"
        value={state.name}
        onChange={(e) =>
          dispatch({ type: "SET_NAME", payload: e.target.value })
        }
      />
      <button onClick={() =>{
        dispatch({type: "ADD_NAME"})
      }}>Add</button>
      {state.names.map((name) => {
        return (
          <>
            <h3>{name}</h3>
          </>
        )
      })}
    </div>
  );
}

export default App;
