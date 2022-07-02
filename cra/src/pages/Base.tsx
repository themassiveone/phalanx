import { useContext, useEffect } from "react";
import Content from "../components/Content";
import NavBar from "../components/NavBar";
import Sidebar from "../components/Sidebar";
import { metaContext } from "../data/metaContext";
import Paperbase from "../paperbase/Paperbase";

interface BaseProps {}

const Base: React.FC<BaseProps> = ({}) => {
  const context = useContext(metaContext);
  console.log(context);

  return <Paperbase />; //
};

export default Base;
