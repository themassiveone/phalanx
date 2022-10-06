import React from "react";
import { useEffect, useState } from "react";
import config from "../config.json";
import http from "../data/http";

interface ResourceProps {
  endpoint: string;
  label?: string;
}

const Resource: React.FC<ResourceProps> = <T,>() => {
  const [data, setData] = useState<T[]>([]);
  const [props, setProps] = useState<ResourceProps>();

  useEffect(() => {
    setProps(props);
  });

  async function load<T>() {
    const result = await http.get(`${config.api}/${props?.endpoint}`);
    setData(result.data);
  }
  return <div>test</div>;
};

export default Resource;
