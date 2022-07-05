import http from "./http";
import config from "../config.json";
import { Entity } from "../types/metaCode";

const url = (endpoint: string) => `${config.metaCodeApi}/${endpoint}`;

const getEntities = async (): Promise<Entity[]> => {
  const result = await http.get(url("entity"));
  return result.data;
};

export { getEntities };
