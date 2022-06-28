import React, { useState } from "react";
import "./App.css";
import Image from "./types/Image";
import Item from "./types/Item";
import "bootstrap/dist/css/bootstrap.css";
import Table from "./components/table";
import FunctionalComponent from "./components/functionalComponent";

function App() {
  const [items, setItems] = useState<Item[]>([
    { id: 1, name: "can", weitght: 2.5, imageId: 1 },
    { id: 2, name: "light", weitght: 3.55, imageId: 2 },
    { id: 3, name: "basket", weitght: 4.67, imageId: 3 },
    { id: 4, name: "tub", weitght: 6.68, imageId: 4 },
  ]);

  const [images, setImages] = useState<Image[]>([
    { id: 1, path: "can.png" },
    { id: 2, path: "light.png" },
    { id: 3, path: "basket.png" },
    { id: 4, path: "tub.png" },
  ]);
  return (
    <div className="App">
      {items.map((x) => (
        <div>{x.name}</div>
      ))}
      <Table
        data={items}
        columns={["name", "id", "weitght", <FunctionalComponent />]}
      />
    </div>
  );
}

interface Column {
  name: string;
  content: JSX.Element;
}

export default App;
