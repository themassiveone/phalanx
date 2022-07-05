import { Send } from "@mui/icons-material";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import http from "../services/http";
import { getEntities } from "../services/metaCodeService";
import { Entity } from "../types/metaCode";
import NestedList, { DataElement } from "./NestedList";

interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = ({}) => {
  const [items, setItems] = useState<DataElement[]>([]);
  useEffect(() => {
    const awaited = async () => {
      const result: Entity[] = await getEntities();
      const elements: DataElement[] = [];
      result.map((entity) =>
        elements.push({ id: entity.id, label: entity.name })
      );
      setItems(elements);
    };
    awaited();
  }, []);

  return (
    <Box display={"fixed"}>
      <NestedList items={items}></NestedList>
    </Box>
  );
};

export default Sidebar;
