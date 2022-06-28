import { ReactNode } from "react";

export default interface Identity extends Record<string, ReactNode> {
  id: number;
}
