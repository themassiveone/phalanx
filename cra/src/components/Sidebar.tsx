import { Entity } from "../types";

interface SidebarProps {
  data: Entity[];
}

const Sidebar: React.FC<SidebarProps> = ({ data }) => {
  return (
    <div>
      {data.map((x) => (
        <div key={x.id}>{x.name}</div>
      ))}
    </div>
  );
};

export default Sidebar;
