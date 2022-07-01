import { defaultValue, metaContext } from "../metaContext";
import Resource from "./Resource";

interface BaseProps {}

const Base: React.FC<BaseProps> = ({}) => {
  return (
    <metaContext.Provider value={defaultValue}>
      <div>test</div>
      <Resource test="blob" />
    </metaContext.Provider>
  );
};

export default Base;
