import React, { useState } from "react";
import "./App.css";
import Image from "./types/Image";
import Item from "./types/Item";
import "bootstrap/dist/css/bootstrap.css";
import Table from "./components/table";
import FunctionalComponent from "./components/functionalComponent";
import ActivityPlaner from "./pages/ActivtiyPlaner";
import Base from "./connectors/metaCode/components/Base";

function App() {
  const [items, setItems] = useState<Item[]>([
    { id: 1, name: "can", weight: 2.5, imageId: 1 },
    { id: 2, name: "light", weight: 3.55, imageId: 2 },
    { id: 3, name: "basket", weight: 4.67, imageId: 3 },
    { id: 4, name: "tub", weight: 6.68, imageId: 4 },
  ]);

  const [images, setImages] = useState<Image[]>([
    { id: 1, path: "can.png" },
    { id: 2, path: "light.png" },
    { id: 3, path: "basket.png" },
    { id: 4, path: "tub.png" },
  ]);

  return (
    <div className="App">
      {/* <Table<Item>
        data={items}
        columns={[
          { label: "name", value: (x) => x.name },
          { label: "like", value: () => <FunctionalComponent name="test" /> },
          { label: "test", content: <div></div> },
          { label: "Weight", value: (x) => x.weight },
          { label: "id", value: (x) => x.id },
          { label: "image", value: (x) => x.id },
        ]}
        key=""
      /> */}
      {/* <ActivityPlaner /> */}
      <Base></Base>
    </div>
  );
}

export default App;
