import { ReactNode } from "react";
import Identity from "./Identity";
import Image from "./Image";

export default interface Item extends Identity {
  name: string;
  weitght: number;
  imageId: number;
}
