import { createContext, ReactNode, useEffect, useState } from "react";
import { Entity } from "../types";
import MetaContext, { defaultValue, MetaContextRoot } from "./metaContext";

interface MetaDataHolderProps {
  children: ReactNode;
}

const MetaDataHolder: React.FC<MetaDataHolderProps> = ({
  children,
}: MetaDataHolderProps) => {
  const [entities, setEntities] = useState<Entity[]>([]);

  const [context, setContext] = useState<MetaContextRoot>(defaultValue);
  useEffect(() => {
    LoadEffect("entity", setEntities);

    setContext({ entities: { data: entities, setter: setEntities } });
  });

  const LoadEffect = <T,>(
    name: string,
    setter: React.Dispatch<React.SetStateAction<T>>
  ) => {
    const url = `http://meta.massivecreationlab.com/api/${name}`;
    fetch(url)
      .then((x) => x.json())
      .then((x) => {
        console.log(`Fetched from ${url}`, x);

        return setter(x);
      });
  };
  return (
    <MetaContext.Provider value={context}>{children}</MetaContext.Provider>
  );
};

export default MetaDataHolder;
