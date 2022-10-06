import React from "react";
import Resource from "./resource";

interface MandatoryDataProps {}

const MandatoryData: React.FC<MandatoryDataProps> = ({}) => {
  return (
    <React.Fragment>
      <Resource label="Entity" endpoint="entity"></Resource>
    </React.Fragment>
  );
};

export default MandatoryData;
