import { createContext } from "react";
import { Entity } from "./types";

export const defaultValue: MetaContextRoot = {
  entities: [],
};

export interface MetaContextRoot {
  entities: Entity[];
}

export const metaContext = createContext<MetaContextRoot>(defaultValue);
