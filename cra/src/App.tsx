import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import MetaDataHolder from "./data/metaDataHolder";
import TestConsumer from "./data/testConsumer";

import config from "./config.json";
import http from "./data/http";
import MandatoryData from "./dataComponents/mandatoryData";
import Base from "./mainDesign/Base";

function App() {
  return (
    // <MetaDataHolder>
    //   <TestConsumer></TestConsumer>
    // </MetaDataHolder>

    // <MandatoryData></MandatoryData>

    <Base></Base>
  );
}

export default App;
