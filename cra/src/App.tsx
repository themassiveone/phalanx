import React, { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Base from "./pages/Base";
import { defaultValue, metaContext } from "./data/metaContext";
import { Entity } from "./types";

function loadEntity<T>(name: string, setter: (value: T) => void) {
  fetch(`http://meta.massivecreationlab.com/api/${name}`)
    .then((x) => {
      console.log("got json");
      return x.json();
    })
    .then((x) => {
      console.log("got that: ", x);
      setter(x);
    });
}

function App() {
  const [entities, setEntities] = useState<Entity[]>([]);

  useEffect(() => {
    loadEntity<Entity[]>("entity", (x) => setEntities(x));
  }, [setEntities]);
  return (
    <metaContext.Provider
      value={{
        entities: {
          data: entities,
          set(x) {
            setEntities(x);
          },
        },
      }}
    >
      <div className="App">
        <Base />
      </div>
    </metaContext.Provider>
  );
}

export default App;
