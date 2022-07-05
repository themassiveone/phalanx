import { useContext } from "react";
import metaContext, { MetaContextRoot } from "./metaContext";

interface testConsumerProps {}

const TestConsumer: React.FC<testConsumerProps> = ({}) => {
  const context = useContext<MetaContextRoot>(metaContext);
  console.log("consume", context.entities);
  return (
    <div>
      {context.entities?.data.map((x) => (
        <div key={x.id}>{x.name}</div>
      ))}
    </div>
  );
};

export default TestConsumer;
