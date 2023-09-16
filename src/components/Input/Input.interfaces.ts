import { ReactNode } from "react";

export interface IInputComponentProps {
  label: string;
  icon: ReactNode;
  placeholder: string;
  value: string;
  type?: "name" | "password";
}
