import { createContext } from "react";
import { Entity } from "../types";

export interface MetaContextRoot {
  entities: State<Entity[]>;
}
type State<T> = StateInterface<T> | null;

export interface StateInterface<T> {
  data: T;
  setter: React.Dispatch<React.SetStateAction<T>>;
}

export const defaultValue = {
  entities: null,
};
const metaContext = createContext<MetaContextRoot>(defaultValue);
export default metaContext;
