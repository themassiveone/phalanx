import { createContext } from "react";
import { Entity } from "../types";

export const defaultValue: MetaContextRoot = {
  entities: {
    data: [],
    set(x) {
      console.log("not implemented");
    },
  },
};

export interface MetaContextRoot {
  entities: State<Entity>;
}
export interface State<T> {
  data: T[];
  set(x: T[]): void;
}

export const metaContext = createContext<MetaContextRoot>(defaultValue);

// export const loadAll = (context: MetaContextRoot) => {
//   console.log("load function called");
//   loadEntity(
//     "entity",
//     (context, value) => {
//       context.entities = value as Entity[];
//     },
//   );
// };
